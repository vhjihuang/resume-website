<script setup lang="ts">
import { ref } from 'vue'
interface Icons {
  image: string,
  url: string,
}
const icons = ref<Icons[]>([
  { image: 'fa-github', url: '#' },
  { image: 'fa-facebook', url: '#' },
  { image: 'fa-instagram', url: '#' },
  { image: 'fa-linkedin', url: '#' },
  { image: 'fa-discord', url: '#' }
])
</script>

<template>
  <div
    class="py-3 h-full relative z-10 title bg-transparent bg-custom-gradient bg-1200 animate-gradient text-light min-h-screen flex items-center justify-center flex-wrap m-0">
    <StarBackground />
    <div class="container z-30 max-w-7xl py-12 mx-auto w-full">
      <h1 class="md:text-[6rem] text-[3rem] mb-2 text-center">Huang Hao Jie</h1>
      <div class="font-light text-[1.25rem] min-h-16 md:min-h-10 text-center">
        <TypeWriter text="Passionate about changing the world with technology." :infinite="true" :speed="80" />
      </div>
      <div class="p-12">
        <a v-for="i in icons" :href="i.url" class="text-white px-2 py-3"><i
            class="fa-solid text-white fa-bars hover:text-black text-[3em] fa-brands" :class="i.image"></i></a>
      </div>
      <a href="#about"
        class="text-white border-solid border-white border-[1px] px-6 py-3 rounded-lg shadow-lg hover:bg-gray-50 hover:text-black">Get
        to know me</a>
    </div>
  </div>
</template>

<style scoped></style>
