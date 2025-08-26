<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session5/background-5.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session5/background-5.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Every Day</h1>
      <p> - Practise being BRAVE:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Look people in the eye and smile.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Use a brave and strong voice.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Try your best and give it a go.</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Session1_Page56%2B1.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
export default {
  name: 'Session5Page15',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear',duration: 500})
      animation
        .add({targets: ".text-box", opacity: 0.9}, 500)
        .add({targets: text[1], opacity: 1}, 4600)
        .add({targets: text[2], opacity: 1}, 8100)
        .add({targets: text[3], opacity: 1}, 12000)
        .add({targets: text[4], opacity: 1}, 16000)
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
  background-color: rgba(255,255,255,0.8);
  width: 90%;
  height: auto;
  left: 5%;
  top: 20vh;
  padding: 1.5vh;
  opacity: 0;
}
.text-box h1 {
  text-align: center;
  margin-bottom: 3vh;
  font-size: 5.6vh;
  font-weight: bold;
}
.text-box p {
  margin-bottom: 1vh;
  font-size: 4vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>