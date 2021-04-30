import { wrapFunctional } from './utils'

export { default as Navbar } from '../../components/Navbar.vue'

export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => wrapFunctional(c.default || c))
