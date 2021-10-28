<template>
  <div class="interactive-container">
    <img src="../../assets/images/session12/815.png" alt="balloons" class="session-background">
    <div class="balloon-container" id="balloon-1">
      <img src="../../assets/images/session12/blue-balloon.png" alt="balloon" class="balloon">
      <div class="balloon-text">Bubble Breathing</div>
    </div>
    <div class="balloon-container" id="balloon-2">
      <img src="../../assets/images/session12/yellow-balloon.png" alt="balloon" class="balloon">
      <textarea class="balloon-input"></textarea>
    </div>
    <div class="balloon-container" id="balloon-3">
      <img src="../../assets/images/session12/pink-balloon.png" alt="balloon" class="balloon">
      <textarea class="balloon-input"></textarea>
    </div>
    <div class="balloon-container" id="balloon-4">
      <img src="../../assets/images/session12/green-balloon.png" alt="balloon" class="balloon">
      <div class="balloon-text">Thumbs up Choices</div>
    </div>
    <div class="balloon-container" id="balloon-5">
      <img src="../../assets/images/session12/red-balloon.png" alt="balloon" class="balloon">
      <textarea class="balloon-input"></textarea>
    </div>
    <div class="balloon-container" id="balloon-6">
      <img src="../../assets/images/session12/green-balloon.png" alt="balloon" class="balloon">
      <div class="balloon-text">Green Thoughts</div>
    </div>
    <div class="balloon-container" id="balloon-7">
      <img src="../../assets/images/session12/pink-balloon.png" alt="balloon" class="balloon">
      <textarea class="balloon-input"></textarea>
    </div>
    <div class="balloon-container" id="balloon-8">
      <img src="../../assets/images/session12/blue-balloon.png" alt="balloon" class="balloon">
      <textarea class="balloon-input"></textarea>
    </div>
    <div class="balloon-container" id="balloon-9">
      <img src="../../assets/images/session12/red-balloon.png" alt="balloon" class="balloon">
      <div class="balloon-text">Making a Step Plan</div>
    </div>
    <div class="balloon-container" id="balloon-10">
      <img src="../../assets/images/session12/yellow-balloon.png" alt="balloon" class="balloon">
      <textarea class="balloon-input"></textarea>
    </div>
    <div class="instruction"><strong>*Tips:</strong>
      Tap the empty balloon to write your favourite
      FRIENDS games or activities.</div>
    <audio autoplay loop src="../../assets/sounds/children-background-music/sand-castle.mp3"></audio>
  </div>
</template>

<script>
export default {
  name: 'Session12Page8'
}
</script>

<style scoped>
#balloon-1 { top: 10vh;left: 2%; }
#balloon-2 { top: 15vh;left: 20%; }
#balloon-3 { top: 38vh;left: 1%; }
#balloon-4 { top: 43vh;left: 19%; }
#balloon-5 { top: 65vh;left: 6%; }
#balloon-6 { top: 5vh;right: 2%; }
#balloon-7 { top: 9vh;right: 20%; }
#balloon-8 { top: 35vh;right: 3%; }
#balloon-9 { top: 39vh;right: 21%; }
#balloon-10 { top: 65vh;right: 8%; }
.balloon-container {
  position: absolute;
  width: 14.5%;
  height: 25vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.balloon {
  position: absolute;
  width: auto;
  height: 25vh;
}
.balloon-text {
  position: absolute;
  font-size: 2.7vh;
  text-align: center;
  padding-bottom: 5vh;
  width: 80%;
}
.balloon-input {
  position: absolute;
  top: 4vh;
  background-color: rgba(0,0,0,0);
  width: 80%;
  height: 12vh;
  border: none;
  resize: none;
  font-size: 2.7vh;
}
.balloon-input:focus {
  outline: none
}
.instruction {
  position: absolute;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 2vh;
  width: 30%;
  top: 0;
  left: 0;
  padding: 1.4vh;
}
</style>
