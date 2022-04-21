<template>
  <div class="interactive-container green-background example-3d">
    <div class="text-box">
      <p class="text">
        Vores krop er forskellige og vi taler forskellige sprog,
        <br>men den måde hvorpå vi elsker er den samme.
      </p>
    </div>
    <div class="items-container">
      <div class="images-container">
        <img class="images" id="image-2" src="../../assets/images/session1/18-resized.jpg" alt="bears">
        <img class="images" id="image-1" src="../../assets/images/session1/monkey.jpeg" alt="monkey">
        <img class="images" id="image-4" src="../../assets/images/session1/215-resized.jpg" alt="elephants">
        <img class="images" id="image-3" src="../../assets/images/session1/chicken.jpg" alt="chicken">
      </div>
      <div class="images-container">
        <green-tick class="tick" id="tick-1"/>
        <green-tick class="tick" id="tick-2"/>
        <green-tick class="tick" id="tick-3"/>
        <green-tick class="tick" id="tick-4"/>
      </div>
      <div class="images-container">
        <red-tick class="tick" id="tick-5"/>
        <red-tick class="tick" id="tick-6"/>
        <red-tick class="tick" id="tick-7"/>
        <red-tick class="tick" id="tick-8"/>
      </div>
      <div class="images-container">
        <div class="mask" @click="checkAns('monkey', $event)" id="mask-1"/>
        <div class="mask" @click="checkAns('bear', $event)" id="mask-2"/>
        <div class="mask" @click="checkAns('chicken', $event)" id="mask-3"/>
        <div class="mask" @click="checkAns('elephant', $event)" id="mask-4"/>
      </div>
    </div>
    <div class="items-container-mask"/>
    <div class="title">Hvilket dyr hører du? <br>Lyt til dyrelydene og klik på det rigtige billede.</div>
    <div class="coordinate-container" @click="playSoundButton">
      <svg class="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 517 517" width="517" height="517">
        <defs>
          <linearGradient id="grd1" gradientUnits="userSpaceOnUse"  x1="518.517" y1="200.261" x2="518.517" y2="518.086">
            <stop offset="0" stop-color="#d9923c"  />
            <stop offset="1" stop-color="#bd6519"  />
          </linearGradient>
          <linearGradient id="grd2" gradientUnits="userSpaceOnUse"  x1="373.399" y1="-52.623" x2="491.472" y2="173.685">
            <stop offset="0" stop-color="#ffd37e"  />
            <stop offset="1" stop-color="#000000"  />
          </linearGradient>
          <radialGradient id="grd3" gradientUnits="userSpaceOnUse"  cx="139.994" cy="53.325" r="244.191">
            <stop offset="0" stop-color="#ffd37e"  />
            <stop offset="1" stop-color="#000000"  />
          </radialGradient>
          <linearGradient id="grd4" gradientUnits="userSpaceOnUse"  x1="406.121" y1="-230.093" x2="553.713" y2="320.917">
            <stop offset="0" stop-color="#ffffff"  />
            <stop offset="1" stop-color="#bd6519"  />
          </linearGradient>
          <radialGradient id="grd5" gradientUnits="userSpaceOnUse"  cx="355.15" cy="509.876" r="247.603">
            <stop offset="0" stop-color="#a95c19"  />
            <stop offset="1" stop-color="#ffffff"  />
          </radialGradient>
          <linearGradient id="grd6" gradientUnits="userSpaceOnUse"  x1="493.85" y1="232.602" x2="629.605" y2="407.544">
            <stop offset="0" stop-color="#8b4519"  />
            <stop offset="1" stop-color="#ffffff"  />
          </linearGradient>
          <linearGradient id="grd7" gradientUnits="userSpaceOnUse"  x1="479.981" y1="237.048" x2="616.421" y2="444.332">
            <stop offset="0" stop-color="#8b4519"  />
            <stop offset="1" stop-color="#ffffff"  />
          </linearGradient>
          <linearGradient id="grd8" gradientUnits="userSpaceOnUse"  x1="437.868" y1="183.243" x2="477.893" y2="417.676">
            <stop offset="0" stop-color="#32a9e5"  />
            <stop offset="1" stop-color="#007fc3"  />
          </linearGradient>
          <linearGradient id="grd9" gradientUnits="userSpaceOnUse"  x1="365.334" y1="84.106" x2="391.828" y2="199.718">
            <stop offset="0" stop-color="#35b5ff"  />
            <stop offset="1" stop-color="#000000"  />
          </linearGradient>
          <linearGradient id="grd10" gradientUnits="userSpaceOnUse"  x1="105.83" y1="393.122" x2="91.399" y2="292.104">
            <stop offset="0" stop-color="#ffffff"  />
            <stop offset="1" stop-color="#0072b5"  />
          </linearGradient>
          <linearGradient id="grd11" gradientUnits="userSpaceOnUse"  x1="311.324" y1="-224.178" x2="425.462" y2="153.657">
            <stop offset="0" stop-color="#ffffff"  />
            <stop offset="1" stop-color="#0072b5"  />
          </linearGradient>
          <radialGradient id="grd12" gradientUnits="userSpaceOnUse"  cx="322.465" cy="400.132" r="258.753">
            <stop offset="0" stop-color="#00639f"  />
            <stop offset="1" stop-color="#ffffff"  />
          </radialGradient>
          <linearGradient id="grd13" gradientUnits="userSpaceOnUse"  x1="310.967" y1="64.344" x2="370.418" y2="237.168">
            <stop offset="0" stop-color="#ffffff"  />
            <stop offset="1" stop-color="#0072b5"  />
          </linearGradient>
          <linearGradient id="grd14" gradientUnits="userSpaceOnUse"  x1="307.006" y1="81.142" x2="361.421" y2="239.324">
            <stop offset="0" stop-color="#ffffff"  />
            <stop offset="1" stop-color="#0072b5"  />
          </linearGradient>
          <linearGradient id="grd15" gradientUnits="userSpaceOnUse"  x1="302.261" y1="92.196" x2="352.758" y2="238.991">
            <stop offset="0" stop-color="#ffffff"  />
            <stop offset="1" stop-color="#0072b5"  />
          </linearGradient>
          <linearGradient id="grd16" gradientUnits="userSpaceOnUse"  x1="321.352" y1="172.854" x2="357.372" y2="262.285">
            <stop offset="0" stop-color="#f9c849"  />
            <stop offset="1" stop-color="#ed7c18"  />
          </linearGradient>
          <linearGradient id="grd17" gradientUnits="userSpaceOnUse"  x1="151.123" y1="279.8" x2="192.282" y2="212.449">
            <stop offset="0" stop-color="#ffea7e"  />
            <stop offset="1" stop-color="#000000"  />
          </linearGradient>
          <linearGradient id="grd18" gradientUnits="userSpaceOnUse"  x1="81.988" y1="374.3" x2="177.008" y2="163.765">
            <stop offset="0" stop-color="#ffffff"  />
            <stop offset="1" stop-color="#bd6f31"  />
          </linearGradient>
        </defs>
        <g id="Element game">
          <g id="2 1 ">
            <g id="&lt;Group&gt;">
              <path id="&lt;Compound Path&gt;" class="shp0-button" d="M258.72 516.44C189.86 516.44 125.13 489.62 76.44 440.93C27.74 392.24 0.93 327.5 0.93 258.64C0.93 189.78 27.74 125.04 76.44 76.35C125.13 27.66 189.86 0.85 258.72 0.85C327.58 0.85 392.32 27.66 441.01 76.35C489.7 125.04 516.52 189.78 516.52 258.64C516.52 327.5 489.7 392.24 441.01 440.93C392.32 489.62 327.58 516.44 258.72 516.44Z" />
              <path id="&lt;Path&gt;" class="shp1-button" d="M100.56 436.05C95.63 436.05 90.71 434.17 86.95 430.42C41.07 384.53 15.8 323.53 15.8 258.64C15.8 193.75 41.07 132.75 86.95 86.87C132.83 40.99 193.84 15.72 258.72 15.72C323.61 15.72 384.61 40.99 430.5 86.87C455.79 112.16 474.77 141.8 486.91 174.96C490.56 184.94 485.43 195.99 475.45 199.65C465.48 203.3 454.42 198.17 450.77 188.19C440.57 160.32 424.59 135.38 403.29 114.08C364.67 75.47 313.33 54.2 258.72 54.2C204.11 54.2 152.77 75.47 114.16 114.08C75.55 152.69 54.28 204.03 54.28 258.64C54.28 313.25 75.55 364.59 114.16 403.2C121.68 410.72 121.68 422.9 114.16 430.42C110.4 434.17 105.48 436.05 100.56 436.05Z" />
              <path id="&lt;Path&gt;" class="shp2-button" d="M12.74 277.66C12.74 210.38 39.62 147.13 88.44 99.55C137.25 51.98 202.15 25.77 271.19 25.77C326.41 25.77 378.97 42.55 422.79 73.61C377.51 33.36 319.81 11.34 258.72 11.34C192.67 11.34 130.57 37.07 83.86 83.78C37.15 130.48 11.42 192.59 11.42 258.64C11.42 267.67 11.92 276.63 12.87 285.48C12.79 282.88 12.74 280.28 12.74 277.66Z" />
              <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp3-button" d="M516.52 258.64C516.52 327.5 489.7 392.24 441.01 440.93C392.32 489.62 327.58 516.44 258.72 516.44C189.86 516.44 125.13 489.62 76.44 440.93C27.74 392.24 0.93 327.5 0.93 258.64C0.93 189.78 27.74 125.04 76.44 76.35C125.13 27.66 189.86 0.85 258.72 0.85C327.58 0.85 392.32 27.66 441.01 76.35C489.7 125.04 516.52 189.78 516.52 258.64ZM505.37 252.74C505.37 188.43 479.4 127.98 432.26 82.51C385.12 37.04 322.44 12 255.77 12C189.1 12 126.42 37.04 79.28 82.51C32.14 127.98 6.18 188.43 6.18 252.74C6.18 317.04 32.14 377.5 79.28 422.97C126.42 468.44 189.1 493.48 255.77 493.48C322.44 493.48 385.12 468.44 432.26 422.97C479.4 377.5 505.37 317.04 505.37 252.74Z" />
              <path id="&lt;Path&gt;" class="shp4-button" d="M434.52 427.22C387.38 472.69 322.77 498.72 256.1 498.72C191.36 498.72 124.25 473.14 83.38 433.13C83.39 438.04 83.51 442.97 83.7 447.89C131.47 492.16 193.23 516.44 258.72 516.44C327.58 516.44 392.32 489.62 441.01 440.93C485.09 396.85 511.24 339.62 515.8 278.09C513.25 274.21 510.64 270.38 507.97 266.59C501.65 340.2 479.24 384.09 434.52 427.22Z" />
              <path id="&lt;Compound Path&gt;" class="shp5-button" d="M259.46 467.89C207.35 467.89 158.36 446.74 121.51 408.32C84.67 369.9 64.38 318.81 64.38 264.48C64.38 210.15 84.67 159.06 121.51 120.64C158.36 82.22 205.91 65.13 258.02 65.13C310.13 65.13 360.56 82.22 397.4 120.64C434.25 159.06 454.54 210.15 454.54 264.48C454.54 318.81 438.61 371.16 401.77 409.58C364.92 448 311.57 467.89 259.46 467.89Z" />
              <path id="&lt;Compound Path&gt;" class="shp6-button" d="M259.46 461.33C209.05 461.33 161.65 440.86 126.01 403.7C90.36 366.53 70.73 317.11 70.73 264.55C70.73 211.98 90.36 162.56 126.01 125.39C161.65 88.23 207.66 71.69 258.07 71.69C308.48 71.69 357.27 88.23 392.91 125.39C428.56 162.56 448.19 211.98 448.19 264.55C448.19 317.11 432.78 367.75 397.13 404.92C361.49 442.09 309.87 461.33 259.46 461.33Z" />
              <path id="&lt;Compound Path&gt;" class="shp7-button" d="M258.72 440.34C210.19 440.34 164.56 421.44 130.24 387.12C95.92 352.81 77.02 307.18 77.02 258.64C77.02 210.11 95.92 164.48 130.24 130.16C164.56 95.84 210.19 76.94 258.72 76.94C307.26 76.94 352.89 95.84 387.21 130.16C421.53 164.48 440.43 210.11 440.43 258.64C440.43 307.18 421.53 352.81 387.21 387.12C352.89 421.44 307.26 440.34 258.72 440.34Z" />
              <path id="&lt;Compound Path&gt;" class="shp8-button" d="M191.52 156.64C173.16 162.87 166.92 251.43 180.04 329.49C166.16 324.25 152.54 316.69 141.28 307.46C114.39 285.41 99.59 255.02 99.59 221.91C99.59 188.79 114.39 156.91 141.28 132.13C168.16 107.35 203.91 92.64 241.93 90.71C279.95 88.79 315.7 99.87 342.58 121.92C369.47 143.98 384.27 174.36 384.27 207.48C384.27 240.59 368.96 276.35 330.26 301.94C353 282.84 360.21 265.57 351.91 250.11C326.83 203.48 228.37 150.84 191.52 156.64Z" />
              <path id="&lt;Path&gt;" class="shp9-button" d="M230.24 317.02C177.38 317.02 127.67 300.02 90.14 269.15C95.75 300.07 111.48 328.55 135.82 351.16C166.77 379.91 207.75 398.36 251.51 398.36C295.27 398.36 336.57 379.91 367.51 351.16C398.46 322.42 415.5 284.2 415.5 243.55C415.5 234.66 414.68 225.89 413.09 217.31C390.57 297.34 283.42 317.02 230.24 317.02Z" />
              <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp10-button" d="M440.43 258.64C440.43 307.18 421.53 352.81 387.21 387.12C352.89 421.44 307.26 440.34 258.72 440.34C210.19 440.34 164.56 421.44 130.24 387.12C95.92 352.81 77.02 307.18 77.02 258.64C77.02 210.11 95.92 164.48 130.24 130.16C164.56 95.84 210.19 76.94 258.72 76.94C307.26 76.94 352.89 95.84 387.21 130.16C421.53 164.48 440.43 210.11 440.43 258.64ZM416.81 244.87C416.81 202.64 399.65 162.94 368.49 133.08C337.33 103.22 295.9 86.78 251.84 86.78C207.77 86.78 166.34 103.22 135.18 133.08C104.02 162.94 86.86 202.64 86.86 244.87C86.86 287.09 105.11 325.21 136.27 355.07C167.43 384.93 208.86 401.37 252.93 401.37C296.99 401.37 338.42 384.93 369.58 355.07C400.74 325.21 416.81 287.09 416.81 244.87Z" />
              <path id="&lt;Path&gt;" class="shp11-button" d="M376.47 363.6C345.31 393.45 303.66 412.79 254.46 411.81C210.4 410.93 136.05 390.93 90.13 325.33C91.48 336 115.06 376.06 134.63 391.36C168.41 422.99 212.23 440.34 258.72 440.34C307.26 440.34 352.89 421.44 387.21 387.12C421.53 352.81 440.43 307.18 440.43 258.64C440.43 252.91 440.15 247.22 439.63 241.59C439.54 229.12 431.23 197.2 425.77 186.49C440.42 283.79 407.63 333.74 376.47 363.6Z" />
              <path id="&lt;Path&gt;" class="shp12-button" d="M210.84 105.8C198.68 102.76 176.07 117.61 175.42 126.14C174.55 137.33 189.85 135.32 206.25 126.79C219.32 119.99 218.71 107.77 210.84 105.8Z" />
              <path id="&lt;Path&gt;" class="shp12-button" d="M153.6 141.04C144.83 141.69 138.34 148.57 139.78 154.4C141.67 162.06 149.92 160.85 156.19 154.64C163.55 147.36 159.28 140.62 153.6 141.04Z" />
            </g>
            <g id="&lt;Group&gt;">
              <path id="&lt;Path&gt;" class="shp13-button" d="M190.79 384.01C157.88 373.43 148.94 145.41 185.05 141.84C228.71 137.53 360.85 210.79 363.15 259.05C365.19 301.82 222.97 394.35 190.79 384.01Z" />
              <path id="&lt;Path&gt;" class="shp14-button" d="M196.86 373.77C166.74 364.09 158.56 155.39 191.61 152.13C231.57 148.18 352.52 215.23 354.62 259.4C356.48 298.55 226.31 383.24 196.86 373.77Z" />
              <path id="&lt;Path&gt;" class="shp15-button" d="M199.92 363.81C171.97 354.82 164.37 161.14 195.04 158.12C232.13 154.46 344.37 216.68 346.32 257.67C348.05 293.99 227.25 372.59 199.92 363.81Z" />
              <path id="&lt;Path&gt;" class="shp16-button" d="M200.65 356.39C174.02 347.83 166.78 163.28 196 160.39C231.34 156.91 338.29 216.19 340.15 255.25C341.8 289.87 226.69 364.76 200.65 356.39Z" />
              <path id="&lt;Path&gt;" class="shp17-button" d="M208.91 340.13C192.69 334.92 186.85 211.2 204.64 209.44C226.16 207.32 304.53 247.32 305.66 271.11C306.66 292.18 224.76 345.23 208.91 340.13Z" />
              <path id="&lt;Compound Path&gt;" fill-rule="evenodd" class="shp18-button" d="M200.65 356.39C174.02 347.83 166.78 163.28 196 160.39C231.34 156.91 338.29 216.19 340.15 255.25C341.8 289.87 226.69 364.76 200.65 356.39ZM278.63 315.53C304.38 296.46 331.61 271.61 331.24 258.64C330.55 234.23 234.8 165.06 192.83 172.05C183.69 173.58 178.54 228.5 181.68 272.42C184.63 313.59 192.62 348.78 203 352.12C214.24 355.73 248.94 337.52 278.63 315.53Z" />
            </g>
          </g>
        </g>
      </svg>
      <div class="button-label">Afspil Lyden Igen</div>
    </div>

    <audio ref="bear" src="../../assets/sounds/session1/bear-cut.mp3"/>
    <audio ref="monkey" src="../../assets/sounds/session1/monkey.mp3"/>
    <audio ref="elephant" src="../../assets/sounds/session1/elephant.mp3"/>
    <audio ref="chicken" src="../../assets/sounds/session1/chicken.mp3"/>
    <audio ref="correct" src="../../assets/sounds/all/correct-ans.mp3"/>
    <audio ref="wrong" src="../../assets/sounds/all/wrong-ans.mp3"/>
    <audio ref="celebrate" src="../../assets/sounds/all/kids-cheering.mp3"/>

    <audio src="../../assets/sounds/session1/Page26-whatisthisanimal.mp3" ref="voice1" @ended="hideMask"/>
    <audio src="../../assets/sounds/session1/Page26-wehavedifferentbodies.mp3" ref="voice2"/>
    <audio src="../../assets/sounds/all/GoodTry_TryAgain.mp3" ref="goodTry"/>
    <audio src="../../assets/sounds/all/GreatWork.mp3" ref="greatWork"/>
    <audio src="../../assets/sounds/all/Correct.mp3" ref="correctVoice"/>

    <div class="page-number" id="page-light">26</div>
  </div>
