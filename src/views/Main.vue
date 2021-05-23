<template>
  <div class="flex space-y-14 flex-col h-screen overflow-y-hidden bg-torreBlack">
    <div class="flex pt-10 flex-row">
      <div class="hidden md:block w-3/12"></div>
      <router-view/>
      <div class="hidden md:block w-3/12"></div>
    </div>
    <div class="flex justify-center">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from '@/components/Footer'

export default {
  name: 'Main',
  components: {
    Footer
  }
}
</script>
