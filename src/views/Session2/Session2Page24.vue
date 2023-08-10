<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session2/background.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session2/background.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Everyday remember to:</h1>
      <p>&nbsp;- Be kind to all living beings.</p>
      <p>&nbsp;- Play outside.</p>
      <p>&nbsp;- Have plenty of sleep.</p>
      <p>&nbsp;- Drink plenty of water.</p>
      <p>&nbsp;- Eat healthy foods.</p>
      <p>&nbsp;- Practise relaxing without screens.</p>
      <p>&nbsp;- Pay attention to happy things and what you
      can see, hear, smell, taste and feel.</p>
      <p>&nbsp;- Say thank you for happy times.</p>
    </div>
    <div class="image-container">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/closeup-cute-asian-kid-milking-calf-by-bottle-milk-farm-background.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/closeup-cute-asian-kid-milking-calf-by-bottle-milk-farm-background.jpg"
        class="action-image"
      />
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/cute-little-boy-with-soccer-ball-park-sunny-day.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/cute-little-boy-with-soccer-ball-park-sunny-day.jpg"
        class="action-image"
      />
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session5/85693.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session5/85693.jpg"
        class="action-image"
      />
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session2/glass-water-macro-shot.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session2/glass-water-macro-shot.jpg"
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
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Water-Stream-Sound-Effect-Amplified.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session2/Session2_Page22.mp3" ref="voice"/>
    <div class="page-number" id="page-light">85</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session2Page22",
  components: {ImageComponent},
  methods: {
    animateText() {
      let texts = document.querySelector('.text-box').children;
      let images = document.querySelector('.image-container').children;
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear'
      });
      animation
        .add({
          targets: ".text-box",
          opacity: 1,
        }, 581)
        .add({
          targets: texts[1],
          opacity: 1,
        }, 3238)
        .add({
          targets: images[0],
          opacity: 1,
        }, 3238)
        .add({
          targets: texts[2],
          opacity: 1,
        }, 6119)
        .add({
          targets: images[1],
          opacity: 1,
        }, 6119)
        .add({
          targets: texts[3],
          opacity: 1,
        }, 7639)
        .add({
          targets: images[2],
          opacity: 1,
        }, 7639)
        .add({
          targets: texts[4],
          opacity: 1,
        }, 9700)
        .add({
          targets: images[3],
          opacity: 1,
        }, 9700)
        .add({
          targets: texts[5],
          opacity: 1,
        }, 11900)
        .add({
          targets: images[4],
          opacity: 1,
        }, 11900)
        .add({
          targets: texts[6],
          opacity: 1,
        }, 14102)
        .add({
          targets: images[5],
          opacity: 1,
        }, 14102)
        .add({
          targets: texts[7],
          opacity: 1,
        }, 17570)
        .add({
          targets: images[6],
          opacity: 1,
        }, 17570)
        .add({
          targets: texts[8],
          opacity: 1,
        }, 26630)
        .add({
          targets: images[7],
          opacity: 1,
        }, 26630)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
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
    this.setAudioVolumeLevel(0.3);
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
  background-color: rgba(255,255,255,0.9);
  width: 47%;
  height: auto;
  left: 1%;
  top: 1vh;
  padding: 2vh;
  opacity: 0;
}
.text-box h1 {
  margin-bottom: 1vh;
  font-size: 5vh;
}
.text-box p {
  margin-bottom: 1vh;
  font-size: 3.8vh;
  opacity: 0;
}
</style>