<template>
  <div class="interactive-container" id="alt-bg">
    <h1 class="title">Credits</h1>
    <div class="left-container">
      <div class="items">
        <h1 class="heading">Lydeffekter:</h1>
        <p class="item">1. Falling Snow - Sonny Fascia (BurghRecords)</p>
        <p class="item">2. Relaxing Forest - Sonny Fascia (BurghRecords)</p>
        <p class="item">3. Water Stream - Sonny Fascia (BurghRecords)</p>
        <p class="item">4. Birds In Sun And Snow - Sonny Fascia (BurghRecords)</p>
        <p class="item">5. Forest Summer Roond 020 200619_0186.wav - klankbeeld (Freesound)
          <br>licenseret under CCBY 3.0</p>
        <p class="item">6. Wrong.mp3 - AbdrTar (Freesound)</p>
        <p class="item">7. Training Program, Correct2.aif - timgormly (Freesound)</p>
        <p class="item">8. Bubbles 004.wav - ristooooo1 (Freesound)</p>
        <p class="item">9. Whoosh Swoosh 9 - CLEREM TV (Youtube)</p>
        <p class="item">10. Click (CUTE + AESTHETIC SOUND EFFECTS PACK) - oopsieaniee (Youtube)</p>
        <p class="item">11. Kids Cheering - Gaming Sound FX (Youtube)</p>
        <p class="item">12. Calm Seashore - Audio Library PH (Youtube)</p>
      </div>
    </div>
    <div class="right-container">
      <div class="items">
        <h1 class="heading">Dyrelyde:</h1>
        <p class="item">1. Dog Barking - CLEREM TV (Youtube)</p>
        <p class="item">2. Voice elephant.mp3 - vataaa (Freesound)</p>
        <p class="item">3. Duck's Sound - CLEREM TV (Youtube)</p>
        <p class="item">4. Sheep's Sound - CLEREM TV (Youtube)</p>
        <p class="item">5. Pig's Sound - CLEREM TV (Youtube)</p>
        <p class="item">6. Cow Moo - Nagaty Studio - Sound Effects (Youtube)</p>
        <p class="item">7. Bear Sound - Nagaty Studio - Sound Effects (Youtube)</p>
        <p class="item">8. Monkey Sound - Nagaty Studio - Sound Effects (Youtube)</p>
        <p class="item">9. Hen Sound - Nagaty Studio - Sound Effects (Youtube)</p>
      </div>
      <div class="items">
        <h1 class="heading">Musik:</h1>
        <p class="item">1. Sand Castle - Quincas Moreira (Youtube)</p>
        <p class="item">2. Snack Time - The Green Orbs (Youtube)</p>
        <p class="item">3. Funny Children - MOKKA (Youtube)</p>
        <p class="item">4. Superhero theme - humanoide9000 (Freesound) licenseret under CCBY 3.0</p>
        <p class="item">5. Smoked Kielbasa Polka - Doug MaxWell / Jimmy F. (Youtube)</p>
        <p class="item">6. Barroom Ballet - Kevin MacLeod (Youtube)</p>
        <p class="item">7. Twinkle Twinkle Little Star - The Green Orbs (Youtube)</p>
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
.items {
  margin-bottom: 3vh;
}
.left-container {
  position: absolute;
  left: 0;
  top: 8vh;
  padding: 0 0 0 2vh;
}
.right-container {
  position: absolute;
  left: 50%;
  top: 8vh;
  padding: 0 0 0 2vh;
}
.left-container h1,
.right-container h1 {
  font-size: 3.5vh;
}
.left-container p,
.right-container p{
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