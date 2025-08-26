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
import Session6Page1 from "@/views/Session6/Session6Page1";
import Session6Page1_1 from "@/views/Session6/Session6Page1_1";
import Session6Page2 from "@/views/Session6/Session6Page2";
import Session6Page3 from "@/views/Session6/Session6Page3";
import Session6Page4 from "@/views/Session6/Session6Page4";
import Session6Page5 from "@/views/Session6/Session6Page5";
import Session6Page6 from "@/views/Session6/Session6Page6";
import Session6Page7 from "@/views/Session6/Session6Page7";
import Session6Page8 from "@/views/Session6/Session6Page8";
import Session6Page9 from "@/views/Session6/Session6Page9";
import Session6Page9_1 from "@/views/Session6/Session6Page9_1";
import Session6Page10 from "@/views/Session6/Session6Page10";
import Session6Page11 from "@/views/Session6/Session6Page11";
import Session6Page12 from "@/views/Session6/Session6Page12";
import Session6Page13 from "@/views/Session6/Session6Page13";
import Session6Page14 from "@/views/Session6/Session6Page14";
import Session6Page15 from "@/views/Session6/Session6Page15";
import {mapState} from "vuex";

export default {
  name: "Session6",
  props: {
    isNext: Boolean,
  },
  components: {
    Session6Page1, Session6Page1_1, Session6Page2, Session6Page3, Session6Page4,
    Session6Page5, Session6Page6, Session6Page7, Session6Page8, Session6Page9,
    Session6Page10, Session6Page11, Session6Page9_1, Session6Page12, Session6Page13,
    Session6Page14, Session6Page15,
  },
  data() {
    return {
      pages: {
        1: "Session6Page1", 2: "Session6Page1_1", 3: "Session6Page2", 4: "Session6Page3", 5: "Session6Page4",
        6: "Session6Page5", 7: "Session6Page6", 8: "Session6Page7", 9: "Session6Page8", 10: "Session6Page9",
        11: "Session6Page9_1", 12: "Session6Page10", 13: "Session6Page11", 14: "Session6Page12", 15: "Session6Page13",
        16: "Session6Page14", 17: "Session6Page15",
      },
      startPage: 181,
      currentPage: 1,
      arrowVisible: true,
      hiddenTimeExpired: false,
      lastPage: 17,
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
        this.$emit("nextSession", 5, false);
      }
    },
    next() {      
      if (this.currentPage < this.lastPage) {
        this.currentPage++;
      } else {
        this.$emit("nextSession", 7, true);
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