<template>
  <div class="interactive-container" id="alt-bg">
    <h1 class="title">We all have fun!</h1>
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/0000a8cd_medium.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/0000a8cd_medium.jpg"
      class="images" id="img-1"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/Beach_Children.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/Beach_Children.jpg"
      class="images" id="img-2"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/Gingernut_ranger_perching_on_the_chicken_swing_in_garden.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/Gingernut_ranger_perching_on_the_chicken_swing_in_garden.png"
      class="images" id="img-3"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/78621.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/78621.png"
      class="images" id="img-4"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/Playing_Lambs_01.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/Playing_Lambs_01.png"
      class="images" id="img-5"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/70160.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/70160.png"
      class="images" id="img-6"
    />
    <audio ref="audio" autoplay src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/fun-kids-playful-comic-carefree-game-happy-positive-music.mp3"/>
    <audio @loadeddata="playVoiceOver" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/Session13_Appendix_Page8.mp3" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'AppendixPage9',
  components: {ImageComponent},
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
  },
  mounted() {
    this.$refs.audio.volume = 0.05;
  }
}
</script>

<style scoped>
.title {
  position: absolute;
  width: 100%;
  text-align: center;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 5.6vh;
  font-weight: bold;
}
#alt-bg {
  background-color: #00CE7C;
}
.images {
  position: absolute;
  width: 40vh;
  height: 40vh;
}
img:nth-of-type(1) { top: 7.5vh;left: 2%; }
img:nth-of-type(2) { top: 7.5vh;left: 35%; }
img:nth-of-type(3) { top: 7.5vh;right: 2%; }
img:nth-of-type(4) { top: 50vh;left: 2%; }
img:nth-of-type(5) { top: 50vh;left: 35%; }
img:nth-of-type(6) { top: 50vh;right: 2%; }
</style>