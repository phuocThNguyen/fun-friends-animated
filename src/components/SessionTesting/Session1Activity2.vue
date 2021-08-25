<template>
  <div class="interactive-container">
    <svg class="butterfly-path" id="butterfly1-path" xmlns="http://www.w3.org/2000/svg" viewBox="0 -700 400 700">
      <path d="M 0 0 C 160 -100 420 40 400 -140 C 360 -300 120 -100 20 -260 C -80 -420 320 -260 280 -400 C 240 -520 120 -460 80 -560 C 20 -660 160 -653.3333 200 -700" stroke="#fff" stroke-width="0" fill="none"/>
    </svg>

    <svg class="butterfly-path" id="butterfly2-path" xmlns="http://www.w3.org/2000/svg" viewBox="0 -576 327 576">
      <path d="M 235 0 C 41 -53 2 -53 0 -121 C 33 -222 339 -124 327 -220 C 304 -315 49 -238 53 -308 C 61 -384 205 -295 175 -375 C 158 -422 105 -410 107 -451 C 97 -518 263 -458 247 -527 C 231 -560 135 -528 112 -576" stroke="#fff" stroke-width="0" fill="none"/>
    </svg>

    <svg class="butterfly-path" id="butterfly3-path" xmlns="http://www.w3.org/2000/svg" viewBox="-61 -491 741 526">
      <path d="M -61 -67 C 322 -166 100.3333 1 177 33 C 256.3333 33.6667 335.6667 34.3333 415 35 C 566 -190 591.6667 -30.3333 680 -63 C 679 -151.6667 678 -240.3333 677 -329 C 419 -334 497.6667 -437 408 -491 C 313.6667 -490.3333 219.3333 -489.6667 142 -429 S 4 -458.3333 -57 -443 L -61 -67" stroke="#fff" stroke-width="0" fill="none"/>
    </svg>
    <!--  Butterfly  -->
    <div class="butterfly" ref="butterfly1">
      <div class="wing left-wing"></div>
      <div class="wing right-wing"></div>
    </div>

    <div class="butterfly" ref="butterfly2">
      <div class="wing left-wing"></div>
      <div class="wing right-wing"></div>
    </div>

    <div class="butterfly" ref="butterfly3">
      <div class="wing left-wing"></div>
      <div class="wing right-wing"></div>
    </div>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Activity2",
  mounted() {
    const path1 = anime.path('#butterfly1-path path');
    anime({
      targets: this.$refs.butterfly1,
      translateX: path1('x'),
      translateY: path1('y'),
      easing: 'linear',
      delay: 1000,
      duration: 4000,
      loop: true
    });

    const path2 = anime.path('#butterfly2-path path');
    anime({
      targets: this.$refs.butterfly2,
      translateX: path2('x'),
      translateY: path2('y'),
      easing: 'linear',
      delay: 1000,
      duration: 4000,
      loop: true
    });

    const path3 = anime.path('#butterfly3-path path');
    anime({
      targets: this.$refs.butterfly3,
      translateX: path3('x'),
      translateY: path3('y'),
      easing: 'linear',
      delay: 2000,
      duration: 6000,
      loop: true
    });
  }
}
</script>

<style scoped>
.butterfly-path {
  position: absolute;
  height: 90vh;
}
.butterfly {
  position: absolute;
  height: 10em;
  width: 2em;
  border-radius: 1em;
}
.butterfly:nth-of-type(1) {
  left: -50px;
  z-index: 873;
  font-size: 0.2715vmin;
  background: #d12c2c;
}
.butterfly:nth-of-type(1) .left-wing {
  -webkit-animation: flap-left 200ms 0.66s infinite;
  animation: flap-left 200ms 0.66s infinite;
  background: #ffff1f;
}
.butterfly:nth-of-type(1) .left-wing:after {
  background: #ffff57;
}
.butterfly:nth-of-type(1) .right-wing {
  -webkit-animation: flap-right 200ms 0.66s infinite;
  animation: flap-right 200ms 0.66s infinite;
  background: #ffff1f;
}
.butterfly:nth-of-type(1) .right-wing:after {
  background: #ffff57;
}

.butterfly:nth-of-type(2) {
  z-index: 873;
  font-size: 0.2515vmin;
  background: #fce565;
}
.butterfly:nth-of-type(2) .left-wing {
  -webkit-animation: flap-left 200ms 0.66s infinite;
  animation: flap-left 200ms 0.66s infinite;
  background: #ff2929;
}
.butterfly:nth-of-type(2) .left-wing:after {
  background: #ff4545;
}
.butterfly:nth-of-type(2) .right-wing {
  -webkit-animation: flap-right 200ms 0.66s infinite;
  animation: flap-right 200ms 0.66s infinite;
  background: #ff2929;
}
.butterfly:nth-of-type(2) .right-wing:after {
  background: #ff4545;
}

.butterfly:nth-of-type(3) {
  z-index: 873;
  font-size: 0.2715vmin;
  background: #fce565;
  left: -50px;
}
.butterfly:nth-of-type(3) .left-wing {
  -webkit-animation: flap-left 200ms 0.66s infinite;
  animation: flap-left 200ms 0.66s infinite;
  background: #77ff1c;
}
.butterfly:nth-of-type(3) .left-wing:after {
  background: #abff73;
}
.butterfly:nth-of-type(3) .right-wing {
  -webkit-animation: flap-right 200ms 0.66s infinite;
  animation: flap-right 200ms 0.66s infinite;
  background: #77ff1c;
}
.butterfly:nth-of-type(3) .right-wing:after {
  background: #abff73;
}
.wing {
  position: absolute;
  bottom: 50%;
  height: 240%;
  width: 1400%;
}
.wing:after {
  position: absolute;
  top: 100%;
  height: 100%;
  width: 100%;
  content: "";
  background: #fff;
}

.left-wing {
  right: 100%;
  -webkit-animation: flap-left 500ms infinite;
  animation: flap-left 500ms infinite;
  border-radius: 1em 100% 0 4em;
  transform-origin: right bottom;
}
.left-wing:after {
  border-radius: 1em 0 1em 100%;
  transform-origin: right top;
  transform: skewY(-15deg) scaleX(0.65) scaleY(0.85);
}

.right-wing {
  left: 100%;
  -webkit-animation: flap-right 500ms infinite;
  animation: flap-right 500ms infinite;
  border-radius: 100% 1em 4em 0;
  transform-origin: left bottom;
}
.right-wing:after {
  border-radius: 0 1em 100% 1em;
  transform-origin: left top;
  transform: skewY(15deg) scaleX(0.65) scaleY(0.85);
}

@-webkit-keyframes flap-left {
  50% {
    transform: rotateY(85deg);
  }
}

@keyframes flap-left {
  50% {
    transform: rotateY(85deg);
  }
}
@-webkit-keyframes flap-right {
  50% {
    transform: rotateY(-85deg);
  }
}
@keyframes flap-right {
  50% {
    transform: rotateY(-85deg);
  }
}
</style>