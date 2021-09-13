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
        <span>
          Different is fun!
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page31",
  mounted() {
    let texts = document.getElementsByClassName("text")[0];
    let animation = anime.timeline();
    animation
      .add({
        targets: ".text-box",
        opacity: 0.98,
        duration: 1000,
        delay: 1000,
        easing: "linear",
      })
      .add({
        targets: texts.children[0],
        color: "#fff",
        duration: 1000,
        delay: 500,
      });
  },
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
  width: 49vw;
  height: 43vh;
  opacity: 1;
  align-self: center;
  justify-self: center;
}
.text-box {
  position: absolute;
  left: 40vw;
  top: 42vh;
  z-index: 20;
  background-color: #00CE7C;
  width: auto;
  height: auto;
  padding: 2vh 4vw 2vh 4vw;
  opacity: 0;
}
.text {
  font-weight: bold;
  color: #00ce7c;
  font-size: 2vw;
  margin-bottom: 0;
}
</style>
