<template>
  <div class="interactive-container">
    <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/max/all/spring-park-freshly-cut-lawn-vertical-frame-background-wallpaper-idea.jpg"
        src-placeholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/min/all/spring-park-freshly-cut-lawn-vertical-frame-background-wallpaper-idea.jpg"
        class="page-image"
    />
    <div class="text-box">
      <p class="instruction">Party time!</p>
      <p class="instruction">Dance and sing along to the FRIENDS video.</p>
    </div>
    <div class="page-number" id="page-dark">{{ page }}</div>
    <iframe id="video" src="https://player.vimeo.com/video/1082405220?h=69c0e07646" frameborder="0" allow="fullscreen; picture-in-picture" allowfullscreen/>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/audios/Session1/Session1_Page22_FFL.mp3" id="voice" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import PlayerEs from '@vimeo/player'
export default {
  name: 'Session1Page15',
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
  background: white;
  left: 4.9vh;
  top: 1vh;
  padding: .5vh 1.5vh;
}
.text-box p {font-size:2.3vh; margin-bottom:0}
.text-box h1 {font-size:3.5vh;font-weight:800;margin-bottom: .5vh}
#video {
  position: absolute;
  top: 10vh;
  width: 100%;
  height: 76%;
}
.page-image {
  position: absolute;
  width: 100%;
  top: -60vh;
}
</style>