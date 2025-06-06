<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import throttle from "lodash.throttle";
import { useMyI18n } from '@/composables/useMyI18n';
const { i18n, setLocale } = useMyI18n();

const menuItems = [
  { name: 'projects', path: '/#projects' },
  { name: 'about', path: '/#about-me' },
  { name: 'contact', path: '/#contact' },
  { name: 'skills', path: '/#skills' },
];


const isMenuOpen = ref<boolean>(false);
const isScrolled = ref<boolean>(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const setI8n = () => {
  const lang = i18n.locale.value === 'en' ? 'zh' : 'en';
  setLocale(lang);
};

// 节流滚动事件
const handleScroll = throttle(() => {
  isScrolled.value = window.scrollY > 20;
}, 100);

// 点击外部关闭菜单
const closeMenuOnClickOutside = (event: MouseEvent) => {
  const navElement = document.querySelector("nav");
  if (navElement && !navElement.contains(event.target as Node)) {
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("click", closeMenuOnClickOutside);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("click", closeMenuOnClickOutside);
});
</script>

<template>
  <nav
    :class="{
      'md:bg-transparent': !isScrolled && !isMenuOpen,
      'bg-gray-200 bg-opacity-80': isScrolled || isMenuOpen
    }"
    class="text-black p-4 fixed top-0 left-0 w-full z-50 transition-all"
  >
    <!-- 顶部菜单栏 -->
    <div class="container mx-auto flex items-center">
      <!-- 左侧 Logo -->
      <div class="text-xl font-bold mr-4">
        <router-link to="/" class="hover:text-gray-300">{{ '<Huanghaojie />' }}</router-link>
      </div>

      <!-- 中间菜单 (PC 端显示) -->
      <ul class="hidden md:flex space-x-6">
        <li v-for="(item, i) in menuItems" :key="i"><router-link :to="item.path" class="hover:text-gray-500">{{ i18n.t(`menu.${item.name}`) }}</router-link></li>
      </ul>

      <!-- 中英文切换按钮 -->
      <div class="ml-auto hidden md:block">
        <div @click="setI8n()" class="focus:outline-none hover:text-gray-500 hover:border-none">
          <i class="fa-solid fa-language text-2xl"></i>
        </div>
      </div>
      <!-- 右侧下拉菜单按钮 (移动端显示) -->
      <button
        @click="toggleMenu"
        class="md:hidden focus:outline-none ml-auto"
        aria-label="Toggle Menu"
        :aria-expanded="isMenuOpen"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- 移动端下拉菜单 -->
    <transition name="slide">
      <div v-show="isMenuOpen" class="md:hidden w-full overflow-hidden">
        <div class="container text-black mx-auto py-4">
          <ul class="flex flex-col items-start space-y-4">
            <li v-for="(item, i) in menuItems" :key="i"><router-link :to="item.path" class="hover:text-gray-300">{{ item.name }}</router-link></li>
          </ul>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}
.slide-enter-to, .slide-leave-from {
  transform: translateY(0);
  opacity: 1;
}
</style>