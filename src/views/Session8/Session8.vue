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
import Session8Page1 from "@/views/Session8/Session8Page1";
import Session8Page1_1 from "@/views/Session8/Session8Page1_1";
import Session8Page2 from "@/views/Session8/Session8Page2";
import Session8Page3 from "@/views/Session8/Session8Page3";
import Session8Page4 from "@/views/Session8/Session8Page4";
import Session8Page5 from "@/views/Session8/Session8Page5";
import Session8Page6 from "@/views/Session8/Session8Page6";
import Session8Page6_1 from "@/views/Session8/Session8Page6_1";
import Session8Page7 from "@/views/Session8/Session8Page7";
import Session8Page8 from "@/views/Session8/Session8Page8";
import Session8Page9 from "@/views/Session8/Session8Page9";
import Session8Page10 from "@/views/Session8/Session8Page10";
import Session8Page11 from "@/views/Session8/Session8Page11";
import Session8Page11_1 from "@/views/Session8/Session8Page11_1";
import Session8Page11_2 from "@/views/Session8/Session8Page11_2";
import Session8Page12 from "@/views/Session8/Session8Page12";
import Session8Page13 from "@/views/Session8/Session8Page13";
import Session8Page14 from "@/views/Session8/Session8Page14";
import Session8Page14_1 from "@/views/Session8/Session8Page14_1";
import Session8Page15 from "@/views/Session8/Session8Page15";
import Session8Page16 from "@/views/Session8/Session8Page16";
import {mapState} from "vuex";

export default {
  name: "Session8",
  props: {
    isNext: Boolean,
  },
  components: {
    Session8Page1, Session8Page1_1, Session8Page2, Session8Page3, Session8Page4,
    Session8Page5, Session8Page6, Session8Page7, Session8Page8, Session8Page9,
    Session8Page10, Session8Page11, Session8Page12, Session8Page13, Session8Page14,
    Session8Page15, Session8Page16, Session8Page6_1, Session8Page11_1, Session8Page11_2,
    Session8Page14_1,
  },
  data() {
    return {
      pages: {
        1: "Session8Page1", 2: "Session8Page1_1", 3: "Session8Page2", 4: "Session8Page3", 5: "Session8Page4",
        6: "Session8Page5", 7: "Session8Page6", 8: "Session8Page6_1", 9: "Session8Page7", 10: "Session8Page8",
        11: "Session8Page9", 12: "Session8Page10", 13: "Session8Page11", 14: "Session8Page11_1", 15: "Session8Page11_2",
        16: "Session8Page12", 17: "Session8Page13", 18: "Session8Page14", 19: "Session8Page14_1", 20: "Session8Page15",
        21: "Session8Page16",
      },
      page: 0,
      arrowVisible: true,
      hiddenTimeExpired: false,
      lastPage: 21,
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
        this.$emit("nextSession", 7, false);
      }
    },
    next() {
      if (this.page < this.lastPage) {
        this.page++;
      } else {
        this.$emit("nextSession", 9, true);
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