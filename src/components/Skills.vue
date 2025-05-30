<template>
  <div class="bg-white w-full flex items-center justify-center py-4 m-0">
    <div class="container py-12 px-4">
      <div class="w-full flex items-center justify-center py-12">
        <div class="container mx-auto">
          <h2 class="text-5xl text-center text-black mb-8 pb-12">{{ i18n.t('skills') }}</h2>

          <div class="flex justify-center w-full mb-8">
            <div @click="switchTab('technical')" :class="[
              'flex-1 px-6 py-2 font-medium',
              activeTab === 'technical'
                ? 'text-blue-400 border-x border-t rounded-t-md'
                : 'text-black border-b',
            ]">
              Technical Skills
            </div>
            <div @click="switchTab('soft')" :class="[
              'flex-1 px-6 py-2 font-medium',
              activeTab === 'soft'
                ? ' text-blue-400 border-x border-t rounded-t-md'
                : 'text-black border-b',
            ]">
              Soft Skills
            </div>
          </div>

          <div class="grid gap-8">
            <div v-if="activeTab === 'technical'" class="rounded-lg">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div v-for="skill in technicalSkills" :key="skill.name" class="w-[95%]">
                  <p class="text-lg text-left font-medium text-gray-800 mb-2">{{ skill.name }}</p>
                  <div class="w-full h-4 rounded-full bg-gray-200">
                    <div class="bg-blue-600 h-4 rounded-full transition-all duration-500"
                      :style="{ width: skill.level + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>

            <div v-else-if="activeTab === 'soft'" class="rounded-lg">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div v-for="skill in softSkills" :key="skill.name" class="w-[95%]">
                  <p class="text-lg text-left font-medium text-gray-800 mb-2">{{ skill.name }}</p>
                  <div class="w-full h-4 rounded-full bg-gray-200">
                    <div class="bg-blue-600 h-4 rounded-full transition-all duration-500"
                      :style="{ width: skill.level + '%' }"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useMyI18n } from '@/composables/useMyI18n';
const { i18n } = useMyI18n();

const activeTab = ref('technical');

// 技术技能数据
const technicalSkills = ref([
  { name: 'Vue 3', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'Pinia', level: 80 },
  { name: 'Vite', level: 80 },
  { name: 'TailwindCSS', level: 75 },
  { name: 'JavaScript (ES6+)', level: 90 },
  { name: 'HTML & CSS', level: 95 },
  { name: 'Webpack', level: 70 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'Vue 2 & Element UI', level: 80 },
]);

// 软技能数据
const softSkills = ref([
  { name: 'Problem Solving', level: 85 },
  { name: 'Communication', level: 80 },
  { name: 'Team Collaboration', level: 85 },
  { name: 'Adaptability', level: 80 },
  { name: 'Time Management', level: 75 },
  { name: 'Self-Learning', level: 90 },
  { name: 'Attention to Detail', level: 85 },
]);

const switchTab = (tab) => {
  activeTab.value = tab;
};
</script>