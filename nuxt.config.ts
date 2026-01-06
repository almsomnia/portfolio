import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
   compatibilityDate: "2025-07-15",
   devtools: { enabled: true },
   modules: ["@nuxt/fonts", "@nuxt/icon", "@nuxtjs/seo"],
   css: ["~/assets/css/main.css"],
   vite: {
      plugins: [tailwindcss()],
   },
   nitro: {
      externals: {
         inline: ["unhead", "@unhead/schema", "@unhead/ssr"]
      }
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
   },
   site: {
      url: "https://rivaalmero.me",
      name: "Riva Almero",
      description: "Riva Almero is a web developer based in Bandung, Indonesia. He is passionate about crafting pixel-perfect, engaging interfaces that not only look great but also provide an exceptional user experience.",
      defaultLocale: "en",
   },
   sitemap: {
      sources: ["/api/__sitemap__/urls"]
   },
   robots: {
      disallow: [],
   },
   schemaOrg: {
      identity: {
         type: "Person",
         name: "Riva Almero",
         url: "https://rivaalmero.me",
         sameAs: [
            "https://github.com/almsomnia",
            "https://www.linkedin.com/in/riva-almero-5755aa164/",
            "https://www.instagram.com/rivaalmero/",
         ]
      }
   }
})