<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session11/Climbing_Tree_Help.png" alt="climbing-tree" class="images">
      <p class="text">Helping Daniel climb a tree.</p>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session11/Swinging_Children.png" alt="swinging" class="images">
      <p class="text">Zoe and Daniel helping Matilda swing.</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page6',
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
  font-size: 2.8vh;
  font-weight: bold;
  width: 90%;
  left: 5%;
  bottom: 20vh;
  text-align: center;
  position: absolute;
  padding: 1vh 1.4vh;
  opacity: 0;
}
</style>
