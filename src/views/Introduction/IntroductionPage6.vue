<template>
  <div class="interactive-container" id="alt-bg">
    <h1 class="title">"Jeg tilegner denne bog til alle børn og deres dyrevenner"</h1>
    <img src="../../assets/images/introduction/Koala_Child_Hugging.jpg" alt="koala" class="images">
    <img src="../../assets/images/introduction/chicken-boy.jpg" alt="chicken-boy" class="images">
    <img src="../../assets/images/introduction/girl-with-cat.jpg" alt="girl-cat" class="images">
    <img src="../../assets/images/introduction/Dog_hug_child.jpg" alt="dog" class="images">
    <img src="../../assets/images/introduction/child-1019147-740x493.jpg" alt="lamb" class="images">
    <img src="../../assets/images/introduction/elephant_kid.jpg" alt="ele" class="images">
    <audio src="../../assets/sounds/introduction/Page5.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">5</div>
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage6',
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    }
  },
  mounted() {
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  top: 2%;
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 3.7vh;
}
#alt-bg {
  background-color: #00CE7C;
}
.images {
  position: absolute;
  width: 37vh;
  height: 37vh;
}
img:nth-of-type(1) { top: 9.5%;left: 5%; }
img:nth-of-type(2) { top: 9.5%;left: 36%; }
img:nth-of-type(3) { top: 9.5%;right: 5%; }
img:nth-of-type(4) { top: 52%;left: 5%; }
img:nth-of-type(5) { top: 52%;left: 36%; }
img:nth-of-type(6) { top: 52%;right: 5%; }
</style>