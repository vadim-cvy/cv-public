<script setup lang="ts">
import BaseSection from './../BaseSection.vue'
</script>

<template>
  <BaseSection title="AI">
    <p class="ai-experience__usecase">
      <b>A case study:</b> I leveraged my AI skills to cut project development time by automating a task that was originally estimated to take 2 weeks. I got it done in just 3 hours using a bit of coding and the OpenAI API.
    </p>

    <p class="ai-experience__skills">
      Advanced Prompting / OpenAI API / ChatGPT Pro / Copilot
    </p>
  </BaseSection>
</template>

<style lang="scss">
.ai-experience
{
  &__usecase
  {
    max-width: 40em;
    margin: auto;
    text-align: center;
  }

  &__skills
  {
    margin-top: 3em;
    text-align: center;
    font-weight: 700;
  }
}
</style>