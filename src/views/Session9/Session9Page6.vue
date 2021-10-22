<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Tom's reward</h1>
      <p>When Tom is brave, he rewards himself by doing fun
      activities with his family and friends.</p>
      <p>What are some activities that you think are fun?
      How can you use these activities to reward yourself?</p>
    </div>
    <textarea v-model.lazy="input" placeholder="Type in your thoughts here..." class="input"/>
    <div class="image-container" id="left">
      <img src="../../assets/images/session9/21368.png" alt="Tom">
      <p>1. Brave Tom &ndash; Sleeping in his own bed</p>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session9/623020-PNWBO6-422.png" alt="Tom-reward">
      <p>Tom's Reward &ndash; Special time with his dad</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session9Page6',
  data() {
    return {
      input: ''
    }
  },
  mounted() {
    let images = document.querySelectorAll('.image-container');
    let animation = anime.timeline({
      easing: 'linear',
      delay: 500,
      duration: 500
    })
    animation
      .add({
        targets: images[0],
        opacity: 1
      })
      .add({
        targets: images[1],
        opacity: 1
      })
  },
  watch: {
    input: function() {
      console.log(this.input)
    }
  },
}
</script>

<style scoped>
.input {
  position: absolute;
  width: 96%;
  height: 16%;
  left: 2%;
  top: 15vh;
  padding: 2vh;
  font-size: 2.4vh;
  border: 2px solid #00CE7C;
  border-radius: 7px;
  resize: none;
  background-color: rgba(255,255,255,0.9);
  opacity: 1;
}
.input:focus {
  outline: none;
}
@media screen and (max-width: 930px) {
  .text-box p {
    font-size: 2.4vh !important;
  }
}
.text-box {
  position: absolute;
  width: 96%;
  padding: 2vh 2%;
}
.text-box h1 {
  font-size: 3vh;
  margin-bottom: 1vh;
  font-weight: bold;
}
.text-box p {
  font-size: 2.6vh;
  margin-bottom: 0;
}
.image-container {
  position: absolute;
  bottom: 0;
  width: 49%;
  height: 60vh;
  opacity: 0;
}
.image-container img {
  width: 100%;
  height: 100%;
}
.image-container p {
  display: block;
  position: absolute;
  bottom: 10vh;
  left: 2%;
  width: 96%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh;
  text-align: center;
  font-size: 2.6vh;
  font-weight: bold;
}
#right {
  right: 0;
}
</style>