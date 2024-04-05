import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    '@': fileURLToPath(new URL('./', import.meta.url)),
  },
  vite : {
    css: {
      preprocessorOptions: {
        scss: { 
           additionalData: `@use "assets/styles/main.scss" as *;` 
       },
      },
    },
  }
})
