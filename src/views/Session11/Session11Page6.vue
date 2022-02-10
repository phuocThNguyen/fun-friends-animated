<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session11/Climbing_Tree_Help.jpg" alt="climbing-tree" class="images">
      <p class="text" id="para-1">Mum helping <br>Daniel climb a tree.</p>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session11/Swinging_Children.jpg" alt="swinging" class="images">
      <p class="text" id="para-2">Zoe and Daniel <br>helping Matilda swing.</p>
    </div>
    <audio src="../../assets/sounds/session11/Session11_Page6.mp3" ref="voice"/>
    <div class="page-number" id="page-light">209</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page6',
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text');
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: text[0], opacity: 1}, 600)
        .add({targets: text[1], opacity: 1}, 4200)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
#right {
  right: 0;
}
.image-container {
  position: absolute;
  height: 100vh;
  width: 49%;
}
.images {
  width: 100%;
  height: 100%;
}
.image-container p {
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 3vh;
  font-weight: bold;
  width: 54%;
  bottom: 9vh;
  text-align: center;
  position: absolute;
  padding: 1vh;
  opacity: 0;
}
#para-1 {left: 18%}
#para-2 {right: 18%}
</style>
