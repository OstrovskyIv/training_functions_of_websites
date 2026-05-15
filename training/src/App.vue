<script setup>
import backgroundImage from '@/shared/images/background.webp'
</script>


<template>
  <div class="min-h-screen bg-cover bg-center bg-fixed"
       :style="{ backgroundImage: `url(${backgroundImage})` }">
    <router-view />
  </div>
</template>
