<template>
  <div class="interactive-container">
    <div id="painterro"></div>
    <div class="text-box">
      <h1>A Tree With 'Feelings'</h1>
      <p>Make one tree with your friends. You can do this by drawing, creating, planting,
       or finding one outside, or using your bodies to build one!</p>
      <p>Draw or write down one feeling you have had and act it out in a group.</p>
      <p>When and why did you feel the way that you did? <strong>All feelings are OK.</strong></p>
    </div>
  </div>
</template>

<script>
import Painterro from "painterro";

export default {
  name: "Session2Page17",
  data() {
    return {
      painterro: null,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.painterro = Painterro({
        id: "painterro",
        activeFillColor: '#ffffff',
        availableLineWidths: [1,4,8,12,16,20],
        availableEraserWidths: [1,4,8,12,16,20],
        backplateImgUrl: require('../../assets/images/session2/feelings.jpg'),
        defaultTool: 'brush',
        hiddenTools: ['pixelize','select','crop','line','text','rotate','resize',
          'open','save','close','settings','redo','zoomin','zoomout'],
        colorScheme: {
          main: "'#f8f8f8'",
          control: "#ffffff",
          controlContent: '#434649',
          backgroundColor: "#ffffff",
        },
      })
      this.painterro.show();
      let info = document.querySelector('.ptro-info');
      info.style.visibility = 'hidden';
      let controlBar = document.querySelector('#painterro-bar');
      controlBar.style.display = 'flex';
      controlBar.style.justifyContent = 'center';
    });
  }
}
</script>

<style scoped>
#painterro {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}
.text-box {
  position: absolute;
  z-index: 100;
  background-color: #ffffff;
  width: 25vw;
  padding: 2vw;
  top: 10vh;
  left: 10vw;
}
.text-box h1 {
  font-size: 4vw;
  margin-bottom: 3vh;
}
.text-box p {
  font-size: 1.8vw;
}
.text-box p:last-child {
  margin-bottom: 0;
}
</style>