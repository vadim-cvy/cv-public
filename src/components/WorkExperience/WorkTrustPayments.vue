<script setup lang="ts">
import Work from './Work.vue';
</script>

<template>
  <Work
    company="Trust Payments"
    position="Senior Frontend Developer"
    :keyResponsibilities="[]"
  >
    <template #overview>
      <p>
        Trust Payments is a payments provider with main office in London, UK.
      </p>

      <p>
        I'm proud to have worked with them! The job description is under NDA.
      </p>
    </template>
  </Work>
</template>