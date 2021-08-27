<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/84428-resized.jpg" alt="family-enjoy-water">
    <div class="text-box">
      <p class="text">
        <span>
          Talk about your family and the places they come from.
        </span>
        <span>
          Listen carefully when it is their turn to talk.
        </span>
        <span>
          There are differences in the way we look,
        </span>
        <span>
          what we eat,
        </span>
        <span>
          where we live,
        </span>
        <span>
          the clothes we wear
        </span>
        <span>
          or the language we speak,
        </span>
        <span>
          <strong>
            but we all love, smile, and cry in the same way.
          </strong>
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page18",
  mounted() {
    let paraArray = document.getElementsByClassName('text')[0];
    let animation = anime.timeline({
      delay: 700,
    });
    animation
      .add({
        targets: ".text-box",
        opacity: 0.95,
        duration: 1000,
        easing: 'linear'
      })
      .add({
        targets: paraArray.children[0],
        color: '#000',
        duration: 1000,
        easing: 'linear',
      })
      .add({
        targets: paraArray.children[1],
        color: '#000',
        duration: 1000,
        easing: 'linear',
      })
      .add({
        targets: paraArray.children[2],
        color: '#000',
        duration: 1000,
        easing: 'linear',
      })
      .add({
        targets: paraArray.children[3],
        color: '#000',
        duration: 1000,
        easing: 'linear',
      })
      .add({
        targets: paraArray.children[4],
        color: '#000',
        duration: 1000,
        easing: 'linear',
      })
      .add({
        targets: paraArray.children[5],
        color: '#000',
        duration: 1000,
        easing: 'linear',
      })
      .add({
        targets: paraArray.children[6],
        color: '#000',
        duration: 1000,
        easing: 'linear',
      })
      .add({
        targets: paraArray.children[7],
        color: '#000',
        duration: 1000,
        easing: 'linear',
      })
  }
}
</script>

<style scoped>
.text-box {
  height: 140px;
  width: 650px;
  padding: 0 20px 0 20px;
  background-color: #ffffff;
  position: absolute;
  top: 20px;
  left: 60px;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.text-box p {
  color: #fff;
  margin-bottom: 0;
}
</style>