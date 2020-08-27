import Vue from 'vue'
import Router from 'vue-router'

//组件模块
import Index from './components/Index'
import Article from './components/Article'
import CategorySearch from './components/CategorySearch'
import Log from './components/Log'

Vue.use(Router)

export default new Router({
    mode: 'history',//去掉url中的#
    routes: [
        { path: '/', name: 'Index', component: Index ,meta: {title: "Index"}},
        { path: '/article/:article_id', name: 'Article', component: Article ,meta: {title: "Article"}},
        { path: '/category/:category_id', name: 'Category', component: CategorySearch ,meta: {title: "Category"}},
        { path: '/search/:keyword', name: 'Search', component: CategorySearch ,meta: {title: "Search"}},
        { path: '/log', name: 'Log', component: Log ,meta: {title: "Log"}},
    ]
})