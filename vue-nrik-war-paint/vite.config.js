import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dynamicImport from 'vite-plugin-dynamic-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dynamicImport(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': 'bootstrap',
    },
  },
  server: {
    fs: {
      // Permet à Vite d'accéder aux fichiers JSON
      allow: ['.'],
    },
  },
  // Ajouter la section `build` si nécessaire pour la configuration des options de construction
  build: {
    // Exemple de configuration des options de construction
    target: 'es2015', // Assure une compatibilité avec les navigateurs modernes
    sourcemap: true,  // Générer des sourcemaps pour le débogage
  },
})
