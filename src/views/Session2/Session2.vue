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
import Session2Page1 from "@/views/Session2/Session2Page1";
import Session2Page1_1 from "@/views/Session2/Session2Page1_1";
import Session2Page2 from "@/views/Session2/Session2Page2";
import Session2Page4 from "@/views/Session2/Session2Page4";
import Session2Page5 from "@/views/Session2/Session2Page5";
import Session2Page6 from "@/views/Session2/Session2Page6";
import Session2Page7 from "@/views/Session2/Session2Page7";
import Session2Page8 from "@/views/Session2/Session2Page8";
import Session2Page9 from "@/views/Session2/Session2Page9";
import Session2Page10 from "@/views/Session2/Session2Page10";
import Session2Page11 from "@/views/Session2/Session2Page11";
import Session2Page12 from "@/views/Session2/Session2Page12";
import Session2Page13 from "@/views/Session2/Session2Page13";
import Session2Page14 from "@/views/Session2/Session2Page14";
import Session2Page15 from "@/views/Session2/Session2Page15";
import Session2Page16 from "@/views/Session2/Session2Page16";
import Session2Page17 from "@/views/Session2/Session2Page17";
import Session2Page18 from "@/views/Session2/Session2Page18";
import Session2Page19 from "@/views/Session2/Session2Page19";
import Session2Page20 from "@/views/Session2/Session2Page20";
import Session2Page21 from "@/views/Session2/Session2Page21";
import Session2Page22 from "@/views/Session2/Session2Page22";
import Session2Page23 from "@/views/Session2/Session2Page23";
import Session2Page23_1 from "@/views/Session2/Session2Page23_1";
import Session2Page24 from "@/views/Session2/Session2Page24";
import Session2Page25 from "@/views/Session2/Session2Page25";
import {mapState} from "vuex";

export default {
  name: "Session2",
  props: {
    isNext: Boolean,
  },
  components: {
    Session2Page1, Session2Page1_1, Session2Page2, Session2Page4, Session2Page5,
    Session2Page6, Session2Page7, Session2Page8, Session2Page9, Session2Page10,
    Session2Page11, Session2Page12, Session2Page13, Session2Page14, Session2Page15,
    Session2Page16, Session2Page17, Session2Page18, Session2Page19, Session2Page20,
    Session2Page21, Session2Page22, Session2Page23, Session2Page24, Session2Page25,
    Session2Page23_1
  },
  data() {
    return {
      pages: {
        1: "Session2Page1", 3: "Session2Page1_1", 2: "Session2Page2", 4: "Session2Page4", 5: "Session2Page5",
        6: "Session2Page6", 7: "Session2Page7", 8: "Session2Page8", 9: "Session2Page9", 10: "Session2Page10",
        11: "Session2Page11", 12: "Session2Page12", 13: "Session2Page13", 14: "Session2Page14", 15: "Session2Page15",
        16: "Session2Page16", 17: "Session2Page17", 18: "Session2Page18", 19: "Session2Page19", 20: "Session2Page20",
        21: "Session2Page21", 22: "Session2Page22", 23: "Session2Page23", 24: "Session2Page23_1", 25: "Session2Page24",
        26: "Session2Page25",
      },
      lastPage: 26,
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
        this.$emit("nextSession", 1, false);
      }
    },
    next() {
      if (this.page < this.lastPage) {
        this.page++;
      } else {
        this.$emit("nextSession", 3, true);
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

<style scoped></style>