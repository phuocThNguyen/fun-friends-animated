<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session10/1243.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session10/1243.jpg"
      class="session-background"
    />
    <div class="text-box-green" id="box-1">Billie looks up to her mum.</div>
    <div class="text-box-green" id="box-2">My mum helps me to be <br>brave
      when I go school.</div>
    <audio autoplay src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/ambient/quiet-park.mp3" ref="audio"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session10/Session10_Page7.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session10Page7',
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
      anime({
        targets: '.text-box-green',
        opacity: 1,
        easing: 'linear',
        duration: 500,
        delay: 500
      });
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {
    this.$refs.audio.volume = 0.6;
  }
}
</script>

<style scoped>
.text-box-green {
  position: absolute;
  left: 2vh;
  padding: 1vh 1.5vh;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 3.8vh;
  font-weight: bold;
  opacity: 1;
  width: 49vh;
}
#box-1 {top: 3vh;}
#box-2 {top: 15vh;}
</style>
