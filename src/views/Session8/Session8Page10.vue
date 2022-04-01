<template>
  <div class="interactive-container">
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle="canvasStyle"/>
    <div class="text-box">
      <p>Tal med dine klassekammerater om idéer til hvordan man danner nye venskaber.
        Gå sammen og prøv at tegne billeder af jeres idéer eller skriv dine idéer
        i ballonerne herunder. Nogle idéer kunne være, at:</p>
      <p>&bull;&nbsp;&nbsp;tage hen et sted hvor der er mulighed for møde andre og lege,
        cykle eller løbe på rulleskøjter sammen</p>
      <p>&bull;&nbsp;&nbsp;være MODIG og tal med en ny person</p>
      <p>&bull;&nbsp;&nbsp;tegne en glad tegning og gi’ det til din ny ven(inde) næste gang I ses.</p>
    </div>
    <audio src="../../assets/sounds/session8/Session8_Page10.mp3" ref="voice"/>
    <audio ref="audio" autoplay loop src="../../assets/sounds/children-background-music/children-s-music-no-copyright-royalty-free-happy-upbeat-kids-barroom-ballet.mp3"></audio>
  </div>
</template>

<script>
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";
import anime from "animejs";

export default {
  name: 'Session8Page10',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 1,
        height: 0.82,
        isPicture: true,
        pictureUrl: "session8/275676-P61H8M-305.png",
        backgroundSize: "cover"
      }
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    },
    animateElements() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box',opacity: 1}, 500)
        .add({targets: text[0],opacity: 1}, 800)
        .add({targets: '.canvas',opacity: 1}, 6700)
        .add({targets: text[1],opacity: 1}, 12200)
        .add({targets: text[2],opacity: 1}, 17500)
        .add({targets: text[3],opacity: 1}, 20500)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.animateElements();
    this.setAudioVolumeLevel(0.2);
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  padding: 1vh;
  opacity: 0;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: .5vh;
  opacity: 0;
}
.canvas {
  position: absolute;
  opacity: 0;
}
</style>