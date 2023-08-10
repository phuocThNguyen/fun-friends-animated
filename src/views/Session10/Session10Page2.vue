<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session9/background-9.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session9/background-9.jpg"
      class="session-background"
    />
    <div class="text-box">
      <span>Someone you look up to will help you, care for you
      and encourage you to try new things.</span>
      <span> They give things a go.</span><span> How are Tom and
      Annie being helped in the following pictures?</span>
      <span> How has somebody helped you?</span>
    </div>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/Session10_Page2.mp3" ref="voice"/>
    <div class="page-number" id="page-light">232</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session10Page2',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: '.text-box',opacity: 0.9}, 500)
        .add({targets: text[0], color: '#000'}, 1100)
        .add({targets: text[1], color: '#000'}, 8800)
        .add({targets: text[2], color: '#000'}, 11300)
        .add({targets: text[3], color: '#000'}, 16200)
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
.text-box {
  position: absolute;
  background-color: rgba(255,255,255,1);
  width: 80%;
  font-size: 5vh;
  font-weight: bold;
  padding: 3vh;
  top: 20vh;
  left: 10%;
  opacity: 0;
}
.text-box span {color: #ffffff}
</style>
