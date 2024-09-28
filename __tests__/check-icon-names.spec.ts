import fs from 'node:fs/promises'
import path from 'node:path'
import { expect, it } from 'vitest'
import { parse } from 'postcss'

const ICON_PREFIX = '.icon-'

it('test icon names not change', async () => {
  const css = await fs.readFile(path.resolve(__dirname, '../iconfont.css'), 'utf8')
  const root = parse(css, { from: 'style.css' })
  const classNames: string[] = []
  root.walkRules((rule) => {
    for (const selector of rule.selectors) {
      if (selector.startsWith(ICON_PREFIX))
        classNames.push(selector.slice(ICON_PREFIX.length).replace(/(?:\s\.path\d)?:.*/, ''))
    }
  })
  const cleanedClassNames = [...new Set(classNames.sort((a, b) => a.localeCompare(b)))]
  expect(cleanedClassNames).toMatchSnapshot()
})
