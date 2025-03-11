<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { defineAsyncComponent, onMounted, ref, watchEffect } from 'vue'
import { ElContainer } from 'element-plus'

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import '@fortawesome/fontawesome-free/css/all.css'

const themeStore = useThemeStore()

// 动态加载组件
const AboutMe = defineAsyncComponent({
  loader: () => import('@/components/AboutMe.vue'),
  loadingComponent: { template: '<div>加载中...</div>' }
})
const Projects = defineAsyncComponent({
  loader: () => import('@/components/Projects.vue'),
  loadingComponent: { template: '<div>加载中...</div>' }
})
const Skills = defineAsyncComponent({
  loader: () => import('@/components/Skills.vue'),
  loadingComponent: { template: '<div>加载中...</div>' }
})
const Contact = defineAsyncComponent({
  loader: () => import('@/components/Contact.vue'),
  loadingComponent: { template: '<div>加载中...</div>' }
})
const ThemeToggle = defineAsyncComponent({
  loader: () => import('@/components/ThemeToggle.vue'),
  loadingComponent: { template: '<div>加载中...</div>' }
})
const TopMenu = defineAsyncComponent({
  loader: () => import('@/components/TopMenu.vue'),
  loadingComponent: { template: '<div>加载中...</div>' }
})
const StarBackground = defineAsyncComponent({
  loader: () => import('@/components/StarBackground.vue'),
  loadingComponent: { template: '<div>加载中...</div>' }
})

const testMenu = defineAsyncComponent({
  loader: () => import('@/components/testMenu.vue'),
  loadingComponent: { template: '<div>加载中...</div>' }
})
const TypeWriter = defineAsyncComponent({
  loader: () => import('@/components/TypeWriter.vue'),
  loadingComponent: { template: '<div>加载中...</div>' }
})

interface Icons {
  image: string,
  url: string,
}
const icons =ref<Icons[]>([
  { image: 'fa-github', url: '#'},
  { image: 'fa-facebook', url: '#'},
  { image: 'fa-instagram', url: '#' },
  { image: 'fa-linkedin', url: '#' },
  { image: 'fa-discord', url: '#' }
])

watchEffect(() => {
  // 监听主题变化
  const appElement = document.getElementById('app')

  if(appElement) {
    themeStore.currentTheme === 'dark' ? appElement.classList.add('dark') : appElement.classList.remove('dark')
  }
})
onMounted(() => {
  // 可以在这里添加任何必要的初始化逻辑
  themeStore.startAutoSwitch()
})
</script>

<template>
  <div :class="{'dark': themeStore.currentTheme === 'dark'}" class="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">

    <!-- <el-container> -->
      <testMenu />
      <!-- <TopMenu /> -->
      <!-- <el-header>Header</el-header>
      <el-main>Main</el-main> -->
    <!-- </el-container> -->
    <!-- 主题切换按钮 -->
    <!-- <div class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div> -->

    <!-- 内容区域 -->
    <div class="mx-auto">
      <div class="py-3 h-full relative z-10 title bg-transparent bg-custom-gradient bg-1200 animate-gradient text-light min-h-screen flex items-center justify-center flex-wrap m-0">
        <StarBackground />
        <div class="container z-30 max-w-7xl py-12 mx-auto w-full">
          <h1 class="md:text-[6rem] text-[3rem] mb-2 text-center">Huang Hao Jie</h1>
          <div class="font-light text-[1.25rem] min-h-16 md:min-h-10 text-center"><TypeWriter text="Passionate about changing the world with technology." :infinite="true"
            :speed="80" /></div>
          <div class="p-12">
            <a v-for="i in icons" :href="i.url" class="text-white px-6 py-3"><i class="fa-solid text-white fa-bars hover:text-black text-[3em] fa-brands" :class="i.image" ></i></a>
          </div>
          <a href="#about" class="text-white border-solid border-white border-[1px] px-6 py-3 rounded-lg shadow-lg hover:bg-gray-50 hover:text-black">Get to know me</a>
        </div>
      </div>
      <div class="bg-[#E6E9EC] w-full flex items-center justify-center py-4 m-0">
        <div class="container py-12">
          <div class="flex mx-auto w-full text-black flex-wrap">
            <div class="w-5/12 hidden md:block px-4">
              <img src="https://avatars.githubusercontent.com/u/37236608?v=4" alt="avatar" width="375" height="375" class="rounded-[50%] mx-auto" />
            </div>
            <div class="md:w-7/12 w-full">
              <h2>About Me</h2>
              <p>My name is Hashir Shoaib. I’m a graduate of 2020 from National University of Sciences and Technology at Islamabad with a degree in Computer Engineering. I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering. In my free time I like working on open source projects.</p>
            </div>
          </div>
        </div>
      </div>
      <AboutMe class="mb-8 md:mb-16" />
      <Projects class="mb-8 md:mb-16" />
      <Skills class="mb-8 md:mb-16" />
      <Contact class="mb-8 md:mb-16" />
    </div>
  </div>
</template>

<style scoped>
/* 使用 Tailwind 的 dark 模式类 */


/* 可选：增加全局过渡效果 */
body {
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* 其他模块的背景色和阴影效果 */
.bg-gray-50 {
  background-color: #f9fafb; /* 亮色模式背景 */
}

.dark:bg-gray-900 {
  background-color: #1a202c; /* 暗色模式背景 */
}

.dark:text-white {
  color: white;
}
.animate-gradient {
  animation: gradientAnimation 70s ease infinite;
}
@keyframes gradientAnimation {
  0% { background-position: 0% 7%; }
  50% { background-position: 100% 94%; }
  100% { background-position: 0% 7%; }
}
</style>
