<template>
  <div class="interactive-container">
    <div class="image-container" id="container-1">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/cute-little-girl-garden-with-colored-daffodils.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/cute-little-girl-garden-with-colored-daffodils.jpg"
        class="page-image" id="image-1"
      />
    </div>
    <div class="image-container" id="container-2">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/concept-saving-world-boy-planting-trees.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/concept-saving-world-boy-planting-trees.jpg"
        class="page-image" id="image-2"
      />
    </div>
    <div class="text-box">
      <h1>5. Touch</h1>
      <p>We feel with our skin. What can we feel?</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page17.mp3" ref="voice"/>
<!--    <div class="page-number" id="page-dark">{{ page }}</div>-->
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session4Page17',
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
        targets: '.text-box',
        opacity: 1,
        duration: 500,
        delay: 500,
        easing: 'linear'
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
  mounted() {}
}
</script>

<style scoped>
.image-container {
  position: absolute;
  width: 50%;
  height: 100%;
  overflow: hidden;
  top: 0
}
#container-2 {right: 0}
.page-image {
  position: absolute;
  height: 100%;
}
#image-1{left:-17vh}
#image-2{left:-50vh}
h1 { font-size: 5vh;margin-bottom: 0; }
p { font-size: 4vh;margin-bottom: 0; }
.text-box {
  position: absolute;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1.5vh 2vh;
  bottom: 2vh;
  left: 30vh;
  opacity: 0;
}
</style>