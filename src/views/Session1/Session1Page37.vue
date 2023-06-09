<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session1/grass-background.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session1/grass-background.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Try Everyday</h1>
      <p>- If you were a grown up for a day, what would you do?</p>
      <p>- Share your answer with a grown up and ask them about
        when they were children - what they liked to do, eat and play.</p>
      <p>- Ask them to draw the home they lived in as a child.</p>
      <p>- Each night, share a happy memory from your day with your family or friends.</p>
      <p>- Practise being BRAVE:</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Look people in the eye and smile.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Use a brave and strong voice.</p>
      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&bull; &nbsp;Try your best and give it a go.</p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/530415__klankbeeld__forest-summer-roond-020-200619-0186.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/44Animated_Book_Page43.mp3" ref="voice"/>
    <div class="page-number" id="page-light">56</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from 'animejs'
export default {
  name: "Session1Page37",
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({
        easing: 'linear',
        duration: 500
      })
      animation
        .add({
          targets: ".text-box",
          opacity: 0.9,
        }, 300)
        .add({
          targets: text[1],
          opacity: 1,
        }, 2394)
        .add({
          targets: text[2],
          opacity: 1
        }, 6489)
        .add({
          targets: text[3],
          opacity: 1
        }, 16351)
        .add({
          targets: text[4],
          opacity: 1
        }, 20770)
        .add({
          targets: text[5],
          opacity: 1
        }, 27000)
        .add({
          targets: text[6],
          opacity: 1
        }, 29500)
        .add({
          targets: text[7],
          opacity: 1
        }, 32200)
        .add({
          targets: text[8],
          opacity: 1
        }, 35500)
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
.text-box {
  position: absolute;
  width: 90%;
  left: 5%;
  top: 1vh;
  background-color: #ffffff;
  opacity: 0;
  padding: 2vh 3vh;
}
.text-box h1 {
  text-align: center;
  margin-bottom: 1vh;
  font-size: 6vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 2vh;
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>