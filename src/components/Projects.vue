<template>
  <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold mb-6 dark:text-white">项目展示</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
      <!-- 项目 1 -->
      <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <!-- 占位图片 -->
        <div class="w-full h-48 bg-gray-200 dark:bg-gray-600 mb-4 rounded-lg flex items-center justify-center">
          <span class="text-gray-500 dark:text-gray-400">暂无图片</span>
        </div>
        <h3 class="text-xl font-bold mb-2 dark:text-white">项目 1</h3>
        <p class="text-gray-700 dark:text-gray-300 mb-4">这是一个示例项目，展示了我的前端开发技能。</p>
        <a href="#" class="text-blue-500 hover:underline">查看项目</a>
      </div>

      <!-- 项目 2 -->
      <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <!-- 占位图片 -->
        <div class="w-full h-48 bg-gray-200 dark:bg-gray-600 mb-4 rounded-lg flex items-center justify-center">
          <span class="text-gray-500 dark:text-gray-400">暂无图片</span>
        </div>
        <h3 class="text-xl font-bold mb-2 dark:text-white">项目 2</h3>
        <p class="text-gray-700 dark:text-gray-300 mb-4">这是一个全栈项目，使用了 Vue.js 和 Node.js。</p>
        <a href="#" class="text-blue-500 hover:underline">查看项目</a>
      </div>

      <!-- 项目 3 -->
      <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <!-- 占位图片 -->
        <div class="w-full h-48 bg-gray-200 dark:bg-gray-600 mb-4 rounded-lg flex items-center justify-center">
          <span class="text-gray-500 dark:text-gray-400">暂无图片</span>
        </div>
        <h3 class="text-xl font-bold mb-2 dark:text-white">项目 3</h3>
        <p class="text-gray-700 dark:text-gray-300 mb-4">这是一个移动端项目，使用了 React Native。</p>
        <a href="#" class="text-blue-500 hover:underline">查看项目</a>
      </div>

      <!-- 项目 4 -->
      <div class="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <!-- 占位图片 -->
        <div class="w-full h-48 bg-gray-200 dark:bg-gray-600 mb-4 rounded-lg flex items-center justify-center">
          <span class="text-gray-500 dark:text-gray-400">暂无图片</span>
        </div>
        <h3 class="text-xl font-bold mb-2 dark:text-white">项目 4</h3>
        <p class="text-gray-700 dark:text-gray-300 mb-4">这是一个数据可视化项目，使用了 D3.js。</p>
        <a href="#" class="text-blue-500 hover:underline">查看项目</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 可以在这里定义数据或逻辑
</script>

<style scoped>
/* 增强阴影效果 */
.bg-white, .dark\:bg-gray-700 {
  transition: box-shadow 0.3s ease-in-out;
}

/* 卡片悬浮效果 */
.bg-white:hover, .dark\:bg-gray-700:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* 占位图像文本样式 */
.bg-gray-200, .dark\:bg-gray-600 {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  font-weight: 500;
}
</style>
