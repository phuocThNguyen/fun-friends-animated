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
import Session5Page1 from "@/views/Session5/Session5Page1";
import Session5Page2 from "@/views/Session5/Session5Page2";
import Session5Page3 from "@/views/Session5/Session5Page3";
import Session5Page4 from "@/views/Session5/Session5Page4";
import Session5Page5 from "@/views/Session5/Session5Page5";
import Session5Page6 from "@/views/Session5/Session5Page6";
import Session5Page7 from "@/views/Session5/Session5Page7";
import Session5Page8 from "@/views/Session5/Session5Page8";
import Session5Page9 from "@/views/Session5/Session5Page9";
import Session5Page10 from "@/views/Session5/Session5Page10";
import Session5Page11 from "@/views/Session5/Session5Page11";
import Session5Page12 from "@/views/Session5/Session5Page12";
import Session5Page13 from "@/views/Session5/Session5Page13";
import Session5Page14 from "@/views/Session5/Session5Page14";
import Session5Page15 from "@/views/Session5/Session5Page15";
import Session5Page16 from "@/views/Session5/Session5Page16";
import Session5Page17 from "@/views/Session5/Session5Page17";

export default {
  name: "Session5",
  props: {
    isNext: Boolean,
  },
  components: {
    Session5Page1, Session5Page2, Session5Page3, Session5Page4, Session5Page5,
    Session5Page6, Session5Page7, Session5Page8, Session5Page9, Session5Page10,
    Session5Page11, Session5Page12, Session5Page13, Session5Page14, Session5Page15,
    Session5Page16, Session5Page17
  },
  data() {
    return {
      pages: {
        1: "Session5Page1", 2: "Session5Page2", 3: "Session5Page3", 4: "Session5Page4", 5: "Session5Page5",
        6: "Session5Page6", 7: "Session5Page7", 8: "Session5Page8", 9: "Session5Page9", 10: "Session5Page10",
        11: "Session5Page11", 12: "Session5Page12", 13: "Session5Page13", 14: "Session5Page14", 15: "Session5Page15",
        16: "Session5Page16", 17: "Session5Page17"
      },
      page: 1,
      lastPage: 17,
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
        this.$emit("nextSession", 4, false);
      }
    },
    next() {
      if (this.page < this.lastPage) {
        this.page++;
      } else {
        this.$emit("nextSession", 6, true);
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