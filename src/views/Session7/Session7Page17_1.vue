<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session7/background-7.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session7/background-7.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Everyday</h1>
      <p>- Keep practising being BRAVE:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Look people in the eye and smile.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Use a brave and strong voice.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Try your best and give it a go.</p>
      <p>- When you are being brave and moving up to a hard step,
        try ‘bubble’ breathing and &nbsp;&nbsp;&nbsp;&nbsp;thinking ‘<span id="green">green</span>’
        thoughts.</p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Relaxing-Forest-Sound-Effect.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session7/Session7_Page15%2B1.mp3" ref="voice"/>
    <div class="page-number" id="page-light">190</div>
  </div>
</template>

<script>
import anime from "animejs";
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";

export default {
  name: 'Session7Page17',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 1}, 500)
        .add({targets: text[1], opacity: 1}, 2700)
        .add({targets: text[2], opacity: 1}, 4700)
        .add({targets: text[3], opacity: 1}, 8600)
        .add({targets: text[4], opacity: 1}, 12700)
        .add({targets: text[5], opacity: 1}, 15600)
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
#green {color: #00CE7C;}
</style>