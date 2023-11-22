<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/1274-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/1274-resized.jpg"
      class="page-image" id="image-1"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/304-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/304-resized.jpg"
      class="page-image" id="image-2"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/440-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/440-resized.jpg"
      class="page-image" id="image-3"
    />
    <div class="text-box">
      <h1>Our food</h1>
      <p>Talk about your food.</p>
      <p>Ask your friends about their food.</p>
    </div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/33Animated_Book_Page32.mp3" ref="voice"/>
    <div class="page-number" id="page-light">37</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
export default {
  name: "Session1Page26",
  components: {ImageComponent},
  methods: {
    animateText() {
      let texts = document.getElementsByClassName("text-box")[0];
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500,
      });
      animation
        .add({
          targets: texts.children[0],
          color: '#000',
        }, 590)
        .add({
          targets: texts.children[1],
          color: '#000',
        }, 2008)
        .add({
          targets: texts.children[2],
          color: '#000',
        }, 4353)
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
