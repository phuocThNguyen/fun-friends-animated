<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session2/46933-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session2/46933-resized.jpg"
      class="session-background"
    />
    <div class="text-box">We are kind when we pay attention to the teacher.</div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session2/Session2_Page16.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">77</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session2Page16",
  components: {ImageComponent},
  methods: {
    animateText() {
      anime({
        targets: ".text-box",
        delay: 500,
        duration: 500,
        opacity: 1,
        easing: 'linear'
      })
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
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh;
  text-align: center;
  bottom: 5vh;
  width: calc(0.8*133vh);
  left: calc(0.1*133vh);
  font-size: 4.5vh;
  font-weight: bold;
  opacity: 0;
}
</style>