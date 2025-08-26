<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/background-4.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/background-4.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Every Day</h1>
      <p>- Pay attention to your feelings.</p>
      <p>- Pay attention to other people's feelings.</p>
      <p>- Take slow breaths.</p>
      <p>- Have quiet time.</p>
      <p>- Go to a calm place.</p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/night-time.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page22.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session4Page22',
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
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: ".text-box", opacity: 1,}, 651)
        .add({targets: text[1], opacity: 1,}, 2573)
        .add({targets: text[2], opacity: 1,}, 7215)
        .add({targets: text[3], opacity: 1,}, 11267)
        .add({targets: text[4], opacity: 1}, 19815)
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
  font-size: 4.5vh;
  opacity: 1 !important;
  margin-bottom: 0;
}
</style>