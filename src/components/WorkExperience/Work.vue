<script setup lang="ts">
import BigCardsGridCard from '../BigCardsGridCard.vue';

defineProps<{
  company: string,
  position: string,
  keyResponsibilities: Array<string>
}>()
</script>

<template>
  <BigCardsGridCard :title="company">
    <template #summary>
      {{ position }}
    </template>

    <template #content>
      <slot name="overview"></slot>

      <div v-if="keyResponsibilities.length">
        <h4>
          Key Responsibilities
        </h4>

        <ul>
          <li v-for="keyResponsibility in keyResponsibilities" :key="keyResponsibility">
            {{ keyResponsibility }}
          </li>
        </ul>
      </div>
    </template>
  </BigCardsGridCard>
</template>