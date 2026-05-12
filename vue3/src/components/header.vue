<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const title = computed(() => route.meta?.headerTitle ?? '')
const subTitle = computed(() => route.meta?.headerSubTitle ?? '')
</script>

<template>
  <header>
    <h4 style="opacity: 0.8; font-size: xxx-large; font-family: cursive">
      {{ title }}
      <span style="font-size: 10px; opacity: 0.9; margin-left: 10px">{{ subTitle }}</span>
    </h4>
    <hr style="opacity: 0.3" />
  </header>
</template>
