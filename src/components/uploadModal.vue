<template>
  <div class="w-screen z-30 md:h-auto h-screen absolute text-black">
    <div class="w-10/12 md:w-4/12 md:my-0 my-auto -mt-10 mx-auto text-center p-4 bg-torreGreen">
      <p @click="close" class="text-right select-none pr-2">x</p>
      <p class="text-2xl">Select the video</p>
      <input @change="setFile" class="mx-auto mt-6" type="file">
      <button @click="upload" class="mt-6 mx-auto text-white bg-black w-6/12">UPLOAD</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'uploadModal',
  data () {
    return {
      video: null
    }
  },
  methods: {
    close () {
      this.$emit('close')
    },
    setFile (event) {
      this.video = event.target.files[0]
    },
    upload () {
      const payload = {
        video: this.video,
        username: this.$store.state.user.username
      }
      this.$store.dispatch('uploadVideo', payload)
        .then(response => {
          console.log(response)
        })
    }
  }
}
</script>

<style scoped>

</style>
