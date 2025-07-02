<script setup lang="ts">
import Work from './Work.vue';

const keyResponsibilities = [
  'Optimization of TTFB (Time to First Byte)',
  'Optimization of LCP (Largest Contentful Paint)',
  'Optimization of CLS (Cumulative Layou Shift)',
  'Profiling and optimization of Client-side code (JS)',
  'Profiling and optimization of Server-side code (PHP)',
  'Implementation of new features',
]
</script>

<template>
  <Work
    company="The Largest Vet Clinics Network in a Western European Country"
    position="Senior Full-Stack Developer"
    :keyResponsibilities="keyResponsibilities"
  >
    <template #overview>
      <p>
        The project demanded strict adherence to performance metrics, including page load speed and minimizing CLS (Cumulative Layout Shift) optimization.
      </p>
    </template>
  </Work>
</template>