<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session11/rock_climbing_nature.png" alt="climbing-tree" class="images">
      <p>Mum helping Matilda rock climbing.</p>
    </div>
    <div class="image-container" id="right">
      <img src="../../assets/images/session11/hugging_dog_child.png" alt="swinging" class="images">
      <p>Zoe giving Pepper a hug.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Session11Page7'
}
</script>

<style scoped>
#right {
  right: 0;
}
.image-container {
  position: absolute;
  height: 100vh;
  width: 49vw;
}
.images {
  width: 100%;
  height: 100%;
}
.image-container p {
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 2vw;
  font-weight: bold;
  width: 90%;
  left: 5%;
  bottom: 10vh;
  text-align: center;
  position: absolute;
  padding: 1vh 1vw;

}
</style>
