<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Your Support Teams</h1>
      <p id="para">Support teams try to help you. </p>
    </div>
    <div class="image-container">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session11/surfing_child.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session11/surfing_child.jpg"
        class="images"
      />
      <div class="text" id="para-1">Mum is helping Zoe surf.</div>
    </div>
    <div class="image-container" id="right">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session11/Hugging_Lama_Girl.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session11/Hugging_Lama_Girl.jpg"
        class="images"
      />
      <div class="text" id="para-2" >They give each other love.</div>
    </div>
    <audio autoplay ref="audio" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/sunset.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session11/Session11_Page5.mp3" ref="voice"/>
    <div class="page-number" id="page-light">258</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session11Page5',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text');
      let animation = anime.timeline({easing: 'linear', duration: 500,})
      animation
        .add({targets: '#para',opacity: 1}, 4200)
        .add({targets: text[0], opacity: 1}, 15500)
        .add({targets: text[1], opacity: 1}, 18700)
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
    this.$refs.audio.volume = 0.1;
  }
}
</script>

<style scoped>
.image-container {
  position: absolute;
  bottom: 0;
  width: 49.5%;
  height: 70vh;
}
.text {
  position: absolute;
  bottom: 2vh;
  background-color: #00CE7C;
  padding: 1vh;
  color: #ffffff;
  font-size: 4vh;
  font-weight: bold;
  text-align: center;
  opacity: 1;
}
#para-1 {left: 18%;font-size: 4vh;width: 79%;}
#para-2 {right: 18%;font-size: 4vh;}
.images {
  width: 100%;
  height: 100%;
}
#right {
  right: 0;
}
.text-box {
  position: absolute;
  padding: 1vh;
}
.text-box h1 {
  font-size: 5vh;
  margin-bottom: 0;
  font-weight: bold;
}
.text-box p {
  font-size: 4vh;
  opacity: 0;
}
</style>
