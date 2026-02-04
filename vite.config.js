import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { URL } from 'url'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync } from 'node:fs'

function getGraphqlEndpoint() {
  const dataPath = resolve(__dirname, 'public', 'data.json')
  const raw = readFileSync(dataPath, 'utf8')
  const { graphqlEndpoint } = JSON.parse(raw)
  return graphqlEndpoint
}

export default defineConfig(({ mode }) => {
  const graphqlEndpoint = getGraphqlEndpoint()
  const url = new URL(graphqlEndpoint)
  
  return {
    plugins: [
      react(),
      tailwindcss(),
    ],
    
    base: './',
    
    server: mode === 'development'
    ? {
      proxy: {
        '/graphql': {
          target: `${url.protocol}//${url.host}`,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/graphql/, url.pathname)
        }
      }
    }
    : undefined,
    
    build: {
      outDir: 'dist',
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      // NE PAS INCLURE index.html dans le build
      rollupOptions: {
        input: resolve(__dirname, 'src/main.jsx'), // ou src/main.tsx
        output: {
          entryFileNames: 'main.js',
          chunkFileNames: 'main.js',
          assetFileNames: (assetInfo) => {
            if (assetInfo.name && assetInfo.name.endsWith('.css')) {
              return 'style.css'
            }
            return 'assets/[name].[ext]'
          },
          manualChunks: undefined,
        }
      }
    }
  }
})