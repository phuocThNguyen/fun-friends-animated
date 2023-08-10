<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/324483-P9A8QQ-419-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/324483-P9A8QQ-419-resized.jpg"
      class="session-background" id="adjust"
    />
    <div class="text-box">
      <h1>'Bubble' Breathing</h1>
      <p>Practise 'bubble' breathing with a straw.
        Blow slowly out of the straw for a long time.
        Slow and deep breathing calms you down.</p>
      <p>After, practise ‘bubble’ breathing by
        lying down without the straw. Imagine
        yourself in a special space.</p>
      <p>If you want to, you can describe or
        draw a picture of your peaceful, quiet
        place in the next page.</p>
      <p>Breathing deeply and
        slowly calms us down.</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page10.mp3" ref="voice"/>
    <div class="page-number" id="page-light">121</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session4Page10",
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
      });
      animation
        .add({
          targets: text[1],
          opacity: 1,
        }, 2080)
        .add({
          targets: text[2],
          opacity: 1
        }, 13647)
        .add({
          targets: text[3],
          opacity: 1
        }, 22181)
        .add({
          targets: text[4],
          opacity: 1,
        }, 30603);
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
  top: 0;
  left: 0;
  z-index: 10;
  background-color: #ffffff;
  width: 48%;
  height: 100%;
  padding: 1.5vh;
}
.text-box h1 {
  font-size: 5vh;
  font-weight: bold;
  margin-bottom: 1vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p:last-child {
  display: inline-block;
  background-color: #00ce7c;
  width: 96%;
  color: #ffffff;
  font-weight: bold;
  padding: 1vh;
  text-align: center;
  margin-top: 5%;
}
#adjust {
  left: 12%;
}
</style>