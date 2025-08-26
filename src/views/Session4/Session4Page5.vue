<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/5183-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/5183-resized.jpg"
      class="images"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session4/2778146-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session4/2778146-resized.jpg"
      class="images"
    />
    <div class="text-box">
      <h1>What are these children doing to relax and calm down?</h1>
      <p>Discuss with your friends</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session4/Session4_Page5.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session4Page5',
  components: {ImageComponent},
  methods: {
    animateText() {
      let images = document.getElementsByClassName('images');
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
        delay: 500
      });
      animation
        .add({
          targets: images[0],
          opacity: 1
        })
        .add({
          targets: images[1],
          opacity: 1
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
.text-box {
  position: absolute;
  padding: 1.5vh;
}
.text-box h1 {
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 0;
}
.text-box p {
  font-size: 3vh;

}
.images {
  position: absolute;
  width: 49.5%;
  height: 80vh;
  bottom: 0;
  opacity: 0;
}
.images:nth-of-type(2) {
  right: 0;
}
</style>