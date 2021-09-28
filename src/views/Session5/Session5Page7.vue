<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/804.png" alt="Tom-and-teacher" class="session-background">
    <div class="text-box">
      <p><strong>Tom meets his new teacher</strong></p>
      <p>Let us pretend that you are Tom today.</p>
      <p>What could you be feeling?</p>
      <p>What could you be thinking?</p>
      <p>What are some 'green' thoughts that make you feel happy
       and brave?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Session5Page7'
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 36vw;
  padding: 2vh 1.5vw;
  top: 2vh;
  left: 3vw;
  background-color: rgba(255,255,255, 0.9);
  opacity: 1;
}
.text-box p {
  font-size: 2vw;
  margin-bottom: .5vh;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>