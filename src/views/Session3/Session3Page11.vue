<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/2206-resized.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/2206-resized.jpg"
      class="page-image" id="main-image"
    />
    <div class="images-container">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/ImageStep1BubbleBreathing.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/ImageStep1BubbleBreathing.jpg"
        class="page-image" id="image-step-1"
      />
      <div class="page-image" id="image-step-2">
        <iframe src="https://player.vimeo.com/video/888922200?controls=0&loop=1&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479"
                id="video" frameborder="0" allow="fullscreen; picture-in-picture; autoplay" title="Bubble breathing"/>
      </div>
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/ImageStep3BubbleBreathing.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/ImageStep3BubbleBreathing.jpg"
        class="page-image" id="image-step-3"
      />
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/ImageStep4BubbleBreathing.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/ImageStep4BubbleBreathing.jpg"
        class="page-image" id="image-step-4"
      />
      <div class="mask"/>
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session3/ImageStep5BubbleBreathing.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session3/ImageStep5BubbleBreathing.jpg"
        class="page-image" id="image-step-5"
      />
    </div>
    <div class="text-box">
      <h1><strong>Fun Bubble Activities</strong></h1>
      <p>We are now going to play two games.</p>
      <p><strong>1. Bubble breathing</strong></p>
      <p class="mb-2" id="step-1"><strong>Step 1:</strong> Take five deep, slow breaths, in through
        your nose and out through your mouth.</p>
      <p class="mb-2" id="step-2"><strong>Step 2:</strong> We are going to blow bubbles with a straw
        and a cup of water. Blow out any angry, sad, and worried feelings
        into the water.<br>Notice, how once we stop breathing out, the bubbles
        go away. </p>
      <p class="mb-2" id="step-3"><strong>Step 3:</strong> The same happens with our feelings. We can
        blow feelings away by doing deep, slow, calm breathing.</p>
      <p class="mb-2" id="step-4"><strong>Step 4:</strong> Feelings come and go. Remember: All feelings
        are OK.</p>
      <p class="mb-2" id="step-5"><strong>Step 5:</strong> It is what we CHOOSE to do with our feelings
        that counts. Bubble breathing is a ‘thumbs up’ choice.</p>
    </div>
    <button class="btn-style" @click="displayStep">Click here for the next step</button>
    <div class="audios">
      <audio ref="click" src="../../assets/sounds/session7/click-sound.mp3"/>
      <audio
        @loadeddata="playSoundText"
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/Session3_Page103.mp3" ref="voice"/>
      <audio id="audio-step-1" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/103-step-1.mp3"></audio>
      <audio id="audio-step-2" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/103-step-2.mp3"></audio>
      <audio id="audio-step-3" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/103-step-3.mp3"></audio>
      <audio id="audio-step-4" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/103-step-4.mp3"></audio>
      <audio id="audio-step-5" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session3/103-step-5.mp3"></audio>
    </div>
    <div class="page-number" id="page-dark">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: "Session3Page11",
  components: {ImageComponent},
  data() {
    return {
      currentStep: 0,
      currentAudio: null,
      video: null
    }
  },
  methods: {
    animateText() {
      let text = document.querySelector('.text-box').children;
      let animation = anime.timeline({duration: 500, easing: 'linear'});
      animation
        .add({targets: text[1], opacity: 1}, 0)
        .add({targets: text[2], opacity: 1}, 0)
        .add({targets: '#main-image', opacity: 1}, 0)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
      this.currentAudio = this.$refs.voice;
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    displayStep() {
      this.$refs.click.play();
      if (this.currentStep <= 5) {
        this.currentAudio.pause();
        this.currentStep++;
        if (this.currentStep === 2) this.video.play();
        else if (this.currentStep === 3) this.video.pause();
        else if (this.currentStep === 4) {anime({targets: '.mask', opacity: 1, duration: 500, easing: 'linear'})}
        else if (this.currentStep === 5) document.querySelector('.btn-style').style.display = 'none';
        let animation = anime.timeline({duration: 500, easing: 'linear'});
        animation
          .add({targets: "#step-"+this.currentStep, opacity: 1}, 0)
          .add({targets: "#image-step-"+this.currentStep, opacity: 1}, 0);
        this.currentAudio = document.querySelector('#audio-step-'+this.currentStep);
        this.currentAudio.play();
      }
    },
    initVideo() {
      this.video = new Vimeo.Player(document.querySelector('iframe')); // eslint-disable-line
    }
  },
  mounted() {
    this.initVideo();
  }
}
</script>

<style scoped>
.page-image {position: absolute;height: 100%;opacity: 0}
.mask {position: absolute;height: 100%; background: #fff; width: 0;right: -35.5vh;opacity: 0;}
#main-image {left: 30vh}
#image-step-1 {left: 35vh}
#image-step-2 {left: 10vh;width: 162vh}
#image-step-3 {left: 10vh}
#image-step-4 {left: 58vh;width: 75vh}
#image-step-5 {left: 35vh}
#video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.btn-style {
  position: absolute;
  bottom: 3.5vh;
  left: 14vh;
  background-color: #00ce7c;
  border: none;
  width: 41vh;
  text-align: center;
  height: 6vh;
  border-radius: 5px;
  color: #ffffff;
  font-size: 2.5vh;
  font-weight: bold;
  box-shadow: 0 9px #999;
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
  top: 0;
  left: 0;
  width: 59vh;
  height: 100%;
  background-color: #fff;
  padding: 1vh;
  opacity: 1;
}
.text-box h1 {
  font-size: 3.36vh;
  margin-bottom: 0;
  opacity: 1;
}
.text-box p {
  font-size: 2.8vh;
  margin-bottom: 0;
  opacity: 0;
}
</style>