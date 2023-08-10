<template>
  <div class="session-container">
    <svg class="arrow" @click="next" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 123" width="124" height="123">
      <title>Right Arrow</title>
      <g id="object">
        <g id="&lt;Group&gt;">
          <path id="&lt;Path&gt;" class="shp-background" d="M105.91 -0.07L18.7 -0.07C8.89 -0.07 0.95 7.88 0.95 17.68L0.95 104.89C0.95 114.69 8.89 122.64 18.7 122.64L105.91 122.64C115.71 122.64 123.66 114.69 123.66 104.89L123.66 17.68C123.66 7.88 115.71 -0.07 105.91 -0.07Z" />
          <path id="&lt;Path&gt;" class="shp-arrow" d="M99.57 57.31L69.51 32.1C66.22 29.59 61.49 31.94 61.49 36.07L61.49 44.14L26.77 44.14C24.73 44.14 23.07 45.79 23.07 47.84L23.07 74.74C23.07 76.78 24.73 78.43 26.77 78.43L61.49 78.43L61.49 86.5C61.49 90.63 66.22 92.98 69.51 90.48L99.57 65.26C102.19 63.26 102.19 59.31 99.57 57.31Z" />
        </g>
      </g>
    </svg>
    <component :is="pages[page]" />
    <svg class="arrow" @click="previous" id="left-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 123" width="124" height="123">
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
import Session7Page1 from "@/views/Session7/Session7Page1";
import Session7Page1_1 from "@/views/Session7/Session7Page1_1";
import Session7Page2 from "@/views/Session7/Session7Page2";
import Session7Page3 from "@/views/Session7/Session7Page3";
import Session7Page4 from "@/views/Session7/Session7Page4";
import Session7Page5 from "@/views/Session7/Session7Page5";
import Session7Page6 from "@/views/Session7/Session7Page6";
import Session7Page7 from "@/views/Session7/Session7Page7";
import Session7Page8 from "@/views/Session7/Session7Page8";
import Session7Page9 from "@/views/Session7/Session7Page9";
import Session7Page10 from "@/views/Session7/Session7Page10";
import Session7Page12 from "@/views/Session7/Session7Page12";
import Session7Page13 from "@/views/Session7/Session7Page13";
import Session7Page14 from "@/views/Session7/Session7Page14";
import Session7Page15 from "@/views/Session7/Session7Page15";
import Session7Page16 from "@/views/Session7/Session7Page16";
import Session7Page17 from "@/views/Session7/Session7Page17";
import Session7Page17_1 from "@/views/Session7/Session7Page17_1";
import Session7Page18 from "@/views/Session7/Session7Page18";
import Session7Page19 from "@/views/Session7/Session7Page19";

export default {
  name: "Session7",
  props: {
    isNext: Boolean,
  },
  components: {
    Session7Page1, Session7Page1_1, Session7Page2, Session7Page3, Session7Page4,
    Session7Page5, Session7Page6, Session7Page7, Session7Page8, Session7Page9,
    Session7Page10, Session7Page12, Session7Page13, Session7Page14, Session7Page15,
    Session7Page16, Session7Page17, Session7Page18, Session7Page19, Session7Page17_1,
  },
  data() {
    return {
      pages: {
        1: "Session7Page1", 2: "Session7Page1_1", 3: "Session7Page2", 6: "Session7Page3", 5: "Session7Page4",
        4: "Session7Page5", 7: "Session7Page6", 8: "Session7Page7", 9: "Session7Page8", 10: "Session7Page9",
        11: "Session7Page10", 12: "Session7Page12", 13: "Session7Page13", 14: "Session7Page14", 15: "Session7Page15",
        16: "Session7Page16", 17: "Session7Page17", 18: "Session7Page17_1", 19: "Session7Page18", 20: "Session7Page19",
      },
      page: 1,
      lastPage: 20,
    }
  },
  created() {
    if (!this.isNext) {
      this.page = this.lastPage;
    }
  },
  methods: {
    previous() {
      if (this.page > 1) {
        this.page--;
      } else {
        this.$emit("nextSession", 6, false);
      }
    },
    next() {
      if (this.page < this.lastPage) {
        this.page++;
      } else {
        this.$emit("nextSession", 8, true);
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
}
</script>

<style>

</style>