<script setup lang="ts">
useHead({
   titleTemplate: (chunk) => chunk ? `${chunk} | Riva Almero` : "Riva Almero",
})
</script>

<template>
   <div class="relative">
      <NuxtRouteAnnouncer />
      <NuxtLayout>
         <NuxtPage />
      </NuxtLayout>
   </div>
</template>
