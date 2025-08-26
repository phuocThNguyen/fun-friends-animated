<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session9/background-9.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session9/background-9.jpg"
      class="session-background"
    />
    <div class="text-box">
      <span>Talk to your friends about your <strong>STEP PLAN</strong>.</span>
      <span> Think of ways you can reward yourself for doing your best,
      like going to the park, playing ball, or just sharing
      a picnic with your family.</span>
    </div>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session9/Session9_Page2.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session9Page2',
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
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box', opacity: 0.9}, 200)
        .add({targets: text[0], color: '#000'}, 500)
        .add({targets: text[1], color: '#000'}, 4000)
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
  background-color: #ffffff;
  width: 82%;
  padding: 2vh;
  left: 9%;
  top: 20vh;
  font-size: 5.5vh;
  opacity: 0;
}
.text-box span {color: #ffffff}
</style>