</template>

<script>
import anime from "animejs";
import GreenTick from "@/components/feelingsQuestion/ticks/GreenTick";
import RedTick from "@/components/feelingsQuestion/ticks/RedTick";

export default {
  name: "Session1Page20",
  components: {GreenTick, RedTick},
  data() {
    return {
      correctAns: 0,
      animalIndex: 0,
      animalArray: ['bear','monkey','elephant','chicken']
    }
  },
  methods: {
    hideMask() {
      document.querySelector('.items-container-mask').style.visibility = 'hidden';
    },
    animateImages() {
      let images = document.querySelectorAll('.images')
      let animation = anime.timeline({easing: 'linear', duration: 300, delay: 300})
      animation
        .add({targets: images[1], opacity: 1})
        .add({targets: images[0], opacity: 1})
        .add({targets: images[3], opacity: 1})
        .add({targets: images[2], opacity: 1})
    },
    playSoundButton() {
      switch (this.animalArray[this.animalIndex]) {
        case 'bear':
          this.$refs.bear.play();
          break;
        case 'monkey':
          this.$refs.monkey.play();
          break;
        case 'elephant':
          this.$refs.elephant.play();
          break;
        case 'chicken':
          this.$refs.chicken.play();
          break;
      }
    },
    playSound() {
      switch (this.animalArray[this.animalIndex]) {
        case 'bear':
          setTimeout(() => {
            this.$refs.bear.play();
          }, 8000)
          break;
        case 'monkey':
          setTimeout(() => {
            this.$refs.bear.pause();
            this.$refs.monkey.play();
          }, 1000)
          break;
        case 'elephant':
          setTimeout(() => {
            this.$refs.monkey.pause();
            this.$refs.elephant.play();
          }, 1000)
          break;
        case 'chicken':
          setTimeout(() => {
            this.$refs.elephant.pause();
            this.$refs.chicken.play();
          }, 1000)
          break;
      }
    },
    checkAns(animal, event) {
      if (animal === this.animalArray[this.animalIndex]) {
        this.handleCorrectAnswer(event.target);
      }
      else {
        this.handleWrongAnswer(event.target);
      }
    },
    handleCorrectAnswer(target) {
      this.animateGreenTick(this.convertTick(target, true));
      target.style.visibility = 'hidden';
      this.$refs.correct.play();
      this.correctAns++;
      if (this.correctAns < 4) {setTimeout(() => {this.$refs.correctVoice.play()}, 100);}
      this.animalIndex++;
      this.playSound();
    },
    handleWrongAnswer(target) {
      this.animateRedTick(this.convertTick(target, false));
      this.$refs.wrong.play();
      setTimeout(() => {this.$refs.goodTry.play()}, 100)
    },
    convertTick(maskId, correct) {
      if (correct) {
        switch (maskId.id) {
          case 'mask-1':
            return '#tick-1'
          case 'mask-2':
            return '#tick-2'
          case 'mask-3':
            return '#tick-3'
          case 'mask-4':
            return '#tick-4'
        }
      } else {
        switch (maskId.id) {
          case 'mask-1':
            return '#tick-5'
          case 'mask-2':
            return '#tick-6'
          case 'mask-3':
            return '#tick-7'
          case 'mask-4':
            return '#tick-8'
        }
      }
    },
    animateGreenTick(target) {
      anime({
        targets: target,
        opacity: 1,
        easing: 'linear',
        duration: 300,
      })
    },
    animateRedTick(target) {
      anime({
        targets: target,
        easing: 'linear',
        opacity: [
          {value: 1, duration: 200},
          {value: 0, duration: 200, delay: 2000},
        ]
      })
    },
    animateTextBox() {
      let textBox = document.querySelector('.text-box');
      textBox.style.zIndex = '10';
      anime({
        targets: textBox,
        opacity: 1,
        duration: 300,
        easing: 'linear'
      })
    },
    afterCorrectFunctions() {
      this.$refs.chicken.pause();
      this.$refs.celebrate.play();
      setTimeout(() => {this.$refs.greatWork.play()}, 500)
      setTimeout(() => {this.animateTextBox();this.$refs.voice2.play();}, 2000)
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice1.play()}, 1)
    }
  },
  mounted() {
    this.animateImages();
    this.playSound();
    this.playVoiceOver();
  },
  watch: {
    correctAns: function () {
      if (this.correctAns === 4) {
        this.afterCorrectFunctions();
      }
    }
  }
}
</script>

