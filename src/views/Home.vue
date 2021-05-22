<template>
  <div class="flex flex-col h-screen overflow-y-hidden bg-gray-300">
    <div class="flex flex-row-reverse w-full bg-red-400">
      Hello
    </div>
    <div class="flex">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div class="flex">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'Home',
  components: {
    Footer
  }
}
</script>
