<template>
  <div class="flex flex-col md:flex-row w-full">
    <div class="flex flex-col space-y-12 w-full md:w-4/12 px-5 md:px-10 mt-6 md:ml-14">
      <div class="md:h-32 shadow-lg">
        HEADER
      </div>
      <div class="md:h-80 shadow-lg">
        Body
      </div>
    </div>
    <div class="w-full md:w-8/12 md:h-11/12 px-5 md:px-0 mt-6">
      <div class="w-11/12 h-full shadow-lg mr-6">
        GENOME
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Genome',
  components: {
  }
}
</script>
