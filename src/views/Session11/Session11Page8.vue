<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session7/background-7.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session7/background-7.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Every Day</h1>
      <p>- Draw or take a picture of your family's support
        team. &nbsp;&nbsp;&nbsp;Alternatively, share a story about how your family
        gets support.</p>
      <p>- Carry on with your <strong>STEP PLAN</strong>.</p>
      <p>- Practise '<span id="green">green</span>' thoughts.</p>
      <p>- Relax.</p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Relaxing-Forest-Sound-Effect.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session11/Session11_Page8.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session11Page8',
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
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: ".text-box",opacity: 1}, 500)
        .add({targets: text[1],opacity: 1}, 2900)
        .add({targets: text[2],opacity: 1}, 14600)
        .add({targets: text[3],opacity: 1}, 16900)
        .add({targets: text[4],opacity: 1}, 18900)
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
    this.setAudioVolumeLevel(0.6);
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  background-color: rgba(255,255,255,0.8);
  width: 92%;
  height: auto;
  left: 4%;
  top: 20vh;
  padding: 2vh;
  opacity: 0;
}
.text-box h1 {
  text-align: center;
  margin-bottom: 1vh;
  font-size: 6vh;
  font-weight: bold;
}
.text-box p {
  margin-bottom: 0;
  font-size: 4.3vh;
  opacity: 0;
}
#green {color: #00CE7C;}
</style>