<template>
  <!-- <div class="test-content">{{ state.num.nested.a }}</div> -->
  <div class="test-content">{{ state.count }}</div>
  <br />
  <el-button type="primary" @click="change">点击</el-button>
</template>

<script setup>
import { reactive, shallowReactive } from 'vue'
// reactive: (处理引用数据类型例如：对象、数组map、set)\创建对象类型响应式数据，结构对象会丧失响应式
// shallowReactive: 多层级数据无法触发视图更新
const state = shallowReactive({
  count: 0,
  name: 'John',
  age: 20,
  num: {
    nested: {
      a: 100,
    },
  },
})
const change = () => {
  // state.num.nested.a++
  // console.log(state.num.nested.a)
  state.count++
  console.log(state.count)
}
// 基本数据类型 用：ref
// 对象 层级不深 用：ref reactive 都可以
// 对象 层级深 用： reactive
// 顶层的对象响应式 用：shallowRef 或者shallowReactive
</script>

<style scoped>
.test-content {
  padding: 0;
  color: inherit;
  font-size: 28px;
}
</style>

