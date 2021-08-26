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
import Letterize from "letterizejs";
export default {
  name: "Session1Page3",
  mounted() {
    let init_animation = anime.timeline();
    init_animation
      .add({
        targets: ".left-bar",
        opacity: 1,
        easing: "linear",
        delay: 1000,
        duration: 1000,
      })
      .add({
        targets: "#pic",
        translateX: 150,
        easing: "linear",
        duration: 1000
      }, 1000);

    let para1 = new Letterize({targets: "#para-1"});
    let para2 = new Letterize({targets: "#para-2"});
    let para3 = new Letterize({targets: "#para-3"});
    let para4 = new Letterize({targets: "#para-4"});
    let para5 = new Letterize({targets: "#para-5"});
    let para6 = new Letterize({targets: "#para-6"});
    let para7 = new Letterize({targets: "#para-7"});
    let para8 = new Letterize({targets: "#para-8"});

    let para_animation = anime.timeline();
    para_animation
      .add({
        targets: para1.listAll,
        color: '#000',
        delay: anime.stagger(50, {start: 2000})
      })
      .add({
        targets: para2.listAll,
        color: '#000',
        delay: anime.stagger(50)
      })
      .add({
        targets: para3.listAll,
        color: '#000',
        delay: anime.stagger(50)
      })
      .add({
        targets: para4.listAll,
        color: '#000',
        delay: anime.stagger(50)
      }, '-=700')
      .add({
        targets: para5.listAll,
        color: '#000',
        delay: anime.stagger(50)
      })
      .add({
        targets: para6.listAll,
        color: '#000',
        delay: anime.stagger(50)
      },'-=700')
      .add({
        targets: para7.listAll,
        color: '#000',
        delay: anime.stagger(50)
      })
      .add({
        targets: para8.listAll,
        color: '#000',
        delay: anime.stagger(50)
      },'-=700')
  }
}
</script>

<style scoped>
.left-bar {
  position: absolute;
  width: 250px;
  height: 100%;
  background-color: #ffffff;
  z-index: 10;
  opacity: 0;
}
.left-bar p {
  color: #ffffff;
}
</style>