<template>
  <div class="interactive-container">
    <img src="../../assets/images/session5/50289.png" alt="Tom-and-teacher" class="session-background">
    <div class="text-box">
      <p><strong>Sam is preparing for a 'Show and Tell'</strong></p>
      <p>Let us pretend that it is your turn to do
         'show and tell' today.</p>
      <p>What could you be feeling?</p>
      <p>What are some 'green' thoughts that make you feel happy
        and brave?</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Session5Page9'
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 45vw;
  padding: 2vh 1.5vw;
  bottom: 2vh;
  left: 8vw;
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