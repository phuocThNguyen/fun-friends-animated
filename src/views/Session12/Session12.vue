<template>
  <div class="session-container">
    <svg class="arrow" v-show="arrowVisible" @click="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 123" width="124" height="123">
      <title>Right Arrow</title>
      <g id="object">
        <g id="&lt;Group&gt;">
          <path id="&lt;Path&gt;" class="shp-background" d="M105.91 -0.07L18.7 -0.07C8.89 -0.07 0.95 7.88 0.95 17.68L0.95 104.89C0.95 114.69 8.89 122.64 18.7 122.64L105.91 122.64C115.71 122.64 123.66 114.69 123.66 104.89L123.66 17.68C123.66 7.88 115.71 -0.07 105.91 -0.07Z" />
          <path id="&lt;Path&gt;" class="shp-arrow" d="M99.57 57.31L69.51 32.1C66.22 29.59 61.49 31.94 61.49 36.07L61.49 44.14L26.77 44.14C24.73 44.14 23.07 45.79 23.07 47.84L23.07 74.74C23.07 76.78 24.73 78.43 26.77 78.43L61.49 78.43L61.49 86.5C61.49 90.63 66.22 92.98 69.51 90.48L99.57 65.26C102.19 63.26 102.19 59.31 99.57 57.31Z" />
        </g>
      </g>
    </svg>
    <component 
      :is="pages[currentPage]" 
      :pageNum="currentPage"
      :startPage="startPage"/>
    <svg class="arrow" v-show="arrowVisible" @click="previous" id="left-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 123" width="124" height="123">
      <title>Right Arrow</title>
      <g id="object">
        <g id="&lt;Group&gt;">
          <path id="&lt;Path&gt;" class="shp-background" d="M105.91 -0.07L18.7 -0.07C8.89 -0.07 0.95 7.88 0.95 17.68L0.95 104.89C0.95 114.69 8.89 122.64 18.7 122.64L105.91 122.64C115.71 122.64 123.66 114.69 123.66 104.89L123.66 17.68C123.66 7.88 115.71 -0.07 105.91 -0.07Z" />
          <path id="&lt;Path&gt;" class="shp-arrow" d="M99.57 57.31L69.51 32.1C66.22 29.59 61.49 31.94 61.49 36.07L61.49 44.14L26.77 44.14C24.73 44.14 23.07 45.79 23.07 47.84L23.07 74.74C23.07 76.78 24.73 78.43 26.77 78.43L61.49 78.43L61.49 86.5C61.49 90.63 66.22 92.98 69.51 90.48L99.57 65.26C102.19 63.26 102.19 59.31 99.57 57.31Z" />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>
import Session12Page1 from "@/views/Session12/Session12Page1";
import Session12Page1_1 from "@/views/Session12/Session12Page1_1";
import Session12Page2 from "@/views/Session12/Session12Page2";
import Session12Page3 from "@/views/Session12/Session12Page3";
import Session12Page4 from "@/views/Session12/Session12Page4";
import Session12Page5 from "@/views/Session12/Session12Page5";
import Session12Page6 from "@/views/Session12/Session12Page6";
import Session12Page7 from "@/views/Session12/Session12Page7";
import Session12Page8 from "@/views/Session12/Session12Page8";
import Session12Page9 from "@/views/Session12/Session12Page9";
import Session12Page10 from "@/views/Session12/Session12Page10";
import Session12Page11 from "@/views/Session12/Session12Page11";
import Session12Page12 from "@/views/Session12/Session12Page12";
import Session12Page13 from "@/views/Session12/Session12Page13";
import Session12Page14 from "@/views/Session12/Session12Page14";
import Session12Page15 from "@/views/Session12/Session12Page15";
import Session12Page16 from "@/views/Session12/Session12Page16";
import Session12Page17 from "@/views/Session12/Session12Page17";
import Session12Page18 from "@/views/Session12/Session12Page18";
import Session12Page19 from "@/views/Session12/Session12Page19";
import Session12Page20 from "@/views/Session12/Session12Page20";
import Session12Page20_1 from "@/views/Session12/Session12Page20_1";
import Session12Page21 from "@/views/Session12/Session12Page21";
import Session12Page22 from "@/views/Session12/Session12Page22";
import Session12Page23 from "@/views/Session12/Session12Page23";
import Session12Page24 from "@/views/Session12/Session12Page24";
import Session12Page25 from "@/views/Session12/Session12Page25";
import {mapState} from "vuex";

