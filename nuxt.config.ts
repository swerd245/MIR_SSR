import type { NuxtPage } from 'nuxt/schema'
import { fileURLToPath } from 'url'

export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    host: process.env.FRONT_URL,
    port: 1234,
  },
  runtimeConfig:{
    public:{
      baseUrl: process.env.BASE_URL,
      publicKey: process.env.PUBLIC_KEY,
    },
  },
  hooks: {
    "pages:extend" (pages) {
      const setMiddleware = (pages : NuxtPage[]) => {
        for( const page of pages){
         page.meta ||= {};
         page.meta.middleware = ["authorization"];

         if(page.children){
          setMiddleware(page.children);
          }
        }
      }
      setMiddleware(pages);
    }
  },
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
  },
  modules : [
    "@pinia/nuxt"
  ],
  imports: {
    dirs: ['stores']
  },
  pinia: {
    autoImports: ['defineStore', 'acceptHMRUpdate']
  },
 
})
