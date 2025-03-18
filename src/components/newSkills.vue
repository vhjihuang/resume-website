<template>
  <div class="w-full flex items-center justify-center py-12 bg-gray-100">
    <div class="container mx-auto">
      <h2 class="text-4xl font-bold text-center text-black mb-8 pb-12">Skills</h2>

      <div class="flex justify-center mb-8">
        <button
          @click="switchTab('technical')"
          :class="[
            'px-6 py-2 rounded-lg font-medium',
            activeTab === 'technical'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
        >
          Technical Skills
        </button>
        <button
          @click="switchTab('soft')"
          :class="[
            'px-6 py-2 rounded-lg ml-4 font-medium',
            activeTab === 'soft'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
        >
          Soft Skills
        </button>
      </div>

      <div class="grid gap-8">
        <div v-if="activeTab === 'technical'" class="p-6 rounded-lg shadow-md">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="skill in technicalSkills" :key="skill.name" class="mb-6">
              <p class="text-lg font-medium text-gray-800 mb-2">{{ skill.name }}</p>
              <div class="w-full h-6 rounded-full bg-gray-200">
                <div
                  class="bg-blue-600 h-6 rounded-full transition-all duration-500"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="activeTab === 'soft'" class="p-6 rounded-lg shadow-md">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="skill in softSkills" :key="skill.name" class="mb-6">
              <p class="text-lg font-medium text-gray-800 mb-2">{{ skill.name }}</p>
              <div class="w-full h-6 rounded-full bg-gray-200">
                <div
                  class="bg-blue-600 h-6 rounded-full transition-all duration-500"
                  :style="{ width: skill.level + '%' }"
                ></div>
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