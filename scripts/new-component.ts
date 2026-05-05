/**
 * new-component.ts
 * Usage: yarn new-component <ComponentName> <Category/SubCategory>
 * Example: yarn new-component Combobox Forms/Inputs
 * Example: yarn new-component AlertCard Status
 */

import fs from 'fs'
import path from 'path'
import readline from 'readline'

// ---------- helpers ----------

const toPascalCase = (str: string) =>
  str
    .replace(/[-_\s]+(.)/g, (_, c: string) => c.toUpperCase())
    .replace(/^(.)/, (c: string) => c.toUpperCase())

/** "My Component" from "MyComponent" */
const toTitleCase = (pascal: string) => pascal.replace(/([A-Z])/g, ' $1').trim()

/** kebab-case from "MyComponent" */
const toKebabCase = (pascal: string) =>
  pascal
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '')

/** '../'.repeat(n) */
const relUp = (n: number) => '../'.repeat(n)

// ---------- categories ----------

const VALID_CATEGORIES = [
  'Forms/Actions',
  'Forms/Controls',
  'Forms/Inputs',
  'Forms/Tag',
  'Forms/FormContainer',
  'Geospatial',
  'DataDisplay',
  'Containers',
  'Navigation',
  'Status',
]

// Maps a component category to the README.md section header under which
// the new component entry should be appended.
const README_SECTION_MAP: Record<string, string> = {
  Containers: '## Containers',
  DataDisplay: '## Data Display',
  'Forms/Actions': '### Actions',
  'Forms/Controls': '### Controls',
  'Forms/Inputs': '### Inputs',
  'Forms/Tag': '### Tags',
  'Forms/FormContainer': '### Form Container',
  Geospatial: '## Geospatial',
  'Geospatial/Layers': '### Layers',
  'Geospatial/Legends': '### Legends',
  Navigation: '## Navigation',
  Status: '## Status',
}

// ---------- file templates ----------

const indexTsx = (
  name: string,
) => `/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */

import { ${name}Props } from './types'

const ${name} = ({}: ${name}Props) => {
  return <div>${name}</div>
}

export default ${name}
`

const typesTs = (name: string) => `export type ${name}Props = {
  //
}
`

const styledTs = (name: string, depth: number) => {
  const themeImport = `${relUp(depth + 1)}lib/theme`
  const varName = `${name.charAt(0).toLowerCase()}${name.slice(1)}ContainerStyles`
  return `import { css } from '@emotion/react'
import { getThemedColor } from '${themeImport}'

export const ${varName} = css\`
  /* TODO: add styles */
\`
`
}

const storiesTsx = (
  name: string,
  category: string,
) => `// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react'

import type { Meta, StoryObj } from '@storybook/react'
import ${name} from '.'

const meta = {
  title: '${category}/${name}',
  component: ${name},
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ${name}>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
`

const demoTsx = (name: string, depth: number) => {
  const importFrom = relUp(depth).replace(/\/$/, '') || '.'
  const title = toTitleCase(name)
  return `import { ${name} } from '${importFrom}'
import DemoWrapper from '${'../'.repeat(depth - 1)}UI/DemoWrapper'

const ${name}Demo = () => (
  <DemoWrapper title='${title}'>
    <${name} />
  </DemoWrapper>
)

export default ${name}Demo
`
}

const readme = (name: string, category: string) => {
  const kebab = toKebabCase(name)
  const storyPath = `${category.toLowerCase().replace('/', '-')}-${kebab}`
  const title = toTitleCase(name)
  return `# ${title}

[Storybook Ref](https://wri.github.io/wri-design-systems/?path=/docs/${storyPath}--docs)

[${name}Demo](https://github.com/wri/wri-design-systems/blob/main/src/components/${category}/${name}/${name}Demo.tsx)

## Import

\`\`\`tsx
import { ${name} } from '@worldresources/wri-design-systems'
\`\`\`

## Usage

\`\`\`tsx
<${name} />
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
|      |      |         |             |
`
}

// ---------- file writers ----------

