import Vue from 'vue'
import VueRouter from 'vue-router'
import Product from '../components/Product'
import Summary from '../components/Summary'

Vue.use(VueRouter)

const routes = [
    { path: '/', name: 'product', component: Product, props: true },
    { path: '/summary', name: 'summary', component: Summary, props: true }
]

export default new VueRouter({
    routes
})