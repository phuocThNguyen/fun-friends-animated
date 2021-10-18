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
@media screen and (max-width: 930px) {
  .text-box p {
    font-size: 2.6vh !important;
  }
}
.text-box {
  position: absolute;
  padding: 2vh 2.6vh;
}
.text-box h1 {
  font-size: 4vh;
  margin-bottom: 1vh;
  font-weight: bold;
}
.text-box p {
  font-size: 2.8vh;
  margin-bottom: 1vh ;
}
.image-container {
  position: absolute;
  bottom: 0;
  width: 49%;
  height: 78vh;
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