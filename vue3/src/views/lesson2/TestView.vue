<template>
  <div class="test-content">{{ state.count }}</div>
  <el-button type="primary" @click="handleClick">点击</el-button>
</template>

<script setup>
import { ref, isRef, shallowRef, triggerRef, customRef } from 'vue'
// ref: 数字形式
let num = ref(0)
console.log(num.value)

// ref: 对象形式
let obj = ref({
  name: 'John',
  age: 20,
})
console.log(obj.value)
console.log(obj.value.name)
console.log(obj.value.age)

// isRef: 判断是否为 ref 对象
let count = 100
console.log(isRef(count)) // false
let count2 = ref(100)
console.log(isRef(count2)) // true

// shallowRef: 浅层 ref 对象, 性能优化
// 问题：当通过shallowRef修改对象时，不会触发视图更新，log数据会更新
let state = shallowRef({ count: 1 })
const handleClick = () => {
  // 无法触发视图更新
  // state.value.count++
  // console.log(state.value.count)
  // 方法1
  // triggerRef: 触发视图更新
  // triggerRef(state)

  // 方法2： 直接修改 ref 对象的 value 值
  state.value = { count: state.value.count + 1 }
}

// customRef: 自定义 ref 对象， 例如：防抖
const useDebounce = (value, delay = 200) => {
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newVal) {
        value = newVal
        trigger()
      },
    }
  })
}
</script>

<style scoped>
.test-content {
  padding: 0;
  color: inherit;
  font-size: 28px;
}
</style>

