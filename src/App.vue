<template>
  <div>
    <Navigation v-on:setSession="setSession" :title="sessions[session][1]"/>
    <component :is="sessions[session][0]" v-on:nextSession="nextSession" :isNext="isNext"/>

    <!--    <SessionTesting />-->
    <!--    <Session1 />-->
    <!--    <SessionIntroduction />-->
  </div>
</template>

<script>
// import SessionTesting from "@/components/SessionTesting/SessionTesting";
import Navigation from "./components/UI/Navigation";
import Session1 from "./components/Session1/Session1";
import Session2 from "./components/Session2/Session2";
import Session3 from "./components/Session3/Session3";
import Session4 from "./components/Session4/Session4";
import Session5 from "./components/Session5/Session5";
import Session6 from "./components/Session6/Session6";
import Session7 from "./components/Session7/Session7";
import Session8 from "./components/Session8/Session8";
import Session9 from "./components/Session9/Session9";
import Session10 from "./components/Session10/Session10";
import Session11 from "./components/Session11/Session11";
import Session12 from "./components/Session12/Session12";

import SessionIntroduction from "./components/SessionIntroduction";
export default {
  name: "App",
  components: {
    Navigation,
    SessionIntroduction,
    Session1,
    Session2,
    Session3,
    Session4,
    Session5,
    Session6,
    Session7,
    Session8,
    Session9,
    Session10,
    Session11,
    Session12,
    // SessionTesting,
  },
  data() {
    return {
      sessions: {
        0: ['SessionIntroduction', 'Introduction'],
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
        13: ['Appendix1', 'Appendix 1:', '\'Green\' thoughts to Enjoy'],
        14: ['Appendix2', 'Appendix 2:', 'Someone Special I Know Who is Brave and Kind!!!'],
        15: ['Appendix3', 'Appendix 3:', 'Happiness Ideas']},
      session: 0,
      pageIndex: 1,
      isNext: true,
    }
  },
  methods: {
    setSession(number) {
      console.log(number);
      this.session = number;
    },
    nextSession(sessionNumber, isNext) {
      this.setSession(sessionNumber);
      this.isNext = isNext;
    },
  }
};
</script>

<style>
.shp-background { fill: #00ce7c; opacity: 0.8 }
.shp-arrow { fill: #ffffff; opacity: 0.8 }
.session-container {
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.interactive-container {
  background-color: #ffffff;
  position: relative;
  width: 100vw;
  height: calc(100vh - 60px);
  overflow: hidden;
}
.session-background {
  position: absolute;
  width: 100vw;
  height: calc(100vh - 60px);
}
.arrow {
  width: 70px;
  height: auto;
  border: 3px solid rgba(255,255,255, 0.9);
  border-radius: 13px;
  cursor: pointer;
  position: fixed;
  bottom: 5px;
  right: 5px;
  opacity: 0.9;
  z-index: 500;
}
.arrow:active {
  opacity: 1;
}
#left-arrow {
  transform: rotate(180deg);
  right: 0;
  left: 5px;
}

</style>
