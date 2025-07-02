<script setup lang="ts">
import Work from './Work.vue';

const keyResponsibilities = [
  'Implementation of a read-heavy database project (4 million filterable items)',
  'Implementation of multisite projects',
  'Optimization of existing themes and plugins',
  'Development of themes based on ACF and Page Builders',
]
</script>

<template>
  <Work
    company="Joslex Studios"
    position="Senior Full-Stack Developer"
    :keyResponsibilities="keyResponsibilities"
  ></Work>
</template>