<template>
  <div>
    <h3 class="text-center mt-2">
      Session 1 - Hip Hip Hooray! It’s FUN FRIENDS today!
    </h3>
    <div class="session-container">
      <svg
        @click="previous"
        class="arrow"
        id="left-arrow"
        version="1.2"
        baseProfile="tiny-ps"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 183 183"
        width="183"
        height="183"
      >
        <title>Previous</title>
        <g id="object">
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              class="shp-background"
              d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z"
            />
            <path
              id="&lt;Path&gt;"
              class="shp-arrow"
              d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z"
            />
          </g>
        </g>
      </svg>
      <component :is="pages[page]" />
      <svg
        @click="next"
        class="arrow"
        id="right-arrow"
        version="1.2"
        baseProfile="tiny-ps"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 183 183"
        width="183"
        height="183"
      >
        <title>Next</title>
        <g id="object">
          <g id="&lt;Group&gt;">
            <path
              id="&lt;Path&gt;"
              class="shp-background"
              d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z"
            />
            <path
              id="&lt;Path&gt;"
              class="shp-arrow"
              d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z"
            />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
import Session1Page1 from "@/components/Session1/Session1Page1";
import Session1Page2 from "@/components/Session1/Session1Page2";
import Session1Page3 from "@/components/Session1/Session1Page3";
import Session1Page4 from "@/components/Session1/Session1Page4";
import Session1Page5 from "@/components/Session1/Session1Page5";
import Session1Page6 from "@/components/Session1/Session1Page6";
import Session1Page7 from "@/components/Session1/Session1Page7";
import Session1Page8 from "@/components/Session1/Session1Page8";
import Session1Page9 from "@/components/Session1/Session1Page9";
import Session1Page10 from "@/components/Session1/Session1Page10";
import Session1Page11 from "@/components/Session1/Session1Page11";
import Session1Page12 from "@/components/Session1/Session1Page12";
import Session1Page13 from "@/components/Session1/Session1Page13";
import Session1Page14 from "@/components/Session1/Session1Page14";
import Session1Page15 from "@/components/Session1/Session1Page15";
import Session1Page16 from "@/components/Session1/Session1Page16";
import Session1Page17 from "@/components/Session1/Session1Page17";
import Session1Page18 from "@/components/Session1/Session1Page18";
import Session1Page19 from "@/components/Session1/Session1Page19";
import Session1Page20 from "@/components/Session1/Session1Page20";
import Session1Page21 from "@/components/Session1/Session1Page21";
import Session1Page22 from "@/components/Session1/Session1Page22";
import Session1Page23 from "@/components/Session1/Session1Page23";
import Session1Page24 from "@/components/Session1/Session1Page24";
import Session1Page25 from "@/components/Session1/Session1Page25";
import Session1Page26 from "@/components/Session1/Session1Page26";
import Session1Page27 from "@/components/Session1/Session1Page27";
import Session1Page28 from "@/components/Session1/Session1Page28";
import Session1Page29 from "@/components/Session1/Session1Page29";
import Session1Page30 from "@/components/Session1/Session1Page30";
import Session1Page31 from "@/components/Session1/Session1Page31";

export default {
  name: "Session1",
  props: {
    isNext: Boolean,
  },
  components: {
    Session1Page1,
    Session1Page2,
    Session1Page3,
    Session1Page4,
    Session1Page5,
    Session1Page6,
    Session1Page7,
    Session1Page8,
    Session1Page9,
    Session1Page10,
    Session1Page11,
    Session1Page12,
    Session1Page13,
    Session1Page14,
    Session1Page15,
    Session1Page16,
    Session1Page17,
    Session1Page18,
    Session1Page19,
    Session1Page20,
    Session1Page21,
    Session1Page22,
    Session1Page23,
    Session1Page24,
    Session1Page25,
    Session1Page26,
    Session1Page27,
    Session1Page28,
    Session1Page29,
    Session1Page30,
    Session1Page31,
  },
  data() {
    return {
      pages: {
        1: "Session1Page1",
        2: "Session1Page2",
        3: "Session1Page3",
        4: "Session1Page4",
        5: "Session1Page5",
        6: "Session1Page6",
        7: "Session1Page7",
        8: "Session1Page8",
        9: "Session1Page9",
        10: "Session1Page10",
        11: "Session1Page11",
        12: "Session1Page12",
        13: "Session1Page13",
        14: "Session1Page14",
        15: "Session1Page15",
        16: "Session1Page16",
        17: "Session1Page17",
        18: "Session1Page18",
        19: "Session1Page19",
        20: "Session1Page20",
        21: "Session1Page21",
        22: "Session1Page22",
        23: "Session1Page23",
        24: "Session1Page24",
        25: "Session1Page25",
        26: "Session1Page26",
        27: "Session1Page27",
        28: "Session1Page28",
        29: "Session1Page29",
        30: "Session1Page30",
        31: "Session1Page31",
        32: "Session1Page32",
        33: "Session1Page33",
        34: "Session1Page34",
        35: "Session1Page35",
        36: "Session1Page36",
        37: "Session1Page37",
        38: "Session1Page38",
        39: "Session1Page39",
      },
      page: 30,
      lastPage: 50,
    };
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
        this.$emit("nextSession", 0, false);
      }
    },
    next() {
      if (this.page < 40) {
        this.page++;
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
};
</script>

<style></style>
