<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session10/72896.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session10/72896.jpg"
      class="page-image"
    />
    <div class="text-box">Karmie and Charlie learn <br>to cook with their parents.</div>
    <div class="text-box-green">We look up to our parents to learn new things.</div>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/Session10_Page3.mp3" ref="voice"/>
<!--    <div class="page-number" id="page-light">234</div>-->
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session10Page3',
  components: {ImageComponent},
  methods: {
    animateText() {
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box', opacity: 1}, 700)
        .add({targets: '.text-box-green', opacity: 1}, 4600)
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
.page-image {position: absolute;width: 106%}
.text-box {
  position: absolute;
  top: 1vh;
  left: 1%;
  background-color: rgba(255,255,255,0.95);
  font-weight: bold;
  font-size: 3.5vh;
  padding: 2vh;
  opacity: 0;
}
.text-box-green {
  position: absolute;
  bottom: 2vh;
  left: 22vh;
  width: 89vh;
  padding: 1vh 2.4vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  opacity: 0;
}
</style>
