<template>
  <div class="interactive-container">
    <img src="../../assets/images/session1/14643-resized.jpg" alt="house-1" />
    <img src="../../assets/images/session1/stockvault-carefree115845-resized.jpg" alt="cloth"/>
    <img src="../../assets/images/session1/13151-resized.jpg" alt="house-3" />
    <div class="text-box">
      <h1>Our clothes</h1>
      <p>Talk about your clothes.</p>
      <p>Ask your friends about their clothes.</p>
    </div>
    <div class="text">
      <p>Different countries may use different clothes.</p>
      <p>It is normal that we are all different!</p>
    </div>
    <audio src="../../assets/sounds/session1/36Animated_Book_Page35.mp3" ref="voice"/>
    <div class="page-number" id="page-light">35</div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Session1Page29",
  methods: {
    animateText() {
      let texts = document.getElementsByClassName("text-box")[0];
      let animation = anime.timeline({easing: 'linear', duration: 700,});
      animation
        .add({targets: texts.children[0], color: '#000'}, 771)
        .add({targets: texts.children[1], color: '#000'}, 2312)
        .add({targets: texts.children[2], color: '#000'}, 4500)
        .add({targets: '.text', opacity: 1}, 7500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  },
};
</script>

<style scoped>
.interactive-container img {
  position: absolute;
}
.interactive-container img:nth-child(1) {
  left: 0;
  bottom: 0;
  width: 49%;
  height: 70vh;
}
.interactive-container img:nth-child(2) {
  top: 0;
  right: 0;
  width: 49%;
  height: 44vh;
}
.interactive-container img:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 49%;
  height: 45vh;;
}
.text-box {
  color: #ffffff;
  padding: 0 1vh;
}
.text-box h1 {
  font-size: 6vh;
  margin-bottom: 0;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
}
.text {
  position: absolute;
  background-color: #00CE7C;
  color: #fff;
  font-size: 3vh;
  bottom: 39vh;
  width: auto;
  right: 0;
  padding: 1vh;
  font-weight: bold;
  text-align: center;
  opacity: 0;
}
.text p {margin-bottom: 0}
</style>
