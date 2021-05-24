<template>
  <div class="flex space-y-14 flex-col h-screen overflow-x-hidden bg-torreBlack">
    <Navbar/>
    <div class="flex">
      <transition name="fadeLeft">
        <router-view/>
      </transition>
    </div>
    <div>
      <div v-if="total != 0" class="my-4">
        <div class="flex space-x-4 justify-center flex-row">
          <button
            @click="diff()"
             class="relative inline-flex items-center px-2 py-2 rounded-full text-torreGreen focus:outline-none text-sm font-medium hover:bg-gray-700">
            <span class="sr-only">Previous</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
          <p class="text-sm my-auto text-white">
            Showing
            <span class="font-medium">{{ offset + 1 }}</span>
            to
            <span class="font-medium">{{ offset + 5 }}</span>
            of
            <span class="font-medium">{{ total }}</span>
            results
          </p>
          <button
            @click="add()"
             class="relative inline-flex items-center px-2 py-2 rounded-full text-torreGreen text-sm font-medium focus:outline-none hover:bg-gray-700">
            <span class="sr-only">Next</span>
            <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                 aria-hidden="true">
              <path fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
      <div class="flex -mt-5 justify-center">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default {
  name: 'SearchMain',
  components: {
    Navbar,
    Footer
  },
  computed: {
    offset () {
      return this.$store.state.offset
    },
    total () {
      return this.$store.state.total
    }
  },
  methods: {
    add () {
      this.$store.dispatch('addOffset')
      this.$store.dispatch('fetchQuery', { query: this.$store.state.query, offset: this.$store.state.offset })
    },
    diff () {
      this.$store.dispatch('diffOffset')
      this.$store.dispatch('fetchQuery', { query: this.$store.state.query, offset: this.$store.state.offset })
    }
  }
}
</script>