<style scoped>
.coordinate-container {
  position: absolute;
  top: 10vh;
  left: 50vh;
  width: 50vh;
  height: 9vh;
  display: flex;
  align-items: center;
}
.button {
  width: auto;
  height: 80%;
  margin-right: 2vh;
}
.button:active {
  transform: scale(0.8);
}
.button-label {
  font-size: 3vh;
  color: #000000;
}
.title {
  position: absolute;
  width: 100%;
  font-size: 4vh;
  top: .5%;
  left: 0;
  text-align: center;
  line-height: 5vh;
}
.items-container-mask {
  position: absolute;
  left: 11%;
  bottom: 2vh;
  width: 78%;
  height: 78%;
  z-index: 10;
}
.items-container {
  position: absolute;
  left: 11%;
  bottom: 2vh;
  width: 78%;
  height: 78%;
}
.images-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.images {
  position: absolute;
  width: 48.5%;
  height: 48%;
  margin: 1vh;
  opacity: 0;
}
.mask {
  position: absolute;
  width: 48.5%;
  height: 48%;
  margin: 1vh;
  opacity: 0;
  background-color: rgba(0,0,0,0);
}
.tick {
  position: absolute;
}
.text-box {
  position: absolute;
  background-color: #00CE7C;
  padding: 1vh;
  width: 100vh;
  left: 16.5vh;
  top: 53%;
  opacity: 0;
}
.text {
  font-weight: bold;
  color: #ffffff;
  font-size: 3vh;
  text-align: center;
  margin-bottom: 0;
}
#image-1 { top: 0; left: 0 }
#image-2 { top: 0; right: 0 }
#image-3 { bottom: 0; left: 0 }
#image-4 { bottom: 0; right: 0 }
#mask-1 { top: 0; left: 0 }
#mask-2 { top: 0; right: 0 }
#mask-3 { bottom: 0; left: 0 }
#mask-4 { bottom: 0; right: 0 }
#tick-1 { top: 33%; left: 38% }
#tick-2 { top: 33%; right: 3% }
#tick-3 { bottom: 4%; left: 38% }
#tick-4 { bottom: 4%; right: 3% }
#tick-5 { top: 33%; left: 3% }
#tick-6 { top: 33%; right: 38% }
#tick-7 { bottom: 4%; left: 3% }
#tick-8 { bottom: 4%; right: 38% }

