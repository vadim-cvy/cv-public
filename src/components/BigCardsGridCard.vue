<script setup lang="ts">
import Card from './Card.vue';

defineProps<{
  title: string
}>()
</script>

<template>
  <Card class="big-cards-grid__card">
    <div>
      <h3 class="big-cards-grid__card__title">
        {{ title }}
      </h3>

      <div class="big-cards-grid__card__summary">
        <slot name="summary"></slot>
      </div>
    </div>

    <div class="big-cards-grid__card__description">
      <slot name="content"></slot>
    </div>
  </Card>
</template>

<style lang="scss">
.big-cards-grid__card
{
  $gap: 1.5em;

  display: grid;
  padding: $gap 0;
  grid-template-columns: 15em 1fr;

  > *
  {
    padding: 0 $gap;
    border-right: 1px solid var(--color-light-dark);

    &:last-child
    {
      border-right: none;
    }
  }

  &__summary
  {
    margin-top: 1.5em;
    font-size: .85em;
  }

  &__content
  {
    h4
    {
      margin-top: 1.5em;

      &:first-child
      {
        margin-top: 0;
      }
    }

    h4,
    p
    {
      margin-bottom: 1em;

      &:last-child
      {
        margin-bottom: 0;
      }
    }
  }
}
</style>