<template>
  <div class="interactive-container cloud-background">
    <div id="painterro"></div>

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

    <!--  airplane  -->
    <div class="airplane">
      <div class="head"></div>
      <div class="body">
        <div class="window"></div>
        <div class="window"></div>
        <div class="window"></div>
      </div>
      <div class="lwing"></div>
      <div class="rwing"></div>
      <div class="tale"></div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";
import Painterro from "painterro";

export default {
  name: "Session1Page15",
  data() {
    return {
      painterro: null,
    }
  },
  methods: {
    add_file(file) {
      console.log(file);
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.painterro = Painterro({
        id: "painterro",
        activeFillColor: '#ffffff',
        defaultLineWidth: '20',
        defaultEraserWidth: '40',
        backplateImgUrl: require('../../assets/images/session1/World-Map-ai.jpg'),
        defaultTool: 'brush',
        hiddenTools: ['pixelize','select','crop','line','text','rotate','resize',
        'open','save','close','settings','redo','zoomin','zoomout'],
        colorScheme: {
          main: "'#f8f8f8'",
          control: "#ffffff",
          controlContent: '#434649',
          backgroundColor: "#DEEDF3",
        },
        saveHandler: (image, done) => {
          const type = "image/png";
          const file = new File([image.asBlob(type)], "file.png", {
            type: type,
          });
          this.add_file(file);
          done(true); //done and hide painterro
        },
      })
      this.painterro.show();
    });
    let para = document.getElementsByClassName('para')[0].children;
    let animation = anime.timeline({
      delay: 1000,
      duration: 1000,
    });
    animation
      .add({
        targets: "#first",
        color: "#000",
        delay: 2000,
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
  background-color: #DEEDF3;
}
.text {
  position: absolute;
  z-index: 30;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
}
.text h1 {
  font-size: 20px;
  color: #DEEDF3;
}
.para {
  background-color: #DEEDF3;
  padding-right: 25px;
  padding-left: 25px;
  width: 90%;
}
.para p {
  font-size: 15px;
  color: #DEEDF3;
  margin-bottom: 0;
  text-align: center;
}
#painterro {
  position: absolute;
  top: 130px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
}
.airplane {
  position: absolute;
  left: 50px;
  top: 250px;
  z-index: 20;
  -webkit-animation: plane-fly 20s linear infinite;
  -o-animation: plane-fly 20s linear infinite;
  animation: plane-fly 20s linear infinite;
}
.airplane div {
  background: #f9fbfc;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  position: absolute;
  z-index: 1;
}
div.head {
  top: 21px;
  left: 83px;
  width: 60px;
  height: 25px;
  border-radius: 100%;
}
div.body {
  top: 20px;
  left: 0;
  width: 130px;
  height: 26px;
  border-radius: 40% 30% 20% 50%;
  z-index: 1;
}
div.lwing {
  top: 7px;
  left: 60px;
  height: 21px;
  width: 30px;
  border-radius: 5px;
  z-index: 0;
  -webkit-transform: skew(51deg, 0deg);
  -ms-transform: skew(51deg, 0deg);
  -o-transform: skew(51deg, 0deg);
  transform: skew(51deg, 0deg);
}
div.rwing {
  top: 34px;
  left: 57px;
  height: 27px;
  width: 35px;
  border-radius: 5px;
  z-index: 1;
  box-shadow: 0 6px 4px rgba(0, 0, 0, 0.16);
  -webkit-transform: skew(-49deg, 0deg);
  -ms-transform: skew(-49deg, 0deg);
  -o-transform: skew(-49deg, 0deg);
  transform: skew(-49deg, 0deg);
}
div.tale {
  top: 15px;
  left: 10px;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  -webkit-transform: skew(35deg, -9deg);
  -ms-transform: skew(35deg, -9deg);
  -o-transform: skew(35deg, -9deg);
  transform: skew(35deg, -9deg);
  background: linear-gradient(0deg, #fff, #bbdeff);
}
div.window,
div.window:before,
div.window:after {
  content: "";
  top: 6px;
  left: 48px;
  width: 4px;
  height: 4px;
  border-radius: 30%;
  background: #9ad0f5;
  border: 1px solid #5093d1;
  position: absolute;
}
div.window:before {
  left: -12px;
  top: -1px;
}
div.window:after {
  left: 10px;
  top: -1px;
}
div.window:nth-child(1) {
  left: 81px;
}
div.window:nth-child(2) {
  left: 115px;
}
div.window:nth-child(2):after {
  border-top-right-radius: 8px;
  width: 6px;
}
@-webkit-keyframes plane-fly {
  0% {
    left: -10%;
    -webkit-transform: scale(0.4);
    -ms-transform: scale(0.4);
    -o-transform: scale(0.4);
    transform: scale(0.4);
  }
  50% {
    left: 110%;
    -webkit-transform: scale(1);
    -ms-transform: scale(1);
    -o-transform: scale(1);
    transform: scale(1);
  }
  51% {
    -webkit-transform: rotateY(180deg);
    -ms-transform: rotateY(180deg);
    -o-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
  100% {
    left: -10%;
    -webkit-transform: scale(1.4) rotateY(180deg);
    -ms-transform: scale(1.4) rotateY(180deg);
    -o-transform: scale(1.4) rotateY(180deg);
    transform: scale(1.4) rotateY(180deg);
  }
}
</style>