<template>
  <div class="interactive-container">
    <div id="painterro"></div>
    <div class="white-background">
      <div class="text-box">
        <p>If you want to, say what you are blowing
          away as your bubbles pop.</p>
        <p>If you don't want to say it out loud, draw
          your feelings in the bubbles below.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Painterro from "painterro";
import anime from "animejs";

export default {
  name: "Session3Page13",
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
        backplateImgUrl: require('../../assets/images/session3/bubbles-background2.jpg'),
        defaultTool: 'brush',
        hiddenTools: ['pixelize','select','crop','line','text','rotate','resize',
          'open','save','close','settings','redo','zoomin','zoomout'],
        colorScheme: {
          main: '#ffffff',
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
    anime({
      targets: ".text-box",
      opacity: 1,
      duration: 1000,
      delay: 500,
      easing: 'linear'
    })
  }
}
</script>

<style scoped>
#painterro {
  position: absolute;
  top: 10vh;
  left: 0;
  right: 0;
  bottom: 0;
}
.white-background {
  position: absolute;
  width: 100%;
  height: 15vh;
  background-color: #ffffff;
  z-index: 20;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text-box {
  width: 80%;
  background-color: #000000;
  padding: 1vw;
  opacity: 0;
}
.text-box p {
  color: #ffffff;
  text-align: center;
  font-size: 2vw;
  margin-bottom: 0;
}
</style>