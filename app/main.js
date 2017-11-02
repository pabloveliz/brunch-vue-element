import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import "vueify/lib/insert-css" // required for .vue file <style> tags

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    render: h => h(App)
})
