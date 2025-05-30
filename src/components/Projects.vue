<template>
  <div class="bg-[#F7F8F9] w-full flex items-stretch justify-center py-4 m-0">
    <div class="container py-12 px-4">
      <div class="flex mx-auto flex-col w-full text-black flex-wrap">
        <h2 class="block w-full text-center text-5xl font-light pb-12">{{ i18n.t('recentProjects') }}</h2>
        <div class="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div v-for="project in projects" :key="project.id" class="col px-4">
            <ProjectCard :project="project" class="w-full" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useGithubRepos } from '@/composables/useGithubRepos';
import { useMyI18n } from "@/composables/useMyI18n";
const { i18n } = useMyI18n();
const { repos, isLoading, error } = useGithubRepos();
console.log(repos, 'repos')
console.log(isLoading, 'isLoading')
console.log(error, 'error')
const projects  = computed(() => repos.value);
</script>

<style scoped>
/* .row {
  display: flex;
  flex-wrap: wrap;
  gap: 1%;
}
.col {
  flex: 0 0 calc(50% - 1rem);
} */
</style>
