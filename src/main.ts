import { createApp } from 'vue'
import router from './router'
import './index.css'
import 'vant/lib/index.css'
import App from './App.vue'
import { Tabbar, TabbarItem } from 'vant'

const app = createApp(App)

app.use(Tabbar)
app.use(TabbarItem)

app.use(router).mount('#app')
