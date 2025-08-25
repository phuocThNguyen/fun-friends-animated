<template>
  <div class="interactive-container">
    <div class="image-container" id="image-1">
      <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/max/home-activity/246434-P3J5AH-601.jpg"
          src-placeholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/min/home-activity/246434-P3J5AH-601.jpg"
      />
      <div class="text-box" id="text-upper">Paula loves helping animals</div>
    </div>
    <div class="image-container" id="image-2">
      <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/max/home-activity/546.jpg"
          src-placeholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/min/home-activity/546.jpg"
      />
      <div class="text-box" id="text-upper">Paula loves helping children</div>
    </div>
    <div class="image-container" id="image-3">
      <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/max/home-activity/534.jpg"
          src-placeholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/min/home-activity/534.jpg"
      />
      <div class="text-box" id="text-under">Paula loves playing on the beach</div>
    </div>
    <div class="image-container" id="image-4">
      <ImageComponent
          src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/max/home-activity/753.jpg"
          src-placeholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FFL/images/min/home-activity/753.jpg"
      />
      <div class="text-box" id="text-under">Paula also loves spending time in nature</div>
    </div>
    <audio src="" ref="voice"/>
    <div id="text">About the Author</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
export default {
  name: 'HomeActivityPage37',
  components: {ImageComponent},
  methods: {
    playVoiceOver() {
      setTimeout(() => {this.$ref.voice.play()}, 500)
    }
  },
  mounted() {},
}
</script>

<style scoped>
#text {
  position: absolute;
  width: 45vh;
  top: 2vh;
  left: 44vh;
  padding: 1vh;
  color: #fff;
  background: #00CE7C;
  font-size: 4vh;
  text-align: center;
  font-weight: 800;
}
.image-container {
  position: absolute;
  width: 66.5vh;
  height: 50%;
}
.image-container img {position: absolute;width: 100%; height: 100%;}
.image-container .text-box {
  position: absolute;
  width: 80%;
  left: 10%;
  color: #fff;
  background: #00CE7C;
  text-align: center;
  padding: .5vh;
  font-size: 2.5vh;
  font-weight: 600;
}
#text-upper {bottom: 2vh;}
#text-under {top: 2vh;}
#image-1 {top: 0;left: 0}
#image-2 {top: 0;right: 0}
#image-3 {bottom: 0;left: 0}
#image-4 {bottom: 0;right: 0}
</style>