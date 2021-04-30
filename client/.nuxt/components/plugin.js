import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  Navbar: () => import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
