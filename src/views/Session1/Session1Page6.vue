<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/4082-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/4082-resized.jpg"
      class="session-background"
    />
    <div class="text-box">
      <p class="mb-0">Zoe's dad also plays with her on the swing.</p>
      <p class="mb-0">It is so much fun!</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/13Animated_Book_Page12.mp3" ref="voice"/>
    <div class="page-number" id="page-light">12</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session1Page6",
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear',
      })
      animation
        .add({
          targets: ".text-box",
          opacity: 1,
          delay: 500,
        })
        .add({
          targets: text[0],
          opacity: 1,
        }, 1233)
        .add({
          targets: text[1],
          opacity: 1
        }, 5176)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 1000)
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
.text-box {
  height: auto;
  width: auto;
  background-color: rgba(0, 206, 124, 0.95);
  position: absolute;
  top: 1vh;
  left: 2%;
  opacity: 0;
  padding: 2vh;
}
.text-box p {
  color: #ffffff;
  font-weight: bold;
  display: flex;
  font-size: 6vh;
  opacity: 0;
}
</style>