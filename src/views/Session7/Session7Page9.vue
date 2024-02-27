<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session7/background_71.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session7/background_71.jpg"
      class="session-background"
    />
    <div class="text-box">
      <p>Think about a time when you learnt to do something
        step by step; such as starting a new school.</p>
      <p>Let's draw a step plan, to make it easy.</p>
      <p>Start on the bottom step, climbing slowly to the top.</p>
      <p>It can be easy when we break it into small steps.</p>
    </div>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session7/Session7_Page183.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">183</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session7Page9',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box',opacity: 1}, 200)
        .add({targets: text[0],opacity: 1}, 500)
        .add({targets: text[1],opacity: 1}, 14000)
        .add({targets: text[2],opacity: 1}, 19500)
        .add({targets: text[3],opacity: 1}, 24500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
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
  position: absolute;
  background-color: rgba(255,255,255, 0.95);
  width: 86%;
  padding: 2vh;
  left: 7%;
  top: 20vh;
  font-size: 5vh;
  opacity: 0;
}
.text-box p {
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>