<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session11/rock_climbing_nature.jpg" alt="climbing-tree" class="images">
      <p class="text" id="para-1">Mor hjælper Mathilde <br>med at klatre på klipper.</p>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session11/hugging_dog_child.jpg" alt="swinging" class="images">
      <p class="text" id="para-2">Ella giver <br>Otto et knus.</p>
    </div>
    <audio src="../../assets/sounds/session11/Session11_Page7.mp3" ref="voice"/>
    <div class="page-number" id="page-light">210</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page7',
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text');
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: text[0], opacity: 1}, 1)
        .add({targets: text[1], opacity: 1}, 1)
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
  width: 60%;
  bottom: 9vh;
  text-align: center;
  position: absolute;
  padding: .5vh;
  opacity: 0;
}
#para-1 {left: 27%}
#para-2 {right: 27%}
</style>
