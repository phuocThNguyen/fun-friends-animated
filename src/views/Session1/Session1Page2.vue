<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/2350-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/2350-resized.jpg"
      class="session-background"
    />
    <div class="left-bar">
      <p class="text-1"><span id="letter-f">F</span>eelings</p>
      <p class="text-2"><span id="letter-r">R</span>elax</p>
      <p class="text-3"><span id="letter-i">I</span> can try</p>
      <p class="text-4"><span id="letter-e">E</span>xplore</p>
      <p class="text-5"><span id="letter-n">N</span>ice work</p>
      <p class="text-6"><span id="letter-d">D</span>o it</p>
      <p class="text-7"><span id="letter-s">S</span>tay brave</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/9Animated_Book_Page8.mp3"
      ref="audio"
    />
    <div class="page-number" id="page-dark">8</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
export default {
  name: "Session1Page2",
  components: {ImageComponent},
  methods: {
    animateText() {
      let vw = document.querySelector('.interactive-container').clientWidth;
      let animations = anime.timeline({
        duration: 3000
      });
      animations
        .add({
          targets: ".left-bar",
          translateX: 0.5*vw,
          duration: 500,
          delay: 1000,
        })
        .add({
          targets: ".text-1",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
          delay: 1000
        })
        .add({
          targets: ".text-2",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        })
        .add({
          targets: ".text-3",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        })
        .add({
          targets: ".text-4",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        })
        .add({
          targets: ".text-5",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        })
        .add({
          targets: ".text-6",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        })
        .add({
          targets: ".text-7",
          color: '#fff',
          webkitTextStroke: '0.1vw black',
        });
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.audio.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Sigmar+One&display=swap');
.left-bar {
  font-family: 'Sigmar One', cursive;
  position: absolute;
  top: 0;
  left: -50%;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 206, 124, 0.95);
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  padding-bottom: 7vh;
}
.left-bar p {
  text-transform: uppercase;
  color: #00ce7c;
  font-size: 7vh;
  margin: .5vh 1vw 0;
}
#letter-f {
  color: #A3C042;
  -webkit-text-stroke: 0.1vw black;
}
#letter-r {
  color: #C95288;
  -webkit-text-stroke: 0.1vw black;
}
#letter-i {
  color: #D89022;
  -webkit-text-stroke: 0.1vw black;
}
#letter-e {
  color: #F9E836;
  -webkit-text-stroke: 0.1vw black;
}
#letter-n {
  color: #A9D3EB;
  -webkit-text-stroke: 0.1vw black;
}
#letter-d {
  color: #A3C042;
  -webkit-text-stroke: 0.1vw black;
}
#letter-s {
  color: #C95288;
  -webkit-text-stroke: 0.1vw black;
}
</style>