<template>
  <div class="interactive-container" id="alt-bg">
    <h1 class="title">"I dedicate this book to all children
      and their animal friends"</h1>
    <img src="../../assets/images/introduction/Koala_Child_Hugging.jpg" alt="koala" class="images">
    <img src="../../assets/images/introduction/chicken-boy.jpg" alt="chicken-boy" class="images">
    <img src="../../assets/images/introduction/girl-with-cat.jpg" alt="girl-cat" class="images">
    <img src="../../assets/images/introduction/Dog_hug_child.jpg" alt="dog" class="images">
    <img src="../../assets/images/introduction/child-1019147-740x493.jpg" alt="lamb" class="images">
    <img src="../../assets/images/introduction/elephant_kid.jpg" alt="ele" class="images">
  </div>
</template>

<script>
export default {
  name: 'IntroductionPage6'
}
</script>

<style scoped>
.title {
  position: absolute;
  top: 1vh;
  width: 100vw;
  text-align: center;
  color: #ffffff;
  font-size: 2.7vw;
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