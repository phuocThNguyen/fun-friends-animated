<template>
  <div class="interactive-container">
    <img class="image" src="../../assets/images/session2/11-resized.jpg" alt="sad">
    <div class="text-box">
      <h1>Følelser</h1>
      <p>Hvad gør du, når du føler dig vred, bekymret, glad eller trist?</p>
      <p>Gå sammen i en gruppe og lav et rollespil over et følelsesord I selv har valgt.</p>
      <p>Husk ikke at fortælle hvilket følelsesord det er I har valgt.
        Lad jeres klassekammerater gætte og derefter vær med til at gætte hvilket
        følelsesord de har valgt til deres rollespil.</p>
      <p>Du kan evt. bruge en rollespilsmaske! </p>

      <p class="extra-box">Alle følelser er OK.</p>
    </div>
    <audio src="../../assets/sounds/session2/Session2_Page3.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">48</div>
  </div>
</template>

<script>
import anime from 'animejs';

export default {
  name: "Session2Page3",
  methods: {
    animateText() {
      let para = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear'
      });
      animation
        .add({
          targets: para[1],
          color: "#000",
        }, 1)
        .add({
          targets: para[2],
          color: "#000"
        }, 1)
        .add({
          targets: para[3],
          color: "#000"
        }, 1)
        .add({
          targets: para[4],
          color: "#000"
        },1)
        .add({
          targets: para[5],
          opacity: 1
        }, 1)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    }
  },
  mounted() {
    this.animateText();
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.image {
  position: absolute;
  width: 60%;
  height: 100%;
  left: 40%;
}
.text-box {
  position: absolute;
  padding: .5vh 1vh;
  width: 40%;
}
.text-box h1 {
  font-weight: bold;
  font-size: 4vh;
  margin-bottom: .5vh;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 1vh;
  color: #ffffff;
}
.extra-box {
  display: block;
  background-color: #00ce7c;
  opacity: 0;
  font-weight: bold;
  font-size: 3vh !important;
  padding: 2vh;
  text-align: center;
  margin-top: 13vh;
}
</style>