<script setup lang="ts">
const props = defineProps<{
   label: string
}>()
</script>

<template>
   <div
      class="flex items-center rounded-full bg-emerald-600/10 px-3 py-1 text-xs font-medium leading-5 text-emerald-400 text-nowrap"
   >
      {{ label }}
   </div>
</template>
