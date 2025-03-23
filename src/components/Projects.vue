<template>
  <div class="bg-[#F7F8F9] w-full flex items-center justify-center py-4 m-0">
    <div class="container py-12 px-4">
      <div class="flex mx-auto w-full text-black flex-wrap">
        <h2 class="block w-full text-center text-5xl font-light pb-12">Recent Projects</h2>
        <div class="row flex mx-auto w-full text-black flex-wrap">
          <div class="col w-full lg:w-1/2 px-4">
            <div
              class="card p-4 mb-12 bg-white transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 rounded-md">
              <div class="card-body flex-1 text-left p-4">
                <h5 class="mb-2">home</h5>
                <p class="mb-4">内容</p>
                <div class="flex gap-2 flex-col lg:flex-row">
                  <a href="#"
                    class="w-full lg:w-auto text-center lg:text-left border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white px-[0.75rem] py-[0.375rem] rounded mx-2"><i
                      class="fa-bars fa-brands fa-github"></i> Clone Project</a>
                  <a href="#"
                    class="w-full lg:w-auto text-center lg:text-left border border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white px-[0.75rem] py-[0.375rem] rounded mx-2"><i
                      class="fa-bars fa-brands fa-github"></i> Repo</a>
                </div>
                <hr class="my-4">
                <div class="pb-4">Languages:
                  <a href="#" class="rounded-lg"><span class="bg-[#F7F8F9] text-[0.75em]  px-[0.5rem] py-1">{{
                    `${'JavaScript'}:
                      ${54}%`}}</span></a>
                  <a href="#" class="rounded-lg ml-4"><span class="bg-[#F7F8F9] text-[0.75em] px-[0.5rem] py-1">{{
                    `${'HTML'}: ${54}%` }}</span></a>
                </div>
                <div><a href="#"><i class="fa-bars fa-brands fa-github"></i> Stars <span
                      class="ml-2 px-2 py-1">1142</span></a><small>update</small></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 可以在这里定义数据或逻辑
</script>

<style scoped></style>
