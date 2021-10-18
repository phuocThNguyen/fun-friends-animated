<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/447.png" alt="red" class="session-background">
    <div class="text-box">
      <h1>Changing '<span class="red">Red</span>' to
        '<span class="green">Green</span>' Thoughts</h1>
      <p><strong>Starting a new school</strong></p>
      <p>Mum is taking Lucy to her new
        school. In this picture, she feels
        sad and scared. Why do you
        think she feels sad and scared?
        How do you think mum feels?</p>
      <p>Is Lucy having '<span class="red">red</span>' or
        '<span class="green">green</span>' thoughts?</p>
    </div>
    <traffic-light correctAns="#red-light" class="traffic-light"/>
  </div>
</template>

<script>
import TrafficLight from "@/components/trafficLights/TrafficLights";
import anime from "animejs";
export default {
  name: 'Session5Page3',
  components: {TrafficLight},
  mounted() {
    let animation = anime.timeline({
      easing: 'linear',
      duration: 500,
      delay: 200,
    })
    animation
      .add({
        targets: '.text-box',
        opacity: 1
      })
      .add({
        targets: '.traffic-light',
        opacity: 1
      })
  }
}
</script>

<style scoped>
.traffic-light {
  position: absolute;
  left: 30%;
  bottom: 22vh;
  opacity: 0;
}
.text-box {
  position: absolute;
  width: 32%;
  padding: 2vh 2.1vh;
  top: 5vh;
  left: 3%;
  background-color: rgba(255,255,255, 0.9);
  opacity: 0;
}
.text-box h1 {
  font-weight: bold;
  font-size: 4.2vh;
}
.text-box p {
  font-size: 2.8vh;
  margin-bottom: 2vh;
}
.text-box p:last-child {
  margin-bottom: 0;
}
.red {
  color: red;
}
.green {
  color: #00CE7C;
}
</style>