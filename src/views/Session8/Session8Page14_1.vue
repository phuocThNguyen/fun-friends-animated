<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/background-8.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/background-8.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Every Day</h1>
      <p>- Try to be BRAVE:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Look people in the eye and smile.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Try new things.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Try your best and give it a go.</p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Relaxing-Forest-Sound-Effect.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page14%2B1.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session8Page14',
  components: {ImageComponent},
  props: {
    startPage: Number,
    pageNum: Number,
  },
  created (){
    this.setPageNumber()
  },
  methods: {
    setPageNumber() {
      this.page = this.pageNum + this.startPage - 1;
    },
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({easing: 'linear', duration: 300})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 4300)
        .add({targets: text[2], opacity: 1}, 7800)
        .add({targets: text[3], opacity: 1}, 11700)
        .add({targets: text[4], opacity: 1}, 15800)
        .add({targets: text[5], opacity: 1}, 18500)
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
.text-box p:last-child {
  margin-bottom: 0;
}
</style>