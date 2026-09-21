<script setup lang="ts">
  defineProps<{
    buttonText: string;
    href: string;
    subtext?: string;
  }>();
</script>

<template>
  <div class="buy-now-button">
    <a class="buy-now-button__link" :href="href">{{ buttonText }}</a>
    <p v-if="subtext" class="buy-now-button__subtext">{{ subtext }}</p>
  </div>
</template>

<style scoped>
  .buy-now-button {
    margin: 24px 0;
  }

  .buy-now-button__link {
    display: inline-block;
    padding: 10px 20px;
    border-radius: 8px;
    background-color: var(--vp-c-brand-1);
    color: var(--vp-c-white);
    font-weight: 600;
    text-decoration: none;
    transition: background-color 0.25s;
  }

  .buy-now-button__link:hover {
    background-color: var(--vp-c-brand-2);
  }

  .buy-now-button__subtext {
    margin: 8px 0 0;
    font-size: 13px;
    color: var(--vp-c-text-2);
  }
</style>
