<script setup lang="ts">
import BigCardsGrid from '../BigCardsGrid.vue';
import BaseSection from './../BaseSection.vue';
import WorkDigitalPulp from './WorkDigitalPulp.vue';
import WorkJoslex from './WorkJoslex.vue';
import WorkTopTal from './WorkTopTal.vue';
import WorkTrustPayments from './WorkTrustPayments.vue';
import WorkVet from './WorkVet.vue';
</script>

<template>
  <BaseSection title="WP Work Experience">
    <BigCardsGrid>
      <WorkJoslex></WorkJoslex>
      <WorkTopTal></WorkTopTal>
      <WorkTrustPayments></WorkTrustPayments>
      <WorkVet></WorkVet>
      <WorkDigitalPulp></WorkDigitalPulp>
    </BigCardsGrid>
  </BaseSection>
</template>