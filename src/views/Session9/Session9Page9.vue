<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Reward Yourself</h1>
      <p>There are many ways to reward ourselves for
       trying our best.</p>
    </div>
    <div class="image-container" id="left">
      <img src="../../assets/images/session9/Beach_Children.png" alt="beach-children">
      <p>Spending the day having fun at the beach</p>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session9/healthy_eating_child.png" alt="healthy-eating">
      <p>Eating your favourite healthy meal</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Session9Page9'
}
</script>

<style scoped>
.text-box {
  position: absolute;
  padding: 1vh 2vw;
}
.text-box h1 {
  font-size: 3vw;
  font-weight: bold;
}
.text-box p {
  font-size: 2.2vw;
}
.image-container {
  position: absolute;
  bottom: 0;
  width: 49vw;
  height: 80vh;
}
.image-container img {
  width: 100%;
  height: 100%;
}
.image-container p {
  display: block;
  position: absolute;
  bottom: 7vh;
  left: 4vw;
  width: 41vw;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh 1vw;
  text-align: center;
  font-size: 2vw;
  font-weight: bold;
}
#right {
  right: 0;
}
</style>