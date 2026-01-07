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
</script>

<template>
   <section
      id="experiences"
      class="mb-36"
   >
      <div
         class="sticky top-0 z-10 lg:hidden -mx-6 px-6 py-4 bg-slate-950/75 backdrop-blur"
      >
         <h2 class="uppercase text-sm font-bold text-slate-200 tracking-widest">
            Experience
         </h2>
      </div>
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
                  class="grid grid-cols-8 gap-4 gap-y-0 lg:gap-y-4 hover:opacity-100 group-hover/list:opacity-50 transition group/item"
               >
                  <div class="col-span-full md:col-span-2">
                     <span
                        class="text-xs font-medium text-slate-500 uppercase tracking-wide"
                     >
                        {{ exp.from }} &mdash; {{ exp.to }}
                     </span>
                  </div>
                  <div class="col-span-full md:col-span-6">
                     <h3
                        class="font-medium leading-snug text-slate-200 group-hover/item:text-emerald-400 transition"
                     >
                        {{ exp.company }}
                        <Icon
                           name="heroicons:arrow-up-right-16-solid"
                           class="align-middle translate-y-px group-hover/item:-translate-y-1 group-hover/item:translate-x-1 transition-transform"
                        />
                     </h3>
                     <h4 class="text-slate-500 font-medium text-sm">
                        {{ exp.position }}
                     </h4>
                     <p class="mt-2 text-sm leading-normal text-pretty">
                        {{ exp.description }}
                     </p>
                     <ul class="flex flex-wrap gap-1 mt-4">
                        <li v-for="skill in exp.skills">
                           <Tag :label="skill" />
                        </li>
                     </ul>
                  </div>
               </a>
            </li>
         </ol>
         <div class="mt-12">
            <a
               href="/resume.pdf"
               target="_blank"
               rel="noopener noreferrer"
               class="text-slate-200 hover:text-emerald-400 transition inline-flex items-baseline font-medium leading-tight group/link"
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
</template>
