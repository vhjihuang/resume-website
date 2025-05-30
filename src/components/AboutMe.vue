<template>
<div class="bg-[#E6E9EC] w-full flex items-center justify-center py-4 m-0">
        <div class="container py-12 px-4">
          <div class="flex mx-auto w-full text-black flex-wrap">
            <div class="w-5/12 items-center hidden lg:block lg:items-center px-4">
              <img src="https://avatars.githubusercontent.com/u/37236608?v=4" alt="avatar" width="375" height="375"
                class="rounded-[50%] mx-auto" />
            </div>
            <div class="lg:w-7/12 w-full">
              <h2 class="text-6xl font-light mb-12">{{ i18n.t("about.title") }}</h2>
              <p class="text-xl font-light mb-4">{{ i18n.t("about.me") }}</p>
              <p><a href="#"
                  class="inline-block px-6 py-3 text-black rounded-lg shadow-md hover:bg-[#212529] hover:text-white">{{ i18n.t("resume") }}</a>
              </p>
            </div>
          </div>
        </div>
      </div>
</template>

<script setup lang="ts">
import { useMyI18n } from "@/composables/useMyI18n";
const { i18n } = useMyI18n();
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
