<script setup lang="ts">
import { ref } from 'vue'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/vue/24/solid'

const formData = ref({
  name: '',
  email: '',
  message: ''
})

const isLoading = ref(false)
const showSuccess = ref(false)

const handleSubmit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    showSuccess.value = true
    formData.value = { name: '', email: '', message: '' }
    setTimeout(() => showSuccess.value = false, 3000)
  }, 1500)
}
</script>

<template>
  <section class="contact-section py-16">
    <h2 class="text-4xl font-bold text-center dark:text-white mb-12">联系我</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-12 px-6 md:px-12">
      <!-- 联系信息 -->
      <div class="space-y-8 bg-white p-8 rounded-xl shadow-lg dark:bg-gray-800 dark:text-white">
        <h3 class="text-2xl font-semibold">联系方式</h3>
        <ul class="space-y-6">
          <li class="flex items-center space-x-3">
            <PhoneIcon class="w-8 h-8 text-blue-500" />
            <span>+1 (234) 567-890</span>
          </li>
          <li class="flex items-center space-x-3">
            <EnvelopeIcon class="w-8 h-8 text-green-500" />
            <span>contact@example.com</span>
          </li>
        </ul>

        <h3 class="text-2xl font-semibold mt-8">社交媒体</h3>
        <div class="flex space-x-6">
          <a href="#" class="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
            <span class="i-ph-github-logo-bold text-3xl"/>
          </a>
          <a href="#" class="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
            <span class="i-ph-linkedin-logo-bold text-3xl text-blue-600"/>
          </a>
          <a href="#" class="p-3 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 transition-colors">
            <span class="i-ph-twitter-logo-bold text-3xl text-sky-500"/>
          </a>
        </div>
      </div>

      <!-- 联系表单 -->
      <div class="bg-white p-8 rounded-xl shadow-lg dark:bg-gray-800 dark:text-white">
        <form @submit.prevent="handleSubmit" class="space-y-6">
          <div>
            <label class="block mb-2 text-lg font-medium">姓名</label>
            <input
              v-model="formData.name"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block mb-2 text-lg font-medium">邮箱</label>
            <input
              v-model="formData.email"
              type="email"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label class="block mb-2 text-lg font-medium">消息</label>
            <textarea
              v-model="formData.message"
              rows="4"
              required
              class="w-full px-4 py-3 rounded-lg border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            :disabled="isLoading"
            class="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center"
          >
            <span v-if="isLoading" class="i-svg-spinners-180-ring mr-2 text-xl"/>
            {{ isLoading ? '发送中...' : '发送消息' }}
          </button>

          <div 
            v-if="showSuccess"
            class="p-4 bg-green-100 text-green-800 rounded-lg dark:bg-green-900/20 dark:text-green-300 transition-opacity opacity-100 animate__fadeIn"
          >
            消息已发送成功！
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  background-color: #f7fafc;
}

/* Fade-in Animation for success message */
@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
</style>
