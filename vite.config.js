import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss()],
  build: {
    // Optimisations pour le build
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  server: {
    // Configuration du serveur de dev
    open: false,
    hmr: {
      overlay: false, // Désactive l'overlay d'erreur pour les warnings mineurs
    },
  },
  esbuild: {
    // Supprime les console.log en production
    drop: mode === 'production' ? ['console', 'debugger'] : [],
  },
}))
