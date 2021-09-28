<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/447.png" alt="red" class="session-background">
    <div class="text-box">
      <h1>Changing 'Red' to 'Green' Thoughts</h1>
      <p><strong>Starting a new school</strong></p>
      <p>Mum is taking Lucy to her new
        school. In this picture, she feels
        sad and scared. Why do you
        think she feels sad and scared?
        How do you think mum feels?</p>
      <p>Is Lucy having 'red' or 'green'
        thoughts?</p>
    </div>
    <traffic-light correctAns="#red-light" class="traffic-light"/>
  </div>
</template>

<script>
import TrafficLight from "@/components/trafficLights/TrafficLights";
export default {
  name: 'Session5Page3',
  components: {TrafficLight}
}
</script>

<style scoped>
.traffic-light {
  position: absolute;
  width: auto;
  height: auto;
  left: 30vw;
  bottom: 25vh;
}
.text-box {
  position: absolute;
  width: 30vw;
  padding: 2vh 1.5vw;
  top: 5vh;
  left: 3vw;
  background-color: rgba(255,255,255, 0.9);
}
.text-box h1 {
  font-weight: bold;
  font-size: 3vw;
}
.text-box p {
  font-size: 2vw;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>