import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/',
    server: {
      port: 5174,
    },
  }

  if (command !== 'serve') {
    config.base = '/Walk_comp/'
  }

  return config
})
