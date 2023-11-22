<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/112-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/112-resized.jpg"
      alt="house-1"
      class="page-image" id="image-1"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/225-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/225-resized.jpg"
      alt="house-2"
      class="page-image" id="image-2"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/beautiful-street-historical-town-pedraza-segovia-spain.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/beautiful-street-historical-town-pedraza-segovia-spain.jpg"
      alt="house-3"
      class="page-image" id="image-3"
    />
    <div class="text-box">
      <h1>Our homes</h1>
      <p>Talk about your home.</p>
      <p>Ask your friends about their homes.</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/29Animated_Book_Page28.mp3" ref="voice"/>
    <div class="page-number" id="page-light">32</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
export default {
  name: "Session1Page22",
  components: {ImageComponent},
  methods: {
    animateText() {
      let texts = document.getElementsByClassName('text-box')[0];
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
      });
      animation
        .add({
          targets: texts.children[0],
          color: '#000',
        }, 500)
        .add({
          targets: texts.children[1],
          color: '#000',
        }, 2345)
        .add({
          targets: texts.children[2],
          color: '#000',
        }, 4109)
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
.page-image {
  position: absolute;
}
#image-1 {left: 0;bottom: 0;width: 49%;height: 70vh;}
#image-2 {top: 0;right: 0;width: 49%;height: 44vh;}
#image-3 {bottom: 0;right: 0;width: 49%;height: 45vh;}
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
</style>