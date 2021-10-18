<template>
  <div class="interactive-container">
    <div class="image-container">
      <img src="../../assets/images/session9/fish_feeding_pond.png" alt="feeding-fish">
      <p>Feeding the fish</p>
    </div>
    <div class="image-container">
      <img src="../../assets/images/session9/swimming_lake_children.png" alt="swimming">
      <p>Swimming in the river</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Session9Page10'
}
</script>

<style scoped>
.image-container {
  position: absolute;
  bottom: 0;
  width: 49%;
  height: 100vh;
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
  font-size: 2.5vh;
  font-weight: bold;
}
.image-container:nth-of-type(2) {
  right: 0;
}
</style>