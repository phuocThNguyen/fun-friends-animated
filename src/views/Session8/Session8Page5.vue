<template>
  <div class="interactive-container">
    <div class="text-box">
      Share ideas for fun games you can play at the beach.
    </div>
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/135443-OSAV8P-846.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/135443-OSAV8P-846.jpg"
      class="images"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/135428-OSAV5N-454.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/135428-OSAV5N-454.jpg"
      class="images"
    />
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page5.mp3" ref="voice"/>
    <div class="page-number" id="page-light">198</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session8Page5',
  components: {ImageComponent},
  methods: {
    animateText() {
      anime({
        targets: '.text-box',
        opacity: 1,
        easing: 'linear',
        duration: 500,
        delay: 500
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
  width: 48%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 2vh;
  right: 1%;
  top: 1vh;
  font-size: 4.8vh;
  font-weight: bold;
  z-index: 10;
  text-align: center;
  opacity: 0;
}
.images {
  position: absolute;
  height: 100vh;
  width: 50%;
}
.images:nth-child(2) {
  right: 0;
}
</style>