<template>
  <div class="interactive-container">
    <img src="../../assets/images/session1/14643-resized.jpg" alt="house-1" />
    <img
      src="../../assets/images/session1/stockvault-carefree115845-resized.jpg"
      alt="house-2"
    />
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
  mounted() {
    let texts = document.getElementsByClassName("text-box")[0];
    let animation = anime.timeline();
    animation
      .add({
        targets: texts.children[0],
        color: "#000",
        delay: 1000,
        duration: 500,
      })
      .add({
        targets: texts.children[1],
        color: "#000",
        delay: 1000,
        duration: 500,
      })
      .add({
        targets: texts.children[2],
        color: "#000",
        delay: 1000,
        duration: 500,
      });
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
  width: 50vw;
  height: 70vh;
}
.interactive-container img:nth-child(2) {
  top: 0;
  right: 0;
  width: 48vw;
  height: 44vh;
}
.interactive-container img:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 48vw;
  height: 45vh;;
}
.text-box {
  color: #ffffff;
  padding: 2vw;
}
.text-box h1 {
  font-size: 3.5vw;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 1.8vw;
  margin-bottom: 1vh;
}
</style>
