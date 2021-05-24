<template>
  <div class="flex flex-row shadow-lg auto-cols-max p-16 space-y-6 w-full md:w-6/12 mb-20">
    <div class="hidden md:block w-6/12 my-auto">
      <img class="justify-self-center" alt="logo" src="../assets/logo.png">
    </div>
    <div class="flex mx-auto md:mx-0 my-auto flex-col w-full md:w-6/12 space-y-4">
      <div class="text-white text-2xl">Register</div>
      <input v-model="username"
             class="w-full text-white border-2 border-gray-300 bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
             placeholder="Username">
      <input v-model="password"
             class="w-full text-white border-2 border-gray-300 bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
             type="password" placeholder="Password">
      <input v-model="repeatPassword"
             class="w-full text-white border-2 border-gray-300 bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
             type="password" placeholder="Repeat password">
      <input v-model="email"
             class="w-full text-white border-2 border-gray-300 bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
             placeholder="Email">
      <span class="text-white">Accept the terms and conditions</span>
      <div class="flex flex-row flex-row">
        <router-link class="w-3/12 p-2 text-center rounded bg-torreGreen focus:outline-none" to="/login">
          Back
        </router-link>
        <div class="w-6/12"></div>
        <button @click="submit" class="w-4/12 p-2 rounded bg-torreGreen focus:outline-none">
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      username: '',
      password: '',
      repeatPassword: '',
      email: ''
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
      if (this.repeatPassword === '') {
        return false
      }
      if (this.email === '') {
        return false
      }
      return true
    },
    submit () {
      if (!this.validate()) {
        return
      }
      this.$store.dispatch('register', {
        username: this.username,
        password: this.password,
        email: this.email
      })
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>

<style scoped>

</style>
