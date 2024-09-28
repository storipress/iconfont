import fs from 'node:fs/promises'
import path from 'node:path'
import type { Plugin } from 'vite'
import { defineConfig } from 'vite'
import invariant from 'tiny-invariant'

const renamePlugin: Plugin = {
  name: 'rename',
  enforce: 'post',
  apply: 'build',
  async writeBundle(options) {
    const dir = options.dir
    invariant(dir, 'dir is required')
    await fs.unlink(path.join(dir, 'iconfont.mjs'))
    await fs.rename(path.join(dir, 'style.css'), path.join(dir, 'iconfont.css'))
  },
}

export default defineConfig({
  build: {
    lib: {
      entry: './entry.ts',
      name: 'iconfont',
      fileName: 'iconfont',
      formats: ['es'],
    },
  },
  plugins: [renamePlugin],
})
