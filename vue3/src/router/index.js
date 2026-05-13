import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 子路由用法
  routes: [
    {
      path: '/',
      // redirect: '/lesson2',
      children: [
        {
          path: 'lesson1',
          name: 'lesson1',
          component: () => import('../views/lesson1/TestView.vue'),
          meta: {
            headerTitle: '第4集：vue3模板语法讲解',
          },
        },
        {
          path: 'lesson2',
          name: 'lesson2',
          component: () => import('../views/lesson2/TestView.vue'),
          meta: {
            headerTitle: '第5集：ref, isRef, shallowRef, triggerRef, customRef用法',
          },
        },
        {
          path: 'lesson3',
          name: 'lesson3',
          component: () => import('../views/lesson3/TestView.vue'),
          meta: {
            headerTitle: '第6集：reactive创建对象类型响应式数据'
          },
        },
      ],
    },
  ],
})

export default router
