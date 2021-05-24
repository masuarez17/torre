<template>
  <div class="w-screen z-30 -mt-20 md:h-auto absolute text-black">
    <div class="w-10/12 md:w-6/12 md:my-0 my-auto mx-auto text-center p-0 bg-torreGreen">
      <p @click="close" class="text-right select-none pr-2">x</p>
      <video class="w-full h-full" controls>
        <!--
        <source id='mp4' src="http://media.w3.org/2010/05/sintel/trailer.mp4" type='video/mp4' />
        -->
        <source id='mp4' :src="`${enviroment.apiUrl}/${fileName}`" type='video/mp4' />
      </video>
    </div>
  </div>
</template>

<script>
import enviroment from '@/utils/enviroment'

export default {
  name: 'watchModal',
  props: [
    'fileName'
  ],
  data () {
    return {
      enviroment: enviroment
    }
  },
  methods: {
    close () {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>
