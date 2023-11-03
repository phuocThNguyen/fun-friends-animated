<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/background-8.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/background-8.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Every Day</h1>
      <p>- Practise the steps on your <strong>STEP PLAN</strong>.
        If you've done all the steps, make &nbsp;&nbsp;&nbsp;a new <strong>STEP PLAN</strong>.</p>
      <p>- Notice when others are listening, helping and smiling
        and let them know &nbsp;&nbsp;&nbsp;you like it.</p>
      <p>- Practise turning '<span class="red">red</span>' thoughts
        into '<span class="green">green</span>' thoughts.</p>
      <p>- Play with friends and spend time outside.</p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Relaxing-Forest-Sound-Effect.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page14.mp3" ref="voice"/>
    <div class="page-number" id="page-light">210</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session8Page14',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({easing: 'linear', duration: 300})
      animation
        .add({targets: '.text-box', opacity: 1}, 700)
        .add({targets: text[1], opacity: 1}, 3000)
        .add({targets: text[2], opacity: 1}, 10300)
        .add({targets: text[3], opacity: 1}, 17600)
        .add({targets: text[4], opacity: 1}, 21500)
        .add({targets: text[5], opacity: 1}, 24700)
        .add({targets: text[6], opacity: 1}, 28600)
        .add({targets: text[7], opacity: 1}, 30900)
        .add({targets: text[8], opacity: 1}, 34200)
        .add({targets: text[9], opacity: 1}, 38300)
        .add({targets: text[10], opacity: 1}, 41600)
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
  padding: 2vh;
  opacity: 0;
}
.text-box h1 {
  text-align: center;
  margin-bottom: 2vh;
  font-size: 6vh;
  font-weight: bold;
}
.text-box p {
  margin-bottom: 1vh;
  font-size: 3.6vh;
  opacity: 0;
}
.text-box p:nth-of-type(7),
.text-box p:nth-of-type(8),
.text-box p:nth-of-type(9),
.text-box p:nth-of-type(10) {
  padding-left: 7vh;
}
.text-box p:last-child {
  margin-bottom: 0;
}
.red {color: #ff0000;}
.green {color: #00CE7C;}
</style>