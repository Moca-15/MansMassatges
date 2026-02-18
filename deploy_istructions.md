## Deploying to GitHub Pages for a live website preview

Using `gh-pages Package`:
`npm install gh-pages --save-dev`

#### Configure Vite Base
on vite.config.js: 
`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/your-repo-name/', // Replace with your actual repository name
  plugins: [react()],
})`

#### Update packages
on package.json:
`{
  "homepage": "https://yourusername.github.io/your-repo-name/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}`

#### Deploy
`npm run deploy`


Configure GitHub Pages
- Go to your repository on GitHub
- Click Settings > Pages
- Under "Branch", select gh-pages and / (root)
- Click Save