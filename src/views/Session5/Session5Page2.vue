<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session5/traffic-light-poster.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session5/traffic-light-poster.jpg"
      class="session-background"
    />
    <div class="text-box">
      <p>We can <strong>choose</strong> our thoughts.</p>
      <p><span id="red-text">Red</span>, unhelpful thoughts make us feel sad and scared.</p>
      <p><span id="green-text">Green</span> helpful thoughts make us feel brave and calm.</p>
    </div>
    <div class="light-box" id="red">Red thought</div>
    <div class="light-box" id="green">Green thought</div>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session5/Session5_Page2.mp3" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session5Page2',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text-box')[0].children;
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: '.text-box', opacity: 1,}, 821)
        .add({targets: text[1], opacity: 1}, 3621)
        .add({targets: text[2], opacity: 1}, 9600)
        .add({targets: '#red', opacity: 1}, 14900)
        .add({targets: '#green', opacity: 1}, 18800)
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
  width: 28%;
  left: 1%;
  top: 20vh;
  padding: 1.5vh;
  background-color: #ffffff;
  opacity: 0;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
}
.text-box p:nth-child(2),
.text-box p:last-child {
  opacity: 0;
}
.text-box p:last-child {
  margin-bottom: 0;
}
.light-box {
  position: absolute;
  right: 7%;
  width: 20%;
  font-size: 4.5vh;
  font-weight: bold;
  color: #ffffff;
  padding: 2.5vh 2.1vh;
  text-align: center;
  opacity: 0;
}
#red {
  background-color: #ff0000;
  top: 22vh;
}
#green {
  background-color: #00ce7c;
  bottom: 2vh;
}
#red-text {
  color: #ff0000;
}
#green-text {
  color: #00CE7C;
}
</style>