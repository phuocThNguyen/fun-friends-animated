<template>
  <div class="interactive-container green-background">
    <div class="video">
      <iframe src="https://player.vimeo.com/video/846855112?h=8d89cddeee&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Koala Drinking Water"></iframe>
    </div>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/17Animated_Book_Page16.mp3" ref="voice" autoplay/>
    <div class="page-number" id="page-dark">{{ page }}</div>
  </div>
</template>

<script>
export default {
  name: "Session1Page10",
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
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    }
  },
  mounted() {
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.green-background {
  background-color: #00ce7c;
}
.video {
  padding:56.25% 0 0 0;
  position:absolute;
  top: 5vh;
  left: 2vh;
  width: 129vh;
}
</style>