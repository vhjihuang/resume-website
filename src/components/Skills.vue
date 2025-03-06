<script setup lang="ts">
import { QrCodeIcon } from '@heroicons/vue/24/solid'  // 引入 Heroicons 的 QrCode 图标

const skills = [
  { name: 'Vue.js', color: 'bg-green-400 dark:bg-green-600', level: '90%' },
  { name: 'TypeScript', color: 'bg-blue-400 dark:bg-blue-600', level: '85%' },
  { name: 'Tailwind CSS', color: 'bg-cyan-400 dark:bg-cyan-600', level: '95%' },
  { name: 'Node.js', color: 'bg-emerald-400 dark:bg-emerald-600', level: '80%' },
  { name: 'Python', color: 'bg-yellow-400 dark:bg-yellow-600', level: '75%' },
  { name: 'AWS', color: 'bg-orange-400 dark:bg-orange-600', level: '70%' },
]
</script>

<template>
  <section class="skills-section py-16">
    <h2 class="text-3xl font-semibold text-center dark:text-white mb-12">技术栈</h2>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8">
      <div 
        v-for="(skill, index) in skills"
        :key="index"
        class="p-6 rounded-xl transition-all duration-300 hover:scale-102 hover:shadow-lg dark:hover:shadow-gray-600"
        :class="[skill.color, 'transition-colors duration-300']"
      >
        <div class="flex justify-between items-center mb-4">
          <!-- 使用 Heroicons 的 QrCode 图标 -->
          <QrCodeIcon class="w-6 h-6 text-gray-200 dark:text-gray-300" />
          <h3 class="text-lg font-semibold dark:text-gray-100 transition-colors duration-300">{{ skill.name }}</h3>
          <span class="text-sm text-gray-200 dark:text-gray-400 transition-colors duration-300">{{ skill.level }}</span>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
          <div 
            class="h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
            :style="{ width: skill.level }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  background-color: #f7fafc; /* 背景色偏灰白，亮色模式下 */
  color: #1f2937; /* 文字颜色，确保亮色模式下文字有过渡 */
  transition: background-color 0.3s ease, color 0.3s ease; /* 背景色和文字颜色的过渡 */
}

.skills-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

/* 技术栈颜色 */
.bg-blue-400 {
  background-color: #60a5fa; /* 蓝色 */
}

.bg-green-400 {
  background-color: #38b2ac; /* Vue.js 绿色 */
}

.bg-cyan-400 {
  background-color: #22d3ee; /* Tailwind CSS 青色 */
}

.bg-emerald-400 {
  background-color: #34d399; /* Node.js 翡翠绿 */
}

.bg-yellow-400 {
  background-color: #fbbf24; /* Python 黄色 */
}

.bg-orange-400 {
  background-color: #d97706; /* AWS 橙色 */
}

/* 暗色模式下的背景颜色 */
.dark\:bg-blue-600 {
  background-color: #2563eb; /* 深蓝色 */
}

.dark\:bg-green-600 {
  background-color: #16a34a; /* 深绿色 */
}

.dark\:bg-cyan-600 {
  background-color: #0e7490; /* 深青色 */
}

.dark\:bg-emerald-600 {
  background-color: #047857; /* 深翡翠绿 */
}

.dark\:bg-yellow-600 {
  background-color: #d97706; /* 深黄色 */
}

.dark\:bg-orange-600 {
  background-color: #ea580c; /* 深橙色 */
}

h3 {
  font-size: 1.125rem;
  font-weight: 600;
}

.text-gray-200 {
  color: #e5e7eb; /* 灰色文本 */
}

.text-gray-400 {
  color: #d1d5db; /* 深灰色文本 */
}

.text-gray-100 {
  color: #f3f4f6; /* 更浅灰色 */
}

.text-center {
  text-align: center;
}

.space-y-4 {
  margin-bottom: 1rem;
}

.w-full {
  width: 100%;
}

.rounded-xl {
  border-radius: 1rem; /* 圆角 */
}

.transition-all {
  transition: all 0.3s ease;
}

/* 更简洁的过渡动画 */
.hover-scale-102 {
  transform: scale(1.02);
}

.dark:hover\:shadow-gray-600 {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}

/* 文字过渡 */
.transition-colors {
  transition: color 0.3s ease;
}
</style>
