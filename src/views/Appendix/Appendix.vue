<template>
  <div class="session-container">
    <svg class="arrow" v-show="arrowVisible" @click="next" id="right-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 123" width="124" height="123">
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
import AppendixPage1 from "@/views/Appendix/AppendixPage1";
import AppendixPage2 from "@/views/Appendix/AppendixPage2";
import AppendixPage3 from "@/views/Appendix/AppendixPage3";
import AppendixPage4 from "@/views/Appendix/AppendixPage4";
import AppendixPage5 from "@/views/Appendix/AppendixPage5";
import AppendixPage6 from "@/views/Appendix/AppendixPage6";
import AppendixPage7 from "@/views/Appendix/AppendixPage7";
import AppendixPage8 from "@/views/Appendix/AppendixPage8";
import AppendixPage9 from "@/views/Appendix/AppendixPage9";
import AppendixPage10 from "@/views/Appendix/AppendixPage10";
import AppendixPage11 from "@/views/Appendix/AppendixPage11";
import AppendixPage12 from "@/views/Appendix/AppendixPage12";
import AppendixPage13 from "@/views/Appendix/AppendixPage13";
import AppendixPage14 from "@/views/Appendix/AppendixPage14";
import AppendixPage15 from "@/views/Appendix/AppendixPage15";
import {mapState} from "vuex";

export default {
  name: "Appendix",
  props: {
    appendixPage: Number
  },
  components: {
    AppendixPage1, AppendixPage2, AppendixPage3, AppendixPage4, AppendixPage5,
    AppendixPage6, AppendixPage7, AppendixPage8, AppendixPage9, AppendixPage10,
    AppendixPage11, AppendixPage12, AppendixPage13, AppendixPage14, AppendixPage15
  },
  data() {
    return {
      pages: {
        1: "AppendixPage1", 2: "AppendixPage2", 3: "AppendixPage3", 4: "AppendixPage4", 5: "AppendixPage5",
        6: "AppendixPage6", 7: "AppendixPage7", 8: "AppendixPage8", 9: "AppendixPage9", 10: "AppendixPage10",
        11: "AppendixPage11", 12: "AppendixPage12", 13: "AppendixPage13", 14: "AppendixPage14", 15: "AppendixPage15"
      },
      page: 0,
      arrowVisible: true,
      hiddenTimeExpired: false,
      lastPage: 15
    }
  },
  created() {
    if (this.appendixPage) {
      this.page = this.appendixPage + 1;
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
        this.$emit("nextSession", 12, false);
      }
    },
    next() {
      if (this.page < this.lastPage) {
        this.page++;
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