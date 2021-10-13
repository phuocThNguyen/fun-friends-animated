<template>
  <div class="interactive-container" id="alt-bg">
    <h1 class="title">We all have fun!</h1>
    <img src="../../assets/images/appendix/0000a8cd_medium.png" alt="dog-and-lamb" class="images">
    <img src="../../assets/images/appendix/Beach_Children.png" alt="beach&children" class="images">
    <img src="../../assets/images/appendix/Gingernut_ranger_perching_on_the_chicken_swing_in_garden.png" alt="chicken" class="images">
    <img src="../../assets/images/appendix/78621.png" alt="children" class="images">
    <img src="../../assets/images/appendix/Playing_Lambs_01.png" alt="lamb" class="images">
    <img src="../../assets/images/appendix/70160.png" alt="drawing" class="images">
  </div>
</template>

<script>
export default {
  name: 'AppendixPage9'
}
</script>

<style scoped>
.title {
  position: absolute;
  width: 100vw;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 4vw;
  font-weight: bold;
}
#alt-bg {
  background-color: #00CE7C;
}
.images {
  position: absolute;
  width: 30vw;
  height: 30vw;
}
img:nth-of-type(1) { top: 7.5vh;left: 2vw; }
img:nth-of-type(2) { top: 7.5vh;left: 35vw; }
img:nth-of-type(3) { top: 7.5vh;right: 2vw; }
img:nth-of-type(4) { top: 50vh;left: 2vw; }
img:nth-of-type(5) { top: 50vh;left: 35vw; }
img:nth-of-type(6) { top: 50vh;right: 2vw; }
</style>