<template>
  <div class="flex space-y-14 flex-col h-screen overflow-hidden bg-torreBlack">
    <Navbar/>
    <div class="flex">
      <transition name="fadeLeft">
        <router-view/>
      </transition>
    </div>
    <div class="flex justify-center">
      <Footer/>
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
  }
}
</script>