const writeFile = (filePath: string, content: string) => {
  fs.writeFileSync(filePath, content, 'utf-8')
  console.log(`  created  ${path.relative(process.cwd(), filePath)}`)
}

// ---------- index.ts export line ----------

const buildExportLine = (name: string, category: string) =>
  `export { default as ${name} } from './${category}/${name}'`

const updateComponentsIndex = (name: string, category: string) => {
  const indexPath = path.join(process.cwd(), 'src', 'components', 'index.ts')
  const content = fs.readFileSync(indexPath, 'utf-8')

  if (content.includes(`'./${name}'`)) {
    console.log('  skipped  src/components/index.ts (already exported)')
    return
  }

  // Find the comment block that matches the top-level category (e.g. // -- Forms -- //)
  const topCategory = category.split('/')[0]
  const endMarker = `// -- ${topCategory} -- //`

  // Insert before the closing marker of the category
  const insertBefore = `\n${buildExportLine(name, category)}\n`
  const updated = content.replace(
    new RegExp(`(${endMarker}\\s*$)`, 'm'),
    `${buildExportLine(name, category)}\n\n$1`,
  )

  if (updated === content) {
    // marker not found — just append
    fs.appendFileSync(indexPath, `\n${buildExportLine(name, category)}\n`)
    console.log('  appended src/components/index.ts')
  } else {
    fs.writeFileSync(indexPath, updated, 'utf-8')
    console.log('  updated  src/components/index.ts')
  }
}

// ---------- DemoIndex.tsx ----------

const updateDemoIndex = (name: string) => {
  const demoIndexPath = path.join(
    process.cwd(),
    'src',
    'components',
    'UI',
    'DemoIndex.tsx',
  )
  const content = fs.readFileSync(demoIndexPath, 'utf-8')
  const title = toTitleCase(name)

  if (content.includes(`'${title}'`)) {
    console.log('  skipped  DemoIndex.tsx (already listed)')
    return
  }

  // Append before the closing bracket of the components array
  const updated = content.replace(
    /('Search',\s*\])/,
    `'Search',\n  '${title}',\n]`,
  )

  if (updated === content) {
    console.log(
      `  warning  Could not auto-update DemoIndex.tsx – add '${title}' to the components array manually`,
    )
  } else {
    fs.writeFileSync(demoIndexPath, updated, 'utf-8')
    console.log('  updated  src/components/UI/DemoIndex.tsx')
  }
}

// ---------- App.tsx ----------

const updateAppTsx = (name: string, category: string) => {
  const appPath = path.join(process.cwd(), 'src', 'App.tsx')
  const content = fs.readFileSync(appPath, 'utf-8')

  if (content.includes(`${name}Demo`)) {
    console.log('  skipped  src/App.tsx (already imported)')
    return
  }

  const importLine = `import ${name}Demo from './components/${category}/${name}/${name}Demo'`
  const usageLine = `        <${name}Demo />`

  // Insert import after the last import block
  const withImport = content.replace(
    /(import [^\n]+\n)(\n+const App)/,
    `$1${importLine}\n$2`,
  )

  // Insert usage before the closing </div> of the ds-app-container block
  const withUsage = withImport.replace(
    /(\s+<\/div>\s+<\/div>\s+<\/div>\s+\)[\s\S]*?export default App)/,
    `\n${usageLine}$1`,
  )

  if (withImport === content) {
    console.log(
      `  warning  Could not auto-update src/App.tsx – add the import and <${name}Demo /> manually`,
    )
    return
  }

  fs.writeFileSync(appPath, withUsage, 'utf-8')
  console.log('  updated  src/App.tsx')
}

// ---------- README.md ----------

