<template>
  <div class="interactive-container">
    <div class="images">
      <img src="../../assets/images/session2/700-resized.jpg" alt="sad" />
      <img src="../../assets/images/session2/12594-resized.jpg" alt="angry" />
      <img src="../../assets/images/session2/27475-resized.jpg" alt="worried" />
      <img src="../../assets/images/session2/607-resized.jpg" alt="happy" />
    </div>
    <draggable class="emotions" :list="emotions2" group="emotions">
      <div class="emotion" v-for="emotion in emotions2" v-bind:id="emotion.name" :key="emotion.id">{{emotion.name}}</div>
    </draggable>
    <draggable class="emotionSad" :list="emotionSad" group="emotions">
      <div class="" v-for="emotion in emotionSad" v-bind:id="emotion.name" :key="emotion.id">{{emotion.name}}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "Session2Page4",
  components: {
    draggable,
  },
  data() {
    return {
      emotions: [ "Sad", "Angry", "Worried", "Happy" ],
      emotions2: [ {id: 1, name: "Sad"}, {id: 2, name: 'Angry'}, {id: 3, name: 'Worried'}, {id: 4, name: 'Happy'}],
      emotionSad: [ ],
      emotionHappy: []
    }
  },
  mounted() {
    console.log(this.emotions2)
  }
}
</script>

<style scoped>
.emotionSad {
  position: absolute;
  width: calc(30vw - 6vh);
  font-size: 3vw;
  padding: 1vh;
  text-align: center;
  background-color: #1d3257;
  color: #ffffff;
  top: 33vh;
  left: 31.5vw;
  z-index: 20;
}
.emotions {
  position: absolute;
  font-size: 3vw;
  top: 20vh;
  width: 30vw;
}
.emotion {
  text-align: center;
  color: #ffffff;
  margin: 3vh;
  padding: 1vh;
}
.emotion:nth-child(1) {
  background-color: #65A8DF;
}
.emotion:nth-child(2) {
  background-color: #61AC69;
}
.emotion:nth-child(3) {
  background-color: #5960E2;
}
.emotion:nth-child(4) {
  background-color: #CD3822;
}
.images {
  position: absolute;
  left: 27vw;
  top: -7vh;
  width: 70vw;
  height: 100%;
  z-index: 10;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 1vw;
}
.images img {
  width: 25vw;
  height: 30vh;
  opacity: 1;
  align-self: center;
  justify-self: center;
}
</style>