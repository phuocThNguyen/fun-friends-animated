<template>
  <div class="interactive-container">
    <img src="../../assets/images/session1/grass-background.jpg" alt="" class="session-background">
    <div class="text-box">
      <h1>Try every day</h1>
      <p>- If you were a grown up for a day, what would you do?</p>
      <p>- Share your answer with a grown up and ask them about
        when they were children - what they liked to do, eat and play.</p>
      <p>- Ask them to draw the home they lived in as a child.</p>
      <p>- Each night with the love ones, a happy memory from your day.</p>
      <p>- Practise being BRAVE:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Look people in the eye and smile.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Use a brave voice and make yourself big.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Try your best and give it a go.</p>
      <audio ref="audio" autoplay loop src="../../assets/sounds/session1/530415__klankbeeld__forest-summer-roond-020-200619-0186.mp3"></audio>
    </div>
  </div>
</template>

<script>
import anime from 'animejs'
export default {
  name: "Session1Page37",
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({
        easing: 'linear',
        delay: 1500,
        duration: 500
      })
      animation
        .add({
          targets: ".text-box",
          opacity: 0.9,
          delay: 500,
          easing: 'linear'
        })
        .add({
          targets: text[1],
          opacity: 1,
          delay: 500
        })
        .add({
          targets: text[2],
          opacity: 1
        })
        .add({
          targets: text[3],
          opacity: 1
        })
        .add({
          targets: text[4],
          opacity: 1
        })
        .add({
          targets: text[5],
          opacity: 1
        })
        .add({
          targets: text[6],
          opacity: 1
        })
        .add({
          targets: text[7],
          opacity: 1
        })
        .add({
          targets: text[8],
          opacity: 1
        })
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    }
  },
  mounted() {
    this.animateText();
    this.setAudioVolumeLevel(0.4)
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 90%;
  left: 5%;
  top: 2vh;
  background-color: #ffffff;
  opacity: 0;
  padding: 2vh 3vh;
}
.text-box h1 {
  text-align: center;
  margin-bottom: 1vh;
  font-size: 6vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 2vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>