<script setup lang="ts">
defineProps<{
  label: string,
  description: string,
  imgBaseName: string
}>();
</script>

<template>
  <div class="top-clients__client card">
    <div class="top-clients__client__img-wrapper">
      <img
        :src="`/src/assets/img/clients/${imgBaseName}`"
        :alt="label"
        class="top-clients__client__img"
      >
    </div>

    <div class="top-clients__client__text-wrapper">
      <h3 class="top-clients__client__label">
        {{ label }}
      </h3>

      <p class="top-clients__client__description">
        {{ description }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.top-clients__client
{
  $gap: .7em;

  display: grid;
  grid-template-columns: 3fr 8fr;

  @media screen and (max-width: 1024px)
  {
    grid-template-columns: 200px 1fr;
    align-items: start;
  }

  @media screen and (max-width: 560px)
  {
    grid-template-columns: 1fr;
    padding: $gap;
    border-radius: 8px;
    box-shadow: var(--box-shadow);
    text-align: center;
  }

  &__img-wrapper
  {
    padding: $gap;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  &__img
  {
    display: block;
    max-width: 100%;
    max-height: 5.6em;
    margin: auto;

    @media screen and (max-width: 560px)
    {
      max-width: 8em;
    }
  }

  &__text-wrapper
  {
    padding: $gap;
  }

  &__label
  {
    margin-bottom: 0;

    @media screen and (max-width: 560px)
    {
      font-size: 1.2em;
    }
  }

  &__description
  {
    margin-top: .5em;
  }
}
</style>