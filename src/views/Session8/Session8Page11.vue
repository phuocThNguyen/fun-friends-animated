<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/67.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/67.jpg"
      class="session-background"
    />
    <div class="text-box">
      <h1>Additional Activity &ndash; Being kind friends</h1>
      <p class="text"><span>The creek is full of life when it rains. The birds
       start singing, water trickles down the stream and
       the trees glow bright green. </span><span>Zoe, Matilda and Daniel
       want to cross the creek by themselves. Poppy explained
       it is more fun to do it as a team and help each other.
       </span><span>If one of them slips in the water everyone can help.
       Play "I spy with my little eye" by paying attention
       with your five senses. </span><span>Do you think Zoe, Matilda and
       Daniel are kind friends? Do you think that these are
       '<span class="red">red</span>' or '<span class="green">green</span>' actions?
      </span></p>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Water-Stream-Sound-Effect-Amplified.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page11.mp3" ref="voice"/>
    <div class="page-number" id="page-light">206</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session8Page11',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.querySelector('.text').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box', opacity: 0.9}, 1)
        .add({targets: text[0], color: '#000'}, 1)
        .add({targets: text[1], color: '#000'}, 1)
        .add({targets: text[2], color: '#000'}, 1)
        .add({targets: text[3], color: '#000'}, 1)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
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
  width: 80%;
  left: 10%;
  top: 10vh;
  padding: 3.5vh;
  background-color: #ffffff;
  opacity: 0;
}
.text-box h1 {
  text-align: center;
  font-size: 5vh;
  font-weight: bold;
  margin-bottom: 2vh;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
  color: #ffffff;
}
.green {color: #00CE7C}
.red {color: red}
</style>