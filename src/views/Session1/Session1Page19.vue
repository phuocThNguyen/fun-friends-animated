<template>
  <div class="interactive-container">
    <img class="session-background" src="../../assets/images/session1/84428-resized.jpg" alt="family-enjoy-water">
    <div class="text-box">
      <p class="text">
        <span>Tal om personerne i din familie og de steder de kommer fra.</span>
        <span> Lyt omhyggeligt efter når det er de andres tur til at tale.</span>
        <span> Det kan godt være, at vi alle sammen ser forskellig ud;</span>
        <span> spiser forskellig slags mad;</span><span> bor forskellige steder;</span>
        <span> går i forskelligt tøj;</span><span> eller taler forskellige sprog, men</span>
        <span><strong> den måde vi alle elsker, smiler og græder på er den samme.</strong></span>
      </p>
    </div>
    <audio src="../../assets/sounds/session1/Page25.mp3" ref="voice"/>
    <div class="page-number" id="page-light">25</div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page19",
  methods: {
    animateText() {
      let paraArray = document.getElementsByClassName('text')[0];
      let animation = anime.timeline({duration: 500, easing:'linear'});
      animation
        .add({targets: ".text-box", opacity: 0.95}, 1)
        .add({targets: paraArray.children[0], color: '#000'}, 800)
        .add({targets: paraArray.children[1], color: '#000'}, 6000)
        .add({targets: paraArray.children[2], color: '#000'}, 11000)
        .add({targets: paraArray.children[3], color: '#000'}, 14400)
        .add({targets: paraArray.children[4], color: '#000'}, 16800)
        .add({targets: paraArray.children[5], color: '#000'}, 19000)
        .add({targets: paraArray.children[6], color: '#000'}, 20900)
        .add({targets: paraArray.children[7], color: '#000'}, 23100)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1)
    }
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  height: auto;
  width: 120vh;
  padding: 2vh;
  background-color: #ffffff;
  position: absolute;
  top: 1vh;
  left: 7vh;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center
}
.text-box p {
  color: #ffffff;
  font-size: 3vh;
  margin-bottom: 0;
}
</style>