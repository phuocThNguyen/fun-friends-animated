<template>
  <div class="interactive-container">
    <p class="text">Watch the video below, to find out what we are doing today!</p>
    <div class="video">
      <iframe src="https://player.vimeo.com/video/814112666?h=be5b779e60&amp;badge=0&amp;autoplay=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Oscar Session 5"></iframe>
    </div>
    <div class="page-number" id="page-light">213</div>
  </div>
</template>

<script>
export default {
  name: "Session1Page1_1.vue"
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