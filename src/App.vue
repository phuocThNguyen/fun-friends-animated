<template>
  <div class="container-fluid">
    <ul class="nav justify-content-center">
      <li @click="setSession(0)" class="nav-item">
        <a href="#" class="nav-link">Introduction</a>
      </li>
      <li @click="setSession(1)" class="nav-item">
        <a href="#" class="nav-link">Session 1</a>
      </li>
      <li @click="setSession(2)" class="nav-item">
        <a href="#" class="nav-link">Session 2</a>
      </li>
      <li @click="setSession(3)" class="nav-item">
        <a href="#" class="nav-link">Session 3</a>
      </li>
      <li @click="setSession(4)" class="nav-item">
        <a href="#" class="nav-link">Session 4</a>
      </li>
      <li @click="setSession(5)" class="nav-item">
        <a href="#" class="nav-link">Session 5</a>
      </li>
      <li @click="setSession(6)" class="nav-item">
        <a href="#" class="nav-link">Session 6</a>
      </li>
      <li @click="setSession(7)" class="nav-item">
        <a href="#" class="nav-link">Session 7</a>
      </li>
      <li @click="setSession(8)" class="nav-item">
        <a href="#" class="nav-link">Session 8</a>
      </li>
      <li @click="setSession(9)" class="nav-item">
        <a href="#" class="nav-link">Session 9</a>
      </li>
      <li @click="setSession(10)" class="nav-item">
        <a href="#" class="nav-link">Session 10</a>
      </li>
      <li @click="setSession(11)" class="nav-item">
        <a href="#" class="nav-link">Session 11</a>
      </li>
      <li @click="setSession(12)" class="nav-item">
        <a href="#" class="nav-link">Session 12</a>
      </li>
    </ul>
    <component :is="sessions[session]" v-on:nextSession="nextSession" :isNext="isNext"/>
<!--    <SessionTesting />-->
<!--    <Session1 />-->
<!--    <SessionIntroduction />-->
  </div>
</template>

<script>
// import SessionTesting from "@/components/SessionTesting/SessionTesting";
import Session1 from "@/components/Session1/Session1";
import Session2 from "@/components/Session2/Session2";
import Session3 from "@/components/Session3/Session3";
import Session4 from "@/components/Session4/Session4";
import Session5 from "@/components/Session5/Session5";
import Session6 from "@/components/Session6/Session6";
import Session7 from "@/components/Session7/Session7";
import Session8 from "@/components/Session8/Session8";
import Session9 from "@/components/Session9/Session9";
import Session10 from "@/components/Session10/Session10";
import Session11 from "@/components/Session11/Session11";
import Session12 from "@/components/Session12/Session12";

import SessionIntroduction from "@/components/SessionIntroduction";
export default {
  name: "App",
  components: {
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
      sessions: {0: 'SessionIntroduction',1: 'Session1', 2: 'Session2', 3: 'Session3', 4: 'Session4',
                  5: 'Session5', 6: 'Session6', 7: 'Session7', 8: 'Session8',
                  9: 'Session9', 10: 'Session10', 11: 'Session11', 12: 'Session12'},
      session: 0,
      pageIndex: 1,
      isNext: true,
    }
  },
  methods: {
    setSession(number) {
      this.session = number;
    },
    nextSession(sessionNumber, isNext) {
      this.setSession(sessionNumber);
      this.isNext = isNext;
    }
  }
};
</script>

<style>
.shp-background { fill: #00ce7c }
.shp-arrow { fill: #ffffff }
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
  width: 768px;
  height: 543px;
  overflow: hidden;
}
.session-background {
  position: absolute;
}
.arrow {
  height: 80px;
  margin: 0 10px 0;
  cursor: pointer;
}
#left-arrow {
  transform: rotate(180deg);
}
</style>
