<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/282-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/282-resized.jpg"
      class="session-background"
    />
    <div class="left-bar">
      <p id="para-1">Zac and Poppy the dog,
        <br>love playing ball in the park.</p>
      <p id="para-2">What games do you like
        <br>playing in the park?</p>
      <div class="text-box">
        <p id="para-3">It is fun playing with
          our animal friends.</p>
      </div>
    </div>
    <audio
      ref="audio" autoplay
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/dog.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/11Animated_Book_Page10.mp3"
      ref="voice"/>
    <div class="page-number" id="page-light">10</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session1Page4",
  components: {ImageComponent},
  methods: {
    animateText() {
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear',
      });
      animation
        .add({
          targets: ".left-bar",
          opacity: 1,
          delay: 500,
        })
        .add({
          targets: '#para-1',
          opacity: 1,
        }, 1500)
        .add({
          targets: '#para-2',
          opacity: 1,
        }, 7020)
        .add({
          targets: ".text-box",
          opacity: 1,
        }, 10253);
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
@media screen and (max-width: 930px) {
  .left-bar {
    width: 30% !important;
  }
}
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(255,255,255,0.85);
  z-index: 10;
  opacity: 0;
  padding: 0 0 0 1vh;
}
.left-bar p {
  width: 100%;
  opacity: 0;
  font-size: 5vh;
}
#para-3 {opacity: 1 !important}
.text-box {
  height: auto;
  width: 90%;
  padding: 1vh;
  background-color: #00ce7c;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 15vh;
  left: 5%;
  opacity: 0;

}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  margin-bottom: 0;
  font-size: 5vh;
  text-align: center;
}
</style>