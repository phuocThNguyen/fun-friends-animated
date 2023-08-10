<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session9/background-9.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session9/background-9.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Everyday</h1>
      <p>- Keep practising your <strong>STEP PLAN</strong> with your family and friends.</p>
      <p>- Practise being BRAVE:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Look people in the eye and smile.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Use a brave and strong voice.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Try your best and give it a go.</p>
    </div>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session9/Session9_Page12.mp3" ref="voice"/>
    <div class="page-number" id="page-light">227</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session9Page12',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 1}, 700)
        .add({targets: text[1], opacity: 1}, 2800)
        .add({targets: text[2], opacity: 1}, 7800)
        .add({targets: text[3], opacity: 1}, 10200)
        .add({targets: text[4], opacity: 1}, 13200)
        .add({targets: text[5], opacity: 1}, 18300)
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
  background-color: rgba(255,255,255,0.9);
  width: 80%;
  height: auto;
  left: 10%;
  top: 12vh;
  padding: 2vh;
  opacity: 0;
}
.text-box h1 {
  text-align: center;
  margin-bottom: 2vh;
  font-size: 5vh;
  font-weight: bold;
}
.text-box p {
  margin-bottom: 1vh;
  font-size: 4.5vh;
  opacity: 0;
}
</style>