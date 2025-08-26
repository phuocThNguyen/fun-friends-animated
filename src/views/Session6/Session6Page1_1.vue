<template>
  <div class="interactive-container">
    <p class="text">Watch the video below, to find out what we are doing today!</p>
    <div class="video">
      <iframe src="https://player.vimeo.com/video/814112465?h=794d7cb101&amp;badge=0&amp;autoplay=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Oscar Session 5"></iframe>
    </div>
    <div class="page-number" id="page-light">{{ page }}</div>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/all/Watch_video.mp3" autoplay/>
  </div>
</template>

<script>
export default {
  name: "Session1Page1_1.vue",
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
  }
}
</script>

<style scoped>
.text {
  position: absolute;
  top: 0;
  left: 2vh;
  font-size: 3.5vh;
}
.video {
  padding:56.25% 0 0 0;
  position:absolute;
  top: 5vh;
  left: 2vh;
  width: 129vh;
}
</style>