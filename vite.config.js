// vite.config.js
import { defineConfig } from 'vite'
import staticFiles from 'vite-plugin-static-files'
import staticFiles from 'path/to/vite-plugin-static-files'


export default defineConfig({
  // other config options...
  plugins: [
    // other plugins...
   
    staticFiles({
      include: ['**/*.json']
    })
  ]
})
