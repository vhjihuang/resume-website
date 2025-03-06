<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

// 获取 canvas 的引用
const canvasRef = ref<HTMLCanvasElement | null>(null);
let ctx: CanvasRenderingContext2D | null = null;
let stars: { x: number; y: number; size: number; speed: number }[] = [];
const numStars = 100; // 星星数量
let animationFrameId: number;

// 初始化星星
const initStars = () => {
  const canvas = canvasRef.value;
  if (!canvas) return;
  
  ctx = canvas.getContext('2d');
  if (!ctx) return;

  // 设置 canvas 尺寸填充其父级元素
  const parent = canvas.parentElement;
  if (parent) {
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
  }

  // 生成随机星星数据
  stars = Array.from({ length: numStars }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 0.8 + 0.3, // 使星星更小，范围 0.3 - 1.8
    speed: Math.random() * 0.3 + 0.1, // 降低速度，范围 0.1 - 0.4
  }));
};

// 绘制星星动画
const drawStars = () => {
  if (!ctx || !canvasRef.value) return;

  // 清空画布
  ctx.clearRect(0, 0, canvasRef.value.width, canvasRef.value.height);
  
  for (const star of stars) {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.globalAlpha = Math.random() * 0.4 + 0.6; // 使星星有轻微的闪烁效果
    ctx.fill();
    
    // 移动星星
    star.y += star.speed;
    if (star.y > canvasRef.value.height) {
      // 重新生成超出屏幕的星星
      star.y = 0;
      star.x = Math.random() * canvasRef.value.width;
    }
  }

  animationFrameId = requestAnimationFrame(drawStars);
};

onMounted(() => {
  initStars();
  drawStars();
});

onUnmounted(() => {
  cancelAnimationFrame(animationFrameId);
});
</script>

<template>
  <canvas ref="canvasRef" class="absolute top-0 -z-10 left-0 w-full h-full"></canvas>
</template>

<style scoped>
</style>
