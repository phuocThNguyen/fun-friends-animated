<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/85693.png" alt="red" class="session-background">
    <div class="text-box">
      <p>Nala is spending her first night sleeping by herself.</p>
      <p>How is she feeling in this picture? Is Nala having 'red'
       or 'green' thoughts?</p>
    </div>
    <traffic-light correctAns="#green-light" class="traffic-light"/>
  </div>
</template>

<script>
import TrafficLight from "@/components/trafficLights/TrafficLights";
import anime from "animejs";
export default {
  name: 'Session5Page6',
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
  left: 30vw;
  bottom: 22vh;
  opacity: 0;
}
.text-box {
  position: absolute;
  width: 30vw;
  padding: 2vh 1.5vw;
  top: 5vh;
  left: 3vw;
  background-color: rgba(255,255,255, 0.9);
  opacity: 0;
}
.text-box p {
  font-size: 2vw;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>