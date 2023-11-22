<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session5/background-5.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session5/background-5.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Every Day</h1>
      <p>- Talk about '<span class="red">red</span>' and
        '<span class="green">green</span>' thoughts.</p>
      <p>- Do 10 minutes of relaxation every day.</p>
      <p>- Think more '<span class="green">green</span>'
        thoughts to feel confident and try new things.</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session5/Session5_Page144.mp3" ref="voice"/>
    <div class="page-number" id="page-light">157</div>
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
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
      })
      animation
        .add({targets: ".text-box", opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 3100)
        .add({targets: text[2], opacity: 1}, 7000)
        .add({targets: text[3], opacity: 1}, 12000)
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
.text-box p:last-child {margin-bottom: 0;}
.red {color: red;}
.green {color: #00CE7C;}
</style>