<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
  <div class="base-section">
    <h2 class="base-section__title">
      {{ title }}
    </h2>

    <div class="base-section__content">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss">
.base-section
{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5.5em 1.5em 4.5em;

  @media screen and (max-width: 560px)
  {
    padding: 4.5em 20px 3.5em;
  }

  &:nth-child(odd)
  {
    background-color: var(--color-light);
  }

  &__title
  {
    $decoration-line-space: 0.65em;

    display: grid;
    grid-template-columns: 1fr max-content 1fr;
    align-items: center;
    width: 100%;
    max-width: 18em;
    margin-bottom: 2em;
    font-size: 1.55em;
    color: var(--color-0);
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: 560px)
    {
      font-size: 1.4em;
    }

    &::before,
    &::after
    {
      content: '';
      position: relative;
      width: 100%;
      border-bottom: 2px solid currentColor;
    }

    &::before
    {
      right: $decoration-line-space;
    }

    &::after
    {
      left: $decoration-line-space;
    }
  }

  &__content
  {
    width: 100%;
  }
}
</style>