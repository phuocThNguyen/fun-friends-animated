<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>NATURE Fun</h1>
      <p>Go to calm place in nature.</p>
      <p>Choose a park, forest, beach, or river.</p>
    </div>
    <div class="video">
      <iframe src="https://player.vimeo.com/video/1048747577?h=87f3787e78&amp;badge=0&amp;autoplay=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Nature Fun with Emily"/>
    </div>
    <div class="page-number" id="page-light">{{ page }}</div>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/all/Watch_video.mp3" autoplay/>
  </div>
</template>

<script>
export default {
  name: "Session4Page19_1.vue",
    props: {
    startPage: Number,
    pageNum: Number,
  },
  created (){
    this.setPageNumber();
  },
  methods: {
    setPageNumber() {
      this.page = this.pageNum + this.startPage - 1;
    },
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 133vh;
  padding: 2vh;
}
.text-box p {
  font-size: 3vh;
  margin-bottom: 0;
  opacity: 1;
}
.video {
  padding: 56.25vw 0 0 0;
  position: absolute;
  bottom: 5vh;
  left: 11vh;
  width: 111vh;
}
</style>