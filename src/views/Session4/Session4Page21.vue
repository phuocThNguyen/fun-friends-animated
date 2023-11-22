<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/1143-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/1143-resized.jpg"
      class="session-background"
    />
    <div class="text-box">The water feels cool and
     fresh on our skin.</div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page21.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">137</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session4Page21',
  components: {ImageComponent},
  methods: {
    animateText() {
      anime({
        targets: '.text-box',
        opacity: 1,
        duration: 500,
        delay: 500,
        easing: 'linear'
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
.text-box {
  position: absolute;
  bottom: 6vh;
  width: 70%;
  left: 15%;
  padding: 1.4vh;
  color: #ffffff;
  background-color: #00ce7c;
  text-align: center;
  font-size: 4vh;
  font-weight: bold;
  opacity: 0;
}
</style>