<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Reward Yourself</h1>
      <p>There are many ways to reward ourselves for
       trying our best.</p>
    </div>
    <div class="image-container" id="left">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session9/Beach_Children.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session9/Beach_Children.jpg"
        class="image"
      />
      <p class="image-text" id="para-1">Spending the day <br>having fun at the beach</p>
    </div>
    <div class="image-container" id="right">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session9/healthy_eating_child.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session9/healthy_eating_child.jpg"
        class="image"
      />
      <p class="image-text" id="para-2">Eating your <br>favourite healthy meal</p>
    </div>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session9/Session9_Page9.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session9Page9',
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
    animateText() {
      let text = document.querySelector('.text-box').children;
      let images = document.querySelectorAll('.image-text');
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: text[1],opacity: 1}, 1900)
        .add({targets: images[0],opacity: 1}, 7700)
        .add({targets: images[1],opacity: 1}, 11200)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {}
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .text-box p {
    font-size: 2.6vh !important;
  }
}
.text-box {
  position: absolute;
  top: -.5vh;
  left: 0;
  padding: .5vh;
}
.text-box h1 {
  font-size: 6vh;
  margin-bottom: 0;
  font-weight: bold;
}
.text-box p {
  font-size: 4vh;
  opacity: 0;
}
.image-container {
  position: absolute;
  bottom: 0;
  width: 49%;
  height: 78vh;
  opacity: 1;
}
.image-container .image {
  width: 100%;
  height: 100%;
}
.image-container p {
  display: block;
  position: absolute;
  bottom: 1vh;
  width: 70%;
  background-color: #00ce7c;
  color: #ffffff;
  padding: 1vh;
  text-align: center;
  font-size: 4vh;
  font-weight: bold;
  margin-bottom: 0;
  opacity: 0;
}
#para-1 {left: 18%;}
#para-2 {right: 18%;}
#right {
  right: 0;
}
</style>