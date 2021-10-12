import { createApp } from 'vue'
import { createWebHistory, createRouter } from 'vue-router';
import store from "./store/index"
import VueAxios from 'vue-axios';
import axios from 'axios';
import NProgress from 'nprogress';

import App from './App.vue'
import AddItem from './components/create.vue';
import Edit from './components/edit.vue';
import Display from './components/display.vue';
import Index from "./components/index.vue";

import '../node_modules/nprogress/nprogress.css';

const myapp= createApp(App)

// myapp.use(VueRouter);
myapp.use(VueAxios, axios);


myapp.config.productionTip = false

const routes = [
  { path: '/',   name: 'Index',
      component:Index
   },
    {
      name: 'Create',
      path: '/create',
      component: AddItem
    },
    {
      name: 'Edit',
      path: '/edit',
      component: Edit
    },
    {
      name: 'Display',
      path: '/display',
      component: Display
    },
  ];

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  router.beforeResolve((to, from, next) => {
    if (to.name) {
        NProgress.start()
    }
    next()
  });
  
  router.afterEach(() => {
    NProgress.done()
  });

myapp.use(router).use(store).mount('#app')
