<template>
  <div>姓名: {{ name }}</div>
  <div>年龄: {{ age }}</div>
  <br />
  <el-button type="Primary" @click="changeName">修改姓名</el-button>
  <el-button type="Primary" @click="changeAge">年龄++</el-button>
</template>

<script setup>
// toRefs: 它就是将一个响应式的对象的所有属性，转换为单独的响应式的引用，通常用于结构赋值，获取数据需要.value
// toRef:  创建单个属性的引用，源对象发生改变，新对象会同步更新
import { reactive, toRefs, toRef } from 'vue'
let person = reactive({
  name: 'foo',
  age: 18,
})
// let { name, age } = person; 结构失去响应式
let { name, age } = toRefs(person)
const newName = toRef(person, 'name')

const changeName = () => {
  name.value += 'o'
  console.log(name.value, 'newName', newName.value)
}
const changeAge = () => {
  age.value += 1
  console.log(age.value)
}
</script>

<style scoped>
div {
  padding: 0;
  color: inherit;
  font-size: 28px;
}
</style>

