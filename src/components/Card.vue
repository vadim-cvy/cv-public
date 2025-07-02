<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.card
{
  overflow: hidden;
  border-radius: var(--border-radius--small);
  border: 1px solid var(--color-light);
  box-shadow: var(--box-shadow);
}
</style>