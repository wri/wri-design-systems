#!/usr/bin/env node

const { spawnSync } = require('child_process')
const path = require('path')

function printHelp() {
  // Keep output minimal and CLI-friendly.
  console.log(`WRI Design Systems CLI

Usage:
  ds setup-ai
  ds setup-ai <target-path>
`)
}

function runSetupAI(targetPath) {
  const scriptPath = path.join(__dirname, '..', 'agents', 'setup-ai.mjs')

  const result = spawnSync(
    process.execPath,
    targetPath ? [scriptPath, targetPath] : [scriptPath],
    {
      stdio: 'inherit',
      cwd: process.cwd(),
      env: process.env,
    },
  )

  process.exit(result.status ?? 1)
}

const [, , command, ...rest] = process.argv

if (!command || command === '-h' || command === '--help') {
  printHelp()
  process.exit(0)
}

if (command === 'setup-ai') {
  if (rest.includes('-h') || rest.includes('--help')) {
    printHelp()
    process.exit(0)
  }

  if (rest.length === 0) {
    runSetupAI(null)
  }

  if (rest.length === 1) {
    runSetupAI(rest[0])
  }

  console.error('Too many arguments for setup-ai')
  printHelp()
  process.exit(1)
}

console.error(`Unknown command: ${command}`)
printHelp()
process.exit(1)
