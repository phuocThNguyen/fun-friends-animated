<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session7/background-7.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session7/background-7.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Every day remember to:</h1>
      <p>&bull; Be kind to all living beings.</p>
      <p>&bull; Play outside.</p>
      <p>&bull; Have plenty of sleep.</p>
      <p>&bull; Drink and eat foods that are healthy.</p>
      <p>&bull; Practise relaxing without screens.</p>
      <p>&bull; Pay attention to happy things and what you
        can see, hear, smell, taste and feel.</p>
      <p>&bull; Say thank you for happy times.</p>
    </div>
    <div class="image-container">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/closeup-cute-asian-kid-milking-calf-by-bottle-milk-farm-background.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/closeup-cute-asian-kid-milking-calf-by-bottle-milk-farm-background.jpg"
        class="action-image"
      />
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/811-resized.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/811-resized.jpg"
        class="action-image"
      />
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session5/85693.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session5/85693.jpg"
        class="action-image"
      />
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/6796-resized.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/6796-resized.jpg"
        class="action-image"
      />
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/4082-resized.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/4082-resized.jpg"
        class="action-image"
      />
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/2749-resized.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/2749-resized.jpg"
        class="action-image"
      />
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/thank-you.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/thank-you.jpg"
        class="action-image"
      />
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Relaxing-Forest-Sound-Effect.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session11/Session11_Page9.mp3" ref="voice"/>
    <div class="page-number" id="page-light">262</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session11Page9',
  components: {ImageComponent},
  methods: {
    animateText() {
      let texts = document.querySelector('.text-box').children;
      let images = document.querySelector('.image-container').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: ".text-box", opacity: 1}, 570)
        .add({targets: texts[1], opacity: 1}, 3238)
        .add({targets: images[0], opacity: 1}, 3238)
        .add({targets: texts[2], opacity: 1}, 6128)
        .add({targets: images[1], opacity: 1}, 6128)
        .add({targets: texts[3], opacity: 1}, 7609)
        .add({targets: images[2], opacity: 1}, 7609)
        .add({targets: texts[4], opacity: 1}, 10307)
        .add({targets: images[3], opacity: 1}, 10307)
        .add({targets: texts[5], opacity: 1}, 14129)
        .add({targets: images[4], opacity: 1}, 14129)
        .add({targets: texts[6], opacity: 1}, 17570)
        .add({targets: images[5], opacity: 1}, 17570)
        .add({targets: texts[7], opacity: 1}, 26647)
        .add({targets: images[6], opacity: 1}, 26647);
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {
    this.setAudioVolumeLevel(0.6);
  }
}
</script>

<style scoped>
.action-image {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.image-container {
  position: absolute;
  top: 7vh;
  right: 2%;
  width: 44%;
  height: 40vh;
}
.text-box {
  position: absolute;
  background-color: rgba(255,255,255,0.8);
  opacity: 0;
  padding: 1vh;
  top: 1%;
  left: 1%;
  width: 50%;
}
.text-box h1 {
  margin-bottom: 1vh;
  font-size: 5vh;
}
.text-box p {
  font-size: 4vh;
  padding-left: 0;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>