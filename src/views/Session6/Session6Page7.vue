<template>
  <div class="interactive-container">
    <div class="text-box">
      <h1>Additional Activity &ndash; Changing Red to Green Choices</h1>
      <p>Daniel and Matilda are playing on their scooters in the park.</p>
      <p>What do you think when you see the picture? Do you think that
       they are making <span class="red">'red'</span> choices or
      <span class="green">'green'</span> choices?</p>
    </div>
    <img src="../../assets/images/session6/Scooter_Girl.png" alt="scooter-girl" class="images">
    <img src="../../assets/images/session6/Best-Kick-Scooter-for-Kids.png" alt="scooters-and-kids" class="images">
  </div>
</template>

<script>
export default {
  name: 'Session6Page7'
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 100%;
  padding: 2vh 2vw 1vh 2vw;
}
.text-box h1 {
  font-size: 2.5vw;
  font-weight: bold;
}
.text-box p {
  font-size: 2vw;
  margin-bottom: 0;
}
.images {
  position: absolute;
  bottom: 0;
  width: 49vw;
  height: 73vh;
}
.images:nth-of-type(2) {
  right: 0;
}
</style>