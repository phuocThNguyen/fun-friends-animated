<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Annie on holiday</h1>
      <p>Annie is just back from holiday at the beach. There are
      some photos. What do you think Annie did on her holiday?
      What can you do or say to be happy for Annie?</p>
    </div>
    <img src="../../assets/images/session8/135407-OSAV2U-882.png" alt="Annie" class="images">
    <img src="../../assets/images/session8/135348-OSAU2M-875.png" alt="family" class="images">
    <textarea v-model.lazy="input" placeholder="Type in your thoughts here..." class="input"/>
    <audio autoplay loop src="../../assets/sounds/session1/beach-sound.mp3"></audio>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: 'Session8Page4',
  data() {
    return {
      input: ''
    }
  },
  mounted() {
    let text = document.querySelector('.text-box').children;
    let animation = anime.timeline({
      easing: 'linear',
      delay: 500,
      duration: 500
    });
    animation
      .add({
        targets: text[0],
        opacity: 1
      })
      .add({
        targets: text[1],
        opacity: 1
      })
      .add({
        targets: '.input',
        opacity: 1
      })
  },
  watch: {
    input: function() {
      console.log(this.input)
    }
  }
}
</script>

<style scoped>
.input {
  position: absolute;
  width: 96%;
  height: 20%;
  left: 2%;
  top: 17vh;
  padding: 2vh;
  font-size: 3vh;
  border: 2px solid #00CE7C;
  border-radius: 5px;
  resize: none;
  background-color: rgba(255,255,255,0.9);
  opacity: 0;
}
.input:focus {
  outline: none;
}
.text-box {
  position: absolute;
  padding: 1vh 2%;
  width: 100%;
}
.text-box h1 {
  font-size: 4vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p {
  font-size: 2.8vh;
  opacity: 0;
}
.images {
  position: absolute;
  height: 54vh;
  width: 49%;
  bottom: 0;
}
.images:nth-child(2) {
  right: 0;
}
</style>