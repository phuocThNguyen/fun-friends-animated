<template>
  <div>
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
  </div>

</template>

<script>
import Session6Page1 from "@/views/Session6/Session6Page1";
import Session6Page2 from "@/views/Session6/Session6Page2";
import Session6Page3 from "@/views/Session6/Session6Page3";
import Session6Page4 from "@/views/Session6/Session6Page4";
import Session6Page5 from "@/views/Session6/Session6Page5";

export default {
  name: "Session6",
  props: {
    isNext: Boolean,
  },
  components: {
    Session6Page1, Session6Page2, Session6Page3, Session6Page4, Session6Page5
  },
  data() {
    return {
      pages: {
        1: "Session6Page1", 2: "Session6Page2", 3: "Session6Page3", 4: "Session6Page4", 5: "Session6Page5",
        6: "Session6Page6", 7: "Session6Page7", 8: "Session6Page8", 9: "Session6Page9", 10: "Session6Page10",
        11: "Session6Page11", 12: "Session6Page12", 13: "Session6Page13", 14: "Session6Page14", 15: "Session6Page15",
        16: "Session6Page16"
      },
      page: 1,
      lastPage: 16,
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
        this.$emit("nextSession", 5, false);
        this.$store.commit("setCurrentSession", 5);
      }
    },
    next() {
      if (this.page < this.lastPage) {
        this.page++;
      } else {
        this.$emit("nextSession", 7, true);
        this.$store.commit("setCurrentSession", 7);
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