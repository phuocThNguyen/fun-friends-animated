<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/4161-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/4161-resized.jpg"
      class="session-background" id="pic"
    />
    <div class="left-bar">
      <h1>Meet Tom</h1>
      <p id="para-2">Today is Tom’s birthday.</p>
      <p id="para-3">He is adopting two rescue dogs,</p>
      <p id="para-4">Chilli and Pepper.</p>
      <p id="para-5">Tom wants to give Chilli and Pepper a loving home forever.</p>
      <p id="para-6">Would you like to adopt a rescue animal for
        your birthday?</p>
    </div>
    <audio
      ref="audio" autoplay
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/dog.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/10Animated_Book_Page9.mp3"
      ref="voice"/>
    <div class="page-number" id="page-light">9</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
export default {
  name: "Session1Page3",
  components: {ImageComponent},
  methods: {
    animateText() {
      let para = document.getElementsByClassName('left-bar')[0].children;
      let initAnimation = anime.timeline({duration: 300, easing: 'linear'});
      initAnimation
        .add({
          targets: ".left-bar",
          opacity: 1,
          delay: 500,
          duration: 500,
        })
        .add({
          targets: para[0],
          opacity: 1,
          duration: 500,
        }, 1500)
        .add({
          targets: para[1],
          opacity: 1,
        }, 3500)
        .add({
          targets: para[2],
          opacity: 1,
        }, 7149)
        .add({
          targets: para[3],
          opacity: 1,
        }, 10835)
        .add({
          targets: para[4],
          opacity: 1,
        }, 13545)
        .add({
          targets: para[5],
          opacity: 1,
        }, 18156)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1500)
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
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 60%;
  height: 100%;
  background-color: rgba(255,255,255,0.85);
  z-index: 10;
  opacity: 0;
  padding: 1vh;
}
.left-bar p,
.left-bar h1 {
  opacity: 0;
}
.left-bar p {
  font-size: 5.5vh;
  margin-bottom: 0;
}
.left-bar h1 {
  font-size: 8vh;
  margin: 0;
}
</style>