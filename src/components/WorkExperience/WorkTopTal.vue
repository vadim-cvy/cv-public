<script setup lang="ts">
import Work from './Work.vue';

const keyResponsibilities = [
  'Direct client communication',
  'Development of projects with highly stringent requirements for page load time and rendering performance',
  'Development of e-commerce projects with tricky business logic',
]
</script>

<template>
  <Work
    company="TopTal"
    position="Senior Full-Stack Developer"
    :keyResponsibilities="keyResponsibilities"
  >
    <template #overview>
      <p>
        TopTal is an exclusive network of the world's top freelance software developers and IT professionals. Leading companies rely on TopTal freelancers for their most critical projects.
      </p>

      <p>
        To join TopTal, developers must pass a rigorous 5-step screening process. I was accepted at the age of 23, which the onboarding manager described as a notable achievement.
      </p>
    </template>
  </Work>
</template>