<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/background-3.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/background-3.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Every Day</h1>
      <p>- Practise changing
        '<span class="red">red</span>' thoughts to
        '<span class="green">green</span>' thoughts.</p>
      <p>- Practise relaxing every day for at least 10 minutes.
        No &nbsp;&nbsp;&nbsp;distractions such as TV!</p>
    </div>
    <audio autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Birds-In-Sun-And-Snow-Sound-Effect.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session6/Session6_Page9.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
export default {
  name: 'Session6Page9',
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
      let animation = anime.timeline({easing: 'linear', duration: 500,})
      animation
        .add({targets: ".text-box", opacity: 1,}, 500)
        .add({targets: text[1], opacity: 1,}, 2571)
        .add({targets: text[2], opacity: 1,}, 10000)
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
  width: 80%;
  height: auto;
  left: 10%;
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
  margin-bottom: 1.5vh;
  font-size: 4vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
.red {color: #ff0000;}
.green {color: #00ce7c;}
</style>