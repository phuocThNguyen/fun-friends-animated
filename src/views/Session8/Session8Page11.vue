<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/67.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/67.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Being kind friends</h1>
      <p class="text"><span>The creek is happy when it rains. The birds
        sing, the creek water moves fast, and the trees are shining green. </span>
        <span>Zoe, Zara, Ziggy and Zac help each other cross the creek.</span>
      </p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Water-Stream-Sound-Effect-Amplified.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page11.mp3" ref="voice"/>
    <div class="page-number" id="page-light">206</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session8Page11',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box', opacity: 0.9}, 1)
        .add({targets: text[0], color: '#000'}, 5100)
        .add({targets: text[1], color: '#000'}, 16700)
        .add({targets: text[2], color: '#000'}, 27500)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
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
  width: 80%;
  left: 10%;
  top: 15vh;
  padding: 3.5vh;
  background-color: #ffffff;
  opacity: 1;
}
.text-box h1 {
  text-align: center;
  font-size: 5vh;
  font-weight: bold;
  margin-bottom: 2vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
  color: black;
}
</style>