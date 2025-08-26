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
import Session1Page1 from "@/views/Session1/Session1Page1";
import Session1Page1_1 from "@/views/Session1/Session1Page1_1";
import Session1Page2 from "@/views/Session1/Session1Page2";
import Session1Page3 from "@/views/Session1/Session1Page3";
import Session1Page4 from "@/views/Session1/Session1Page4";
import Session1Page5 from "@/views/Session1/Session1Page5";
import Session1Page6 from "@/views/Session1/Session1Page6";
import Session1Page7 from "@/views/Session1/Session1Page7";
import Session1Page8 from "@/views/Session1/Session1Page8";
import Session1Page9 from "@/views/Session1/Session1Page9";
import Session1Page10 from "@/views/Session1/Session1Page10";
import Session1Page11 from "@/views/Session1/Session1Page11";
import Session1Page11_1 from "@/views/Session1/Session1Page11_1";
import Session1Page11_2 from "@/views/Session1/Session1Page11_2";
import Session1Page11_3 from "@/views/Session1/Session1Page11_3";
import Session1Page11_4 from "@/views/Session1/Session1Page11_4";
import Session1Page12 from "@/views/Session1/Session1Page12";
import Session1Page13 from "@/views/Session1/Session1Page13";
import Session1Page14_1 from "@/views/Session1/Session1Page14_1";
import Session1Page14_2 from "@/views/Session1/Session1Page14_2";
import Session1Page14_3 from "@/views/Session1/Session1Page14_3";
import Session1Page14 from "@/views/Session1/Session1Page14";
import Session1Page16 from "@/views/Session1/Session1Page16";
import Session1Page17 from "@/views/Session1/Session1Page17";
import Session1Page18 from "@/views/Session1/Session1Page18";
import Session1Page19 from "@/views/Session1/Session1Page19";
import Session1Page20 from "@/views/Session1/Session1Page20";
import Session1Page21 from "@/views/Session1/Session1Page21";
import Session1Page22 from "@/views/Session1/Session1Page22";
import Session1Page23 from "@/views/Session1/Session1Page23";
import Session1Page24 from "@/views/Session1/Session1Page24";
import Session1Page24_1 from "@/views/Session1/Session1Page24_1";
import Session1Page25 from "@/views/Session1/Session1Page25";
import Session1Page26 from "@/views/Session1/Session1Page26";
import Session1Page27 from "@/views/Session1/Session1Page27";
import Session1Page28 from "@/views/Session1/Session1Page28";
import Session1Page28_1 from "@/views/Session1/Session1Page28_1";
import Session1Page28_2 from "@/views/Session1/Session1Page28_2";
import Session1Page28_3 from "@/views/Session1/Session1Page28_3";
import Session1Page29 from "@/views/Session1/Session1Page29";
import Session1Page30 from "@/views/Session1/Session1Page30";
import Session1Page31 from "@/views/Session1/Session1Page31";
import Session1Page32 from "@/views/Session1/Session1Page32";
import Session1Page33 from "@/views/Session1/Session1Page33";
import Session1Page33_1 from "@/views/Session1/Session1Page33_1";
import Session1Page33_2 from "@/views/Session1/Session1Page33_2";
import Session1Page34 from "@/views/Session1/Session1Page34";
import Session1Page35 from "@/views/Session1/Session1Page35";
import Session1Page35_1 from "@/views/Session1/Session1Page35_1";
import Session1Page35_2 from "@/views/Session1/Session1Page35_2";
import Session1Page35_3 from "@/views/Session1/Session1Page35_3";
import Session1Page36 from "@/views/Session1/Session1Page36";
import Session1Page37 from "@/views/Session1/Session1Page37";
import Session1Page37_1 from "@/views/Session1/Session1Page37_1";
import Session1Page38 from "@/views/Session1/Session1Page38";
import Session1Page39 from "@/views/Session1/Session1Page39";
import Session1Page40 from "@/views/Session1/Session1Page40";
import Session1Page41 from "@/views/Session1/Session1Page41";
import Session1Page42 from "@/views/Session1/Session1Page42";
import Session1Page43 from "@/views/Session1/Session1Page43";
import {mapState} from "vuex";

export default {
  name: "Session1",
  props: {
    isNext: Boolean,
  },
  components: {
    Session1Page1, Session1Page2, Session1Page3, Session1Page4, Session1Page5,
    Session1Page6, Session1Page7, Session1Page8, Session1Page9, Session1Page10,
    Session1Page11, Session1Page12, Session1Page13, Session1Page14,
    Session1Page16, Session1Page17, Session1Page18, Session1Page19, Session1Page20,
    Session1Page21, Session1Page22, Session1Page23, Session1Page24, Session1Page25,
    Session1Page26, Session1Page27, Session1Page28, Session1Page29, Session1Page30,
    Session1Page31, Session1Page32, Session1Page33, Session1Page34, Session1Page35,
    Session1Page36, Session1Page37, Session1Page38, Session1Page39, Session1Page1_1,
    Session1Page11_1, Session1Page11_2, Session1Page11_3, Session1Page11_4, Session1Page14_1,
    Session1Page33_1, Session1Page35_1, Session1Page33_2, Session1Page28_1, Session1Page28_2,
    Session1Page28_3, Session1Page35_2, Session1Page35_3, Session1Page37_1, Session1Page24_1,
    Session1Page40, Session1Page41, Session1Page42, Session1Page43, Session1Page14_2,
    Session1Page14_3,
  },
  data() {
    return {
      pages: {
        1: "Session1Page1", 2: "Session1Page1_1", 3: "Session1Page2", 4: "Session1Page3", 5: "Session1Page4",
        6: "Session1Page5", 7: "Session1Page6", 8: "Session1Page7", 9: "Session1Page8", 10: "Session1Page9",
        11: "Session1Page10", 12: "Session1Page11", 13: "Session1Page11_1", 14: "Session1Page11_2", 15: "Session1Page11_3",
        16: "Session1Page11_4", 17: "Session1Page12", 18: "Session1Page13", 19: "Session1Page14", 20: "Session1Page14_1",
        21: "Session1Page14_2", 22: "Session1Page14_3", 23: "Session1Page17", 24: "Session1Page18", 25: "Session1Page19",
        26: "Session1Page20", 27: "Session1Page21", 28: "Session1Page22", 29: "Session1Page23", 30: "Session1Page24",
        31: "Session1Page24_1", 32: "Session1Page25", 33: "Session1Page26", 34: "Session1Page27", 35: "Session1Page28",
        36: "Session1Page28_1", 37: "Session1Page28_2", 38: "Session1Page28_3", 39: "Session1Page29", 40: "Session1Page30",
        41: "Session1Page31", 42: "Session1Page32", 43: "Session1Page33", 44: "Session1Page33_1", 45: "Session1Page33_2",
        46: "Session1Page34", 47: "Session1Page35", 48: "Session1Page35_1", 49: "Session1Page35_2", 50: "Session1Page35_3",
        51: "Session1Page36", 52: "Session1Page37", 53: "Session1Page37_1", 54: "Session1Page38", 55: "Session1Page39",
        56: "Session1Page40", 57: "Session1Page41", 58: "Session1Page42", 59: "Session1Page43",
      },
      startPage: 6,
      currentPage: 1,
      lastPage: 59,
      page: 0,
      arrowVisible: true,
      hiddenTimeExpired: false,
    };
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
        this.$emit("nextSession", 0, false);
      }
    },
    next() {
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
      } else {
        this.$emit("nextSession", 2, true);
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
};
</script>

<style></style>
