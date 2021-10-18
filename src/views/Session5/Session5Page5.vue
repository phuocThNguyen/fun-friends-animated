<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/86.png" alt="red" class="session-background">
    <div class="text-box">
      <h1>Sleeping in her own room</h1>
      <p>Matilda is spending her first night sleeping by herself.</p>
      <p>How is she feeling in this picture? Is Matilda having
        '<span class="red">red</span>' or
        '<span class="green">green</span>' thoughts?</p>
    </div>
    <traffic-light correctAns="#red-light" class="traffic-light"/>
  </div>
</template>

<script>
import TrafficLight from "@/components/trafficLights/TrafficLights";
import anime from "animejs";
export default {
  name: 'Session5Page5',
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
  width: 30%;
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