<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/18722-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/18722-resized.jpg"
      class="session-background" id="page-11"
    />
    <div class="left-bar">
      <h1>Our families</h1>
      <p id="para-1">Tell us about your family.</p>
      <p id="para-2">What fun activities do you like to do together?</p>
      <div class="text-box">
        <p>We love going to the park.</p>
      </div>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Session1_Page22.mp3" ref="voice"/>
    <div class="page-number" id="page-light">22</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session1Page12",
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.left-bar').children;
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear'
      });
      animation
        .add({targets: ".left-bar", opacity: 1,}, 500)
        .add({targets: text[1], opacity: 1}, 2500)
        .add({targets: text[2], opacity: 1,}, 5000)
        .add({targets: ".text-box", opacity: 1,}, 9000)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1000)
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
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(255,255,255,0.9);
  z-index: 10;
  opacity: 0;
  padding: 3vh 2vh;
}
.left-bar h1 {
  font-size: 7vh;
  margin-bottom: 3vh;
  opacity: 1;
}
.left-bar p {
  opacity: 0;
  font-size: 5vh;
}
.text-box {
  height: auto;
  width: 98%;
  padding: 1.5vh;
  background-color: #00ce7c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15vh;
  left: 1%;
  opacity: 0;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0;
  text-align: center;
  opacity: 1 !important;
}
</style>