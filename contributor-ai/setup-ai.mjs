#!/usr/bin/env node
// contributor/setup-ai.mjs — WRI Design System Contributor AI Setup
// Runs automatically on `yarn install` (postinstall) for contributors working in this repo.
// Detects the installed IDEs and writes the appropriate AI context files.

import {
  existsSync,
  mkdirSync,
  copyFileSync,
  writeFileSync,
  readdirSync,
} from 'fs'
import { join, dirname, relative, resolve } from 'path'
import { execSync } from 'child_process'
import { homedir } from 'os'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
// SOURCE is the contributor instructions in this folder
const SOURCE = join(__dirname, 'CONTRIBUTOR.md')
// ROOT is the repo root (one level up from contributor/)
const ROOT = resolve(__dirname, '..')
const HOME = homedir()

const installed = []
const skipped = []

// Skip silently in CI environments
if (process.env.CI) process.exit(0)

console.log('\nWRI Design System — Contributor AI Setup')
console.log('==========================================')

if (!existsSync(SOURCE)) {
  console.error('❌  CONTRIBUTOR.md not found at', SOURCE)
  process.exit(1)
}

// ── Helpers ──────────────────────────────────────────────────────

function installFile(dest, label) {
  mkdirSync(dirname(dest), { recursive: true })
  copyFileSync(SOURCE, dest)
  installed.push(`${label} → ${relative(ROOT, dest)}`)
}

function commandExists(cmd) {
  try {
    execSync(`command -v ${cmd}`, { stdio: 'ignore' })
    return true
  } catch {
    return false
  }
}

function pathExists(...parts) {
  return existsSync(join(...parts))
}

function dirContains(dir, substring) {
  try {
    return readdirSync(dir).some((f) => f.includes(substring))
  } catch {
    return false
  }
}

function writeJSON(dest, label, content) {
  if (existsSync(dest)) {
    skipped.push(`${label} (already exists — skipped to avoid overwrite)`)
    return
  }
  mkdirSync(dirname(dest), { recursive: true })
  writeFileSync(dest, JSON.stringify(content, null, 2) + '\n')
  installed.push(`${label} → ${relative(ROOT, dest)}`)
}

// ── MCP config objects ────────────────────────────────────────────
// Contributors get all three MCPs: Figma + Storybook + Chakra UI

const MCP_STORYBOOK_URL = 'https://wri.github.io/wri-design-systems/index.json'

const mcpCursor = {
  mcpServers: {
    figma: {
      url: 'https://mcp.figma.com/mcp',
      type: 'http',
    },
    'wri-storybook': {
      command: 'npx',
      args: ['-y', 'storybook-mcp@latest'],
      env: { STORYBOOK_URL: MCP_STORYBOOK_URL },
    },
    'chakra-ui': {
      command: 'npx',
      args: ['-y', '@chakra-ui/react-mcp'],
    },
  },
}

const mcpVSCode = {
  servers: {
    figma: {
      type: 'http',
      url: 'https://mcp.figma.com/mcp',
    },
    'wri-storybook': {
      type: 'stdio',
      command: 'npx',
      args: ['-y', 'storybook-mcp@latest'],
      env: { STORYBOOK_URL: MCP_STORYBOOK_URL },
    },
    'chakra-ui': {
      type: 'stdio',
      command: 'npx',
      args: ['-y', '@chakra-ui/react-mcp'],
    },
  },
}

// ── IDE detection & file installation ────────────────────────────

// Claude Code — reads CLAUDE.md (and AGENTS.md natively)
installFile(join(ROOT, 'CLAUDE.md'), 'Claude Code')

// Gemini
installFile(join(ROOT, 'GEMINI.md'), 'Gemini')
installFile(join(ROOT, '.geminirules'), 'Gemini (rules)')

// Cursor
const hasCursor =
  pathExists(HOME, '.cursor') ||
  pathExists('/Applications/Cursor.app') ||
  commandExists('cursor')

if (hasCursor) {
  installFile(join(ROOT, '.cursor', 'rules'), 'Cursor (rules)')
  writeJSON(join(ROOT, '.cursor', 'mcp.json'), 'Cursor MCP config', mcpCursor)
} else {
  skipped.push('Cursor (not detected)')
}

// GitHub Copilot / VS Code
const hasVSCode =
  commandExists('code') ||
  pathExists(HOME, '.vscode') ||
  pathExists('/Applications/Visual Studio Code.app')

if (hasVSCode) {
  installFile(
    join(ROOT, '.github', 'copilot-instructions.md'),
    'GitHub Copilot',
  )
  writeJSON(join(ROOT, '.vscode', 'mcp.json'), 'VS Code MCP config', mcpVSCode)
} else {
  skipped.push('GitHub Copilot / VS Code (not detected)')
}

// Windsurf
const hasWindsurf =
  pathExists(HOME, '.codeium') ||
  pathExists('/Applications/Windsurf.app') ||
  commandExists('windsurf')

if (hasWindsurf) {
  installFile(join(ROOT, '.windsurfrules'), 'Windsurf')
} else {
  skipped.push('Windsurf (not detected)')
}

// Cline (VS Code extension)
const hasCline = dirContains(join(HOME, '.vscode', 'extensions'), 'cline')

if (hasCline) {
  installFile(join(ROOT, '.clinerules'), 'Cline')
} else {
  skipped.push('Cline (not detected)')
}

// ── Summary ───────────────────────────────────────────────────────

console.log('\n✅ Installed:')
installed.forEach((item) => console.log('  ', item))

if (skipped.length) {
  console.log('\n⏭  Skipped:')
  skipped.forEach((item) => console.log('  ', item))
}

console.log('\nDone. Your AI tools now have WRI DS contributor context.')
console.log('Tip: run `yarn setup-ai` again after installing a new IDE.\n')
