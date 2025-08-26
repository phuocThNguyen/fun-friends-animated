<template>
  <div class="interactive-container">
    <div class="image-container">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session11/rock_climbing_nature.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session11/rock_climbing_nature.jpg"
        class="images"
      />
      <p class="text" id="para-1">Mum is helping Zara rock climbing.</p>
    </div>
    <div class="image-container" id="right">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session11/hugging_dog_child.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session11/hugging_dog_child.jpg"
        class="images"
      />
      <p class="text" id="para-2">Zoe is giving Midnight a hug.</p>
    </div>
    <audio autoplay ref="audio" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/ambient/birds-in-the-morning.mp3"/>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session11/Session11_Page7.mp3" ref="voice"/>
    <div class="page-number" id="page-light">{{ page }}</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session11Page7',
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
      let text = document.getElementsByClassName('text');
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: text[0], opacity: 1}, 800)
        .add({targets: text[1], opacity: 1}, 4800)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    }
  },
  mounted() {
    this.$refs.audio.volume = 0.1;
  }
}
</script>

<style scoped>
#right {
  right: 0;
}
.image-container {
  position: absolute;
  height: 100vh;
  width: 49%;
}
.images {
  width: 100%;
  height: 100%;
}
.image-container p {
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 3vh;
  font-weight: bold;
  width: 80%;
  bottom: 9vh;
  text-align: center;
  position: absolute;
  padding: .5vh;
  opacity: 0;
}
#para-1 {left: 17.5%}
#para-2 {right: 17.5%}
</style>
