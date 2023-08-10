<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/84428-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/84428-resized.jpg"
      class="session-background"
    />
    <div class="text-box">
      <p class="text">
        <span>Talk about your family and the places they come from.</span>
        <span> Listen carefully when those around you are talking.</span>
        <span> There are differences in how we look,</span>
        <span> what we eat,</span>
        <span> where we live,</span>
        <span> the clothes we wear</span>
        <span> and the language we speak,</span>
        <span><strong> but we all share the same feelings.</strong></span>
      </p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Session1_Page30.mp3" ref="voice"/>
    <div class="page-number" id="page-light">30</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session1Page19",
  components: {ImageComponent},
  methods: {
    animateText() {
      let paraArray = document.getElementsByClassName('text')[0];
      let animation = anime.timeline({duration: 500, easing:'linear'});
      animation
        .add({targets: ".text-box", opacity: 0.95}, 500)
        .add({targets: paraArray.children[0], color: '#000',}, 500)
        .add({targets: paraArray.children[1], color: '#000',}, 5200)
        .add({targets: paraArray.children[2], color: '#000',}, 10000)
        .add({targets: paraArray.children[3], color: '#000',}, 13200)
        .add({targets: paraArray.children[4], color: '#000',}, 15000)
        .add({targets: paraArray.children[5], color: '#000',}, 17000)
        .add({targets: paraArray.children[6], color: '#000',}, 18700)
        .add({targets: paraArray.children[7], color: '#000',}, 20900)
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
  height: auto;
  width: 81%;
  padding: 2vh;
  background-color: #ffffff;
  position: absolute;
  top: 4vh;
  left: 10%;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center
}
.text-box p {
  color: #ffffff;
  font-size: 6vh;
  margin-bottom: 0;
}
</style>