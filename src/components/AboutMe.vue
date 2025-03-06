<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6 dark:text-white">关于我</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- 教育背景 -->
      <div>
        <h3 class="text-xl font-bold mb-4 dark:text-white">教育背景</h3>
        <div class="space-y-4">
          <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <h4 class="text-lg font-semibold dark:text-white">XX 大学</h4>
            <p class="text-gray-700 dark:text-gray-300">计算机科学与技术</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">2016 - 2020</p>
          </div>
        </div>
      </div>

      <!-- 工作经验 -->
      <div>
        <h3 class="text-xl font-bold mb-4 dark:text-white">工作经验</h3>
        <div class="space-y-4">
          <div class="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
            <h4 class="text-lg font-semibold dark:text-white">XX 公司</h4>
            <p class="text-gray-700 dark:text-gray-300">全栈开发者</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">2020 - 至今</p>
            <ul class="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
              <li>负责前端和后端开发。</li>
              <li>使用 Vue.js 和 Node.js 构建 Web 应用。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 可以在这里定义数据或逻辑
</script>

<style scoped>
/* 自定义样式（如果需要） */

/* 增强阴影效果 */
.bg-gray-100 {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.bg-gray-700 {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}
</style>
