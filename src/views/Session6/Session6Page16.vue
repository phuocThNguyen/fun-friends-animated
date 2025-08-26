<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/max/all/8983.jpg"
      src-placeholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/min/all/8983.jpg"
      class="session-background"
    />
    <div class="text-box">
      <p class="instruction">Play the video below to see the steps on how to do slow breathing.</p>
    </div>
    <iframe id="video" src="https://player.vimeo.com/video/577438485?h=f2a55c69c5" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen/>
    <div class="page-number" id="page-light">{{ page }}</div>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/audios/Session1/Session1_Page22_FFL.mp3" id="voice" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import PlayerEs from '@vimeo/player'
export default {
  name: 'Session1Page21',
  components: {ImageComponent},
  props: {
    startPage: Number,
    pageNum: Number,
  },
  data() {
    return {
      page: 0,
      visible: false
    }
  },
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    jumpToPreviousPage() {
      this.$emit('jumpToPreviousPage');
    },
    setPageNumber() {
      this.page = this.pageNum + this.startPage - 1;
    },
    init() {
      let iframe = document.querySelector('#video');
      let player = new PlayerEs(iframe);

      player.on('play', function() {
        document.querySelector('#voice').pause();
      })
    }
  },
  created() {
    this.setPageNumber();
  },
  mounted() {
    this.playVoiceOver();
    this.init();
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  background: rgba(255,255,255,0.9);
  left: 2vh;
  top: 1vh;
  padding: .5vh 2vh .5vh 2vh;
}
.text-box p {font-size:2.3vh; margin-bottom:0}
.text-box h1 {font-size:3.5vh;font-weight:800;margin-bottom: .5vh}
#video {
  position: absolute;
  top: 2vh;
  left: 2vh;
  width: 97%;
  height: 90%;
}
</style>