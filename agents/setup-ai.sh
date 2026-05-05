#!/usr/bin/env bash
# setup-ai.sh — WRI Design System AI Setup
# Distributes AGENTS.md to the correct location for each detected IDE.
# Run once after cloning: bash setup-ai.sh

set -uo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SOURCE="$SCRIPT_DIR/AGENTS.md"
INSTALLED=()
SKIPPED=()

echo ""
echo "WRI Design System — AI Setup"
echo "=============================="

if [ ! -f "$SOURCE" ]; then
  echo "❌ AGENTS.md not found at $SCRIPT_DIR"
  exit 1
fi

install_file() {
  local dest="$1"
  local label="$2"
  local dir
  dir="$(dirname "$dest")"
  mkdir -p "$dir"
  cp "$SOURCE" "$dest"
  INSTALLED+=("$label → $dest")
}

# ── Claude Code / Codex ────────────────────────────────────────
# AGENTS.md is already the source file in this directory — no copy needed.
# CLAUDE.md is a copy for Claude Code (reads both AGENTS.md and CLAUDE.md).
install_file "$SCRIPT_DIR/CLAUDE.md" "Claude Code (CLAUDE.md)"

# ── Gemini ─────────────────────────────────────────────────────
install_file "$SCRIPT_DIR/GEMINI.md" "Gemini"
install_file "$SCRIPT_DIR/.geminirules" "Gemini (rules)"


# ── Cursor ─────────────────────────────────────────────────────
if [ -d "$HOME/.cursor" ] || [ -d "/Applications/Cursor.app" ] || command -v cursor &>/dev/null; then
  install_file "$SCRIPT_DIR/.cursor/rules" "Cursor"
else
  SKIPPED+=("Cursor (not detected)")
fi

# ── GitHub Copilot (VS Code) ────────────────────────────────────
if command -v code &>/dev/null; then
  install_file "$SCRIPT_DIR/.github/copilot-instructions.md" "GitHub Copilot / VS Code"
else
  SKIPPED+=("GitHub Copilot (VS Code not detected)")
fi

# ── Windsurf ───────────────────────────────────────────────────
if [ -d "$HOME/.codeium" ] || [ -d "/Applications/Windsurf.app" ] || command -v windsurf &>/dev/null; then
  install_file "$SCRIPT_DIR/.windsurfrules" "Windsurf"
else
  SKIPPED+=("Windsurf (not detected)")
fi

# ── Cline (VS Code extension) ──────────────────────────────────
if [ -d "$HOME/.vscode/extensions" ] && ls "$HOME/.vscode/extensions" | grep -q "cline"; then
  install_file "$SCRIPT_DIR/.clinerules" "Cline"
else
  SKIPPED+=("Cline (not detected)")
fi

# ── MCP config — .vscode/mcp.json (Copilot) ───────────────────
if command -v code &>/dev/null; then
  MCP_VSCODE="$SCRIPT_DIR/.vscode/mcp.json"
  if [ ! -f "$MCP_VSCODE" ]; then
    mkdir -p "$SCRIPT_DIR/.vscode"
    cat > "$MCP_VSCODE" << 'EOF'
{
  "servers": {
    "wri-storybook": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "storybook-mcp@latest"],
      "env": {
        "STORYBOOK_URL": "https://wri.github.io/wri-design-systems/index.json"
      }
    },
    "chakra-ui": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@chakra-ui/react-mcp"]
    }
  }
}
EOF
    INSTALLED+=("MCP config → .vscode/mcp.json")
  else
    SKIPPED+=("MCP .vscode/mcp.json (already exists — skipped to avoid overwrite)")
  fi
fi

# ── MCP config — .cursor/mcp.json ─────────────────────────────
if [ -d "$HOME/.cursor" ] || [ -d "/Applications/Cursor.app" ] || command -v cursor &>/dev/null; then
  MCP_CURSOR="$SCRIPT_DIR/.cursor/mcp.json"
  if [ ! -f "$MCP_CURSOR" ]; then
    mkdir -p "$SCRIPT_DIR/.cursor"
    cat > "$MCP_CURSOR" << 'EOF'
{
  "mcpServers": {
    "wri-storybook": {
      "command": "npx",
      "args": ["-y", "storybook-mcp@latest"],
      "env": {
        "STORYBOOK_URL": "https://wri.github.io/wri-design-systems/index.json"
      }
    },
    "chakra-ui": {
      "command": "npx",
      "args": ["-y", "@chakra-ui/react-mcp"]
    }
  }
}
EOF
    INSTALLED+=("MCP config → .cursor/mcp.json")
  else
    SKIPPED+=("MCP .cursor/mcp.json (already exists — skipped to avoid overwrite)")
  fi
fi

# ── Summary ────────────────────────────────────────────────────
echo ""
echo "✅ Installed:"
for item in "${INSTALLED[@]}"; do
  echo "   $item"
done

if [ ${#SKIPPED[@]} -gt 0 ]; then
  echo ""
  echo "⏭  Skipped:"
  for item in "${SKIPPED[@]}"; do
    echo "   $item"
  done
fi

echo ""
echo "Done. Your AI tools now have full WRI Design System context."
echo "Storybook: https://wri.github.io/wri-design-systems/"
echo ""
