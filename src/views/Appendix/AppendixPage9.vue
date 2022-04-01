<template>
  <div class="interactive-container" id="alt-bg">
    <h1 class="title">VI HYGGER OS OG HAR DET SJOVT ALLESAMMEN!</h1>
    <img src="../../assets/images/appendix/0000a8cd_medium.png" alt="dog-and-lamb" class="images">
    <img src="../../assets/images/appendix/Beach_Children.png" alt="beach&children" class="images">
    <img src="../../assets/images/appendix/Gingernut_ranger_perching_on_the_chicken_swing_in_garden.png" alt="chicken" class="images">
    <img src="../../assets/images/appendix/78621.png" alt="children" class="images">
    <img src="../../assets/images/appendix/Playing_Lambs_01.png" alt="lamb" class="images">
    <img src="../../assets/images/appendix/70160.png" alt="drawing" class="images">
    <audio src="../../assets/sounds/appendix/Session13_Appendix_Page8.mp3" ref="voice"/>
  </div>
</template>

<script>
export default {
  name: 'AppendixPage9',
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.playVoiceOver()
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  width: 100%;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 5.6vh;
  font-weight: bold;
}
#alt-bg {
  background-color: #00CE7C;
}
.images {
  position: absolute;
  width: 40vh;
  height: 40vh;
}
img:nth-of-type(1) { top: 7.5vh;left: 2%; }
img:nth-of-type(2) { top: 7.5vh;left: 35%; }
img:nth-of-type(3) { top: 7.5vh;right: 2%; }
img:nth-of-type(4) { top: 50vh;left: 2%; }
img:nth-of-type(5) { top: 50vh;left: 35%; }
img:nth-of-type(6) { top: 50vh;right: 2%; }
</style>