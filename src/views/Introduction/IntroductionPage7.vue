<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/introduction/page8.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/introduction/page8.jpg"
      class="session-background"
    />
    <div class="text" id="text-1">My FUN FRIENDS Book</div>
    <div class="text" id="text-2">I can have fun with my Fun Friends book.</div>
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/introduction/7Animated_Book_Page6.mp3" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'IntroductionPage7',
  components: {ImageComponent},
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
.text {
  position: absolute;
  color: #ffffff;
  font-weight: bold;
  background-color: #00CE7C;
  width: 103vh;
  left: 15vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: .5vh;
}
#text-1 {
  top: 5vh;
  font-size: 6.5vh;
}
#text-2 {
  bottom: 2vh;
  font-size: 5vh;
}
</style>