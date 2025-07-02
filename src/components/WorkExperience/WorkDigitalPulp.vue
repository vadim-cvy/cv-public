<script setup lang="ts">
import Work from './Work.vue';

const keyResponsibilities = [
  'Development of a custom ACF-based theme',
  'Integration of Twig template engine',
  'Implementation of client-side localstorage-based cache',
  'Adjusting routing via the WordPress Permalinks API',
]
</script>

<template>
  <Work
    company="Digital Pulp"
    position="Senior Full-Stack Developer"
    :keyResponsibilities="keyResponsibilities"
  ></Work>
</template>