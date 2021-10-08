<template>
  <div class="interactive-container" id="alt-bg">
    <p class="text">Write or draw other rewards in the space below.</p>
  </div>
</template>

<script>
export default {
  name: 'Session9Page11'
}
</script>

<style scoped>
.text {
  position: absolute;
  top: 3vh;
  left: 25vw;
  padding: 1vh 2vw;
  font-size: 2vw;
  font-weight: bold;
  background-color: #000000;
  color: #ffffff;
}
#alt-bg {
  background: rgb(22,94,176);
  background: linear-gradient(rgba(22,94,176,1) 0%, rgba(151,237,255,1) 100%);
}
</style>