import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import VistaCatalogo from '../views/VistaCatalogo.vue'
import PerfilProveedor from '../views/PerfilProveedor.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/catalogo',
    name: 'VistaCatalogo',
    component: VistaCatalogo
  },
  {
    path: '/perfilProveedor',
    name: 'VistaC',
    component: PerfilProveedor
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
