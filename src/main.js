import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import global_ from './lib/Global.vue'
import Bus from './lib/eventBus'
import req from './lib/request'
import headroom from 'vue-headroom'

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
// 本身样式 当组件本身请求样式请求不成功时使用备份样式
import '../public/static/mavon-deitor1/github.min.css'
import '../public/static/mavon-deitor1/github-markdown.min.css'
import '../public/static/mavon-deitor1/katex.min.css'
// import '../public/static/mavon-deitor1/katex.min'
// 自定义样式 覆盖 mavon-editor 本身样式
import '../public/static/css/mk.less'

Vue.use(headroom)
Vue.use(mavonEditor)

// axios
Vue.prototype.GLOBAL = global_;
axios.defaults.baseURL=global_.BASE_URL;
Vue.prototype.$axios = axios;

Vue.prototype.$request = req

// 在组件中已 this.$Bus 调用
Vue.prototype.$Bus = Bus;


Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router: router,
}).$mount('#app')

