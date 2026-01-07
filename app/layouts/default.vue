<script setup lang="ts">
onBeforeMount(() => {
   if (import.meta.server) return
   const cursor = document.getElementById("cursor")
   if (!cursor) return
   document.addEventListener("mousemove", (e) => {
      if (document.body.clientWidth < 768) return
      let x = e.pageX
      let y = e.pageY
      cursor.style.background = `radial-gradient(circle at ${x}px ${y}px, oklch(69.6% 0.17 162.48 / 15%), transparent 50%)`
   })
})
</script>

<template>
   <div
      id="cursor"
      class="pointer-events-none fixed inset-0 z-20 transition duration-300 lg:absolute hidden lg:block mix-blend-screen"
      style="
         background: radial-gradient(
            circle at 0px 0px,
            oklch(69.6% 0.17 162.48 / 15%),
            transparent 50%
         );
      "
   />
   <div class="mx-auto max-w-6xl min-h-screen px-6 py-12 lg:py-0">
      <slot />
   </div>
</template>
