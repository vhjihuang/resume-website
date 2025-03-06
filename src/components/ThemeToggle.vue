<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/solid'

const themeStore = useThemeStore()

const toggleTheme = () => {
    themeStore.setTheme(themeStore.currentTheme === 'light' ? 'dark' : 'light')
}
</script>

<template>
  <div class="theme-toggle">
    <button @click="toggleTheme" class="flex items-center">
      <!-- 根据当前主题切换图标 -->
      <template v-if="themeStore.currentTheme === 'dark'">
        <MoonIcon class="w-6 h-6 text-gray-600 dark:text-gray-200" />
        <span class="ml-2">切换为亮色模式</span>
      </template>
      <template v-else>
        <SunIcon class="w-6 h-6 text-gray-600 dark:text-gray-200" />
        <span class="ml-2">切换为暗色模式</span>
      </template>
    </button>
  </div>
</template>

<style scoped>
.theme-toggle {
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0.5rem;
}
</style>
