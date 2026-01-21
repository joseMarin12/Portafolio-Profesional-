<template>
  <div
    class="glass-card p-6 sm:p-8 hover-glow group animate-on-scroll transition-all duration-500 flex flex-col"
    :class="[
      { visible: isVisible },
      project.featured && 'md:col-span-2 lg:col-span-1',
      `delay-${(index % 3) * 100}`
    ]"
    :style="{ transitionDelay: `${(index % 3) * 100}ms` }"
  >
    <!-- Tags de tecnologías -->
    <div class="flex flex-wrap gap-2 mb-4">
      <span
        v-for="tag in project.tags"
        :key="tag"
        class="px-3 py-1 text-xs sm:text-sm bg-electric-blue/10 text-electric-blue rounded-full border border-electric-blue/20"
      >
        {{ tag }}
      </span>
    </div>
    
    <!-- Título -->
    <h3 class="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-electric-blue transition-colors">
      {{ project.title }}
    </h3>
    
    <!-- Descripción -->
    <p class="text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
      {{ project.description }}
    </p>
    
    <!-- Botón de Demo -->
    <div class="mt-auto">
      <a
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
        class="block w-full px-4 py-2 bg-electric-blue text-dark-bg font-semibold rounded-lg hover:bg-electric-blue/80 transition-all duration-300 text-center text-sm sm:text-base hover:scale-105"
      >
        Demo
      </a>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
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
</script>

<style scoped>
.delay-0 {
  transition-delay: 0ms;
}

.delay-100 {
  transition-delay: 100ms;
}

.delay-200 {
  transition-delay: 200ms;
}
</style>



