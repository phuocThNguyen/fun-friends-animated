<template>
  <div class="interactive-container" id="alt-bg">
    <h1 class="title">"This book is dedicated to all children and their animal friends"</h1>
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/introduction/Koala_Child_Hugging.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/introduction/Koala_Child_Hugging.jpg"
      class="images"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/introduction/chicken-boy.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/introduction/chicken-boy.jpg"
      class="images"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/introduction/girl-with-cat.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/introduction/girl-with-cat.jpg"
      class="images"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/introduction/Dog_hug_child.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/introduction/Dog_hug_child.jpg"
      class="images"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/introduction/child-1019147-740x493.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/introduction/child-1019147-740x493.jpg"
      class="images"
    />
    <ImageComponent
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/introduction/elephant_kid.jpg"
      srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/introduction/elephant_kid.jpg"
      class="images"
    />
    <audio src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/introduction/6Animated_Book_Page5.mp3" ref="voice"/>
    <div class="page-number" id="page-dark">4</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'IntroductionPage6',
  components: {ImageComponent},
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
.title {
  position: absolute;
  top: 2%;
  width: 100%;
  text-align: center;
  color: #ffffff;
  font-size: 3.7vh;
}
#alt-bg {
  background-color: #00CE7C;
}
.images {
  position: absolute;
  width: 37vh;
  height: 37vh;
}
img:nth-of-type(1) { top: 9.5%;left: 5%; }
img:nth-of-type(2) { top: 9.5%;left: 36%; }
img:nth-of-type(3) { top: 9.5%;right: 5%; }
img:nth-of-type(4) { top: 52%;left: 5%; }
img:nth-of-type(5) { top: 52%;left: 36%; }
img:nth-of-type(6) { top: 52%;right: 5%; }
</style>