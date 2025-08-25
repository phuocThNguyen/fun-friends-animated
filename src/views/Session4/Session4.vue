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
    <component :is="pages[page]" />
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
import Session4Page1 from "@/views/Session4/Session4Page1";
import Session4Page1_1 from "@/views/Session4/Session4Page1_1";
import Session4Page2 from "@/views/Session4/Session4Page2";
import Session4Page3 from "@/views/Session4/Session4Page3";
import Session4Page4_1 from "@/views/Session4/Session4Page4_1";
import Session4Page5 from "@/views/Session4/Session4Page5";
import Session4Page6 from "@/views/Session4/Session4Page6";
import Session4Page7 from "@/views/Session4/Session4Page7";
import Session4Page8 from "@/views/Session4/Session4Page8";
import Session4Page9 from "@/views/Session4/Session4Page9";
import Session4Page10 from "@/views/Session4/Session4Page10";
import Session4Page11 from "@/views/Session4/Session4Page11";
import Session4Page12 from "@/views/Session4/Session4Page12";
import Session4Page13 from "@/views/Session4/Session4Page13";
import Session4Page14 from "@/views/Session4/Session4Page14";
import Session4Page15 from "@/views/Session4/Session4Page15";
import Session4Page16 from "@/views/Session4/Session4Page16";
import Session4Page17 from "@/views/Session4/Session4Page17";
import Session4Page18 from "@/views/Session4/Session4Page18";
import Session4Page18_1 from "@/views/Session4/Session4Page18_1";
import Session4Page19 from "@/views/Session4/Session4Page19";
import Session4Page19_1 from "@/views/Session4/Session4Page19_1";
import Session4Page20 from "@/views/Session4/Session4Page20";
import Session4Page20_1 from "@/views/Session4/Session4Page20_1";
import Session4Page20_2 from "@/views/Session4/Session4Page20_2";
import Session4Page20_3 from "@/views/Session4/Session4Page20_3";
import Session4Page20_4 from "@/views/Session4/Session4Page20_4";
import Session4Page21 from "@/views/Session4/Session4Page21";
import Session4Page22 from "@/views/Session4/Session4Page22";
import Session4Page22_1 from "@/views/Session4/Session4Page22_1";
import Session4Page23 from "@/views/Session4/Session4Page23";
import Session4Page24 from "@/views/Session4/Session4Page24";
import Session4Page25 from "@/views/Session4/Session4Page25";
import Session4Page26 from "@/views/Session4/Session4Page26";
import Session4Page27 from "@/views/Session4/Session4Page27";
import Session4Page28 from "@/views/Session4/Session4Page28";
import {mapState} from "vuex";

export default {
  name: "Session4",
  props: {
    isNext: Boolean,
  },
  components: {
    Session4Page1, Session4Page1_1, Session4Page2, Session4Page3, Session4Page4_1,
    Session4Page5, Session4Page6, Session4Page7, Session4Page8, Session4Page9,
    Session4Page10, Session4Page11, Session4Page12, Session4Page13, Session4Page14,
    Session4Page15, Session4Page16, Session4Page17, Session4Page18, Session4Page19,
    Session4Page20, Session4Page20_1, Session4Page20_2, Session4Page20_3, Session4Page20_4,
    Session4Page21, Session4Page22, Session4Page23, Session4Page24, Session4Page22_1,
    Session4Page19_1, Session4Page25, Session4Page26, Session4Page27, Session4Page28,
    Session4Page18_1,
  },
  data() {
    return {
      pages: {
        1: "Session4Page1", 2: "Session4Page1_1", 3: "Session4Page2", 4: "Session4Page3", 5: "Session4Page4_1",
        6: "Session4Page5", 7: "Session4Page6", 8: "Session4Page7", 9: "Session4Page8", 10: "Session4Page9",
        11: "Session4Page10", 12: "Session4Page11", 13: "Session4Page12", 14: "Session4Page13", 15: "Session4Page14",
        16: "Session4Page15", 17: "Session4Page16", 18: "Session4Page17", 19: "Session4Page18", 20: "Session4Page18_1",
        21: "Session4Page19", 22: "Session4Page19_1", 23: "Session4Page20", 24: "Session4Page20_1", 25: "Session4Page20_2",
        26: "Session4Page20_3", 27: "Session4Page20_4", 28: "Session4Page21", 29: "Session4Page22", 30: "Session4Page22_1",
        31: "Session4Page23", 32: "Session4Page24", 33: "Session4Page25", 34: "Session4Page26", 35: "Session4Page27",
        36: "Session4Page28",
      },
      lastPage: 36,
      page: 0,
      arrowVisible: true,
      hiddenTimeExpired: false,
    }
  },
  created() {
    if (!this.isNext) {
      this.page = this.lastPage;
      this.arrowVisible = this.$store.getters.getArrowVisible;
    } else {
      this.page = 1;
    }
  },
  methods: {
    previous() {
      if (this.page > 1) {
        this.page--;
      } else {
        this.$emit("nextSession", 3, false);
      }
    },
    next() {
      if (this.page < this.lastPage) {
        this.page++;
      } else {
        this.$emit("nextSession", 5, true);
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

</style>