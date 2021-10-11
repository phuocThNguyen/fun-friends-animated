<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Additional Activity &ndash; Your Support Teams</h1>
      <p>Support teams are always there to help you. How can
       Zoe, Daniel and Matilda get help from their support teams
       in the pictures below?</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session11/surfing_child.png" alt="surfing" class="images">
      <div class="text">Mum helping Zoe surf</div>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session11/Hugging_Lama_Girl.png" alt="hugging-lama" class="images">
      <div class="text">Matilda giving Alpaca a hug</div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session11Page5',
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
.image-container {
  position: absolute;
  bottom: 0;
  width: 49vw;
  height: 70vh;
}
.text {
  position: absolute;
  bottom: 5vh;
  background-color: #00CE7C;
  padding: .5vh 1vw;
  color: #ffffff;
  font-size: 2vw;
  font-weight: bold;
  width: 90%;
  left: 5%;
  text-align: center;
  opacity: 0;
}
.images {
  width: 100%;
  height: 100%;
}
#right {
  right: 0;
}
.text-box {
  position: absolute;
  padding: 4vh 3vw;
}
.text-box h1 {
  font-size: 3vw;
  margin-bottom: 2vh;
  font-weight: bold;
}
.text-box p {
  font-size: 2vw;
}
</style>
