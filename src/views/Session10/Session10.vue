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
import Session10Page1 from "@/views/Session10/Session10Page1";
import Session10Page1_1 from "@/views/Session10/Session10Page1_1";
import Session10Page2 from "@/views/Session10/Session10Page2";
import Session10Page3 from "@/views/Session10/Session10Page3";
import Session10Page4 from "@/views/Session10/Session10Page4";
import Session10Page5 from "@/views/Session10/Session10Page5";
import Session10Page6 from "@/views/Session10/Session10Page6";
import Session10Page7 from "@/views/Session10/Session10Page7";
import Session10Page8 from "@/views/Session10/Session10Page8";
import Session10Page9 from "@/views/Session10/Session10Page9";
import Session10Page9_1 from "@/views/Session10/Session10Page9_1";
import Session10Page10 from "@/views/Session10/Session10Page10";
import Session10Page11 from "@/views/Session10/Session10Page11";
import Session10Page12 from "@/views/Session10/Session10Page12";
import Session10Page13 from "@/views/Session10/Session10Page13";
import Session10Page14 from "@/views/Session10/Session10Page14";
import Session10Page15 from "@/views/Session10/Session10Page15";
import Session10Page15_1 from "@/views/Session10/Session10Page15_1";
import Session10Page16 from "@/views/Session10/Session10Page16";
import Session10Page17 from "@/views/Session10/Session10Page17";
import Session10Page18 from "@/views/Session10/Session10Page18";
import Session10Page19 from "@/views/Session10/Session10Page19";
import Session10Page20 from "@/views/Session10/Session10Page20";
import Session10Page21 from "@/views/Session10/Session10Page21";
import {mapState} from "vuex";

export default {
  name: "Session10",
  props: {
    isNext: Boolean,
  },
  components: {
    Session10Page1, Session10Page1_1, Session10Page2, Session10Page3, Session10Page4,
    Session10Page5, Session10Page6, Session10Page7, Session10Page8, Session10Page9,
    Session10Page10, Session10Page11, Session10Page12, Session10Page13, Session10Page14,
    Session10Page15, Session10Page16, Session10Page17, Session10Page9_1, Session10Page15_1,
    Session10Page18, Session10Page19, Session10Page20, Session10Page21,
  },
  data() {
    return {
      pages: {
        1: "Session10Page1", 2: "Session10Page1_1", 3: "Session10Page2", 4: "Session10Page3", 5: "Session10Page4",
        6: "Session10Page5", 7: "Session10Page6", 8: "Session10Page7", 9: "Session10Page8", 10: "Session10Page9",
        11: "Session10Page9_1", 12: "Session10Page10", 13: "Session10Page11", 14: "Session10Page12", 15: "Session10Page14",
        16: "Session10Page15", 17: "Session10Page15_1", 18: "Session10Page16", 19: "Session10Page17", 20: "Session10Page18",
        21: "Session10Page19", 22: "Session10Page20", 23: "Session10Page21",
      },
      page: 0,
      arrowVisible: true,
      hiddenTimeExpired: false,
      lastPage: 23,
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
        this.$emit("nextSession", 9, false);
      }
    },
    next() {
      if (this.page < this.lastPage) {
        this.page++;
      } else {
        this.$emit("nextSession", 11, true);
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