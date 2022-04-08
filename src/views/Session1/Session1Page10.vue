<template>
  <div class="interactive-container green-background">
    <iframe class="yt-video" width="560" height="315"
            src="https://www.youtube.com/embed/wbz1X5zdC24"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write;
            encrypted-media; gyroscope; picture-in-picture"></iframe>
    <audio src="../../assets/sounds/session1/Page16.mp3" ref="voice" autoplay/>
    <div class="page-number" id="page-dark">16</div>
  </div>
</template>

<script>
export default {
  name: "Session1Page10",
  methods: {
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
.yt-video {
  position: absolute;
  width: 100%;
  height: 80vh;
  border: none;
}
.green-background {
  background-color: #00ce7c;
}
</style>