<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Additional Activity &ndash; <span class="red">Red</span>
        and <span class="green">Green</span> Thoughts</h1>
      <p>Daniel and Matilda are sledding in the snow for the first time.
        What are some '<span class="red">red</span>' and
        '<span class="green">green</span>' thoughts Daniel
        and Matilda might be having? Share what you felt like,
        when you tried something new for the first time.</p>
      <p>Everybody has '<span class="red">red</span>'
        thoughts when trying something new. We can all
        try to replace our '<span class="red">red</span>'
        thoughts with '<span class="green">green</span>'
        thoughts. Shout out a '<span class="green">green</span>'
        thought that makes you feel brave!</p>
    </div>
    <drawing-canvas v-on:saved="saveToDatabase" class="canvas" :canvasStyle='canvasStyle'/>
  </div>
</template>

<script>
import anime from "animejs";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: 'Session5Page13',
  components: {DrawingCanvas},
  data() {
    return {
      canvasStyle: {
        width: 0.88,
        height: 0.58,
        isPicture: true,
        pictureUrl: "session5/merge-edited.jpg",
        backgroundSize: 'contain'
      },
    }
  },
  methods: {
    saveToDatabase(data) {
      console.log(data)
    }
  },
  mounted() {
    let text = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      easing: 'linear',
      duration: 500
    })
    animation
      .add({
        targets: text[1],
        delay: 500,
        opacity: 1
      })
      .add({
        targets: text[2],
        delay: 1500,
        opacity: 1
      })
  },
}
</script>

<style scoped>
@media screen and (max-width: 930px) {
  .text-box p {
    font-size: 2.35vh !important;
  }
}
.canvas {
  position: absolute;
  top: 24vh;
  left: 6%;
}
.text-box {
  position: absolute;
  padding: 0 1vh;
}
.text-box h1 {
  font-size: 4.2vh;
  font-weight: bold;
  margin-bottom: 0;
}
.text-box p {
  font-size: 2.8vh;
  opacity: 0;
  margin-bottom: 0;
}
tspan { white-space:pre }
.red {
  color: red;
}
.green {
  color: #00CE7C;
}
</style>