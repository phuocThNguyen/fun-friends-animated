<template>
  <div class="interactive-container">
    <img src="../../assets/images/session1/14643-resized.jpg" alt="house-1" />
    <img src="../../assets/images/session1/stockvault-carefree115845-resized.jpg" alt="cloth"/>
    <img src="../../assets/images/session1/13151-resized.jpg" alt="house-3" />
    <div class="text-box">
      <h1>Vores tøj</h1>
      <p>Fortæl om det tøj du har på.</p>
      <p>Spørg dine venner om det tøj de går med og hvad de kan li’ at have på.</p>
    </div>
    <div class="text">
      <p>Forskellige lande kan bruge forskelligt tøj.</p>
      <p>Det er normalt, at vi alle er forskellige!</p>
    </div>
    <audio src="../../assets/sounds/session1/Page35.mp3" ref="voice"/>
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
      let animation = anime.timeline({easing: 'linear', duration: 700});
      animation
        .add({targets: texts.children[0], color: '#000'}, 500)
        .add({targets: texts.children[1], color: '#000'}, 2200)
        .add({targets: texts.children[2], color: '#000'}, 5400)
        .add({targets: '.text', opacity: 1}, 10400)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
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
  width: 65vh;
}
.text-box h1 {
  font-size: 4vh;
  margin-bottom: 2vh;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 0;
}
.text {
  position: absolute;
  background-color: #00CE7C;
  color: #fff;
  font-size: 3vh;
  bottom: 40.5vh;
  width: auto;
  right: 2.5vh;
  padding: 1vh;
  font-weight: bold;
  text-align: center;
  opacity: 0;
}
.text p {margin-bottom: 0}
</style>
