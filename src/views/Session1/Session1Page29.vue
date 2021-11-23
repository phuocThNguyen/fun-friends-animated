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
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Session1Page29",
  methods: {
    animateText() {
      let texts = document.getElementsByClassName("text-box")[0];
      let animation = anime.timeline({
        easing: 'linear',
        duration: 700,
        delay: 500,
      });
      animation
        .add({
          targets: texts.children[0],
          color: '#000',
        })
        .add({
          targets: texts.children[1],
          color: '#000',
        })
        .add({
          targets: texts.children[2],
          color: '#000',
        })
    }
  },
  mounted() {
    this.animateText();
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
  width: 50%;
  height: 70vh;
}
.interactive-container img:nth-child(2) {
  top: 0;
  right: 0;
  width: 48%;
  height: 44vh;
}
.interactive-container img:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 48%;
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
