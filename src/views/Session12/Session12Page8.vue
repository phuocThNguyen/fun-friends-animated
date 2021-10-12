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
  </div>
</template>

<script>
export default {
  name: 'Session12Page8'
}
</script>

<style scoped>
#balloon-1 { top: 10vh;left: 2vw; }
#balloon-2 { top: 15vh;left: 20vw; }
#balloon-3 { top: 38vh;left: 1vw; }
#balloon-4 { top: 43vh;left: 19vw; }
#balloon-5 { top: 65vh;left: 6vw; }
#balloon-6 { top: 5vh;right: 2vw; }
#balloon-7 { top: 9vh;right: 20vw; }
#balloon-8 { top: 35vh;right: 3vw; }
#balloon-9 { top: 39vh;right: 21vw; }
#balloon-10 { top: 65vh;right: 8vw; }
.balloon-container {
  position: absolute;
  width: 14.5vw;
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
  font-size: 2vw;
  text-align: center;
  padding-bottom: 5vh;
  width: 10vw;
}
.balloon-input {
  position: absolute;
  top: 4vh;
  background-color: rgba(0,0,0,0);
  width: 12vw;
  height: 12vh;
  border: none;
  resize: none;
  font-size: 2vw;
}
.balloon-input:focus {
  outline: none
}
.instruction {
  position: absolute;
  background-color: #00CE7C;
  color: #ffffff;
  font-size: 1.5vw;
  width: 30vw;
  padding: 1.5vh 1vw;
}
</style>
