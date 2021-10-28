<template>
  <div class="interactive-container" id="alt-bg">
    <h1 class="title">Credits</h1>
    <div class="left-container">
      <div class="items">
        <h1 class="heading">Music:</h1>
        <p class="item">1. Sand Castle - Quincas Moreira (www.youtube.com)</p>
        <p class="item">2. Snack Time - The Green Orbs (www.youtube.com)</p>
        <p class="item">3. Funny Children - MOKKA (www.youtube.com)</p>
        <p class="item">4. Superhero theme - humanoide9000 (freesound.org)</p>
        <p class="item">5. Smoked Kielbasa Polka - Doug MaxWell / Jimmy F. (www.youtube.com)</p>
        <p class="item">6. Barroom Ballet - Kevin MacLeod (www.youtube.com)</p>
        <p class="item">7. Twinkle Twinkle Little Star - The Green Orbs (www.youtube.com)</p>
      </div>
      <div class="items">
        <h1 class="heading">Sound Effects:</h1>
        <p class="item">1. Falling Snow - Sonny Fascia @BurghRecords</p>
        <p class="item">2. Relaxing Forest - Sonny Fascia @BurghRecords</p>
        <p class="item">3. Water Stream - Sonny Fascia @BurghRecords</p>
        <p class="item">4. Birds In Sun And Snow - Sonny Fascia @BurghRecords</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppendixPage13'
}
</script>

<style scoped>
h1, p {
  color: #ffffff;
}
.left-container {
  position: absolute;
  left: 0;
  top: 7vh;
  padding: 0 0 0 2vh;
}
.left-container h1 {
  font-size: 3.5vh;
}
.left-container p {
  padding-left: 2vh;
}
.title {
  position: absolute;
  text-transform: uppercase;
  width: 100%;
  top: 0;
  text-align: center;
  font-size: 5vh;
}
#alt-bg {
  background-color: #00CE7C;
}
</style>