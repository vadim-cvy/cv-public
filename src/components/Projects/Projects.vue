<script setup lang="ts">
import BigCardsGrid from '../BigCardsGrid.vue';
import BaseSection from './../BaseSection.vue'
import ProjectKnowledgeBase from './ProjectKnowledgeBase.vue';
import ProjectMultisite from './ProjectMultisite.vue';
import ProjectWPBoilerplate from './ProjectWPBoilerplate.vue'
</script>

<template>
  <BaseSection title="WP Projects">
    <BigCardsGrid>
      <ProjectWPBoilerplate />
      <ProjectMultisite />
      <ProjectKnowledgeBase />
    </BigCardsGrid>
  </BaseSection>
</template>