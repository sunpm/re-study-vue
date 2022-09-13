import { createRouter, createWebHashHistory } from 'vue-router'
import routes from '~pages'

/*
routes.push({
  path: '/',
  redirect: '/login',
});
*/

const router = createRouter({
  history: createWebHashHistory(), // HashHistory
  routes,
})

export default router
