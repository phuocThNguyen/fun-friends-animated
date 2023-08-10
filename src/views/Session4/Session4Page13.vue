<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/41068-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/41068-resized.jpg"
      class="session-background"
    />
    <div class="title">
      <p>Practise exploring with your five senses, everywhere you go.</p>
    </div>
    <div class="text-box">
      <h1>1. Hearing</h1>
      <p>We listen with our ears. What can we hear?</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page13.mp3" ref="voice"/>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/beach-sound.mp3"/>
    <div class="page-number" id="page-light">124</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session4Page13',
  components: {ImageComponent},
  methods: {
    animateText() {
      anime({
        targets: '.text-box',
        opacity: 1,
        duration: 500,
        delay: 6165,
        easing: 'linear',
      });
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
p {margin-bottom: 0;}
.title {
  position: absolute;
  top: 0;
  left: 0;
  padding: 1vh;
  font-size: 5vh
}
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 2vh;
  bottom: 6vh;
  right: 10%;
  opacity: 0;
  margin-bottom: 0;
}
.text-box h1 {font-size: 5vh;margin-bottom: 0;}
.text-box p {font-size: 4vh;margin-bottom: 0;}
</style>