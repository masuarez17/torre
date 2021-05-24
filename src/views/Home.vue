<template>
  <div class="flex space-y-14 flex-col h-screen overflow-hidden bg-torreBlack">
    <div class="flex flex-row-reverse h-16 w-full">
      <div class="my-auto mr-4">
        <router-link v-if="user && Object.keys(user).length === 0 && user.constructor === Object"
                     class="p-4 text-torreGreen transition duration-100 hover:bg-gray-700 focus:outline-none"
                     to="/login">
          Login
        </router-link>
        <button @click="openCollapse" class="flex px-4 transition duration-100 hover:bg-gray-700 focus:outline-none"
                v-else>
          <span class="py-4 mr-4 text-torreGreen">
            {{ user.username }}
          </span>
          <div class="h-10 w-10 my-auto tinyHexagon-border">
            <div class="w-full h-full tinyHexagon">
              <img alt="profile picture" class="w-full h-full"
                   :src="profilePicture !== '' ? profilePicture : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'">
            </div>
          </div>
          <div
            v-show="collapse"
            class="absolute w-6/12 space-y-3 md:w-2/12 bg-torreGreen -ml-12 md:-ml-24 mt-16 shadow-lg p-4"
          >
            <router-link :to="`/genome/${user.username}`">My genome</router-link>
            <p @click="logout">Logout</p>
          </div>
        </button>
      </div>
    </div>
    <div class="flex flex-row">
      <div class="w-3/12"></div>
      <div class="grid space-y-6 w-full md:w-6/12 mb-20">
        <img class="justify-self-center mb-6" alt="logo" src="../assets/logo.png">
        <div
          class="w-full md:w-8/12 pt-2 relative mx-auto text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-101"
        >
          <button @click="navigate()" class="absolute right-0 top-0 mt-5 mr-4">
            <svg class="text-white h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                 version="1.1" id="Capa_1" x="0px" y="0px"
                 viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                 width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
            </svg>
          </button>
          <input
            class="w-full border-2 border-gray-300 bg-black h-10 px-5 pr-16 rounded-lg text-white text-sm focus:outline-none"
            @keypress.enter="navigate()" v-model="query" type="search" name="search" placeholder="Search for a genoma">
        </div>
      </div>
      <div class="w-3/12"></div>
    </div>
    <div class="flex justify-center">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  data () {
    return {
      query: '',
      collapse: false,
      profilePicture: ''
    }
  },
  computed: {
    user () {
      return this.$store.state.user
    }
  },
  components: {
    Footer
  },
  created () {
    if (this.user.username) {
      this.$store.dispatch('profilePicture', this.user.username)
        .then(response => {
          this.profilePicture = response.data.pictureUrl
        })
    }
  },
  methods: {
    navigate () {
      if (this.query === '') {
        return
      }
      this.$router.push(`/search?q=${this.query}`)
    },
    openCollapse () {
      this.collapse = !this.collapse
    },
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>
