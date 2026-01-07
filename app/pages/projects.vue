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
   <div class="lg:py-24">
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
                  <div
                     v-for="stack in row.builtWith"
                     class="flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-400"
                  >
                     {{ stack }}
                  </div>
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
      </div>
   </div>
</template>
