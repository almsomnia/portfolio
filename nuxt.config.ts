import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
   compatibilityDate: "2025-07-15",
   devtools: { enabled: true },
   modules: ["@nuxt/image", "@nuxt/fonts", "@nuxt/icon"],
   css: ["~/assets/css/main.css"],
   vite: {
      plugins: [tailwindcss()],
   },
   components: {
      dirs: [
         {
            path: "~/components",
            pathPrefix: false
         }
      ]
   },
   fonts: {
      defaults: {
         weights: [300, 400, 500, 600, 700, 800, 900]
      }
   }
})
