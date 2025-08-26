<template>
  <div class="interactive-container">
    <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/max/all/4488.jpg"
        src-placeholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/min/all/4488.jpg"
        class="session-background"
    />
    <div class="text-box">
      <h1>Relaxation activity</h1>
      <p class="mb-2">&bull;&nbsp;&nbsp;Deep, slow breathing slows down your heart beat, and calms you down.</p>
      <p class="mb-2">&bull;&nbsp;&nbsp;Tensing and relaxing your muscles help you relax your body.</p>
      <p class="mb-2">&bull;&nbsp;&nbsp;Relaxing will help you feel calm and happier.</p>
      <p class="mb-2">&bull;&nbsp;&nbsp;Pay attention to what you can see, hear, smell, taste, and feel on your skin.</p>
      <p class="mb-4">&bull;&nbsp;&nbsp;Many athletes do relaxation to help them perform better. You can try to do relaxation too!</p>
      <p class="mb-3 font-weight-bold">1. If possible, close your eyes and pay attention. Become aware of your breathing. Feel the air moving in and out of your lungs.
        Now take 10 slow breaths in through your nose and out through your mouth. Be sure to breathe out slowly, as if you are
        blowing out many candles. </p>
      <p class="mb-4 font-weight-bold">As you breathe in through your nose, imagine happy and relaxed feelings travelling all the way down to your feet and hands. When you breathe
        out through your mouth, try to imagine all your worries, anger and sad feelings flowing out of your body.</p>
      <p class="mb-4 font-weight-bold">2. Now, slowly, to the count of ‘10’, tense all the muscles in your body. At ‘1’ your muscles should be only a little bit tense and by
        the time you get to ‘10’ you should be as tense as possible. Hold it for five second.</p>
    </div>
    <div class="page-number" id="page-light">{{ page }}</div>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/audios/Session1/Session1_Page22_FFL.mp3" id="voice" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";

export default {
  name: 'Session1Page16',
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
  },
  created() {
    this.setPageNumber();
  },
  mounted() {
    this.playVoiceOver();
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  background: rgba(255,255,255,0.9);
  width: 129vh;
  left: 2vh;
  top: 12vh;
  padding: 2vh 2vh 1vh 2vh;
}
.text-box p {font-size:2.3vh; margin-bottom:0}
.text-box h1 {font-size:3.5vh;font-weight:800;margin-bottom: .5vh}
</style>