<template>
  <div class="interactive-container">
    <div class="image-container">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session11/Climbing_Tree_Help.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session11/Climbing_Tree_Help.jpg"
        class="images"
      />
      <p class="text" id="para-1">Mum helping <br>Daniel climb a tree.</p>
    </div>
    <div class="image-container" id="right">
      <ImageComponent
        src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/max/session11/Swinging_Children.jpg"
        srcPlaceholder="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/images/min/session11/Swinging_Children.jpg"
        class="images"
      />
      <p class="text" id="para-2">Zoe and Daniel <br>helping Matilda swing.</p>
    </div>
    <audio @loadeddata="playSoundText" src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session11/Session11_Page6.mp3" ref="voice"/>
    <div class="page-number" id="page-light">239</div>
  </div>
</template>

<script>
import ImageComponent from "@/components/imageComponent/ImageComponent.vue";
import anime from "animejs";

export default {
  name: 'Session11Page6',
  components: {ImageComponent},
  methods: {
    animateText() {
      let text = document.getElementsByClassName('text');
      let animation = anime.timeline({easing: 'linear', duration: 500})
      animation
        .add({targets: text[0], opacity: 1}, 600)
        .add({targets: text[1], opacity: 1}, 4200)
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
  width: 54%;
  bottom: 9vh;
  text-align: center;
  position: absolute;
  padding: 1vh;
  opacity: 0;
}
#para-1 {left: 18%}
#para-2 {right: 18%}
</style>
