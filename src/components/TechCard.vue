<template>
  <div
    class="glass-card p-6 sm:p-8 flex flex-col items-center justify-center text-center hover-glow group animate-on-scroll transition-all duration-500 cursor-default"
    :class="{ visible: isVisible }"
    :style="{ transitionDelay: `${(index % 6) * 50}ms` }"
  >
    <!-- Imagen de tecnología -->
    <div class="mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">
      <img
        :src="tech.imageUrl"
        :alt="`${tech.name} logo`"
        class="w-12 h-12 sm:w-16 sm:h-16 object-contain"
        @error="handleImageError"
      />
    </div>
    
    <!-- Nombre -->
    <h3 class="text-white font-semibold text-sm sm:text-base group-hover:text-electric-blue transition-colors">
      {{ tech.name }}
    </h3>
  </div>
</template>

<script setup>
const props = defineProps({
  tech: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  isVisible: {
    type: Boolean,
    default: false,
  },
})

// Manejo de errores de carga de imagen
const handleImageError = (event) => {
  // Si falla la imagen, muestra un placeholder o un texto
  event.target.style.display = 'none'
  console.warn(`No se pudo cargar la imagen para: ${props.tech.name}`)
}
</script>

