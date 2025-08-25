<template>
  <div class="interactive-container">
    <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/pexels-asphotograpy-96622.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/pexels-asphotograpy-96622.jpg"
        class="session-background"
    />
    <div class="text-box">
      <p>What feelings are you blowing away?<br>Click your choices:</p>
    </div>
    <div class="button-container">
      <button class="btn-style" @click="emotionClicked('happy')">Happy</button>
      <button class="btn-style" @click="emotionClicked('sad')">Sad</button>
      <button class="btn-style" @click="emotionClicked('worried')">Worried</button>
      <button class="btn-style" @click="emotionClicked('angry')">Angry</button>
    </div>
    <img
      v-for="img in emotionImages"
      :key="img.id"
      :src="getImageUrl(img.emotion)"
      class="emotion-image"
      :style="{ left: img.left + '%' }"
      alt="bubble"
    />
    <audio src="../../assets/sounds/all/click-sound.mp3" ref="clickSound"/>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/children-s-music-no-copyright-royalty-free-happy-upbeat-kids-barroom-ballet.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/Session3_Page14.mp3" ref="voice"/>
  </div>
</template>

<script>
import anime from "animejs";
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";

export default {
  name: "Session3Page13",
  components: {ImageComponent},
  data() {
    return {
      emotionImages: []
    }
  },
  methods: {
    getImageUrl(emotion) {
      return require(`@/assets/images/session3/${emotion}_bubble.png`);
    },
    animateText() {
      anime({
        targets: ".text-box",
        opacity: 1,
        duration: 500,
        delay: 500,
        easing: 'linear'
      })
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
    },
    emotionClicked(emotion) {
      this.$refs.clickSound.play();
      const id = Date.now() + Math.random(); // unique ID
      const left = Math.random() * 80 + 10;  // 10% - 90% horizontal

      this.emotionImages.push({ id, emotion, left });

      setTimeout(() => {
        this.emotionImages = this.emotionImages.filter(img => img.id !== id);
      }, 3000);
    }
  },
  created() {
  },
  mounted() {
    this.setAudioVolumeLevel(0.4);
  }
}
</script>

<style scoped>
@keyframes floatUpWobble {
  0% {
    transform: translate(-50%, 100vh) rotate(0deg);
    opacity: 1;
  }
  25% {
    transform: translate(-48%, 70vh) rotate(30deg);
  }
  50% {
    transform: translate(-52%, 40vh) rotate(-30deg);
    opacity: 0.8;
  }
  75% {
    transform: translate(-49%, 10vh) rotate(30deg);
  }
  100% {
    transform: translate(-51%, -100vh) rotate(-30deg);
    opacity: 0;
  }
}
@keyframes floatUp {
  0% {
    transform: translate(-50%, 100vh) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(-50%, -50vh) scale(1.1);
    opacity: 0.8;
  }
  100% {
    transform: translate(-50%, -120vh) scale(1.2);
    opacity: 0;
  }
}
.emotion-image {
  position: absolute;
  width: 10vh;
  height: auto;
  animation: floatUp 8s ease-in forwards;
  pointer-events: none;
}
.button-container {
  position: absolute;
  top: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}
.btn-style {
  background-color: #00ce7c;
  border: none;
  width: 20vh;
  text-align: center;
  height: 6vh;
  border-radius: 5px;
  color: #ffffff;
  font-size: 2.5vh;
  font-weight: bold;
  box-shadow: 0 9px #999;
  z-index: 100;
}
.btn-style:focus,
.btn-style:active {
  outline: 0 !important;
}
.btn-style:active {
  background-color: #009c5d;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.text-box {
  position: absolute;
  left: 15%;
  width: 70%;
  background-color: #000000;
  padding: 1vh;
  opacity: 0;
  text-align: center;
}
.text-box p {
  color: #ffffff;
  font-size: 4vh;
  margin-bottom: 0;
}
</style>