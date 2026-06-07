<script setup lang="ts">
import ButtonsButtons from "@/components/Buttons/ButtonsButtons.vue";
import ButtonsLogics from "@/components/Buttons/ButtonsLogics.vue";
import ButtonsExit from "@/components/Buttons/ButtonsExit.vue";
</script>

<template>
  <div class="select-none h-screen flex flex-col items-center justify-center
    px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16
    gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 2xl:gap-24">
    <h1 class="text-center font-angellin uppercase tracking-wider font-black
      text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl
      drop-shadow-lg sm:drop-shadow-xl md:drop-shadow-2xl
      [text-shadow:_4px_4px_0_rgb(0_0_0_/_30%)]
      sm:[text-shadow:_6px_6px_0_rgb(0_0_0_/_30%)]
      lg:[text-shadow:_8px_8px_0_rgb(0_0_0_/_30%)]">
      WORKOUT <br class="sm:hidden">
      NOTEBOOK
    </h1>

    <div class="flex flex-col items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-8">
      <ButtonsButtons />
      <ButtonsLogics />
      <ButtonsExit />
    </div>

  </div>
</template>
