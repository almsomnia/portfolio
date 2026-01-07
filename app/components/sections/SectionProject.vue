<script setup lang="ts">
const projects = $projects()
const selectedProjects = computed(() => {
   return projects.filter((item) => item.highlight)
})
</script>

<template>
   <section
      id="projects"
      class="mb-36"
   >
      <div
         class="sticky top-0 z-10 lg:hidden -mx-6 px-6 py-4 bg-slate-950/75 backdrop-blur"
      >
         <h2 class="uppercase text-sm font-bold text-slate-200 tracking-widest">
            Projects
         </h2>
      </div>
      <div>
         <ol class="group/list">
            <li
               v-for="project in selectedProjects"
               class="mb-12 transition"
            >
               <a
                  :href="project.link"
                  target="_blank"
                  rel="noreferrer noopener"
                  class="grid grid-cols-8 gap-4 hover:opacity-100 group-hover/list:opacity-50 transition group/item"
               >
                  <div
                     class="col-span-4 md:col-span-2 order-last md:order-first"
                  >
                     <img
                        :src="project.image ?? 'https://picsum.photos/640/360'"
                        class="w-full h-auto rounded border border-slate-700 group-hover/item:border-emerald-400 transition"
                     />
                  </div>
                  <div class="col-span-full md:col-span-6">
                     <h3
                        class="font-medium leading-snug text-slate-200 group-hover/item:text-emerald-400 transition"
                     >
                        {{ project.project }}
                        <Icon
                           name="heroicons:arrow-up-right-16-solid"
                           class="align-middle translate-y-px group-hover/item:-translate-y-1 group-hover/item:translate-x-1 transition-transform"
                        />
                     </h3>
                     <p class="text-pretty mt-2 text-sm leading-normal">
                        {{ project.description }}
                     </p>
                     <div class="mt-2 flex flex-wrap gap-1 items-center">
                        <div
                           v-for="stack in project.builtWith"
                           class="flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-400"
                        >
                           {{ stack }}
                        </div>
                     </div>
                  </div>
               </a>
            </li>
         </ol>
         <div class="mt-12">
            <NuxtLink
               to="/projects"
               class="text-slate-200 hover:text-emerald-400 transition inline-flex items-baseline font-medium leading-tight group/link"
            >
               <span class="inline-block">
                  View full projects
                  <Icon
                     name="heroicons:arrow-right-16-solid"
                     class="align-middle translate-y-px group-hover/link:translate-x-1 transition-transform"
                  />
               </span>
            </NuxtLink>
         </div>
      </div>
   </section>
</template>
