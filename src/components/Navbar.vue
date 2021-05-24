<template>
  <div class="grid h-16 w-full">
    <div class="flex flex-nowrap w-full space-x-4 grid-flow-col auto-cols-max m-5">
      <div class="flex-none">
        <router-link to="/">
          <img class="h-12 inline mb-1 m-4" alt="logo" src="../assets/logo.png">
        </router-link>
      </div>
      <div class="my-auto w-5/12 md:w-5/6">
        <div
          v-if="$store.state.queryResults.length > 0"
          class="w-full md:w-6/12 pt-2 relative mx-auto md:mx-0 text-white"
        >
          <button @click="search" type="submit" class="absolute right-0 top-0 mt-5 mr-4">
            <svg class="text-white h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                 version="1.1" id="Capa_1" x="0px" y="0px"
                 viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                 width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"/>
            </svg>
          </button>
          <input v-model="query" @keypress.enter="search"
                 class="w-full border-2 border-white bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                 type="search" name="search" placeholder="Search for a genoma">
        </div>
      </div>
      <div class="hidden md:block md:w-2/12"></div>
      <div class="my-auto self-end w-2/12">
        <router-link v-if="user && Object.keys(user).length === 0 && user.constructor === Object"
                     class="p-4 text-torreGreen transition duration-100 hover:bg-gray-700 focus:outline-none"
                     to="/login">
          Login
        </router-link>
        <button @click="openCollapse" class="flex px-4 -ml-20 md:-ml-10 transition duration-100 hover:bg-gray-700 focus:outline-none"
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
            class="absolute w-6/12 z-30 space-y-3 md:w-2/12 bg-torreGreen -ml-12 md:-ml-24 mt-16 shadow-lg p-4"
          >
            <router-link :to="`/genome/${user.username}`">My genome</router-link>
            <p @click="logout">Logout</p>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
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
  created () {
    this.query = this.$route.query.q
    this.$store.dispatch('setQuery', this.query)
    this.$store.dispatch('fetchQuery', {
      query: this.query,
      offset: this.$store.state.offset
    })
    if (this.user.username) {
      this.$store.dispatch('profilePicture', this.user.username)
        .then(response => {
          this.profilePicture = response.data.pictureUrl
        })
    }
  },
  methods: {
    search () {
      if (this.query === this.$store.state.query) {
        return
      }
      this.$router.push(`/search?q=${this.query}`)
      this.$store.dispatch('fetchQuery', {
        query: this.query,
        offset: this.$store.state.offset
      })
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

<style scoped>

</style>