const updateMainReadme = (name: string, category: string) => {
  const readmePath = path.join(process.cwd(), 'README.md')
  const title = toTitleCase(name)
  const githubLink = `https://github.com/wri/wri-design-systems/tree/main/src/components/${category}/${name}`
  const newEntry = `- [${title}](${githubLink})`

  const content = fs.readFileSync(readmePath, 'utf-8')

  if (content.includes(githubLink)) {
    console.log('  skipped  README.md (already listed)')
    return
  }

  const sectionMarker = README_SECTION_MAP[category]

  if (!sectionMarker) {
    console.log(
      `  warning  README.md: no section mapping for "${category}" — add entry manually`,
    )
    return
  }

  const lines = content.split('\n')
  const sectionIdx = lines.findIndex((l) => l.trim() === sectionMarker)

  if (sectionIdx === -1) {
    console.log(
      `  warning  README.md: section "${sectionMarker}" not found — add entry manually`,
    )
    return
  }

  // Find the end of this section (next ## or ### heading, or EOF)
  let sectionEnd = lines.length
  for (let i = sectionIdx + 1; i < lines.length; i++) {
    if (lines[i].match(/^#{2,3} /)) {
      sectionEnd = i
      break
    }
  }

  // Insert after the last bullet in the section
  let insertAfter = sectionIdx
  for (let i = sectionIdx + 1; i < sectionEnd; i++) {
    if (lines[i].startsWith('- [')) insertAfter = i
  }

  lines.splice(insertAfter + 1, 0, newEntry)
  fs.writeFileSync(readmePath, lines.join('\n'), 'utf-8')
  console.log('  updated  README.md')
}

// ---------- main ----------

const prompt = (question: string): Promise<string> => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close()
      resolve(answer.trim())
    })
  })
}

const main = async () => {
  const args = process.argv.slice(2)
  let rawName = args[0]
  let category = args[1]

  if (!rawName) {
    rawName = await prompt('Component name (e.g. Combobox): ')
  }

  const name = toPascalCase(rawName)

  if (!category) {
    console.log('\nAvailable categories:')
    VALID_CATEGORIES.forEach((c, i) => console.log(`  ${i + 1}. ${c}`))
    const choice = await prompt('\nChoose a number or type the category path: ')
    const idx = parseInt(choice, 10)
    category = Number.isNaN(idx)
      ? choice
      : (VALID_CATEGORIES[idx - 1] ?? choice)
  }

  if (!VALID_CATEGORIES.includes(category)) {
    console.warn(
      `\n⚠  "${category}" is not in the known list; proceeding anyway.\n`,
    )
  }

  // depth = number of category segments + 1 (the component folder itself)
  const depth = category.split('/').length + 1

  const componentDir = path.join(
    process.cwd(),
    'src',
    'components',
    category,
    name,
  )

  if (fs.existsSync(componentDir)) {
    console.error(
      `\n✗  Directory already exists: ${path.relative(process.cwd(), componentDir)}\n`,
    )
    process.exit(1)
  }

  fs.mkdirSync(componentDir, { recursive: true })

  console.log(`\nCreating ${name} in ${category}/...\n`)

  writeFile(path.join(componentDir, 'index.tsx'), indexTsx(name))
  writeFile(path.join(componentDir, 'types.ts'), typesTs(name))
  writeFile(path.join(componentDir, 'styled.ts'), styledTs(name, depth))
  writeFile(
    path.join(componentDir, `${name}.stories.tsx`),
    storiesTsx(name, category),
  )
  writeFile(path.join(componentDir, `${name}Demo.tsx`), demoTsx(name, depth))
  writeFile(path.join(componentDir, 'README.md'), readme(name, category))

  console.log('\nUpdating shared files...\n')

  updateComponentsIndex(name, category)
  updateDemoIndex(name)
  updateAppTsx(name, category)
  updateMainReadme(name, category)

  console.log(`\n✓  Done! Component ${name} created.\n`)
  console.log('Next steps:')
  console.log(
    `  • Edit src/components/${category}/${name}/types.ts       – define your props`,
  )
  console.log(
    `  • Edit src/components/${category}/${name}/styled.ts      – add styles`,
  )
  console.log(
    `  • Edit src/components/${category}/${name}/index.tsx      – implement the component`,
  )
  console.log(
    `  • Edit src/components/${category}/${name}/${name}Demo.tsx – add a realistic demo`,
  )
  console.log(
    `  • Edit src/components/${category}/${name}/${name}.stories.tsx – add Storybook stories`,
  )
  console.log(
    `  • Verify the exports in src/components/index.ts and src/App.tsx\n`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
