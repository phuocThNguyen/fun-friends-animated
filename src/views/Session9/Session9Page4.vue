<template>
  <div class="interactive-container">
    <div class="image-container">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session9/770.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session9/770.jpg"
        class="image"
      />
      <p class="image-text" id="para-1">2. Brave Annie <br>Trying to read a new book</p>
    </div>
    <div class="image-container">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session9/2338.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session9/2338.jpg"
        class="image"
      />
      <p class="image-text" id="para-2">Annie's Reward <br>Special time with her mom</p>
    </div>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session9/Session9_Page4.mp3" ref="voice"/>
    <div class="page-number" id="page-light">219</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session9Page4',
  components: {ImageComponent},
  methods: {
    animateText() {
      let images = document.querySelectorAll('.image-text');
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: images[0], opacity: 1}, 690)
        .add({targets: images[1], opacity: 1}, 4500)
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
  bottom: 0;
  width: 49%;
  height: 100vh;
  opacity: 1
}
.image-container .image {
  width: 100%;
  height: 100%;
}
.image-container p {
  display: block;
  position: absolute;
  bottom: 1vh;
  width: 78%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh;
  text-align: center;
  font-size: 3.8vh;
  font-weight: bold;
  margin-bottom: 0;
  opacity: 0;
}
#para-1 {left: 18%;}
#para-2 {right: 18%;}
.image-container:nth-of-type(2) {
  right: 0;
}
</style>