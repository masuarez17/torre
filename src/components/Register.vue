<template>
  <div class="flex flex-row shadow-lg auto-cols-max p-16 space-y-6 w-full md:w-6/12 mb-20">
    <div class="hidden md:block w-6/12 my-auto">
      <img class="justify-self-center" alt="logo" src="../assets/logo.png">
    </div>
    <div class="flex my-auto flex-col w-full md:w-6/12 space-y-4">
      <div class="text-white text-2xl">Register</div>
      <input class="w-full border-2 border-gray-300 bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
             placeholder="Username">
      <input class="w-full border-2 border-gray-300 bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
             type="password" placeholder="Password">
      <input class="w-full border-2 border-gray-300 bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
             type="password" placeholder="Repeat password">
      <input class="w-full border-2 border-gray-300 bg-black h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
             placeholder="Email">
      <span class="text-white">Accept the terms and conditions</span>
      <div class="flex flex-row flex-row">
        <button class="w-3/12 p-2 rounded bg-torreGreen focus:outline-none">
          Back
        </button>
        <div class="w-6/12"></div>
        <button class="w-3/12 p-2 rounded bg-torreGreen focus:outline-none">
          Register
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register'
}
</script>

<style scoped>

</style>
