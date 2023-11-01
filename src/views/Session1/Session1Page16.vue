<template>
  <div class="interactive-container cloud-background">
    <div class="text">
      <div class="para">
        <p>Click and spin the globe.</p>
        <p>Find the country that you live in.</p>
        <p>Talk to your family and friends about other countries.</p>
      </div>
    </div>
    <div class="globe-container">
      <canvas class="globe" width="1800" height="1600"></canvas>
    </div>
    <div class="buttons-container">
      <button class="btn-style" v-for="country in countryList"  @click="countrySelected(country.id)" v-bind:key="country.id">
        {{ country.name }}
      </button>
    </div>
    <audio ref="audio" autoplay loop src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/children-background-music/sand-castle.mp3"/>
    <audio
      @loadeddata="playSoundText"
      src="https://s3.ap-southeast-2.amazonaws.com/uploads.friendsresilience.org/animatedbook-resources/FF/audio/session1/Session1_Page27.mp3" ref="voice"/>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  name: "Session1Page16",
  data() {
    return {
      canvas: null,
      ctx: null,
      vCenter: 820,
      scroll: {
        lat: 0,
        long: 20
      },
      markers: [
        {name: 'Australia', lat: -23, long: 135},
        {name: 'South America', lat: -12, long: -57},
        {name: 'North America', lat: 30, long: -90},
        {name: 'Africa', lat: 12, long: 17},
        {name: 'Europe', lat: 45, long: 25},
        {name: 'Asia', lat: 35, long: 95}
      ],
      timing: {
        speed: 5,
        delta: 0,
        last: 0
      },
      drag: {
        start: { x: 0, y: 0 },
        force: 0,
        prevX: 0,
        isDragging: false
      },
      colors: {
        pushPinBase: '#969799',
        pushPin: '#ed5c50',
        land: '#fac648',
        landShade: '#2c606e',
        ocean: '#2A7B96',
        highlighted: '#00ce7c'
      },
      complexShapes: {},
      continents: {
        africa: [{ lat: 35.7, long: -5.8 }, { lat: 37.1, long: 10.9 }, { lat: 30, long: 32.2 }, { lat: 10.6, long: 44 }, { lat: 11.8, long: 51 }, { lat: -27.6, long: 30.5 }, { lat: -33.8, long: 18.6 }, { lat: 4.7, long: 9.2 }, { lat: 4.9, long: -7.7 }, { lat: 14.6, long: -16.8 }, { lat: 35.7, long: -5.8 }],
        australia: [{ lat: -22, long: 114 }, { lat: -19, long: 121 }, { lat: -12, long: 130 }, { lat: -12, long: 136 }, { lat: -24, long: 153 }, { lat: -37, long: 150 }, { lat: -37, long: 140 }, { lat: -30, long: 131 }, { lat: -34, long: 115 }, { lat: -22, long: 114 }],
        southamerica: [{ lat: 12, long: -73 }, { lat: 10, long: -61 }, { lat: -6, long: -34 }, { lat: -43, long: -62 }, { lat: -54, long: -67 }, { lat: -51, long: -74 }, { lat: -18, long: -70 }, { lat: -8, long: -77 }, { lat: -5, long: -81 }, { lat: 12, long: -73 }],
        northamerica: [{ lat: 10, long: -72 }, { lat: 7, long: -75 }, { lat: 19, long: -104 }, { lat: 36, long: -121 }, { lat: 59, long: -140 }, { lat: 54, long: -167 }, { lat: 70, long: -163 }, { lat: 68, long: -137 }, { lat: 65, long: -88 }, { lat: 59, long: -84 }, { lat: 56, long: -72 }, { lat: 62, long: -75 }, { lat: 50, long: -54 }, { lat: 31, long: -80 }, { lat: 25, long: -79 }, { lat: 26, long: -81 }, { lat: 29, long: -84 }, { lat: 28, long: -96 }, { lat: 19, long: -95 }, { lat: 20, long: -87 }, { lat: 14, long: -83 }, { lat: 10, long: -72 },],
        greenland: [{ lat: 78, long: -68 }, { lat: 81, long: -18 }, { lat: 69, long: -25 }, { lat: 60, long: -42 }, { lat: 67, long: -52 }, { lat: 78, long: -68 }],
        japan: [{ lat: 45, long: 141 }, { lat: 43, long: 146 }, { lat: 35, long: 140 }, { lat: 31, long: 131 }, { lat: 34, long: 129 }, { lat: 36, long: 136 }, { lat: 39, long: 140 }, { lat: 45, long: 141 }],
        indonesia: [{ lat: 7, long: 117 }, { lat: 5, long: 119 }, { lat: 0, long: 118 }, { lat: -4, long: 115 }, { lat: -3, long: 111 }, { lat: 2, long: 108 }, { lat: 7, long: 117 }],
        papua: [{ lat: -1, long: 132 }, { lat: -3, long: 142 }, { lat: -10, long: 146 }, { lat: -7, long: 140 }, { lat: -6, long: 134 }, { lat: -1, long: 132 }],
        nz: [{ lat: -35, long: 174 }, { lat: -38, long: 178 }, { lat: -46, long: 169 }, { lat: -45, long: 165 }, { lat: -38, long: 175 }, { lat: -35, long: 174 }],
        asia: [{ lat: 64, long: 37 }, { lat: 73, long: 80 }, { lat: 66, long: 98 }, { lat: 69, long: 175 }, { lat: 60, long: 163 }, { lat: 38, long: 118 }, { lat: 28, long: 119 }, { lat: 23, long: 108 }, { lat: 12, long: 109 }, { lat: 9, long: 102 }, { lat: 23, long: 88 }, { lat: 16, long: 82 }, { lat: 7, long: 79 }, { lat: 25, long: 68 }, { lat: 27, long: 62 }, { lat: 21, long: 58 }, { lat: 13, long: 44 }, { lat: 30, long: 33.5 }, { lat: 64, long: 37 }],
        europe: [{ lat: 37, long: -9 }, { lat: 43, long: -9 }, { lat: 44, long: 0 }, { lat: 48, long: -4 }, { lat: 53, long: 5 }, { lat: 56, long: 8 }, { lat: 54, long: 11 }, { lat: 55, long: 21 }, { lat: 59, long: 30 }, { lat: 60, long: 23 }, { lat: 61, long: 22 }, { lat: 65, long: 26 }, { lat: 65, long: 22 }, { lat: 60, long: 17 }, { lat: 59, long: 19 }, { lat: 56, long: 16 }, { lat: 56, long: 13 }, { lat: 60, long: 11 }, { lat: 60, long: 5 }, { lat: 69, long: 15 }, { lat: 70, long: 28 }, { lat: 68, long: 48 }, { lat: 36, long: 38 }, { lat: 45, long: 16 }, { lat: 45, long: 12 }, { lat: 40, long: 18 }, { lat: 37, long: 15 }, { lat: 40, long: 14 }, { lat: 44, long: 8 }, { lat: 41, long: 1 }, { lat: 37, long: -2 }, { lat: 37, long: -8 }, { lat: 37, long: -9 }],
        britain: [{ lat: 50, long: -5 }, { lat: 54, long: -3 }, { lat: 57, long: -6 }, { lat: 57, long: -2 }, { lat: 51, long: 1 }, { lat: 50, long: -5 }],
        canada: [{ lat: 59, long: -140 }, { lat: 68, long: -137 }, { lat: 65, long: -88 }, { lat: 59, long: -84 }, { lat: 56, long: -72 }, { lat: 62, long: -75 }, { lat: 50, long: -54 }, { lat: 46, long: -72 }, { lat: 50, long: -88 }, { lat: 50, long: -132.5 }, { lat: 59, long: -140 }],
        ireland: [{ lat: 56.5, long: -10.4 }, { lat: 56.4, long: -5.8 }, { lat: 54.6, long: -5.8 }, { lat: 54.4, long: -10.4 }, { lat: 56.5, long: -10.4 }],
        madagaskar: [{ lat: -13, long: 49 }, { lat: -17, long: 43 }, { lat: -24, long: 44 }, { lat: -25, long: 47 }, { lat: -13, long: 49 }],
        mexico: [{ lat: 28, long: -96 }, { lat: 19, long: -95 }, { lat: 20, long: -87 }, { lat: 14, long: -92 }, { lat: 19, long: -104 }, { lat: 32, long: -117 }, { lat: 28, long: -96 }],
        syria: [{ lat: 30, long: 33.5 }, { lat: 37.5, long: 34.3 }, {lat: 39, long: 42}, { lat: 35, long: 42 }, { lat: 30, long: 33.5 }],
      },
      animation: null,
      countryList: [
        {id: 1, name: 'Australia', value: 'australia'},
        {id: 2, name: 'Ireland', value: 'ireland'},
        {id: 3, name: 'United Kingdom', value: 'britain'},
        {id: 4, name: 'Canada', value: 'canada'},
        {id: 5, name: 'New Zealand', value: 'nz'},
        {id: 6, name: 'Syria', value: 'syria'},
        {id: 7, name: 'Mexico', value: 'mexico'},
      ],
      selectedCountry: null,
    }
  },
  methods: {
    animateText() {
      let para = document.getElementsByClassName('para')[0].children;
      let animation = anime.timeline({
        duration: 500,
        easing: 'linear'
      });
      animation
        .add({targets: para[0], opacity: 1}, 500)
        .add({targets: para[1], opacity: 1}, 3000)
        .add({targets: para[2], opacity: 1}, 5300)
    },
    setAudioVolumeLevel(level) {
      this.$refs.audio.volume = level
    },
    playVoiceOver() {
      setTimeout(() => {this.$refs.voice.play()}, 500)
    },
    init() {
      this.canvas = document.querySelector('.globe');
      this.ctx = this.canvas.getContext('2d');

      this.canvas.addEventListener("touchstart", this.dragStart, false);
      this.canvas.addEventListener("mousedown", this.dragStart, false);
      this.canvas.addEventListener("touchend", this.dragEnd, false);
      this.canvas.addEventListener("mouseup", this.dragEnd, false);
      this.canvas.addEventListener("touchmove", this.dragMove, false);
      this.canvas.addEventListener("mousemove", this.dragMove, false);
      this.canvas.addEventListener("mouseleave", this.dragEnd, false);

      requestAnimationFrame(this.animateLoop);
    },
    playSoundText() {
      this.playVoiceOver();
      this.animateText();
    },
    countrySelected(id) {
      this.selectedCountry = this.countryList.find(country => country.id === id).value;
    },

    // Map functions
    lerp(norm, min, max) {
      return (max - min) * norm + min;
    },
    norm(value, min, max) {
      return (value - min) / (max - min);
    },
    map(value, sourceMin, sourceMax, destMin, destMax) {
      return this.lerp(this.norm(value, sourceMin, sourceMax), destMin, destMax);
    },
    dragMove(e) {
      if(this.drag.isDragging) {
        let long = this.drag.start.long,
            clientX = e.targetTouches ? e.targetTouches[0].clientX : e.clientX,
            change = clientX - this.drag.start.x,
            prevChange = clientX - this.drag.prevX,
            canvasWidth = this.canvas.getBoundingClientRect().width;

        long += this.map(change, 0, canvasWidth, 0, 200);

        while(long < 0) {
          long += 360;
        }

        if(prevChange > 0 && this.drag.force < 0) {
          this.drag.force = 0;
        } else if(prevChange < 0 && this.drag.force > 0) {
          this.drag.force = 0;
        }

        this.drag.force += prevChange * (600 / canvasWidth);
        this.drag.prevX = clientX;
        this.scroll.long = Math.abs(long) % 360;
      }
    },
    dragStart(e) {
      if (e.targetTouches) {
        e.preventDefault();
        this.drag.start = {
          x: e.targetTouches[0].clientX,
          y: e.targetTouches[0].clientY,
          long: this.scroll.long
        };
      } else {
        this.drag.start = {
          x: e.clientX,
          y: e.clientY,
          long: this.scroll.long
        };
      }
      this.timing.speed = 0;
      this.drag.isDragging = true;
      this.canvas.classList.add('globe--dragging');
    },
    dragEnd() {
      if(this.drag.isDragging) {
        this.timing.speed = this.map(this.drag.force, 0, 220, 0, 40);
        this.drag.isDragging = false;
        this.canvas.classList.remove('globe--dragging');
      }
    },
    getRadius(latitude) {
      let yPart = Math.PI*2,
          radius = 600,
          frame = this.map(latitude, 90, -90, 0, 1.65);

      return Math.max(Math.sin(yPart + frame) * radius, 0);
    },
    latLongSphere(lat, lon, radius) {
      let x = 900,
          y = this.vCenter,
          z = 0;

      lon = -lon;
      let phi = (90-lat) * (Math.PI/180),
          teta = (lon + 180) * (Math.PI/180);

      x -= -(radius * Math.sin(phi) * Math.cos(teta));
      y -= radius * Math.cos(phi);
      z = radius * Math.sin(phi) * Math.sin(teta);

      return {
        x, y, z
      };
    },
    drawGlobe(ctx, color) {
      ctx.beginPath();
      ctx.arc(900, this.vCenter, 600, 0, 2 * Math.PI);
      ctx.closePath();
      ctx.fillStyle = color;
      ctx.fill();
    },
    getLandMassPaths (name, radius, thickness) {
      let landmassBasic = this.continents[name],
          landmass = null,
          first = true,
          paths = {
            name: name,
            ground: new Path2D(),
            top: new Path2D(),
            sections: [],
            isVisible: false
          },
          section = {
            ground: [],
            top: []
          };

      // Complexify
      if(this.complexShapes[name]) {
        landmass = this.complexShapes[name];
      } else {
        landmass = this.complexify(landmassBasic, 1);
        this.complexShapes[name] = landmass;
      }

      for (let i = 0; i < landmass.length; i++) {
        let point = landmass[0],
            p = this.latLongSphere(point.lat + this.scroll.lat, point.long + this.scroll.long, radius);

        if(p.z < 0) {
          landmass.splice(0, 0, landmass.pop());
        } else {
          break;
        }
      }

      let drawCurve = false,
          curveStart = null,
          sectionIsVisible = false;

      landmass.forEach((point) => {
        let p = this.latLongSphere(point.lat + this.scroll.lat, point.long + this.scroll.long, radius),
            p2 = this.latLongSphere(point.lat + this.scroll.lat, point.long + this.scroll.long, radius + thickness);

        if(!sectionIsVisible && p.z > -200) {
          sectionIsVisible = true;
        }

        section.ground.push({
          x: p.x,
          y: p.y,
          z: p.z
        });
        section.top.push({
          x: p2.x,
          y: p2.y,
          z: p2.z
        });

        if(point.edge && !first) {
          if(sectionIsVisible) {
            paths.sections.push(Object.assign({}, section));
          }

          section = {
            ground: [{x: p.x, y: p.y, z: p.z }],
            top: [{x: p2.x, y: p2.y, z: p2.z }]
          };

          sectionIsVisible = false;
        }

        first = false;

        if(p.z > 0) {
          if(drawCurve) {
            drawCurve = false;
           this.closeCurve(paths.ground, curveStart, p, radius);
           this.closeCurve(paths.top, curveStart, p2, radius + thickness);
          } else {
            paths.ground.lineTo(p.x, p.y);
            paths.top.lineTo(p2.x, p2.y);
            paths.isVisible = true;
          }
        } else {
          // draw curve
          if(!drawCurve) {
            drawCurve = true;
            curveStart = {
              x: p.x,
              y: p.y,
              z: p.z
            };
          }
        }
      });

      // if the last point is in a curve
      if(drawCurve) {
        drawCurve = false;
        let point = landmass.slice(-1)[0],
            p = this.latLongSphere(point.lat + this.scroll.lat, point.long + this.scroll.long, radius),
            p2 = this.latLongSphere(point.lat + this.scroll.lat, point.long + this.scroll.long, radius + thickness);

        this.closeCurve(paths.ground, curveStart, p, radius);
        this.closeCurve(paths.top, curveStart, p2, radius + thickness);
      }

      let p = this.latLongSphere(landmass[0].lat + this.scroll.lat, landmass[0].long + this.scroll.long, radius),
          p2 = this.latLongSphere(landmass[0].lat + this.scroll.lat, landmass[0].long + this.scroll.long, radius + thickness);

      section.ground.push({
        x: p.x,
        y: p.y,
        z: p.z
      });
      section.top.push({
        x: p2.x,
        y: p2.y,
        z: p2.z
      });

      if(section) {
        paths.sections.push(Object.assign({}, section));
      }

      return paths;
    },
    closeCurve(path, curveStart, p, radius) {
      // draw curve from curveStart på p
      let a1 = this.getAngle({ x: 900, y: this.vCenter}, curveStart),
          a2 = this.getAngle({ x: 900, y: this.vCenter}, p),
          compare = a1 - a2,
          startAngle = a1 * (Math.PI/180),
          endAngle = a2 * (Math.PI/180);

      path.arc(900, this.vCenter, radius, startAngle, endAngle, compare > 0 && compare < 180);
    },
    complexify(landmass, level) {
      let complex = [];

      for (let i = 0; i < (landmass.length - 1); i++) {
        let p1 = landmass[i],
            p2 = landmass[i + 1],
            steps = Math.floor(this.distanceBetween(p1, p2) / level);

        p1.edge = true;
        complex.push(p1);

        if(steps > 0) {
          let s = Math.floor(100 / steps);

          for (let i = 1; i <= steps; i++) {
            let percentage = i * s;

            if(percentage <= 100) {
              let p = {
                lat: this.map(percentage, 0, 100, p1.lat, p2.lat),
                long: this.map(percentage, 0, 100, p1.long, p2.long)
              }

              complex.push(p);
            }
          }
        }
      }

      let last = landmass.pop();
      last.edge = true;
      complex.push(last);

      return complex;
    },
    getCirclePoint(angle, radius) {
      let radian = (angle / 180) * Math.PI;

      return {
        x: radius * Math.cos(radian) + 900,
        y: radius * Math.sin(radian) + 800
      }
    },
    getAngle(p1, p2) {
      let dy = p2.y - p1.y,
          dx = p2.x - p1.x,
          theta = Math.atan2(dy, dx);
      theta *= 180 / Math.PI;
      return theta;
    },
    distanceBetween (p1, p2) {
      let a = p1.long - p2.long,
          b = p1.lat - p2.lat;

      return Math.hypot(a, b);
    },
    updateState(delta) {
      this.drag.force *= 0.8;

      if(this.timing.speed) {
        this.scroll.long += (this.timing.speed / 100) * delta;

        if(this.scroll.long > 360) {
          this.scroll.long = this.scroll.long % 360;
        } else if (this.scroll.long < 0) {
          this.scroll.long += 360;
        }
      }
    },
    animateLoop(time) {
      this.timing.delta = Math.abs(this.timing.last - time);
      this.timing.last = time;

      this.updateState(this.timing.delta);

      // clear
      this.ctx.fillStyle = '#f7f6f2';
      this.ctx.fillRect(0, 0, 1800, 1600);

      this.drawMarkers(this.ctx, this.markers, false);

      let continentNames = ['southamerica', 'northamerica', 'greenland', 'japan', 'africa',
        'australia', 'asia', 'indonesia', 'europe', 'britain', 'madagaskar', 'papua', 'nz',
        'ireland', 'canada', 'mexico', 'syria'];
      let landPaths = [],
          se = [];

      continentNames.forEach((name) => {
        let paths = this.getLandMassPaths(name, 600, 30);

        if(paths) {
          this.ctx.fillStyle = this.colors.landShade;

          paths.sections.forEach((section) => {
            se.push(section);
            this.drawSection(this.ctx, section, true);
          });

          if(paths.isVisible) {
            landPaths.push(paths);
          }
        }
      });

      this.drawGlobe(this.ctx, this.colors.ocean);

      this.ctx.fillStyle = this.colors.landShade;
      se.forEach((section) => {
        this.drawSection(this.ctx, section, false);
      });

      landPaths.forEach((path) => {
        this.ctx.fillStyle = this.colors.land;
        if (path.name === this.selectedCountry) this.ctx.fillStyle = this.colors.highlighted;
        this.ctx.fill(path.top);
      });

      this.drawMarkers(this.ctx, this.markers, true);

      this.animation = requestAnimationFrame(this.animateLoop);
    },
    drawSection(ctx, section, drawBackside) {
      let hasStarted = false,
          limit = -25;

      section.ground.forEach(p => {
        if(drawBackside && p.z < 0 || !drawBackside && p.z >= limit) {
          if(!hasStarted) {
            ctx.beginPath();
            hasStarted = true;
          }

          ctx.lineTo(p.x, p.y);
        }
      });

      section.top = drawBackside ? section.top.reverse() : section.top;

      section.top.forEach(p => {
        if(drawBackside && p.z < 0 || !drawBackside && p.z >= limit) {
          ctx.lineTo(p.x, p.y);
        }
      });

      if(hasStarted) {
        ctx.closePath();
        ctx.fill();
      }
    },
    drawMarkers(ctx, markers, drawFront) {
      for (const marker of markers) {
        let ground = this.latLongSphere(marker.lat + this.scroll.lat, marker.long + this.scroll.long, 630),
            needleTop = this.latLongSphere(marker.lat + this.scroll.lat, marker.long + this.scroll.long, 730),
            pinTop = this.latLongSphere(marker.lat + this.scroll.lat, marker.long + this.scroll.long, 750);

        if(ground.z >= 0 && drawFront) {
          this.drawMapPushPinBase(ctx, ground, needleTop, this.colors.pushPinBase);
          this.drawMapPushPin(ctx, pinTop, this.colors.pushPin);
          this.drawMarkerText(ctx, marker.name, pinTop);
        } else if(!drawFront) {
          this.drawMapPushPin(ctx, pinTop, this.colors.pushPin);
          this.drawMapPushPinBase(ctx, ground, needleTop, this.colors.pushPinBase);
          this.drawMarkerText(ctx, marker.name, pinTop);
        }
      }
    },
    drawMapPushPinBase(ctx, basePos, topPos, color) {
      ctx.strokeStyle = color;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(basePos.x, basePos.y);
      ctx.lineTo(topPos.x, topPos.y);
      ctx.stroke();
    },
    drawMapPushPin(ctx, pos, color) {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 20, 0, 2 * Math.PI);
      ctx.fill();
    },
    drawMarkerText(ctx, text, pos) {
      ctx.font = "6vh 'Caprasimo', cursive";
      ctx.fillStyle = 'black';

      let metrics = ctx.measureText(text);

      ctx.fillText(text, pos.x - (metrics.width / 2), pos.y - 30);
    }
  },
  mounted() {
    this.init();
    this.setAudioVolumeLevel(0.2);
  },
  destroyed() {
    cancelAnimationFrame(this.animation);
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Caprasimo&display=swap');
.buttons-container {
  position: absolute;
  width: 30vh;
  height: 55vh;
  right: 2vh;
  top: 20vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.btn-style {
  width: 100%;
  background-color: #00ce7c;
  border: none;
  height: 5vh;
  border-radius: 5px;
  color: #ffffff;
  font-size: 3vh;
  font-weight: bold;
  box-shadow: 0 9px #999;
}
.btn-style:focus,
.btn-style:active {
  outline: 0 !important;
}
.btn-style:active {
  background-color: #009c5d;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.globe-container {
  position: absolute;
  top: 10vh;
  left: 0;
  display: flex;
  justify-content: center;
  max-height: 90vmin;
  max-width: 133vh;
}
.globe {
  height: 90vmin;
  width: auto;
  cursor: grab;
  overflow: visible;
}
.globe--dragging {
  cursor: grabbing;
}
.cloud-background {
  background-color: #f7f6f2;
}
.text {
  position: absolute;
  z-index: 30;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 1vh 0 0 1%;
}
.para {
  opacity: 1;
  width: 100%;
  text-align: center;
}
.para p {
  font-size: 4vh;
  margin-bottom: 0;
  opacity: 0;
}
</style>