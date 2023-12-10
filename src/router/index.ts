import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue";
import {useSessionStore} from "../stores/session";


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
         {
            path: '/login',
            name: 'Login',
            component: LoginView
        },
        {
            path: '/ztm',
            name: 'Ztm',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        },
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },

    ]
})

router.beforeEach(async (to, from) => {
    // const {isLoggedIn} = useSessionStore();
    // console.log('from', from,)
    // console.log('to', to,)
    // console.log('isLoggedIn', isLoggedIn)
  // if (
  //   // make sure the user is authenticated
  //   !isLoggedIn
  //     // &&
  //   // ❗️ Avoid an infinite redirect
  //   // to.name != 'Login'
  // ) {
  //   // redirect the user to the login page
  //   return { name: 'Login' }
  // }
})

export default router
