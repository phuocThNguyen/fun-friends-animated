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
import Session3Page1 from "@/views/Session3/Session3Page1";
import Session3Page1_1 from "@/views/Session3/Session3Page1_1";
import Session3Page2 from "@/views/Session3/Session3Page2";
import Session3Page3 from "@/views/Session3/Session3Page3";
import Session3Page4 from "@/views/Session3/Session3Page4";
import Session3Page5 from "@/views/Session3/Session3Page5";
import Session3Page6 from "@/views/Session3/Session3Page6";
import Session3Page7 from "@/views/Session3/Session3Page7";
import Session3Page7_1 from "@/views/Session3/Session3Page7_1";
import Session3Page7_2 from "@/views/Session3/Session3Page7_2";
import Session3Page8_1 from "@/views/Session3/Session3Page8_1";
import Session3Page8_2 from "@/views/Session3/Session3Page8_2";
import Session3Page8 from "@/views/Session3/Session3Page8";
import Session3Page9 from "@/views/Session3/Session3Page9";
import Session3Page9_1 from "@/views/Session3/Session3Page9_1";
import Session3Page9_2 from "@/views/Session3/Session3Page9_2";
import Session3Page10 from "@/views/Session3/Session3Page10";
import Session3Page11 from "@/views/Session3/Session3Page11";
import Session3Page11_1 from "@/views/Session3/Session3Page11_1";
import Session3Page12 from "@/views/Session3/Session3Page12";
import Session3Page13 from "@/views/Session3/Session3Page13";
import Session3Page14 from "@/views/Session3/Session3Page14";
import Session3Page14_0 from "@/views/Session3/Session3Page14_0";
import Session3Page14_1 from "@/views/Session3/Session3Page14_1";
import Session3Page15 from "@/views/Session3/Session3Page15";
import Session3Page16 from "@/views/Session3/Session3Page16";
import Session3Page17 from "@/views/Session3/Session3Page17";
import Session3Page18 from "@/views/Session3/Session3Page18";
import Session3Page19 from "@/views/Session3/Session3Page19";
import Session3Page20 from "@/views/Session3/Session3Page20";
import {mapState} from "vuex";

export default {
  name: "Session3",
  props: {
    isNext: Boolean,
  },
  components: {
    Session3Page1, Session3Page1_1, Session3Page2, Session3Page3, Session3Page4,
    Session3Page5, Session3Page6, Session3Page7, Session3Page8, Session3Page9,
    Session3Page10, Session3Page11, Session3Page12, Session3Page13, Session3Page14,
    Session3Page15, Session3Page16, Session3Page11_1, Session3Page14_1, Session3Page7_1,
    Session3Page7_2, Session3Page8_1, Session3Page8_2, Session3Page9_1, Session3Page14_0,
    Session3Page17, Session3Page18, Session3Page19, Session3Page20, Session3Page9_2,
  },
  data() {
    return {
      pages: {
        1: "Session3Page1", 2: "Session3Page1_1", 3: "Session3Page2", 4: "Session3Page3", 5: "Session3Page4",
        6: "Session3Page5", 7: "Session3Page6", 8: "Session3Page7", 9: "Session3Page7_1", 10: "Session3Page7_2",
        11: "Session3Page8", 12: "Session3Page8_1", 13: "Session3Page8_2", 14: "Session3Page9", 15: "Session3Page9_1",
        16: "Session3Page9_2", 17: "Session3Page10", 18: "Session3Page11", 19: "Session3Page12", 20: "Session3Page13",
        21: "Session3Page14", 22: "Session3Page14_0", 23: "Session3Page14_1", 24: "Session3Page15", 25: "Session3Page16",
        26: "Session3Page17", 27: "Session3Page18", 28: "Session3Page19", 29: "Session3Page20",
      },
      startPage: 94,
      lastPage: 29,
      currentPage: 1,
      arrowVisible: true,
      hiddenTimeExpired: false,
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
        this.$emit("nextSession", 2, false);
      }
    },
    next() {      
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
      } else {
        this.$emit("nextSession", 4, true);
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