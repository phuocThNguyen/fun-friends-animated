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
.text-box {
  position: absolute;
  padding: 2vh 2vw;
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
  height: 72vh;
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