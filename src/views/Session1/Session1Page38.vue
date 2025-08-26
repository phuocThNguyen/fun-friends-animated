<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/grass-background.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/grass-background.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Every day remember to:</h1>
      <p>- Play outside.</p>
      <p>- Go to bed early.</p>
      <p>- Practise relaxing for 5 minutes in a &nbsp;&nbsp;&nbsp;quiet place.</p>
      <p>- Pay attention to happy things.</p>
      <p>- Say thank you for happy things.</p>
    </div>
    <div class="image-container">
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
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/530415__klankbeeld__forest-summer-roond-020-200619-0186.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/45Animated_Book_Page44.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from 'animejs'
export default {
  name: "Session1Page38",
  components: {ImageComponent},
  props: {
    startPage: Number,
    pageNum: Number,
  },
  created (){
    this.setPageNumber()
  },
  methods: {
    setPageNumber() {
      this.page = this.pageNum + this.startPage - 1;
    },
    animateText() {
      let images = document.querySelectorAll('.action-image');
      let texts = document.querySelector('.text-box').children;
      let animation = anime.timeline({easing: 'linear', duration: 500});
      animation
        .add({targets: ".text-box", opacity: 0.95}, 500)
        .add({targets: texts[1], opacity: 1}, 2567)
        .add({targets: images[0], opacity: 1}, 2567)
        .add({targets: texts[2], opacity: 1}, 4711)
        .add({targets: images[1], opacity: 1}, 4711)
        .add({targets: texts[3], opacity: 1}, 6885)
        .add({targets: images[2], opacity: 1}, 6885)
        .add({targets: texts[4], opacity: 1}, 12900)
        .add({targets: images[3], opacity: 1}, 12900)
        .add({targets: texts[5], opacity: 1}, 15300)
        .add({targets: images[4], opacity: 1}, 15300)
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
    this.setAudioVolumeLevel(0.4);
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
  width: 50%;
  background-color: #ffffff;
  opacity: 0;
  padding: 2.8vh;
  top: 2vh;
  left: 2%;
}
.text-box h1 {
  margin-bottom: 1vh;
  font-size: 5vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 1vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>