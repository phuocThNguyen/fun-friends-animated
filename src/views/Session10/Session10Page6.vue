<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session10/1034.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session10/1034.jpg"
      class="session-background"
    />
    <div class="text-box">Annie learns from <br>someone she looks up to.</div>
    <div class="text-box-green">My mum helps me learn to swim.</div>
    <audio autoplay src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/ambient/pool-swimming.mp3" ref="audio"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/Session10_Page6.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session10Page6',
  components: {ImageComponent},
  methods: {
    animateText() {
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: '.text-box',opacity: 1}, 800)
        .add({targets: '.text-box-green',opacity: 1}, 4500);
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {
    this.$refs.audio.volume = 0.2;
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 3vh;
  left: 3%;
  background-color: rgba(255,255,255,0.9);
  font-weight: bold;
  font-size: 4vh;
  padding: 2vh;
  opacity: 0;
}
.text-box-green {
  position: absolute;
  bottom: 6vh;
  left: 10%;
  padding: 1vh 2.8vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  opacity: 0;
}
</style>
