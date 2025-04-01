<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { defineAsyncComponent, onMounted, ref, watchEffect } from 'vue'
import { ElContainer } from 'element-plus'
import { useMyI18n } from "@/composables/useMyI18n";

import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import '@fortawesome/fontawesome-free/css/all.css'

const themeStore = useThemeStore()
const { i18n } = useMyI18n();

watchEffect(() => {
  // 监听主题变化
  const appElement = document.getElementById('app')

  if (appElement) {
    themeStore.currentTheme === 'dark' ? appElement.classList.add('dark') : appElement.classList.remove('dark')
  }
})
onMounted(() => {
  // 可以在这里添加任何必要的初始化逻辑
  themeStore.startAutoSwitch()
})
</script>

<template>
  <div :class="{ 'dark': themeStore.currentTheme === 'dark' }"
    class="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900">

    <!-- <el-container> -->
    <TopMenu />
    <!-- <el-header>Header</el-header>
      <el-main>Main</el-main> -->
    <!-- </el-container> -->
    <!-- 主题切换按钮 -->
    <!-- <div class="fixed top-4 right-4 z-50">
      <ThemeToggle />
    </div> -->

    <!-- 内容区域 -->
    <div class="mx-auto">
      <Contact id="contact" />
      <AboutMe id="about-me" />
      <Projects id="projects" />
      <Skills id="skills" />
      <footer class="bg-[#F7F8F9] w-full flex items-center justify-center py-12 m-0">
        <div class="container px-4 text-black">
          <h2 class="pb-4 text-6xl mb-[0.5rem]">Get In Touch</h2>
          <p class="pb-4 mb-4">I'm currently looking for full-time Software Engineering or Machine Learning
            opportunities! If you know of
            any positions available, if you have any questions, or if you just want to say hi, please feel free to email
            me at, <a href="mailto:vhjihuang@gmail.com" class="text-blue-500">vhjihuang@gmail.com.</a></p>
          <i class="fa-solid fa-code"></i>
          with
          <i class="fa-solid fa-heart"></i>
          by
          <a href="https:github.com/vhjihuang" class="text-blue-500"><span
              class="bg-black text-white  text-[0.75em] rounded-md px-[0.25rem] py-[0.25rem]">Huang Hao Jie</span></a>
          using
          <i class="fa-brands fa-vuejs text-[#42b983]"></i>
          <p><small class="text-[#6c757d]">
              Project code is open source. Feel free to fork and make your own version.
            </small></p>
        </div>
      </footer>
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
  background-color: #f9fafb;
  /* 亮色模式背景 */
}

.dark:bg-gray-900 {
  background-color: #1a202c;
  /* 暗色模式背景 */
}

.dark:text-white {
  color: white;
}

.animate-gradient {
  animation: gradientAnimation 70s ease infinite;
}

@keyframes gradientAnimation {
  0% {
    background-position: 0% 7%;
  }

  50% {
    background-position: 100% 94%;
  }

  100% {
    background-position: 0% 7%;
  }
}
</style>