export default {
  name: "Session12",
  props: {
    isNext: Boolean,
  },
  components: {
    Session12Page1, Session12Page1_1, Session12Page2, Session12Page3, Session12Page4,
    Session12Page5, Session12Page6, Session12Page7, Session12Page8, Session12Page9,
    Session12Page10, Session12Page11, Session12Page12, Session12Page13, Session12Page14,
    Session12Page15, Session12Page16, Session12Page17, Session12Page18, Session12Page19,
    Session12Page20, Session12Page21, Session12Page22, Session12Page23, Session12Page24,
    Session12Page25, Session12Page20_1,
  },
  data() {
    return {
      pages: {
        1: "Session12Page1", 2: "Session12Page1_1", 3: "Session12Page2", 4: "Session12Page3", 5: "Session12Page6",
        6: "Session12Page7", 7: "Session12Page8", 8: "Session12Page9", 9: "Session12Page10",  10: "Session12Page11",
        11: "Session12Page12", 12: "Session12Page13", 13: "Session12Page14", 14: "Session12Page15", 15: "Session12Page16",
        16: "Session12Page17", 17: "Session12Page18", 18: "Session12Page19", 19: "Session12Page20", 20: "Session12Page20_1",
        21: "Session12Page21", 22: "Session12Page22", 23: "Session12Page23", 24: "Session12Page24", 25: "Session12Page25",
      },
      startPage: 306,
      currentPage: 1,
      arrowVisible: true,
      hiddenTimeExpired: false,
      lastPage: 25,
    }
  },
  created() {
    let page = 0;

    if (!this.isNext) {
      page = this.lastPage;
      this.arrowVisible = this.$store.getters.getArrowVisible;
    } else {
      page = 1;
    }

    this.currentPage = page;
  },
  methods: {
    previous() {
      if (this.currentPage > 1) {
        this.currentPage--;
      } else {
        this.$emit("nextSession", 11, false);
      }
    },
    next() {      
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
      } else {
        this.$emit("nextSession", 13, true);
      }
    },
  },
  mounted() {
    window.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        this.next();
      } else if (event.key === "ArrowLeft") {
        this.previous();
      }
    });
  },
  computed: mapState(['arrows_visible']),
  watch: {
    arrows_visible() {
      let currentArrowVisible = this.$store.getters.getArrowVisible;
      if (currentArrowVisible) this.arrowVisible = currentArrowVisible
      else if (!this.hiddenTimeExpired) this.arrowVisible = currentArrowVisible
      else this.arrowVisible = true;
      // this.arrowVisible = this.$store.getters.getArrowVisible;
    },
    page() {
      // clearTimeout();
      this.hiddenTimeExpired = false;
      if (!this.$store.getters.getArrowVisible) {
        this.arrowVisible = false;
        setTimeout(() => this.arrowVisible = true, 5000);
      }
      setTimeout(() => this.hiddenTimeExpired = true, 5000);
    },
    hiddenTimeExpired() {
      if (this.hiddenTimeExpired) this.arrowVisible = true;
    }
  }
}
</script>

<style>
.confetti-container {
  perspective: 700px;
  position: absolute;
  overflow: hidden;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.confetti {
  position: absolute;
  z-index: 1;
  top: -10px;
  border-radius: 0;
}
.confetti--animation-slow {
  animation: confetti-slow 2.25s linear 1 forwards;
}
.confetti--animation-medium {
  animation: confetti-medium 1.75s linear 1 forwards;
}
.confetti--animation-fast {
  animation: confetti-fast 1.25s linear 1 forwards;
}
@keyframes confetti-slow {
  0% {
    transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
  }
  100% {
    transform: translate3d(25px, 105vh, 0) rotateX(360deg) rotateY(180deg);
  }
}
@keyframes confetti-medium {
  0% {
    transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
  }
  100% {
    transform: translate3d(100px, 105vh, 0) rotateX(100deg) rotateY(360deg);
  }
}
@keyframes confetti-fast {
  0% {
    transform: translate3d(0, 0, 0) rotateX(0) rotateY(0);
  }
  100% {
    transform: translate3d(-50px, 105vh, 0) rotateX(10deg) rotateY(250deg);
  }
}
</style>