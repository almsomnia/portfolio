<script setup lang="ts">
if (import.meta.server) {
   useSeoMeta({
      description:
         "Riva Almero is a web developer based in Bandung, Indonesia. He is passionate about crafting pixel-perfect, engaging interfaces that not only look great but also provide an exceptional user experience.",
      ogTitle: "Riva Almero",
      ogDescription:
         "Riva Almero is a web developer based in Bandung, Indonesia. He is passionate about crafting pixel-perfect, engaging interfaces that not only look great but also provide an exceptional user experience.",
      ogUrl: "https://rivaalmero.me",
      twitterTitle: "Riva Almero",
      twitterDescription:
         "Riva Almero is a web developer based in Bandung, Indonesia. He is passionate about crafting pixel-perfect, engaging interfaces that not only look great but also provide an exceptional user experience.",
      robots: "index, follow",
   })
}

const sections = computed(() => {
   return [
      {
         id: "about",
         label: "About",
         component: h(resolveComponent("SectionAbout")),
      },
      {
         id: "experience",
         label: "Experience",
         component: h(resolveComponent("SectionExperience")),
      },
   ]
})

const socials = computed(() => {
   return [
      {
         icon: "fa7-brands:github",
         link: "https://github.com/almsomnia",
      },
      {
         icon: "fa7-brands:square-linkedin",
         link: "https://www.linkedin.com/in/riva-almero-5755aa164/",
      },
      {
         icon: "fa7-brands:instagram",
         link: "https://www.instagram.com/rivaalmero/",
      },
   ]
})

const activeSection = shallowRef("about")
let observer: IntersectionObserver | null = null

onMounted(() => {
   const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: [0.1],
   }

   observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
         if (entry.isIntersecting) {
            activeSection.value = entry.target.id
         }
      })
   }, options)

   sections.value.forEach((section) => {
      const el = document.getElementById(section.id)
      if (el) {
         observer?.observe(el)
      }
   })
})

onUnmounted(() => {
   if (observer) observer.disconnect()
})
</script>

<template>
   <div class="lg:flex lg:justify-between lg:gap-4">
      <header
         class="lg:sticky lg:top-0 lg:flex lg:flex-col lg:max-h-screen lg:w-[48%] lg:justify-between lg:py-24"
      >
         <div>
            <h1
               class="text-4xl lg:text-5xl font-bold tracking-wide text-slate-50"
            >
               Riva Almero
            </h1>
            <h2 class="font-medium text-lg lg:text-xl mt-1">Web Developer</h2>
            <p class="max-w-sm mt-4">
               Just like in photography, I frame, focus, and capture. Only this
               time &ndash; with code.
            </p>
            <nav class="hidden lg:block">
               <ul class="mt-16 w-max">
                  <li v-for="section in sections">
                     <a
                        :href="`#${section.id}`"
                        class="group flex items-center py-3 active"
                     >
                        <span
                           class="nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200"
                           :class="[
                              activeSection == section.id ?
                                 'w-16 bg-slate-200'
                              :  'w-8 bg-slate-600',
                           ]"
                        />
                        <span
                           class="nav-text text-xs font-bold uppercase tracking-widest group-hover:text-slate-200 group-focus-visible:text-slate-200"
                           :class="[
                              activeSection == section.id ?
                                 'text-slate-200'
                              :  'text-slate-500',
                           ]"
                        >
                           {{ section.label }}
                        </span>
                     </a>
                  </li>
               </ul>
            </nav>
         </div>
         <ul class="flex items-center gap-2.5 mt-12 lg:mt-0">
            <li
               v-for="social in socials"
               class="shrink-0 hover:text-emerald-400"
            >
               <a
                  class="block"
                  :href="social.link"
                  target="_blank"
               >
                  <Icon
                     :name="social.icon"
                     class="size-8!"
                  />
               </a>
            </li>
         </ul>
      </header>
      <main
         id="content"
         class="lg:w-[52%] py-24 pb-0 lg:pb-24"
      >
         <template v-for="section in sections">
            <component
               :is="section.component"
               :id="section.id"
               class="mb-36 scroll-mt-24"
            />
         </template>
         <footer class="max-w-md text-sm">
            <p
               class="[&_a]:font-medium [&_a]:text-slate-50 [&_a]:hover:text-emerald-400 [&_a]:transition"
            >
               Built with <a href="https://nuxt.com">Nuxt</a> and
               <a href="https://tailwindcss.com">Tailwind CSS</a>.
            </p>
         </footer>
      </main>
   </div>
</template>
