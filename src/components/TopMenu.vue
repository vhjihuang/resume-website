
<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// 监听滚动事件，判断是否滚动到一定距离
const handleScroll = () => {
  isScrolled.value = window.scrollY > 20; // 20px 以上就改变背景颜色
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <nav :class="{
      'md:bg-transparent': !isScrolled,
      'bg-gray-200 bg-opacity-80': isScrolled || isMenuOpen
    }"
    class="text-black p-4 fixed top-0 left-0 w-full z-50 transition-all">
    <!-- 顶部菜单栏 -->
    <div class="container mx-auto flex items-center">
      <!-- 左侧 Logo -->
      <div class="text-xl font-bold mr-4"><a href="#" class="hover:text-gray-300">{{ '<Huanghaojie />' }}</a></div>

      <!-- 中间菜单 (PC 端显示) -->
      <ul class="hidden md:flex space-x-6">
        <li><a href="#" class="hover:text-gray-300">首页</a></li>
        <li><a href="#" class="hover:text-gray-300">关于</a></li>
        <li><a href="#" class="hover:text-gray-300">服务</a></li>
        <li><a href="#" class="hover:text-gray-300">联系</a></li>
      </ul>

      <!-- 右侧下拉菜单按钮 (移动端显示) -->
      <button @click="toggleMenu" class="md:hidden focus:outline-none ml-auto">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
    </div>

    <!-- 移动端下拉菜单（占据顶部菜单栏高度） -->
    <transition name="slide">
      <div v-show="isMenuOpen" class="md:hidden w-full overflow-hidden z-2" :class="{
      'bg-transparent': !isScrolled && !isMenuOpen,
       'bg-opacity-80': isMenuOpen || isScrolled
    }">
        <div class="container text-black mx-auto py-4">
          <ul class="flex flex-col items-start space-y-4">
            <li><a href="#" class=" hover:text-gray-300">首页</a></li>
            <li><a href="#" class=" hover:text-gray-300">关于</a></li>
            <li><a href="#" class=" hover:text-gray-300">服务</a></li>
            <li><a href="#" class=" hover:text-gray-300">联系</a></li>
          </ul>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active {
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
}
.slide-enter-to, .slide-leave-from {
  max-height: 500px;
  opacity: 1;
}
</style>