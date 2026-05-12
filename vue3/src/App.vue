<script setup>
import { RouterView } from 'vue-router'
import HeaderBar from './components/header.vue'
</script>

<template>
  <el-card class="app-card">
    <HeaderBar />
    <!-- 子路由内容区：在此处展示所有 children routes -->
    <div class="content">
      <RouterView />
    </div>
  </el-card>
</template>

<style scoped>
:deep(.el-card) {
  width: 100%;
  min-height: 100vh;
  border-radius: 0;
}

:deep(.el-card__body) {
  padding: 0;
  min-height: 100vh;
}

.content {
  padding: 0;
}

:deep(.el-card) {
  border: none;
  box-shadow: none;
}
</style>
