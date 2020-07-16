import Vue from 'vue'
import App from './App.vue'

//安装路由
import VueRouter from 'vue-router'
import text1 from './components/text1'
import text2 from './components/text2'

Vue.use(VueRouter)
const routes =[
    {
   path:'/text1',
   component:text1
},
    {path:'/text2',
    component:text2}
]
const router = new VueRouter({
    routes
})


new Vue({
  render: h => h(App),
    router,
}).$mount('#app')