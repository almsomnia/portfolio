<script setup lang="ts">
import type { DotNestedKeys } from "#shared/types/utils"

const projects = $projects()
const columns: {
   label: string
   key: DotNestedKeys<(typeof projects)[number]>
}[] = [
   { label: "Year", key: "year" },
   { label: "Project", key: "project" },
   { label: "Made at", key: "madeAt" },
   { label: "Built With", key: "builtWith" },
   { label: "Link", key: "link" },
]
</script>

<template>
   <main class="lg:py-24">
      <div>
         <NuxtLink
            to="/"
            class="group inline-flex items-center text-emerald-400 font-semibold tracking-tight"
         >
            <Icon
               name="heroicons:arrow-left-16-solid"
               class="me-1 group-hover:-translate-x-1 transition"
            />
            Riva Almero
         </NuxtLink>
         <h1
            class="text-4xl lg:text-5xl font-black tracking-tight text-slate-50 mt-2"
         >
            Projects
         </h1>
      </div>
      <div class="relative w-full mt-16">
         <AppTable
            class="hidden lg:block"
            :rows="projects"
            :columns="columns"
         >
            <template #row.project="{ row }">
               <span class="font-semibold text-slate-200">
                  {{ row.project }}
               </span>
            </template>
            <template #row.builtWith="{ row }">
               <div class="flex flex-wrap gap-1">
                  <Tag
                     v-for="stack in row.builtWith"
                     :label="stack"
                  />
               </div>
            </template>
            <template #row.link="{ row }">
               <a
                  v-if="row.link"
                  :href="row.link"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="group/link inline-block hover:text-emerald-400 transition"
               >
                  {{ row.link }}
                  <Icon
                     name="heroicons:arrow-up-right-16-solid"
                     class="align-middle translate-y-px group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"
                  />
               </a>
            </template>
         </AppTable>
         <ol class="group/list divide-y divide-slate-300/10 lg:hidden">
            <li
               v-for="project in projects"
               class="py-6 transition"
            >
               <div
                  class="grid grid-cols-8 gap-4 hover:opacity-100 group-hover/list:opacity-50 transition group/item"
               >
                  <div class="col-span-full md:col-span-6">
                     <div
                        class="font-medium text-xs tracking-wide leading-snug mb-2"
                     >
                        {{ project.year }}
                     </div>
                     <h3
                        class="font-medium leading-snug text-slate-200 group-hover/item:text-emerald-400 transition"
                     >
                        {{ project.project }}
                     </h3>
                     <ul class="mt-2 flex flex-wrap gap-1 items-center">
                        <li v-for="stack in project.builtWith">
                           <Tag :label="stack" />
                        </li>
                     </ul>
                     <a
                        v-if="project.link"
                        :href="project.link"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="mt-2 text-sm transition inline-block"
                     >
                        {{ project.link }}
                        <Icon
                           v-if="project.link"
                           name="heroicons:arrow-up-right-16-solid"
                           class="align-middle translate-y-px group-hover/item:-translate-y-1 group-hover/item:translate-x-1 transition-transform"
                        />
                     </a>
                  </div>
               </div>
            </li>
         </ol>
      </div>
   </main>
</template>
