<template>
  <div class="interactive-container">
    <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/max/all/5706.jpg"
        src-placeholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/min/all/5706.jpg"
        class="session-background"
    />
    <div class="text-box">
      <p class="mb-4 font-weight-bold">3. After ten seconds you can let go and release all the tension. Let your muscles loosen and your body relax. Notice the
        difference in your muscles when they are tense and when they are relaxed.</p>
      <p class="mb-4 font-weight-bold">Shake your legs gently and then your arms. Slowly, move your head from one side to the other. Feel the tension leave your
        body. Now you may feel soft and relaxed. </p>
      <p class="mb-3 font-weight-bold">4. Keep your eyes closed and breathe slowly. Imagine you are in your favourite <span style="font-style: italic">NATURE</span> place.
        It can be a beach, a mountain, a park, a river, a camping spot, a tree-house - you choose.</p>
      <p class="mb-1 font-weight-bold">&bull;&nbsp;&nbsp;&nbsp;Where are you?</p>
      <p class="mb-1 font-weight-bold">&bull;&nbsp;&nbsp;&nbsp;What can you see?</p>
      <p class="mb-1 font-weight-bold">&bull;&nbsp;&nbsp;&nbsp;What can you smell?</p>
      <p class="mb-1 font-weight-bold">&bull;&nbsp;&nbsp;&nbsp;What can you hear?</p>
      <p class="mb-4 font-weight-bold">&bull;&nbsp;&nbsp;&nbsp;What can you feel on your skin?</p>
      <p class="mb-2 font-weight-bold">5. Enjoy how calm and relaxed you feel,
        in this special <span style="font-style: italic">NATURE</span> place. </p>
      <p class="font-weight-bold">Do a long, slow stretch with your arms and legs, then open your eyes slowly.</p>
    </div>
    <div class="page-number" id="page-light">{{ page }}</div>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/audios/Session1/Session1_Page22_FFL.mp3" id="voice" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";

export default {
  name: 'Session1Page20',
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
  top: 18vh;
  padding: 1vh 2vh 1vh 2vh;
}
.text-box p {font-size:2.3vh; margin-bottom:0}
.text-box h1 {font-size:3.5vh;font-weight:800;margin-bottom: .5vh}
</style>