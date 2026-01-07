<script setup lang="ts" generic="T extends Record<PropertyKey, any>">
import { type DotNestedKeys } from "#shared/types/utils"

const props = defineProps<{
   rows: T[]
   columns: {
      key: DotNestedKeys<T>
      label: string
   }[]
}>()

function showData(item: T, column: (typeof props)["columns"][number]) {
   if (column.key.includes(".")) {
      const keys = column.key.split(".")
      return keys.reduce((acc, key) => {
         try {
            return (acc as Record<PropertyKey, unknown>)[key] as never
         } catch (e) {
            return "-" as never
         }
      }, item)
   }
   return (item as Record<PropertyKey, unknown>)[column.key] ?? "-"
}
</script>

<template>
   <table class="w-full border-collapse text-left">
      <thead
         class="sticky top-0 backdrop-blur z-5 border-b border-slate-300/10 bg-slate-950/50 px-6 py-4"
      >
         <tr>
            <th
               v-for="col in props.columns"
               class="py-4 pr-8 text-sm font-semibold text-slate-200"
            >
               {{ col.label }}
            </th>
         </tr>
      </thead>
      <tbody>
         <template v-for="row in props.rows">
            <tr class="border-b border-slate-300/10 last:border-none">
               <td
                  v-for="(col, index) in props.columns"
                  class="py-4 pr-4 align-top text-sm"
               >
                  <slot
                     :name="`row.${col.key}`"
                     :row="row"
                     :column="col"
                     :index="index"
                  >
                     {{ showData(row, col) }}
                  </slot>
               </td>
            </tr>
         </template>
      </tbody>
   </table>
</template>
