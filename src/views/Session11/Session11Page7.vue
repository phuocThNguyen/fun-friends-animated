<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session11/rock_climbing_nature.png" alt="climbing-tree" class="images">
      <p class="text" id="para-1">Mum helping Matilda rock climbing.</p>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session11/hugging_dog_child.png" alt="swinging" class="images">
      <p class="text" id="para-2">Zoe giving Pepper a hug.</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page7',
  mounted() {
    let text = document.getElementsByClassName('text');
    let animation = anime.timeline({
      easing: 'linear',
      duration: 500,
      delay: 500
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
  }
}
</script>

<style scoped>
#right {
  right: 0;
}
.image-container {
  position: absolute;
  height: 100vh;
  width: 49%;
}
.images {
  width: 100%;
  height: 100%;
}
.image-container p {
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 3vh;
  font-weight: bold;
  width: 80%;
  bottom: 9vh;
  text-align: center;
  position: absolute;
  padding: .5vh;
  opacity: 0;
}
#para-1 {left: 19%}
#para-2 {right: 19%}
</style>
