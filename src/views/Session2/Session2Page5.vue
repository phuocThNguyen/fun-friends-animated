<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>'Feeling' faces</h1>
      <p>Sit with a friend and look at all the 'Feeling' faces.</p>
      <p>What could they be feeling?</p>
      <p>Take turns and make sure to listen to your friend.
      Remember, we all think differently.</p>

      <p>If you want to, you can write your guess or draw faces
      in the circle to show their feelings.</p>

      <p>Nina has gifts for her family.</p>
    </div>
    <drawing-canvas class="canvas" :canvasStyle="canvasStyle"/>
  </div>
</template>

<script>
import anime from 'animejs';
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: "Session2Page5",
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {

      }
    }
  },
  mounted() {

    let para = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      easing: 'linear',
      duration: 500,
      delay: 500
    });
    animation
      .add({
        targets: para[0],
        color: '#000'
      })
      .add({
        targets: para[1],
        color: '#000'
      })
      .add({
        targets: para[2],
        color: '#000'
      })
      .add({
        targets: para[3],
        color: '#000'
      })
      .add({
        targets: para[4],
        color: '#000'
      })
      .add({
        targets: para[5],
        opacity: 1
      })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 30vw;
  z-index: 10;
  padding: 2vw;
  color: #ffffff;
}
.text-box h1 {
  font-size: 3vw;
  margin-bottom: 5vh;
}
.text-box p {
  font-size: 2vw;
  margin-bottom: 2vh;
}
.text-box p:last-child {
  margin-top: 5vh;
  display: inline-block;
  background-color: #00ce7c;
  color: #ffffff;
  width: auto;
  height: auto;
  padding: 1vw;
  font-size: 2vw;
  font-weight: bold;
  opacity: 0;
}
</style>