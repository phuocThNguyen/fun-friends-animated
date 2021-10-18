<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Tom's reward</h1>
      <p>When Tom is brave, he rewards himself by doing fun
      activities with his family and friends.</p>
      <p>What are some activities that you think are fun?
      How can you use these activities to reward yourself?</p>
    </div>
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
export default {
  name: 'Session9Page6'
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
  height: 72vh;
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