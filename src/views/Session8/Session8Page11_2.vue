<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session8/67.png"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session8/67.jpg"
      class="session-background"
    />
    <div class="text-box">
      <p>Click on each paper plane to find helpful choices you can make</p>
    </div>
    <div class="plans-container">
      <div class="plan-container" @click="revealText(1)" id="plan-1">
        <div class="paper" id="paper-1"/>
        <svg class="plan" id="paper-plan-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1112.87 821.84">
          <polygon class="cls-pink-2" points="280.98 568.44 1112.87 0 460.55 821.84 280.98 568.44" />
          <polygon class="cls-pink-1" points="280.98 568.44 1112.87 0 0 490.33 280.98 568.44" />
          <polygon class="cls-pink-3" points="409.73 604.67 1112.87 0 460.55 821.84 409.73 604.67" />
          <polygon class="cls-pink-1" points="409.73 604.67 1112.87 0 816.74 717.08 409.73 604.67" />
        </svg>
        <div class="plan-text" id="text-1">Clean the creek</div>
      </div>
      <div class="plan-container" @click="revealText(2)" id="plan-2">
        <div class="paper" id="paper-2"/>
        <svg class="plan" id="paper-plan-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.73 652.13">
          <polygon class="cls-red-2" points="114.33 224.41 961.73 421.95 57.9 486.61 114.33 224.41" />
          <polygon class="cls-red-1" points="114.33 224.41 961.73 421.95 0 0 114.33 224.41" />
          <polygon class="cls-red-3" points="166.44 327.49 961.73 421.95 57.9 486.61 166.44 327.49" />
          <polygon class="cls-red-1" points="166.44 327.49 961.73 421.95 332.52 652.13 166.44 327.49" />
        </svg>
        <div class="plan-text" id="text-2">Take turn <br>sharing any games</div>
      </div>
      <div class="plan-container" @click="revealText(3)" id="plan-3">
        <div class="paper" id="paper-3"/>
        <svg class="plan" id="paper-plan-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.73 652.13">
          <polygon class="cls-blue-2" points="114.33 224.41 961.73 421.95 57.9 486.61 114.33 224.41" />
          <polygon class="cls-blue-3" points="114.33 224.41 961.73 421.95 0 0 114.33 224.41" />
          <polygon class="cls-blue-1" points="166.44 327.49 961.73 421.95 57.9 486.61 166.44 327.49" />
          <polygon class="cls-blue-3" points="166.44 327.49 961.73 421.95 332.52 652.13 166.44 327.49" />
        </svg>
        <div class="plan-text" id="text-3">Help my friend <br>cross the creek</div>
      </div>
      <div class="plan-container" @click="revealText(4)" id="plan-4">
        <div class="paper" id="paper-4"/>
        <svg class="plan" id="paper-plan-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1112.87 821.84">
          <polygon class="cls-purple-2" points="280.98 568.44 1112.87 0 460.55 821.84 280.98 568.44" />
          <polygon class="cls-purple-3" points="280.98 568.44 1112.87 0 0 490.33 280.98 568.44" />
          <polygon class="cls-purple-1" points="409.73 604.67 1112.87 0 460.55 821.84 409.73 604.67" />
          <polygon class="cls-purple-3" points="409.73 604.67 1112.87 0 816.74 717.08 409.73 604.67" />
        </svg>
        <div class="plan-text" id="text-4">Pick up any <br>rubbish and put <br>it in the bin</div>
      </div>
      <div class="plan-container" @click="revealText(5)" id="plan-5">
        <div class="paper" id="paper-5"/>
        <svg class="plan" id="paper-plan-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.73 652.13">
          <polygon class="cls-yellow-2" points="114.33 224.41 961.73 421.95 57.9 486.61 114.33 224.41" />
          <polygon class="cls-yellow-1" points="114.33 224.41 961.73 421.95 0 0 114.33 224.41" />
          <polygon class="cls-yellow-3" points="166.44 327.49 961.73 421.95 57.9 486.61 166.44 327.49" />
          <polygon class="cls-yellow-1" points="166.44 327.49 961.73 421.95 332.52 652.13 166.44 327.49" />
        </svg>
        <div class="plan-text" id="text-5">Join in on the fun</div>
      </div>
      <div class="plan-container" @click="revealText(6)" id="plan-6">
        <div class="paper" id="paper-6"/>
        <svg class="plan" id="paper-plan-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 961.73 652.13">
          <polygon class="cls-white-2" points="114.33 224.41 961.73 421.95 57.9 486.61 114.33 224.41" />
          <polygon class="cls-white-1" points="114.33 224.41 961.73 421.95 0 0 114.33 224.41" />
          <polygon class="cls-white-3" points="166.44 327.49 961.73 421.95 57.9 486.61 166.44 327.49" />
          <polygon class="cls-white-1" points="166.44 327.49 961.73 421.95 332.52 652.13 166.44 327.49" />
        </svg>
        <div class="plan-text" id="text-6">Invent games <br>in the creek</div>
      </div>
      <div class="plan-container" @click="revealText(7)" id="plan-7">
        <div class="paper" id="paper-7"/>
        <svg class="plan" id="paper-plan-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1118.57 814.09">
          <polygon class="cls-green-2" points="280.04 558.6 1118.57 0 456.61 814.09 280.04 558.6" />
          <polygon class="cls-green-1" points="280.04 558.6 1118.57 0 0 477.18 280.04 558.6" />
          <polygon class="cls-green-3" points="408.35 596.34 1118.57 0 456.61 814.09 408.35 596.34" />
          <polygon class="cls-green-1" points="408.35 596.34 1118.57 0 814.01 713.54 408.35 596.34" />
        </svg>
        <div class="plan-text" id="text-7">Share the picnic</div>
      </div>
    </div>
    <div class="audios">
      <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Water-Stream-Sound-Effect-Amplified.mp3"/>
      <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/Session8_Page191%2B2.mp3" ref="voice"/>
      <audio src="../../assets/sounds/all/crowd-cheer-applause.mp3" ref="cheer"/>
      <audio src="../../assets/sounds/session7/click-sound.mp3" ref="clickSound"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/plan_1.mp3" id="plan-audio-1"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/plan_2.mp3" id="plan-audio-2"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/plan_3.mp3" id="plan-audio-3"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/plan_4.mp3" id="plan-audio-4"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/plan_5.mp3" id="plan-audio-5"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/plan_6.mp3" id="plan-audio-6"/>
      <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session8/plan_7.mp3" id="plan-audio-7"/>
    </div>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session8Page11_2',
  data() {
    return {
      planArray: [],
      currentAudio: null,
    }
  },
  components: {ImageComponent},
  methods: {
    animateText() {
      let animation = anime.timeline({duration: 500, easing: 'linear'})
      animation
        .add({targets: '.text-box', opacity: 0.9}, 500)
        .add({targets: '.plans-container', color: '#000'}, 2000)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level;
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    readText(id) {
      if (this.currentAudio !== null) this.currentAudio.pause();
      this.currentAudio = document.querySelector('#plan-audio-'+id);
      this.currentAudio.play();
    },
    revealText(id) {
      if (!this.planArray.includes(id)) {
        this.$refs.voice.pause();
        let animation = anime.timeline({easing: 'linear', duration: 200})
        animation
          .add({targets: '#paper-plan-'+id, opacity: 0})
          .add({targets: '#paper-'+id, opacity: 1})
          .add({targets: '#text-'+id, opacity: 1})
        this.$refs.clickSound.play();
        this.readText(id);
        this.planArray.push(id);
        this.playRewardSound();
      }
    },
    playRewardSound() {
      if (this.planArray.length === 7) this.$refs.cheer.play();
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
.plans-container {position: absolute}
.plan-container {position: absolute;width: 30vh;height: 25vh;}
.plan {position: absolute;width: 100%;}
.paper {position: absolute;width: 100%;height: 100%;opacity: 0}
.plan-text {
  position: absolute;
  text-align: center;
  width: 100%;
  height: 100%;
  font-size: 3vh;
  font-weight: 600;
  color: #000;
  opacity: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
#paper-1 {background: #FF79BF}
#paper-2 {background: #f68186}
#paper-3 {background: #79bffc}
#paper-4 {background: #9B7AFF}
#paper-5 {background: #F7D772}
#paper-6 {background: #e5e5e5}
#paper-7 {background: #9AFF79}
#plan-1 {top: 12vh; left: 25vh}
#plan-2 {top: 11.5vh; left: 65vh}
#plan-3 {top: 38vh; left: 15vh}
#plan-4 {top: 37.5vh; left: 49vh}
#plan-5 {top: 39vh; left: 85vh}
#plan-6 {top: 64vh; left: 28vh}
#plan-7 {top: 65vh; left: 70vh}
.text-box {
  position: absolute;
  width: 90%;
  left: 5%;
  top: 2vh;
  padding: 1.5vh;
  background-color: #ffffff;
  opacity: 0;
  text-align: center;
}
.text-box p {
  font-size: 4vh;
  margin-bottom: 0;
}
.cls-blue-1 {fill: #3172ac;}
.cls-blue-2 {fill: #478cbf;}
.cls-blue-3 {fill: #79bffc;}
.cls-yellow-1 {fill: #F7D772;}
.cls-yellow-2 {fill: #F3C356;}
.cls-yellow-3 {fill: #EEB53C;}
.cls-red-1 {fill: #f68186;}
.cls-red-2 {fill: #bc5055;}
.cls-red-3 {fill: #a83638;}
.cls-pink-1 {fill: #FF79BF;}
.cls-pink-2 {fill: #BF578C;}
.cls-pink-3 {fill: #AC3D72;}
.cls-white-1 {fill: #e5e5e5;}
.cls-white-2 {fill: #b7b7b7;}
.cls-white-3 {fill: #8e8e8e;}
.cls-purple-1 {fill: #673FAC;}
.cls-purple-2 {fill: #7C57BF;}
.cls-purple-3 {fill: #9B7AFF;}
.cls-green-1 {fill: #9AFF79;}
.cls-green-2 {fill: #57BF6D;}
.cls-green-3 {fill: #3FAC5D;}
.green {color: #00CE7C}
</style>