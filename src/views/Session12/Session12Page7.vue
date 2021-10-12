<template>
  <div class="interactive-container">
    <img src="../../assets/images/session12/38541.png" alt="party" class="session-background">
    <div class="text-box">
      <h1>Additional Activity &ndash; Party Time</h1>
      <p>Zoe, Daniel, and Matilda are teaching their teddy
        bears all of their favourite FRIENDS games and
        activities.</p>
      <p>Pair up with a friend and take turns naming some of
        your favourite FRIENDS games and activities you want
        to try again together. You can write them in the balloons below.</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session12Page7',
  mounted() {
    let text = document.querySelector('.text-box').children;
    let animation = anime.timeline({
      easing: 'linear',
      delay: 500,
      duration: 500
    })
    animation
    .add({
      targets: text[0],
      opacity: 1
    })
    .add({
      targets: text[1],
      opacity: 1
    })
    .add({
      targets: text[2],
      opacity: 1
    })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  top: 2vh;
  left: 2vw;
}
.text-box h1 {
  font-size: 3vw;
  font-weight: bold;
  margin-bottom: 2vh;
  opacity: 0;
}
.text-box p {
  font-size: 2vw;
  opacity: 0;
}
</style>
