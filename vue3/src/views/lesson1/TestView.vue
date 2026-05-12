<template>
  <div class="test-content">
    <div>{{ message }}</div>
    <div v-html="vhtml"></div>
    <div :id="message">id</div>
    <div>{{ message + number }}</div>
    <div>{{ message.split('').reverse().join('') }}</div>
    <el-button type="primary" :disabled="bool">button</el-button>
    <!-- prevent: 阻值事件默认行为 -->
    <!-- stop: 阻止冒泡 -->
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  const message = ref('Hello Word');
  const vhtml = ref('<strong> Hellp Word </strong>')

  let number = ref(1)
  let bool = ref(true)
</script>

<style scoped>
.test-content {
  padding: 0;
  color: inherit;
  font-size: 28px;
}
</style>

