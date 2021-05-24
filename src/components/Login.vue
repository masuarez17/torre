<template>
  <div class="flex flex-row shadow-lg auto-cols-max p-16 space-y-6 w-full md:w-6/12 mt-16 mb-20">
    <div class="hidden md:block w-6/12 my-auto">
      <img class="justify-self-center mb-6" alt="logo" src="../assets/logo.png">
    </div>
    <div class="flex flex-col mx-auto md:mx-0 md:w-6/12 space-y-4">
      <div class="text-white text-2xl">Log in</div>
      <input v-model="username" class="w-full text-white border-2 border-gray-300 bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
             placeholder="Username">
      <input v-model="password" class="w-full text-white border-2 border-gray-300 bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
             type="password" placeholder="Password">
      <span class="text-white">Forgot your password? <a class="hover:text-blue-500 text-sm italic">Click here</a> </span>
      <div class="flex flex-row flex-row">
        <router-link class="w-4/12 p-2 text-center rounded bg-torreGreen focus:outline-none" to="/register">
          Register
        </router-link>
        <div class="w-6/12"></div>
        <button @click="submit" class="w-3/12 p-2 text-center rounded bg-torreGreen focus:outline-none">
          Login
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    validate () {
      if (this.username === '') {
        return false
      }
      if (this.password === '') {
        return false
      }
      return true
    },
    submit () {
      if (!this.validate()) {
        return
      }
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
        .then(() => {
          this.$router.push('/')
        })
    }
  }
}
</script>

<style scoped>

</style>
