<template>
  <div class="bg-[#F7F8F9] w-full flex items-stretch justify-center py-4 m-0">
    <div class="container py-12 px-4">
      <div class="flex mx-auto w-full text-black flex-wrap">
        <h2 class="block w-full text-center text-5xl font-light pb-12">Recent Projects</h2>
        <div class="row flex mx-auto w-full text-black flex-wrap">
          <div v-for="project in projects" :key="project.id" class="col w-full flex lg:w-1/2 px-4">
            <ProjectCard :project="project" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Project } from '@/types/index';


// --- 项目数据部分保持不变 ---
const projects = ref<Project[]>([
  {
    id: 1,
    title: 'home',
    description: 'Hashir Shoaib 的个人网站/作品集模板。使用 React 和 Bootstrap 构建。',
    cloneUrl: '#', // 替换为实际的克隆 URL
    repoUrl: '#', // 替换为实际的仓库 URL
    languages: [
      { name: 'JavaScript', percentage: 50.6 },
      { name: 'SCSS', percentage: 46.2 },
      { name: 'HTML', percentage: 3.2 }
    ],
    lastUpdated: '2024年12月24日'
  },
  {
    id: 2,
    title: 'next-auth-test-app',
    description: 'Bug 可复现示例。',
    cloneUrl: '#', // 替换为实际的克隆 URL
    repoUrl: '#', // 替换为实际的仓库 URL
    languages: [
      { name: 'TypeScript', percentage: 91.5 },
      { name: 'JavaScript', percentage: 5.1 },
      { name: 'CSS', percentage: 3.4 }
    ],
    lastUpdated: '2025年2月17日'
  },
  {
    id: 3,
    title: 'portfolio',
    description: 'Hashir Shoaib 的个人网站/作品集。使用 Next.js 和 Bootstrap5 构建。',
    cloneUrl: '#', // 替换为实际的克隆 URL
    repoUrl: '#', // 替换为实际的仓库 URL
    languages: [
      { name: 'JavaScript', percentage: 85.9 },
      { name: 'SCSS', percentage: 14.1 }
    ],
    lastUpdated: '2024年12月24日'
  },
    {
    id: 4,
    title: 'Aria-Docs',
    description: '这个用 Next.js 制作的开源文档模板，为全面的文档和引人入胜的博客内容提供了简洁的设计。',
    cloneUrl: '#', // 替换为实际的克隆 URL
    repoUrl: '#', // 替换为实际的仓库 URL
    languages: [
      { name: 'TypeScript', percentage: 60.2 },
      { name: 'MDX', percentage: 36.4 },
      { name: 'CSS', percentage: 3.2 },
      { name: 'JavaScript', percentage: 0.2 }
    ],
    lastUpdated: '2025年1月3日'
  },
  // ... 更多项目
])


</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.col {
  flex: 1 1 calc(50% - 2%);  /* 每个卡片占 45% 的宽度 */
  margin: 1%;
}
</style>
