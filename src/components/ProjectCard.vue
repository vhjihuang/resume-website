<template>
  <div class="card flex flex-col p-4 mb-12 bg-white transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 rounded-md">
    <div class="card-body flex-1 text-left p-4">
      <h5 class="mb-2">{{ project.title }}</h5>
      <p class="mb-4 ">{{ project.description }}</p>
      <div class="flex gap-2 flex-col lg:flex-row">
        <a :href="project.cloneUrl"
          class="w-full lg:w-auto text-center lg:text-left border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white px-[0.75rem] py-[0.375rem] rounded mx-2"><i
            class="fa-bars fa-brands fa-github"></i> Clone Project</a>
        <a :href="project.repoUrl"
          class="w-full lg:w-auto text-center lg:text-left border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white px-[0.75rem] py-[0.375rem] rounded mx-2"><i
            class="fa-bars fa-brands fa-github"></i> Repo</a>
      </div>
      <hr class="my-4">
      <div class="pb-4">Languages:
        <a v-for="(lang, index) in project.languages" :key="lang.name" href="#" class="rounded-lg mr-2"><span
            class="bg-[#F7F8F9] text-[0.75em]  px-[0.5rem] py-1">{{
              `${lang.name}:
            ${lang.percentage}%` }}</span></a>
      </div>
      
    </div>
    <div class="mt-auto text-left px-4">
      <div><a href="#"><i class="fa-bars fa-brands fa-github"></i> Stars <span
        class="ml-2 px-2 py-1">1142</span></a><small>{{ project.lastUpdated }}</small></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '@/types/index'; // 调整路径

// Props 定义保持不变
defineProps<{
  project: Project
}>();

</script>
<style scoped>
.card {
  min-height: 200px; /* 固定最小高度 */
  display: flex;
  flex-direction: column;
}
.card-body {
  flex: 1; /* 占据剩余空间 */
  display: flex;
  flex-direction: column;
}
.mb-4 {
  flex-grow: 1; /* 允许动态扩展 */
  word-wrap: break-word; /* 处理长单词换行 */
}
</style>