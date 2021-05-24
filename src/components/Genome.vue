<template>
  <div v-if="user != {}" class="flex flex-col text-white md:flex-row w-full">
    <upload-modal v-if="upload" @close="upload = !upload"></upload-modal>
    <watch-modal v-if="watch" :file-name="fileName" @close="watch = !watch"></watch-modal>
    <div class="flex flex-col space-y-10 w-full md:w-4/12 px-5 md:px-10 mt-6 md:ml-14">
      <div class="flex flex-col p-4 shadow-2xl">
        <div class="w-full z-0 h-full -mt-10">
          <div class="w-4/12 mx-auto hexagon-border">
            <div class="w-full h-full hexagon">
              <img alt="profile picture" class="w-full h-full" :src="user.person.picture ? user.person.picture : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'">
            </div>
          </div>
        </div>
        <div class="w-full mt-2 space-y-3 text-center">
          <p class="w-full text-xl mx-auto">{{ user.person.name }}</p>
          <p class="w-full text-gray-300 mx-auto">{{ user.person.professionalHeadline }}</p>
          <p class="w-full text-sm text-gray-300 mx-auto">{{ user.person.location.name }}</p>
        </div>
      </div>
      <div class="shadow-2xl p-4">
        <div class="w-full mb-3">
          <button
            @click="openWatch"
            v-if="hasVideo"
            class="p-4 w-full text-torreGreen justify-center transition duration-100 hover:bg-gray-700 focus:outline-none"
          >
            Watch presentation video
          </button>
          <button
            @click="openUpload"
            v-if="!hasVideo && currentUser && username === currentUser.username"
            class="p-4 w-full text-torreGreen justify-center transition duration-100 hover:bg-gray-700 focus:outline-none"
          >
            Upload presentation video
          </button>
        </div>
        <p class="text-justify h-44 overflow-hidden">{{ user.person.summaryOfBio }} </p>
      </div>
    </div>
    <div class="w-full md:w-8/12 px-5 md:px-0 mt-6">
      <div class="flex flex-col md:flex-row p-8 md:w-11/12 h-full shadow-2xl md:mr-6">
        <div class="w-full md:w-6/12">
          Education:
          <div v-for="(item, index) in user.education" :key="index">
            <div v-if="index < 5" class="flex mt-3 w-full">
              <div class="w-3/12 my-auto h-14 tinyHexagon">
                <img alt="profile picture" class="w-full h-full" :src="item.organizations[0].picture ? item.organizations[0].picture : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'">
              </div>
              <div class="flex ml-3 flex-col w-full">
                <p>{{ item.name }}</p>
                <p class="text-xs text-gray-300">{{ item.organizations[0].name }}</p>
                <p class="text-sm text-gray-300">{{ `${item.fromMonth} - ${item.fromYear}` }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full md:w-6/12 md:ml-12">
          Experiences:
          <div v-for="(experience, index) in user.jobs" :key="index">
            <div v-if="index < 6" class="flex mt-3 w-full">
              <div class="w-3/12 my-auto h-16 tinyHexagon">
                <img alt="profile picture" class="w-full h-full" :src="experience.organizations[0].picture ? experience.organizations[0].picture : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'">
              </div>
              <div class="flex ml-3 flex-col w-full">
                <p>{{ experience.name }}</p>
                <p class="text-xs text-gray-300">{{ experience.organizations[0].name }}</p>
                <p class="text-sm text-gray-300">{{ `${experience.fromMonth} - ${experience.fromYear}` }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import uploadModal from '@/components/uploadModal'
import watchModal from '@/components/watchModal'

export default {
  name: 'Genome',
  components: {
    uploadModal,
    watchModal
  },
  data () {
    return {
      user: {},
      username: '',
      hasVideo: false,
      upload: false,
      watch: false,
      fileName: ''
    }
  },
  computed: {
    currentUser () {
      return this.$store.state.user.username ? this.$store.state.user : false
    }
  },
  created () {
    this.username = this.$route.params.username
    this.$store.dispatch('clearTotal')
    this.$store.dispatch('hasVideo', this.username)
      .then(response => {
        this.hasVideo = response.data.hasVideo
        if (this.hasVideo) {
          this.fileName = response.data.videoUrl
        }
      })
    this.$store.dispatch('fetchGenome', this.username)
      .then(result => {
        this.user = result
      })
  },
  methods: {
    openUpload () {
      this.upload = !this.upload
    },
    openWatch () {
      this.watch = !this.watch
    }
  }
}
</script>

<style>
.tinyHexagon {
  z-index: 0;
  position: relative;
  height: 150px;
  width: 150px;
  background: black;
}
.tinyHexagon:before {
  z-index: 0;
  position: absolute;
  content: '';
}
.tinyHexagon:before {
  z-index: 0;
  top: 4px;
  left: 4px;
  height: calc(100% - 8px);
  width: calc(100% - 8px);
}
.tinyHexagon, .tinyHexagon:before{
  z-index: 0;
  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}
</style>
