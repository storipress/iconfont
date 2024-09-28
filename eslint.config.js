const antfu = require('@antfu/eslint-config').default
const prettier = require('eslint-plugin-prettier')

const ignores = [
  'font-list.ts',
  '**/font-list.ts/**',
  'iconfont*/demo-files/demo.js',
  'iconfont*/demo-files/demo.js/**',
  'iconfont*/**/*.json',
  '*.yml',
  '**/*.yml/**',
  '.yarn/**/*',
  '**/*.md',
  '.yarn/**',
  'tsconfig.json',
]
module.exports = antfu(
  {
    ignores,
    stylistic: false,
    rules: {
      'jsonc/comma-dangle': 'off',
    },
  },
  {
    ignores,
    plugins: { prettier },
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    ignores,
  },
)
