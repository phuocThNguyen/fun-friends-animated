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
        0: ['Introduction', 'Introduction'],
        1: ['Session1', 'Session 1: Hip Hip Hooray! It\'s FUN FRIENDS today!'],
        2: ['Session2', 'Session 2: Feelings: Understanding feelings in ourselves'],
        3: ['Session3', 'Session 3: Understanding feelings in other people'],
        4: ['Session4', 'Session 4: Understanding body clues and five senses'],
        5: ['Session5', 'Session 5: Talking about \'Red\' (unhelpful) and \'Green\' (helpful) thoughts'],
        6: ['Session6', 'Session 6: Talking more about \'Red\' (unhelpful) and \'Green\' (helpful) thoughts'],
        7: ['Session7', 'Session 7: Talking about setting goals and trying to do new things'],
        8: ['Session8', 'Session 8: Talking about how to be a kind friend'],
        9: ['Session9', 'Session 9: Talking about rewarding ourselves'],
        10: ['Session10', 'Session 10: Talking about someone to look up to in our lives'],
        11: ['Session11', 'Session 11: Talking about support teams'],
        12: ['Session12', 'Session 12: Talking about being happy with our efforts!'],
        13: ['Appendix', 'Appendix']},
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
@media screen and (max-width: 930px) {
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
}
.center {
  width: 100%;
}
.show {
  width: 100vw;
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
