import { createApp } from 'vue'
import App from './App'
import components from './components/UI'
import router from './router/router'
import vScroll from './vScroll'
const app = createApp(App)
app.directive('scroll', vScroll)
components.forEach((component) => {
    app.component(component.name, component)
})
app.use(router).mount('#app')
