import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue";
import {useSessionStore} from "../stores/session";
import UserView from "../views/UserView.vue";


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
            component: UserView
        },
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },

    ]
})

router.beforeEach(async (to, from) => {
    const {isLoggedIn} = useSessionStore();
    console.log('before logged in', isLoggedIn)
  //   // console.log('from', from,)
  //   // console.log('to', to,)
  //   // console.log('isLoggedIn', isLoggedIn)
  if (
    // make sure the user is authenticated
    !isLoggedIn
      &&
    // ❗️ Avoid an infinite redirect
    to.name != 'Login'
  ) {
      console.log('to', to)
      console.log('redirect')
    // redirect the user to the login page
    //   router.push({name: "Login"})
    return { name: 'Login' }
  }
})

export default router
