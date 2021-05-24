<template>
  <router-view/>
</template>
<style>
.fadeTop-enter,
.fadeTop-leave {
  opacity: 0;
  transform: translateY(-2em);
}
.fadeTop-enter-active,
.fadeTop-leave-active {
  transition: all 0.5s ease;
}
.fadeLeft-enter,
.fadeLeft-leave {
  opacity: 0;
  transform: translateX(-2em);
}
.fadeLeft-enter-active,
.fadeLeft-leave-active {
  transition: all 0.5s ease;
}
.fadeRight-enter,
.fadeRight-leave {
  opacity: 0;
  transform: translateX(2em);
}
.fadeRight-enter-active,
.fadeRight-leave-active {
  transition: all 0.5s ease;
}
.fadeBot-enter,
.fadeBot-leave {
  opacity: 0;
  transform: translateY(2em);
}
.fadeBot-enter-active,
.fadeBot-leave-active {
  transition: all 0.5s ease;
}
</style>
