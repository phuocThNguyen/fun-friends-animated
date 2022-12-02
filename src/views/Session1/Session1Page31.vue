<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session1/30164-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/13202-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/172-resized.jpg" alt="house" />
      <img src="../../assets/images/session1/1217-resized.jpg" alt="house" />
    </div>
    <div class="text-box">
      <p class="text">
        <span>It is okay that our clothes are different!</span>
      </p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/38Animated_Book_Page37.mp3" ref="voice"/>
    <div class="page-number" id="page-light">37</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page31",
  methods: {
    animateText() {
      anime({
        targets: ".text-box",
        opacity: 1,
        delay: 500,
        duration: 500,
        easing: 'linear',
      })
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {},
};
</script>

<style scoped>
.images {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns: auto auto;
}
.images img {
  width: 62vh;
  height: 43vh;
  opacity: 1;
  align-self: center;
  justify-self: center;
}
.text-box {
  position: absolute;
  left: 7%;
  top: 36vh;
  z-index: 20;
  background-color: #00CE7C;
  width: auto;
  height: auto;
  padding: 2vh 4.6vh;
  opacity: 0;
}
.text {
  font-weight: bold;
  color: #ffffff;
  font-size: 6vh;
  margin-bottom: 0;
}
</style>