.shp0-button { fill: url(#grd1) }
.shp1-button { opacity: 0.502;mix-blend-mode: screen;fill: url(#grd2) }
.shp2-button { opacity: 0.8;mix-blend-mode: screen;fill: url(#grd3) }
.shp3-button { opacity: 0.502;mix-blend-mode: multiply;fill: url(#grd4) }
.shp4-button { mix-blend-mode: multiply;fill: url(#grd5) }
.shp5-button { opacity: 0.302;mix-blend-mode: multiply;fill: url(#grd6) }
.shp6-button { opacity: 0.502;mix-blend-mode: multiply;fill: url(#grd7) }
.shp7-button { fill: url(#grd8) }
.shp8-button { opacity: 0.6;mix-blend-mode: screen;fill: url(#grd9) }
.shp9-button { opacity: 0.302;mix-blend-mode: multiply;fill: url(#grd10) }
.shp10-button { opacity: 0.4;mix-blend-mode: multiply;fill: url(#grd11) }
.shp11-button { mix-blend-mode: multiply;fill: url(#grd12) }
.shp12-button { fill: #e5ffff }
.shp13-button { opacity: 0.2;mix-blend-mode: multiply;fill: url(#grd13) }
.shp14-button { opacity: 0.302;mix-blend-mode: multiply;fill: url(#grd14) }
.shp15-button { opacity: 0.4;mix-blend-mode: multiply;fill: url(#grd15) }
.shp16-button { fill: url(#grd16) }
.shp17-button { opacity: 0.502;mix-blend-mode: screen;fill: url(#grd17) }
.shp18-button { mix-blend-mode: multiply;fill: url(#grd18) }
</style>