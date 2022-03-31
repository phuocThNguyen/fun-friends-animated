<template>
  <div>
    <div class="hide">
      <img class="image" src="./assets/images/others/portrait-to-landscape.png" alt="portrait-to-landscape">
      <h1 class="content">Please use Landscape mode!</h1>
    </div>
    <div class="show">
      <div class="center">
        <Navigation v-on:setSession="setSession" :title="sessions[session][1]"/>
        <component :is="sessions[session][0]" v-on:nextSession="setSession" :isNext="isNext" :appendixPage="appendixPage"/>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "@/views/UI/Navigation";
import Introduction from "@/views/Introduction/Introduction";
import Session1 from "@/views/Session1/Session1";
import Session2 from "@/views/Session2/Session2";
import Session3 from "@/views/Session3/Session3";
import Session4 from "@/views/Session4/Session4";
import Session5 from "@/views/Session5/Session5";
import Session6 from "@/views/Session6/Session6";
import Session7 from "@/views/Session7/Session7";
import Session8 from "@/views/Session8/Session8";
import Session9 from "@/views/Session9/Session9";
import Session10 from "@/views/Session10/Session10";
import Session11 from "@/views/Session11/Session11";
import Session12 from "@/views/Session12/Session12";
import Appendix from "@/views/Appendix/Appendix";

export default {
  name: "App",
  components: {
    Navigation, Introduction, Appendix,
    Session1, Session2, Session3, Session4, Session5,
    Session6, Session7, Session8, Session9, Session10,
    Session11, Session12,
  },
  data() {
    return {
      sessions: {
        0: ['Introduction', 'Introduktion'],
        1: ['Session1', 'Lektion 1: Hip Hip Hurra! Det er FUN FRIENDS i dag!'],
        2: ['Session2', 'Lektion 2: Følelser: At forstå følelser i / hos os selv'],
        3: ['Session3', 'Lektion 3: Følelser: At forstå følelser i / hos andre mennesker'],
        4: ['Session4', 'Lektion 4: At forstå kropssignaler og de fem sanser'],
        5: ['Session5', 'Lektion 5: At tale om “Røde” (ikke-hjælpsomme) og “Grønne” (hjælpsomme) tanker'],
        6: ['Session6', 'Lektion 6: At tale videre om ”røde” (ikke-hjælpsomme) og ”grønne” (hjælpsomme) tanker'],
        7: ['Session7', 'Lektion 7: At tale om det at sætte mål og at prøve nye ting'],
        8: ['Session8', 'Lektion 8: At tale om hvordan man er en omsorgsfuld ven(inde)'],
        9: ['Session9', 'Lektion 9: At tale om det at belønne os selv'],
        10: ['Session10', 'Lektion 10: At tale om hvem vi kan se op til, og hvad betyder det at have nogen at se op til'],
        11: ['Session11', 'Lektion 11: At tale om støttehold'],
        12: ['Session12', 'Lektion 12: At tale om det at være tilfreds med vores indsats!'],
        13: ['Appendix', 'Bilag']},
      session: 0,
      isNext: true,
      appendixPage: 0,
    }
  },
  methods: {
    setSession(number, isNext) {
      if (number !== 14 && number !== 15) {
        this.session = number;
        this.isNext = isNext;
        this.$store.commit("setCurrentSession", number);
      } else {
        this.session = 13;
        this.appendixPage = number - this.session;
        this.$store.commit("setCurrentSession", this.session);
      }
    },
    // pwa related
    async accept() {
      this.showUpdateUI = false;
      await this.$workbox.messageSW({type : "SKIP_WAITING"})
    }
  },
  created() {
    // pwa related
    if (this.$workbox) {
      this.$workbox.addEventListener('waiting', () => {
        this.showUpdateUI = true;
      })
    }
  }
};
</script>

<style>
.show {
  background-color: #000000;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100vw;
  gap: 0;
}
.center {
  width: calc(1.33 * 100vh) !important;
  position: relative;
}
.image {
  width: 100%;
  height: auto;
}
.content {
  margin-bottom: 0;
  text-align: center;
  margin-top: 5vh;
  color: #ffffff;
  font-weight: bold;
}
.hide {
  background-color: #00ce7c;
  height: 100vh;
  padding: 15vh 10vw 0 10vw;
}
.shp-background { fill: #00ce7c; opacity: 0.8 }
.shp-arrow { fill: #ffffff; opacity: 0.8 }
.session-container {
  position: relative;
  width: 100%;
  height: 91vh;
}
.interactive-container {
  background-color: #ffffff;
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.session-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.page-number {
  position: absolute;
  left: 64vh;
  bottom: .5vh;
  font-size: 2.5vh;
  font-weight: bold;
  width: 5vh;
  height: 5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 500;
}
#page-dark {
  background-color: #ffffff;
  color: #00ce7c;
}
#page-light {
  color: #ffffff;
  background-color: #00ce7c;
}
.arrow {
  width: 10vh;
  height: auto;
  border: .6vh solid rgba(255,255,255, 0.9);
  border-radius: 2vh;
  position: absolute;
  bottom: 1%;
  right: 1%;
  opacity: 0.9;
  z-index: 500;
}
.arrow:active {
  opacity: 1;
}
#left-arrow {
  transform: rotate(180deg);
  left: 1%;
}
/* WRONG ORIENTATION - SHOW MESSAGE HIDE CONTENT */
@media only screen and (orientation:portrait) {
  .hide { display:block; }
  .show { display:none; }
}

/* CORRECT ORIENTATION - SHOW CONTENT HIDE MESSAGE */
@media only screen and (orientation:landscape) {
  .hide { display:none; }
  .show { display:flex; }
}

tspan { white-space:pre }
.cls-1-green-mark {isolation: isolate;}
.cls-2-green-mark {fill: #fff;}
.cls-4-green-mark {fill: #a1a1a1;mix-blend-mode: overlay;}
.cls-5-green-mark {fill: #00c72e;}
.cls-1-red-mark {isolation: isolate;}
.cls-2-red-mark {fill: #fff;}
.cls-3-red-mark {fill: #a1a1a1;mix-blend-mode: overlay;}
.cls-4-red-mark {fill: #f52100;}
</style>
