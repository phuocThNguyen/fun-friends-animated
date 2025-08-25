<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/grass-background.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/grass-background.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Every Day</h1>
      <p>- Talk about happy things that happened in your day.</p>
      <p>- Ask your family about happy things that happened to them today.</p>
      <p>- Talk about kind things that you did today.</p>
      <p>- Ask your family about kind things they did today.</p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/530415__klankbeeld__forest-summer-roond-020-200619-0186.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Session1_Page56.mp3" ref="voice"/>
    <div class="page-number" id="page-light">56</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from 'animejs'
export default {
  name: "Session1Page37",
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: ".text-box", opacity: 0.9}, 500)
        .add({targets: text[1], opacity: 1}, 3500)
        .add({targets: text[2], opacity: 1}, 8500)
        .add({targets: text[3], opacity: 1}, 18200)
        .add({targets: text[4], opacity: 1}, 23700)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
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
    this.setAudioVolumeLevel(0.4);
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 90%;
  left: 5%;
  top: 15vh;
  background-color: #ffffff;
  opacity: 1;
  padding: 2vh 3vh;
}
.text-box h1 {
  text-align: center;
  font-weight: bold;
  margin-bottom: 1vh;
  font-size: 6vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 2vh;
  opacity: 1;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>