<template>
  <div class="flex w-full space-y-3 flex-col">
    <router-link :to="'/genome/' + result.username" v-for="(result, index) in results" :key="index">
      <div class="flex flex-col md:flex-row w-11/12 space-x-6 md:ml-2 py-4 md:ml-10 shadow-lg">
        <div class="w-screen md:w-2/12 h-auto md:ml-8">
          <div class="w-6/12 md:w-full mx-auto md:mx-0 hexagon-border">
            <div class="w-full h-full hexagon">
              <img alt="profile picture" class="w-full z-0 h-full" :src="result.picture ? result.picture : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'">
            </div>
          </div>
        </div>
        <div class="flex flex-wrap md:w-9/12 text-white overflow-hidden">
          <div class="w-full md:mx-0 md:w-4/12 mt-2 md:ml-7">
            <h1 class="md:text-left text-center text-2xl">{{ result.name }}</h1>
            <h1 class="text-md mt-2 text-gray-400">{{ result.professionalHeadline }}</h1>
            <h1 class="text-sm mt-2 text-gray-400">{{ result.locationName }}</h1>
          </div>
          <div class="w-full mt-8 ml-6 hidden md:block md:w-5/12">
            <p>Open to:</p>
            <div v-for="(job, index) in result.openTo" :key="index" class="w-8/12">
              <li class="text-gray-300 ml-4">{{job}}</li>
            </div>
          </div>
          <div class="w-full -ml-20 mt-8 hidden md:block md:w-2/12">
            <p>Skills:</p>
            <div v-for="(skill, index) in result.skills" :key="index">
              <li v-if="index < 6" class="w-full ml-4 overflow-clip text-sm ">{{skill.name}}</li>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'Search',
  computed: {
    results () {
      return this.$store.state.queryResults
    }
  }
}
</script>
<style>
.hexagon {
  z-index: 0;
  position: relative;
  height: 150px;
  width: 150px;
  background: black;
}
.hexagon:before {
  position: absolute;
  content: '';
}
.hexagon:before {
  top: 4px;
  left: 4px;
  height: calc(100% - 8px);
  width: calc(100% - 8px);
}
.hexagon, .hexagon:before{
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
.hexagon-border, .hexagon-border:before{
  z-index: 0;
  border-color: grey;
  background: grey;
  border-width: 10px;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
</style>
