<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/grass-portrait-black-child-with-smile-summer-fashion-happiness-nature-young-boy-relax-rest-backyard-play-school-break-fun-day-park-field-nigeria.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/grass-portrait-black-child-with-smile-summer-fashion-happiness-nature-young-boy-relax-rest-backyard-play-school-break-fun-day-park-field-nigeria.jpg"
      class="page-image"
    />
    <div class="text-box">
      <h1>'Bubble' Breathing</h1>
      <p>Practise 'bubble' breathing with a straw.</p>
      <p>Breathe in slowly through your nose.</p>
      <p>Breathe out slowly through your mouth.</p>
      <p>Get a straw.</p>
      <p>Blow slowly out of the straw for a long time. </p>
      <p>Slow breathing calms you down.</p>
      <p>Imagine you are in a calm place in nature.</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page122.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session4Page10",
  components: {ImageComponent},
  props: {
    startPage: Number,
    pageNum: Number,
  },
  created (){
    this.setPageNumber()
  },
  methods: {
    setPageNumber() {
      this.page = this.pageNum + this.startPage - 1;
    },
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({easing: 'linear', duration: 500,});
      animation
        .add({targets: text[1], opacity: 1}, 3800)
        .add({targets: text[2], opacity: 1}, 26100)
        .add({targets: text[3], opacity: 1}, 38500);
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
  width: 60vh;
  height: 100%;
  padding: 1.5vh;
}
.text-box h1 {
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 5vh;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 5vh;
  opacity: 1;
}
.page-image {
  position: absolute;
  height: 120%;
  top: -5vh;
  right: 0;
}
</style>