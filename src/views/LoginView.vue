<script setup lang="ts">


import {ref} from "vue";
import {useSessionStore} from "../stores/session";
import router from "../router/index";

const login = ref('')
const password = ref('')
const emptyFields = ref(false);
const registerActive = ref(false);


const {login: loginMethod} = useSessionStore();

const doLogin = async () => {
  if (login.value === "" || password.value === "") {
    emptyFields.value = true;

  } else {
    const resp = await loginMethod({email: login.value, password: password.value});
    if (resp) {
      console.log('response in view', resp)
      await router.push({name: 'Ztm' })
    }
    else {
      console.log('login failed')
    }
  }
}

const doRegister = () => {

}
</script>

<template>
  <div class="login-page">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-6 col-sm-8 mx-auto">
          <div v-if="!registerActive" class="card login" v-bind:class="{ error: emptyFields }">
            <h1>Sign In</h1>
            <div class="form-group">
              <input id="login" v-model="login" type="text" class="form-control" placeholder="Email" required>
              <input id="password" v-model="password" type="password" class="form-control" placeholder="Password" required>
              <input id="submit" type="submit" class="btn btn-primary" @click="doLogin">
              <p>Don't have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign
                up here</a>
              </p>
              <p><a href="#">Forgot your password?</a></p>
            </div>
          </div>

          <div v-else class="card register" v-bind:class="{ error: emptyFields }">
            <h1>Sign Up</h1>
            <div class="form-group">
              <input v-model="login" type="email" class="form-control" placeholder="Email" required>
              <input v-model="password" type="password" class="form-control" placeholder="Password" required>
              <input type="submit" class="btn btn-primary" @click="doRegister">
              <p>Already have an account? <a href="#" @click="registerActive = !registerActive, emptyFields = false">Sign
                in here</a>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<style>
p {
   line-height: 1rem;
}

.card {
   padding: 20px;
}

.form-group {
   input {
      margin-bottom: 20px;
   }
}

.login-page {
   align-items: center;
   display: flex;
   height: 100vh;

   .wallpaper-login {
      background: url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
   }

   .fade-enter-active,
   .fade-leave-active {
  transition: opacity .5s;
}
   .fade-enter,
   .fade-leave-to {
      opacity: 0;
   }

   .wallpaper-register {
      background: url(https://images.pexels.com/photos/533671/pexels-photo-533671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)
         no-repeat center center;
      background-size: cover;
      height: 100%;
      position: absolute;
      width: 100%;
      z-index: -1;
   }

   h1 {
      margin-bottom: 1.5rem;
   }
}

.error {
   animation-name: errorShake;
   animation-duration: 0.3s;
}

@keyframes errorShake {
   0% {
      transform: translateX(-25px);
   }
   25% {
      transform: translateX(25px);
   }
   50% {
      transform: translateX(-25px);
   }
   75% {
      transform: translateX(25px);
   }
   100% {
      transform: translateX(0);
   }
}

</style>
