<template>
  <div class="interactive-container">
    <img class="session-background" id="pic" src="../../assets/images/session1/4161-resized.jpg" alt="tom-and-mum">
    <div class="left-bar">
      <h2 class="mt-4 mb-5">Meet Tom</h2>
      <p class="mb-4" id="para-1">Meet Tom!</p>
      <p class="mb-4" id="para-2">It is Tom's birthday today.</p>
      <p class="mb-0" id="para-3">He is adopting Chilli and Pepper,</p>
      <p class="mb-4" id="para-4">the rescue dogs for his birthday.</p>
      <p class="mb-0" id="para-5">Tom wants to give Chilli and</p>
      <p class="mb-5" id="para-6">Pepper a loving home.</p>
      <p class="mb-0" id="para-7">Would you like to adopt a rescue</p>
      <p class="mb-0" id="para-8">animal for your birthday?</p>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
export default {
  name: "Session1Page3",
  mounted() {
    let para = document.getElementsByClassName('left-bar')[0].children;
    let initAnimation = anime.timeline({
      easing: 'linear'
    });
    initAnimation
      .add({
        targets: ".left-bar",
        opacity: 1,
        delay: 1000,
        duration: 1000,
      })
      .add({
        targets: "#pic",
        translateX: 150,
        duration: 1000
      },1000)
      .add({
        targets: para[0],
        color: '#000',
        duration: 500,
        delay: 1000,
      })
      .add({
        targets: para[1],
        color: '#000',
        duration: 500,
        delay: 500,
      })
      .add({
        targets: para[2],
        color: '#000',
        duration: 500,
        delay: 1000,
      })
      .add({
        targets: para[3],
        color: '#000',
        duration: 500,
        delay: 1000,
      })
      .add({
        targets: para[4],
        color: '#000',
        duration: 500,
        delay: 1000,
      }, '-=700')
      .add({
        targets: para[5],
        color: '#000',
        duration: 500,
        delay: 1000,
      })
      .add({
        targets: para[6],
        color: '#000',
        duration: 500,
        delay: 1000,
      }, '-=700')
      .add({
        targets: para[7],
        color: '#000',
        duration: 500,
        delay: 1000,
      })
      .add({
        targets: para[8],
        color: '#000',
        duration: 500,
        delay: 1000,
      }, '-=700')
  }
}
</script>

<style scoped>
.left-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 28vw;
  height: 100%;
  background-color: #ffffff;
  z-index: 10;
  opacity: 0;
  padding: 2vh;
}
.left-bar p,
.left-bar h2 {
  color: #ffffff;
}
.left-bar p {
  font-size: 1.8vw;
}
.left-bar h2 {
  font-size: 4vw;
}
</style>