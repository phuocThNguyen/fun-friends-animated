<template>
  <div class="interactive-container">
    <img src="../../assets/images/session1/1274-resized.jpg" alt="house-1" />
    <img src="../../assets/images/session1/304-resized.jpg" alt="house-2" />
    <img src="../../assets/images/session1/440-resized.jpg" alt="house-3" />
    <div class="text-box">
      <h1>Vores mad</h1>
      <p>Fortæl om hvad du spiser.</p>
      <p>Spørg dine venner om det de spiser.</p>
    </div>
    <audio src="../../assets/sounds/session1/Page32.mp3" ref="voice"/>
    <div class="page-number" id="page-light">32</div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Session1Page26",
  methods: {
    animateText() {
      let texts = document.getElementsByClassName("text-box")[0];
      let animation = anime.timeline({easing: 'linear', duration: 500});
      animation
        .add({targets: texts.children[0], color: '#000'}, 500)
        .add({targets: texts.children[1], color: '#000'}, 2300)
        .add({targets: texts.children[2], color: '#000'}, 4500)
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
}
.text-box h1 {
  font-size: 6vh;
  margin-bottom: 0;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
}
</style>
