<template>
  <div class="interactive-container">
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/introduction/FF_Front_Cover_ANIMATED_ACTIVITY_EBOOK_full.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/introduction/FF_Front_Cover_ANIMATED_ACTIVITY_EBOOK_full.jpg"
      class="session-background"
    />
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/introduction/0_Cover.mp3" autoplay ref="voice"/>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'IntroductionPage1',
  components: {ImageComponent},
}
</script>

<style scoped></style>