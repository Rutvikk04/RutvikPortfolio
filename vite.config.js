import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "./RutvikPortfolio",
  build: {
    outDir: 'build', // Or any other desired output directory
  },
  plugins: [react()],
})
