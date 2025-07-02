<script setup lang="ts">
import BaseSection from './../BaseSection.vue';
import Client from './Client.vue';
</script>

<template>
  <BaseSection title="Top Clients">
    <div class="top-clients">
      <Client
        label="TopTal"
        description="A platform connecting top developers with top clients. TopTal has a highly selective 5-steps screening process."
        imgBaseName="toptal.avif"
      />

      <Client
        label="Trust Payments"
        description="An international payment processor."
        imgBaseName="trust-payments.png"
      />

      <Client
        label="Joslex Studios"
        description="A US-based development agency that ranked among Google's top 10 search results in 2021."
        imgBaseName="joslex.png"
      />

      <Client
        label="Vet Clinics Network"
        description="The largest vet clinics network in a Western European country. The company name is under NDA."
        imgBaseName="vet-network.png"
      />
    </div>

    <p class="top-clients__note">
      and 7 other agencies and clients across the US and Europe!
    </p>
  </BaseSection>
</template>

<style lang="scss">
.top-clients
{
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.2em;

  @media screen and (max-width: 1024px)
  {
    grid-template-columns: 1fr;
  }

  &__note
  {
    margin-top: 4em;
    text-align: center;
    font-weight: bold;
  }
}
</style>