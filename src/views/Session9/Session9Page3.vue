<template>
  <div class="interactive-container">
    <h1 class="title">Annie is brave and rewards her self</h1>
    <div class="image-container">
      <img src="../../assets/images/session9/1489.png" alt="Annie">
      <p>1. Brave Annie &ndash; Trying to roller-blade</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session9/1551.png" alt="Annie">
      <p>Annie's Reward &ndash; Cooking with mum</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Session9Page3'
}
</script>

<style scoped>
.title {
  position: absolute;
  font-weight: bold;
  font-size: 3vw;
  top: 3vh;
  left: 2vw;
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
  padding: 1vh 2vw;
  text-align: center;
  font-size: 2vw;
  font-weight: bold;
}
.image-container:nth-of-type(2) {
  right: 0;
}
</style>