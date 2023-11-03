<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session7/background-7.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session7/background-7.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Every Day</h1>
      <p>- Practise your step plan one step at a time. It doesn’t matter how long
        you need or how &nbsp;&nbsp;&nbsp;many steps it takes. Stay on each step until you
        can do that step easily. Share your &nbsp;&nbsp;&nbsp;plan with your family or friends.</p>
      <p>- If a step seems too hard, maybe add a smaller step in between.
        Remember to give &nbsp;&nbsp;&nbsp;yourself a reward for taking each step.</p>
      <p>- Practise relaxing for at least 10 minutes. Minimise TV and computer time.</p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Relaxing-Forest-Sound-Effect.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session7/Session7_Page15.mp3" ref="voice"/>
    <div class="page-number" id="page-light">189</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session7Page17',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 1,}, 500)
        .add({targets: text[1], opacity: 1,}, 2600)
        .add({targets: text[2], opacity: 1,}, 21200)
        .add({targets: text[3], opacity: 1,}, 31600)
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
  width: 96%;
  height: auto;
  left: 2%;
  top: 20vh;
  padding: 2vh 2vh;
  opacity: 0;
}
.text-box h1 {
  text-align: center;
  margin-bottom: 1vh;
  font-size: 6vh;
  font-weight: bold;
}
.text-box p {
  margin-bottom: 1vh;
  font-size: 3.3vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>