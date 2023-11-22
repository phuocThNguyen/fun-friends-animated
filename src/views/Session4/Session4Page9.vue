<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/25203-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/25203-resized.jpg"
      class="session-background"
    />
    <div class="text-box">
      Water makes us feel calm.
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/ambient/water-fountain.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page9.mp3" ref="voice"/>
    <div class="page-number" id="page-light">121</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session4Page9",
  components: {ImageComponent},
  methods: {
    animateText() {
      anime({
        targets: '.text-box',
        delay: 500,
        duration: 500,
        easing: 'linear',
        opacity: 1
      });
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {
    this.setAudioVolumeLevel(0.2);
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 5vh;
  right: 5%;
  width: 45%;
  font-size: 4.5vh;
  font-weight: bold;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.4vh;
  text-align: center;
  opacity: 0;
}
</style>