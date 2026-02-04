import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { renameSync, existsSync, readFileSync } from 'fs'
import { resolve } from 'path'
import { URL } from 'url'
import tailwindcss from '@tailwindcss/vite'

function getGraphqlEndpoint() {
  const dataPath = resolve(__dirname, 'public', 'data.json')
  const raw = readFileSync(dataPath, 'utf8')
  const { graphqlEndpoint } = JSON.parse(raw)
  return graphqlEndpoint
}

export default defineConfig(({ mode }) => {
  // On récupère l'endpoint depuis data.json
  const graphqlEndpoint = getGraphqlEndpoint()
  const url = new URL(graphqlEndpoint)
  
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'html-to-php',
        apply: 'build',
        closeBundle() {
          const distPath = resolve(__dirname, 'dist')
          const htmlPath = resolve(distPath, 'index.html')
          const phpPath = resolve(distPath, 'index.php')
          
          if (existsSync(htmlPath)) {
            renameSync(htmlPath, phpPath)
          } else {
            console.error('❌ index.html no found')
          }
        }
      }
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
      rollupOptions: {
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
