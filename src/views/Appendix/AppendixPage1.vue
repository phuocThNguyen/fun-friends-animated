<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/appendix1.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/appendix1.jpg"
      class="session-background"
    />
    <div class="title">Appendix 1: 'Green' thoughts to Enjoy</div>
    <p class="text">Instruction: Click on each cloud to see a green thought</p>
    <div class="cloud-text-containers">
      <div class="cloud-text-container" @click="revealText(1)" id="cloud-1">
        <p class="cloud-text pt-3" id="text-1">I'm going to <br>have a great day.</p>
      </div>
      <div class="cloud-text-container" @click="revealText(2)" id="cloud-2">
        <p class="cloud-text pt-4" id="text-2">I can have fun when <br>I run, swim and <br>bike ride.</p>
      </div>
      <div class="cloud-text-container" @click="revealText(3)" id="cloud-3">
        <p class="cloud-text pt-4" id="text-3">I'll try my best.</p>
      </div>
      <div class="cloud-text-container" @click="revealText(4)" id="cloud-4">
        <p class="cloud-text pt-3" id="text-4">I can ask <br>someone <br>to help me.</p>
      </div>
      <div class="cloud-text-container" @click="revealText(5)" id="cloud-5">
        <p class="cloud-text pt-3" id="text-5">I'm going <br>to be brave.</p>
      </div>
      <div class="cloud-text-container" @click="revealText(6)" id="cloud-6">
        <p class="cloud-text pt-3" id="text-6">I can be kind <br>to everyone.</p>
      </div>
      <div class="cloud-text-container" @click="revealText(7)" id="cloud-7">
        <p class="cloud-text pt-4" id="text-7">I'll give it a go.</p>
      </div>
      <div class="cloud-text-container" @click="revealText(8)" id="cloud-8">
        <p class="cloud-text pt-3" id="text-8">I like playing <br>with my friends.</p>
      </div>
    </div>
    <div class="audios">
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/ukulele-beach-doug-maxwell-children-s-music-no-copyright-music.mp3" autoplay loop ref="music"/>
      <audio @loadeddata="playVoiceOver" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/Session12_Page255.mp3" ref="voice"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/green-1.mp3" id="voice-1"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/green-2.mp3" id="voice-2"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/green-3.mp3" id="voice-3"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/green-4.mp3" id="voice-4"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/green-5.mp3" id="voice-5"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/green-6.mp3" id="voice-6"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/green-7.mp3" id="voice-7"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/green-8.mp3" id="voice-8"/>
      <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
    </div>
    <div class="page-number" id="page-light">276</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";
export default {
  name: "AppendixPage1",
  components: {ImageComponent},
  data() {
    return {
      playing: null,
      ids: [1,2,3,4,5,6,7,8],
    }
  },
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    revealText(id) {
      this.$refs.voice.pause();
      if (this.ids.includes(id)) {
        anime({targets: '#text-'+id, opacity: 1, easing: 'linear', duration: 500});
        this.playVoice(id);
        this.ids = this.ids.filter(x => x !== id);
      }
    },
    playVoice(id) {
      if (this.playing !== null) this.playing.pause();
      this.playing = document.querySelector('#voice-'+id);
      this.playing.play();
      this.$refs.clickSound.play();
    }
  },
  mounted() {this.$refs.music.volume = 0.2}
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@600&display=swap');
.text {
  position: absolute;
  top: 7vh;
  width: 100%;
  text-align: center;
  font-size: 3vh;
}
.title {
  position: absolute;
  font-size: 4vh;
  font-weight: bold;
  width: 100%;
  text-align: center;
  top: 2vh;
}
.cloud-text-containers {position: absolute}
.cloud-text-container {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cloud-text {
  position: absolute;
  text-align: center;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  color: #00CE7C;
  font-size: 3.5vh;
  line-height: 4vh;
  opacity: 0;
}
#cloud-1 {width: 33.5vh;height: 24vh;left: 4.4vh;top: 8.7vh;}
#cloud-2 {width: 37vh;height: 30.5vh;left: 48.1vh;top: 12.7vh;}
#cloud-3 {width: 33.5vh;height: 24vh;left: 95vh;top: 8.7vh;}
#cloud-4 {width: 35.2vh;height: 24vh;left: 17.3vh;top: 33.5vh;}
#cloud-5 {width: 35.2vh;height: 24vh;left: 80.4vh;top: 33.5vh;}
#cloud-6 {width: 33.5vh;height: 27.9vh;left: 4.4vh;top: 58vh;}
#cloud-7 {width: 33.5vh;height: 28.5vh;left: 49.8vh;top: 58vh;}
#cloud-8 {width: 33.5vh;height: 27.9vh;left: 95vh;top: 58vh;}
</style>