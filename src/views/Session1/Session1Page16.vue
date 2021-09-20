<template>
  <div class="interactive-container cloud-background">
<!--    <div id="painterro"></div>-->
    <drawing-canvas class="canvas" :canvasStyle='canvasStyle'/>

    <div class="text">
      <h1 id="first">Where do you live?</h1>
      <h1 id="second">Where do you want to visit?</h1>
      <div class="para">
        <p> - Mark the country that you live in.</p>
        <p> - Mark on your map where you and your friends want to visit and connect these places.</p>
        <p><strong>We may be in different places and want different things,</strong></p>
        <p><strong>but we are all joined together by lines of belonging and love.</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
// import Painterro from "painterro";
import DrawingCanvas from "@/components/drawingCanvas/DrawingCanvas";

export default {
  name: "Session1Page16",
  components: {DrawingCanvas},
  data() {
    return {
      // painterro: null,
      canvasStyle: {
        width: 0.9,
        height: 0.55,
        isPicture: true,
        pictureUrl: "session1/World-Map-ai.jpg",
      },
      // canvasStyle: true
    }
  },
  mounted() {
    // this.$nextTick(() => {
    //   this.painterro = Painterro({
    //     id: "painterro",
    //     activeFillColor: '#ffffff',
    //     availableLineWidths: [1,4,8,12,16,20],
    //     availableEraserWidths: [1,4,8,12,16,20],
    //     backplateImgUrl: require('../../assets/images/session1/World-Map-ai.jpg'),
    //     defaultTool: 'brush',
    //     hiddenTools: ['pixelize','select','crop','line','text','rotate','resize',
    //     'open','save','close','settings','redo','zoomin','zoomout'],
    //     colorScheme: {
    //       main: '#f8f8f8',
    //       control: "#ffffff",
    //       controlContent: '#434649',
    //       backgroundColor: "#DEEDF3",
    //     },
    //   })
    //   this.painterro.show();
    //   let info = document.querySelector('.ptro-info');
    //   info.style.visibility = 'hidden';
    //   let controlBar = document.querySelector('#painterro-bar');
    //   controlBar.style.display = 'flex';
    //   controlBar.style.justifyContent = 'center';
    // });


    let para = document.getElementsByClassName('para')[0].children;
    let animation = anime.timeline({
      delay: 700,
      duration: 700,
    });
    animation
      .add({
        targets: "#first",
        color: "#000",
      })
      .add({
        targets: "#second",
        color: "#000",
      })
      .add({
        targets: para[0],
        color: "#000",
      })
      .add({
        targets: para[1],
        color: "#000",
      })
      .add({
        targets: para[2],
        color: "#000",
      })
      .add({
        targets: para[3],
        color: "#000",
      })
  }
}
</script>

<style scoped>
.cloud-background {
  background-color: #ffffff;
}
.text {
  position: absolute;
  z-index: 30;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 1vh;
}
.text h1 {
  font-size: 2vw;
  color: #ffffff;
}
.para {
  background-color: #ffffff;
  opacity: 1;
  width: 100%;
}
.para p {
  font-size: 1.8vw;
  color: #ffffff;
  margin-bottom: 0;
  text-align: center;
}
/*#painterro {*/
/*  position: absolute;*/
/*  top: 20vh;*/
/*  right: 0;*/
/*  bottom: 0;*/
/*  left: 0;*/
/*  z-index: 10;*/
/*}*/
.canvas {
  position: absolute;
  top: 25vh;
  left: 5vw;
}
</style>