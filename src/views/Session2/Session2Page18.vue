<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Additional Activity - Guess The Feelings</h1>
      <p>Zoe, Daniel and Matilda feel different feelings in different situations.
        All feelings are OK. What we choose to do with our feelings is important.
        What feelings may the children be experiencing? What make you feel this way?</p>
    </div>
    <img src="../../assets/images/session2/Happy_Boy-resized.jpg" alt="happy" class="image" id="left">
    <img src="../../assets/images/session2/Worried_Girl-resized.jpg" alt="worried" class="image" id="right">

  </div>
</template>

<script>
export default {
  name: "Session2Page18",
  methods: {

  }
}
</script>

<style scoped>

.image {
  position: absolute;
  width: 49vw;
  height: 72vh;
  bottom: 0;
}
#right {
  right: 0
}
.text-box {
  position: absolute;
  width: 96vw;
  left: 2vw;
  padding: 3vh 2vw 2vh 2vw;
}
.text-box h1 {
  font-size: 3vw;
  margin: 1vh 0 1vh;
}
.text-box p {
  font-size: 1.8vw;
}
</style>