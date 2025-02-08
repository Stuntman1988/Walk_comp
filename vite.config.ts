import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Walk_comp/', // 👈 Sätt detta direkt för att säkerställa rätt sökväg vid deploy
  server: {
    port: 5174,
  },
});
