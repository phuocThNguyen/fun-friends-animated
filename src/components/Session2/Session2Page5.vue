<template>
  <div class="interactive-container">
    <div id="painterro"></div>

    <div class="text-box">
      <h1>'Feeling' faces</h1>
      <p>Sit with a friend and look at all the 'Feeling' faces.</p>
      <p>What could they be feeling?</p>
      <p>Take turns and make sure to listen to your friend.
      Remember, we all think differently.</p>

      <p>If you want to, you can write your guess or draw faces
      in the circle to show their feelings.</p>

      <p>Nina has gifts for her family.</p>
    </div>
  </div>
</template>

<script>
import Painterro from "painterro";
import anime from 'animejs';

export default {
  name: "Session2Page5",
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
        defaultLineWidth: '10',
        defaultEraserWidth: '40',
        availableLineWidths: [1,4,8,12,16,20],
        availableEraserWidths: [1,4,8,12,16,20],
        backplateImgUrl: require('../../assets/images/session2/5772-resized.jpg'),
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
    let para = document.getElementsByClassName('text-box')[0].children;
    let animation = anime.timeline({
      easing: 'linear',
      duration: 500,
      delay: 500
    });
    animation
      .add({
        targets: para[0],
        color: '#000'
      })
      .add({
        targets: para[1],
        color: '#000'
      })
      .add({
        targets: para[2],
        color: '#000'
      })
      .add({
        targets: para[3],
        color: '#000'
      })
      .add({
        targets: para[4],
        color: '#000'
      })
      .add({
        targets: para[5],
        opacity: 1
      })
  }
}
</script>

<style scoped>
.text-box {
  position: absolute;
  width: 60vw;
  z-index: 10;
  padding: 5vh 7vw 5vh 7vw;
  color: #ffffff;
}
.text-box h1 {
  font-size: 5vw;
  margin-bottom: 5vh;
}
.text-box p {
  font-size: 2vw;
  margin-bottom: 5vh;
}
.text-box p:last-child {
  margin-top: 15vh;
  display: inline-block;
  background-color: #00ce7c;
  color: #ffffff;
  width: auto;
  height: auto;
  padding: 1.5vw;
  font-size: 2.5vw;
  font-weight: bold;
  opacity: 0;
}
#painterro {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 80vh;
  z-index: 10;
}
</style>