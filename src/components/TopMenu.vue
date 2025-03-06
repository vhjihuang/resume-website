<script setup lang="ts">
import { useMyI18n } from "@/composables/useMyI18n";
import { ElMenu, ElMenuItem, ElRow, ElCol, ElDropdown, ElDropdownMenu, ElDropdownItem } from "element-plus";
import { ref, onMounted, onUnmounted, defineAsyncComponent } from "vue";

const { i18n } = useMyI18n();

const menuStyle = ref({
  position: "fixed",
  top: "0",
  heigth: "60px",
  width: "100%",
  transition: "top 0.3s",
  zIndex: 100, // 确保菜单栏在内容上方
});

let lastScrollY = 0;

interface MenuItem {
  name: string;
  link: string;
}

const isMobile = ref<boolean>(true);
const isMenuOpen = ref<boolean>(false);
const menuItems = ref<MenuItem[]>([
  { name: i18n.t('menu.projects'), link: "#" },
  { name: i18n.t('menu.about'), link: "#" },
  { name: i18n.t('menu.resume'), link: "#" },
  { name: i18n.t('menu.skills'), link: "#" },
])

const handleScroll = () => {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    menuStyle.value.top = "-60px"; // 假设菜单栏高度为 60px
  } else {
    menuStyle.value.top = "0";
  }
  lastScrollY = currentScrollY;
};

const checkIfMobile = () => {
  isMobile.value = window.innerWidth <= 768; // 768px以下认为是移动端
};

const openMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

onMounted(() => {
  checkIfMobile();
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", checkIfMobile);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", checkIfMobile);
});
</script>
<template>
  <div class="nav-bar" :class="isMenuOpen ? 'bg-red-400' : 'bg-gray-800' ">
    <div class="flex align-center">
      <a class="whitespace-nowrap text-xl py-1">{{ "<Huanghaojie />" }}</a>
    </div>
    <div class="btn" v-if="isMobile">
      <button class="h-full p-1" @click="openMenu"><i class="fa-solid fa-bars text-xl"></i></button>
    </div>
    <div v-show="isMenuOpen" class="w-full flex-grow basis-full" :class="[isMenuOpen ? 'block' : 'hindden']">
      <div v-for="menuItem in menuItems" :key="menuItem.name">{{ menuItem.name }}</div>
    </div>
  </div>
</template>
<style scoped>
.nav-bar {
  @apply 
    w-full
    fixed
    top-0
    font-normal
    text-base
    leading-5
    flex
    items-center
    justify-between
    flex-wrap
    transition-colors
    duration-200
    px-4
    py-2
    text-white;
}
/* 可以根据需要添加自定义样式 */
.headerStyle {
  position: fixed;
  top: 0%;
  width: 100%;
  background-color: #545c64;
  z-index: 100;
  transition: top 0.3s;
  height: 60px;
  display: flex;
}


</style>
