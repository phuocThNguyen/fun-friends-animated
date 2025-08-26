<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/bubble-breathing.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/bubble-breathing.jpg"
      class="session-background"
    />
    <!--  Click your favourites/ thumb up comes up  -->
    <audio ref="audio" autoplay src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/a-jazz-piano.mp3"/>
    <audio @loadeddata="playVoiceOver" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/Session13_Appendix_Page6.mp3" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'AppendixPage7',
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
    },
  },
  mounted() {
    this.$refs.audio.volume = 0.1;
  }
}
</script>

<style scoped>
</style>