<script setup lang="ts">
const experiences = computed(() => {
   return [
      {
         position: "Programmer",
         company: "Jasa Medika Transmedic",
         companyLink: "https://jasamedikatransmedic.com/",
         description:
            "Build and maintain web applications for diverse array of projects, including Telemedicine Transmedic, Faskinlink, E-Klinik Transmedic, and more.",
         skills: ["JavaScript", "TypeScript", "Vue.js", "Nuxt", "HTML & CSS"],
         from: "2023",
         to: "Present",
      },
   ]
})

onBeforeMount(() => {
   if (import.meta.server) return
   const cursor = document.getElementById("cursor")
   if (!cursor) return
   document.addEventListener("mousemove", (e) => {
      let x = e.pageX
      let y = e.pageY
      cursor.style.background = `radial-gradient(circle at ${x}px ${y}px, oklch(62.3% 0.214 259.815 / 10%), transparent 25%)`
   })
})
</script>

<template>
   <div class="relative">
      <NuxtRouteAnnouncer />
      <div
         id="cursor"
         class="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      />
      <div class="mx-auto max-w-6xl min-h-screen">
         <div class="lg:flex lg:justify-between lg:gap-4">
            <header
               class="lg:sticky lg:top-0 lg:flex lg:flex-col lg:max-h-screen lg:w-[48%] lg:justify-between lg:py-24"
            >
               <div>
                  <h1 class="text-5xl font-bold tracking-wide text-gray-50">
                     Riva Almero
                  </h1>
                  <h2 class="font-medium text-xl mt-1">Web Developer</h2>
                  <p class="max-w-sm mt-4">
                     Just like in photography, I frame, focus, and capture. Only
                     this time &ndash; with code.
                  </p>
               </div>
               <ul class="flex items-center gap-2">
                  <li class="shrink-0">
                     <a
                        class="block"
                        href=""
                     >
                        <Icon
                           name="fa7-brands:github"
                           class="size-8!"
                        />
                     </a>
                  </li>
                  <li class="shrink-0">
                     <a
                        class="block"
                        href=""
                     >
                        <Icon
                           name="fa7-brands:square-linkedin"
                           class="size-8!"
                        />
                     </a>
                  </li>
                  <li class="shrink-0">
                     <a
                        class="block"
                        href=""
                     >
                        <Icon
                           name="fa7-brands:instagram"
                           class="size-8!"
                        />
                     </a>
                  </li>
               </ul>
            </header>
            <main
               id="content"
               class="lg:w-[52%] lg:py-24"
            >
               <section
                  id="about"
                  class="mb-36"
               >
                  <p class="text-pretty mb-4 leading-relaxed">
                     My name is Riva Almero. I'm a front-end web developer based
                     in Bandung, Indonesia. I'm passionate about crafting
                     pixel-perfect, engaging interfaces that not only look great
                     but also provide an exceptional user experience.
                  </p>
                  <p class="text-pretty mb-4 leading-relaxed">
                     My work currently consists of a full time position as a
                     Programmer at
                     <a
                        href="https://jasamedikatransmedic.com/"
                        class="text-gray-50 hover:text-emerald-400 font-medium"
                        >Jasa Medika Transmedic</a
                     >, alongside managing freelance clients and side projects.
                     This balance allows me to continuously sharpen my skills,
                     explore new tools and frameworks, and stay adaptable in the
                     fast-moving world of web development.
                  </p>
                  <p class="text-pretty mb-4 leading-relaxed">
                     My freelance web development roots are in Wordpress, where
                     I learned to build and ship websites independently for real
                     clients. Working closely with different client needs taught
                     me how to balance speed, flexibility, and quality. That
                     experience continues to shape how I approach projects
                     today.
                  </p>
                  <p class="text-pretty mb-4 leading-relaxed">
                     In my free time, I enjoy photography and music. Both keep
                     me grounded, and both influence the way I see and build for
                     the web.
                  </p>
               </section>
               <section
                  id="experiences"
                  class="mb-36"
               >
                  <div>
                     <ol class="group/list">
                        <li
                           v-for="exp in experiences"
                           class="mb-12 transition"
                        >
                           <a
                              :href="exp.companyLink"
                              target="_blank"
                              rel="noreferrer noopener"
                              class="grid grid-cols-8 gap-4 hover:opacity-100 group-hover/list:opacity-50 transition group/item"
                           >
                              <div class="col-span-2">
                                 <span
                                    class="text-xs font-medium text-gray-500 uppercase tracking-wide"
                                 >
                                    {{ exp.from }} &mdash; {{ exp.to }}
                                 </span>
                              </div>
                              <div class="col-span-6">
                                 <h3
                                    class="font-medium leading-snug text-gray-200 group-hover/item:text-emerald-400 transition"
                                 >
                                    {{ exp.company }}
                                    <Icon
                                       name="heroicons:arrow-up-right-16-solid"
                                       class="align-middle translate-y-px group-hover/item:-translate-y-1 group-hover/item:translate-x-1 transition-transform"
                                    />
                                 </h3>
                                 <h4 class="text-gray-500 font-medium text-sm">
                                    {{ exp.position }}
                                 </h4>
                                 <p
                                    class="mt-2 text-sm leading-normal text-pretty"
                                 >
                                    {{ exp.description }}
                                 </p>
                                 <ul class="flex flex-wrap gap-2 mt-2">
                                    <li v-for="skill in exp.skills">
                                       <div
                                          class="flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-400"
                                       >
                                          {{ skill }}
                                       </div>
                                    </li>
                                 </ul>
                              </div>
                           </a>
                        </li>
                     </ol>
                     <div class="mt-12">
                        <a
                           href=""
                           class="text-gray-200 hover:text-emerald-400 transition inline-flex items-baseline font-medium leading-tight group/link"
                        >
                           <span class="inline-block">
                              View full résumé
                              <Icon
                                 name="heroicons:arrow-up-right-16-solid"
                                 class="align-middle translate-y-px group-hover/link:-translate-y-1 group-hover/link:translate-x-1 transition-transform"
                              />
                           </span>
                        </a>
                     </div>
                  </div>
               </section>
               <footer class="max-w-md pb-16 sm:pb-0 text-sm float-right">
                  <p>
                     &copy; {{ new Date().getFullYear() }} Riva Almero. All rights reserved.
                  </p>
               </footer>
            </main>
         </div>
      </div>
   </div>
</template>
