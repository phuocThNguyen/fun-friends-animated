<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/background.png"
      src-placeholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/background.png"
      class="page-image"
    />
    <div class="text-box">Click your favourite skills</div>
    <div class="text-container">
      <img @click="showThumbs(1)" class="text" id="text-1" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/text1.png" alt="text">
      <img @click="showThumbs(2)" class="text" id="text-2" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/text2.png" alt="text">
      <img @click="showThumbs(3)" class="text" id="text-3" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/text3.png" alt="text">
      <img @click="showThumbs(4)" class="text" id="text-4" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/text4.png" alt="text">
      <img @click="showThumbs(5)" class="text" id="text-5" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/text5.png" alt="text">
      <img @click="showThumbs(6)" class="text" id="text-6" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/text6.png" alt="text">
      <img @click="showThumbs(7)" class="text" id="text-7" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/text7.png" alt="text">
      <img @click="showThumbs(8)" class="text" id="text-8" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/text8.png" alt="text">
      <img @click="showThumbs(9)" class="text" id="text-9" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/text9.png" alt="text">
    </div>
    <div class="thumbs-container">
      <img class="thumbs" id="thumb-1" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/thumbsup.png" alt="thumbs">
      <img class="thumbs" id="thumb-2" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/thumbsup.png" alt="thumbs">
      <img class="thumbs" id="thumb-3" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/thumbsup.png" alt="thumbs">
      <img class="thumbs" id="thumb-4" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/thumbsup.png" alt="thumbs">
      <img class="thumbs" id="thumb-5" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/thumbsup.png" alt="thumbs">
      <img class="thumbs" id="thumb-6" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/thumbsup.png" alt="thumbs">
      <img class="thumbs" id="thumb-7" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/thumbsup.png" alt="thumbs">
      <img class="thumbs" id="thumb-8" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/thumbsup.png" alt="thumbs">
      <img class="thumbs" id="thumb-9" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/thumbsup.png" alt="thumbs">
    </div>
    <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
    <audio ref="audio" autoplay src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/Session13_Appendix_Page4.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">{{ page }}</div>
  </div>
</template>

<script>
import anime from "animejs";
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";

export default {
  name: 'AppendixPage5',
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
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
    },
    showThumbs(id) {
      this.$refs.clickSound.play();
      anime({
        targets: '#thumb-'+id,
        opacity: 1,
        easing: 'linear',
        duration: 300,
      })
    }
  },
  mounted() {
    this.$refs.audio.volume = 0.05;
  }
}
</script>

<style scoped>
.thumbs-container {position: absolute;}
.thumbs {
  position: absolute;
  height: 7vh;
  left: 3vh;
  opacity: 0;
}
#thumb-1 {top: 15vh}
#thumb-2 {top: 23.1vh}
#thumb-3 {top: 31.2vh}
#thumb-4 {top: 39.3vh}
#thumb-5 {top: 47.4vh}
#thumb-6 {top: 55.5vh}
#thumb-7 {top: 63.6vh}
#thumb-8 {top: 71.7vh}
#thumb-9 {top: 79.8vh;left:15vh}
.text-container {position: absolute;}
.text-box {
  position: absolute;
  width: 100%;
  text-align: center;
  top: 10vh;
  color: white;
  font-weight: bold;
  font-size: 3vh;
}
.text {
  position: absolute;
  left: 11vh;
  opacity: 1;
  height: 3vh;
}
#text-1 {top: 19vh}
#text-2 {top: 27vh}
#text-3 {top: 35vh}
#text-4 {top: 43vh}
#text-5 {top: 51vh}
#text-6 {top: 59vh}
#text-7 {top: 67vh}
#text-8 {top: 75vh}
#text-9 {top: 83vh;left:23vh}
.page-image {
  position: absolute;
  width: 102%;
  top: -.1vh;
  left: -.1vh
}
</style>