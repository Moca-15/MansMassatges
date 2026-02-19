// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: 'https://moca-15.github.io/MansMassatges/', 
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})