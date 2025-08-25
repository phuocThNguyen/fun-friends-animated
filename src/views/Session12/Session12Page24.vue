<template>
  <div class="interactive-container">
    <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/appendix/group-kids-friend-laughing-together.png"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/appendix/group-kids-friend-laughing-together.png"
        class="session-background"
    />
    <div class="text-box">SMILE</div>
    <audio @loadeddata="playVoiceOver" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/appendix/Session13_Appendix_Page11.mp3" ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'AppendixPage12',
  components: {ImageComponent},
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    }
  },
  mounted() {}
}
</script>

<style scoped>
.text-box {
  position: absolute;
  color: #ffffff;
  background-color: #00CE7C;
  width: 24%;
  top: 5vh;
  left: 38%;
  text-align: center;
  font-size: 6.8vh;
  font-weight: bold;
  padding: 1.5vh 3vh;
}
</style>