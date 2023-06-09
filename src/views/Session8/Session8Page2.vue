<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/32050.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/32050.jpg"
      class="session-background"
    />
    <div class="text-box">
      <p>Find a friend in your class and show them or tell them
      what they do that you find kind.</p>
      <p>Maybe smiling, sharing, helping, listening or laughing?</p>
    </div>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page2.mp3" ref="voice"/>
    <div class="page-number" id="page-light">181</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session8Page2',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear'
      })
      animation
        .add({targets: '.text-box',opacity: 1}, 200)
        .add({targets: text[0],opacity: 1}, 600)
        .add({targets: text[1],opacity: 1}, 7500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {}
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 35vh;
  left: 5%;
  width: 90%;
  padding: 2vh;
  font-size: 5vh;
  background-color: rgba(255,255,255,0.95);
  opacity: 0;
}
.text-box p {
  margin-bottom: 0;
  opacity: 0
}
</style>