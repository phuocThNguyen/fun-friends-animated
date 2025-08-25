<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session5/background-5.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session5/background-5.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Every day remember to:</h1>
      <p>&nbsp;- Be kind to all living beings.</p>
      <p>&nbsp;- Play outside.</p>
      <p>&nbsp;- Have plenty of sleep.</p>
      <p>&nbsp;- Drink water.</p>
      <p>&nbsp;- Eat healthy food.</p>
      <p>&nbsp;- Take slow breaths and relax.</p>
      <p>&nbsp;- Pay attention to happy things and &nbsp;&nbsp;&nbsp;what you
        can see, hear, smell, &nbsp;&nbsp;&nbsp;taste and feel.</p>
      <p>&nbsp;- Say thank you for happy times.</p>
      <!--   Say 'thank you'   -->
    </div>
    <div class="image-containers">
      <div class="image-container">
        <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/max/home-activity/pexels-ej-agumbay-698816-3546477.jpg"
          srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/min/home-activity/pexels-ej-agumbay-698816-3546477.jpg"
          class="action-image" style="height: 150%;top:-18vh;left: -43vh"
        />
      </div>
      <div class="image-container">
        <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/cute-little-boy-with-soccer-ball-park-sunny-day.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/cute-little-boy-with-soccer-ball-park-sunny-day.jpg"
            class="action-image" style="left: -25vh;"
        />
      </div>
      <div class="image-container">
        <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session5/85693.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session5/85693.jpg"
            class="action-image" style="left: -30vh;"
        />
      </div>
      <div class="image-container">
        <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session2/glass-water-macro-shot.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session2/glass-water-macro-shot.jpg"
            class="action-image" style="left: -23vh;"
        />
      </div>
      <div class="image-container">
        <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/6796-resized.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/6796-resized.jpg"
            class="action-image" style="left: -17vh;"
        />
      </div>
      <div class="image-container">
        <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/4082-resized.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/4082-resized.jpg"
            class="action-image" style="left: -9vh;"
        />
      </div>
      <div class="image-container">
        <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/2749-resized.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/2749-resized.jpg"
            class="action-image" style="left: -27vh;"
        />
      </div>
      <div class="image-container">
        <ImageComponent
            src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session2/thankyou.jpg"
            srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session2/thankyou.jpg"
            class="action-image" style="top: -7vh;height: 124%;"
        />
      </div>
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
      let images = document.querySelector('.image-containers').children;
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
.image-containers {
  position: absolute;
  top: 2vh;
  right: 2vh;
  width: 63vh;
}
.image-container {
  position: absolute;
  height: 76vh;
  width: 100%;
  overflow: hidden;
  opacity: 0;
}
.action-image {
  position: absolute;
  width: auto;
  height: 100%;
}
.text-box {
  position: absolute;
  background-color: rgba(255,255,255,0.9);
  width: 47%;
  height: auto;
  left: 2vh;
  top: 2vh;
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