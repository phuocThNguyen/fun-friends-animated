<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/14643-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/14643-resized.jpg"
      class="page-image" id="image-1"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/stockvault-carefree115845-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/stockvault-carefree115845-resized.jpg"
      class="page-image" id="image-1"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/13151-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/13151-resized.jpg"
      class="page-image" id="image-1"
    />
    <div class="text-box">
      <h1>Our clothes</h1>
      <p>Talk about your clothes.</p>
      <p>Ask your friends about their clothes.</p>
    </div>
    <div class="text">
      <p>Different countries may use different clothes.</p>
      <p>It is normal that we are all different!</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/36Animated_Book_Page35.mp3" ref="voice"/>
    <div class="page-number" id="page-light">44</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
export default {
  name: "Session1Page29",
  components: {ImageComponent},
  methods: {
    animateText() {
      let texts = document.getElementsByClassName("text-box")[0];
      let animation = anime.timeline({easing: 'linear', duration: 700,});
      animation
        .add({targets: texts.children[0], color: '#000'}, 771)
        .add({targets: texts.children[1], color: '#000'}, 2312)
        .add({targets: texts.children[2], color: '#000'}, 4500)
        .add({targets: '.text', opacity: 1}, 7500)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {},
};
</script>

<style scoped>
.interactive-container img {
  position: absolute;
}
.interactive-container img:nth-child(1) {
  left: 0;
  bottom: 0;
  width: 49%;
  height: 70vh;
}
.interactive-container img:nth-child(2) {
  top: 0;
  right: 0;
  width: 49%;
  height: 44vh;
}
.interactive-container img:nth-child(3) {
  bottom: 0;
  right: 0;
  width: 49%;
  height: 45vh;;
}
.text-box {
  color: #ffffff;
  padding: 0 1vh;
}
.text-box h1 {
  font-size: 6vh;
  margin-bottom: 0;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
}
.text {
  position: absolute;
  background-color: #00CE7C;
  color: #fff;
  font-size: 3vh;
  bottom: 39vh;
  width: 65.2vh;
  right: 0;
  padding: 1vh;
  font-weight: bold;
  text-align: center;
  opacity: 0;
}
.text p {margin-bottom: 0}
</style>
