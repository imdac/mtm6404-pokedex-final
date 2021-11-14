import { createRouter, createWebHashHistory } from 'vue-router'

import Pokedex from '../views/Pokedex.vue'
import Pokemon from '../views/Pokemon.vue'

const routes = [
  {
    path: '/',
    name: 'Pokedex',
    component: Pokedex
  },
  {
    path: '/pokemon/:name',
    name: 'Pokemon',
    component: Pokemon,
    props: true
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router