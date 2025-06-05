<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useMyI18n } from '@/composables/useMyI18n';
const { i18n } = useMyI18n();
const props = defineProps({
  text: { type: String, required: true },
  speed: { type: Number, default: 100 },
  infinite: { type: Boolean, default: false }
})

const displayText = ref('')
let timer = null
let isDeleting = false
let index = 0

function type() {
  const fullText = i18n.t(`${props.text}`)
  const current = isDeleting 
    ? fullText.substring(0, displayText.value.length - 1)
    : fullText.substring(0, displayText.value.length + 1)

  displayText.value = current

  if (!isDeleting && current === fullText) {
    if (props.infinite) {
      setTimeout(() => (isDeleting = true), 2000)
    }
  } else if (isDeleting && current === '') {
    isDeleting = false
    index = (index + 1) % props.text.length
  }

  const delay = isDeleting ? props.speed / 2 : props.speed
  timer = setTimeout(type, delay)
}

onMounted(type)
onUnmounted(() => clearTimeout(timer))
</script>

<template>
  <span class="type-effect">
    {{ displayText }}
    <span class="cursor">|</span>
  </span>
</template>

<style>
.cursor {
  animation: blink 1s infinite;
  opacity: 1;
}

@keyframes blink {
  0%, 100% { opacity: 1 }
  50% { opacity: 0 }
}
</style>