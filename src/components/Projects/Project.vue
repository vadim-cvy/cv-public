<script setup lang="ts">
import BigCardsGridCard from '../BigCardsGridCard.vue';

defineProps({
  title: String
})
</script>

<template>
  <BigCardsGridCard :title="title">
    <template #summary>
      <slot name="summary"></slot>
    </template>

    <template #content>
      <h4>
        Problem
      </h4>

      <slot name="problem-description"></slot>

      <h4>
        Solution
      </h4>

      <slot name="solution-description"></slot>
    </template>
  </BigCardsGridCard>
</template>