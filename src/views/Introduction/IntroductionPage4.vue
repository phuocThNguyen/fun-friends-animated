<template>
  <div class="interactive-container" id="alt-bg">
    <div class="top-text-box">
      <p><strong>"Give your children the best opportunities. With the Fun FRIENDS program, you
        can help them to learn the most important skills of all - how to relate emotionally
        and socially to others, and how to develop lifelong positive relationships."</strong></p>
      <p style="font-weight: 600">Professor Tom Ollendick</p>
      <p style="font-weight: 600">Distinguished Professor of</p>
      <p style="font-weight: 600;margin-bottom: 0">Child Psychology, Virginia USA</p>
    </div>
    <div class="bottom-text-box">
      <p style="font-weight: 600">Fun FRIENDS Book - a book for me to do fun activities with my friends and family.</p>
      <p style="font-weight: 600">The Friends program has been nationally and internationally acclaimed for promoting social
      and emotional skills that stay with children for life.</p>
      <p style="font-weight: 600">The Fun FRIENDS Facilitator Guide and Fun FRIENDS Book will help children succeed in
      their early schooling and will support them in becoming emotionally and socially competent in
      their interactions with peers, teachers and family.</p>
    </div>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/introduction/4Animated_Book_Page3.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">3</div>
  </div>
</template>

<script>

export default {
  name: 'IntroductionPage4',

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
.top-text-box {
  position: absolute;
  background: black;
  color: white;
  text-align: center;
  width: 113vh;
  top: 5vh;
  left: 10vh;
  padding: 2vh;
  border-radius: 15px;
}
.top-text-box p {font-size: 2.8vh}
.bottom-text-box {
  position: absolute;
  top: 45vh;
  text-align: center;
  width: 113vh;
  left: 10vh;
}
.bottom-text-box p {font-size: 2.8vh;margin-bottom: 4vh}
#alt-bg {
  background-color: #00CE7C;
}
</style>