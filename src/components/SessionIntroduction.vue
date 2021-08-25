<template>
  <div class="introduction-container mt-4">
    <svg v-visible="image > 1" @click="previous" class="arrow" id="left-arrow" version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
      <title>Previous</title>
      <g id="object">
        <g id="&lt;Group&gt;">
          <path id="&lt;Path&gt;" class="shp-background" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
          <path id="&lt;Path&gt;" class="shp-arrow" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
        </g>
      </g>
    </svg>

    <img :src="getImgUrl(image)" alt="book-introduction" class="image-introduction">

    <svg v-visible="image < 7" @click="next" class="arrow" id="right-arrow" version="1.2" baseProfile="tiny-ps" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 183 183" width="183" height="183">
      <title>Next</title>
      <g id="object">
        <g id="&lt;Group&gt;">
          <path id="&lt;Path&gt;" class="shp-background" d="M182.24 91.35C182.24 141.49 141.59 182.14 91.45 182.14C41.31 182.14 0.66 141.49 0.66 91.35C0.66 41.21 41.31 0.56 91.45 0.56C141.59 0.56 182.24 41.21 182.24 91.35Z" />
          <path id="&lt;Path&gt;" class="shp-arrow" d="M144.99 78.62L118.88 52.51C113.73 47.36 105.99 45.82 99.26 48.61C92.53 51.39 88.15 57.96 88.15 65.24L88.15 73.35L50.64 73.35C40.7 73.35 32.64 81.41 32.64 91.35C32.64 101.29 40.7 109.35 50.64 109.35L88.15 109.35L88.15 117.46C88.15 124.74 92.53 131.31 99.26 134.09C101.49 135.02 103.83 135.47 106.15 135.47C110.83 135.47 115.43 133.64 118.88 130.19L144.99 104.08C152.02 97.05 152.02 85.65 144.99 78.62Z" />
        </g>
      </g>
    </svg>
  </div>
</template>

<script>

export default {
  name: "SessionIntroduction",
  data() {
    return {
      prefix: "PDFtoJPG.me-00",
      image: 1,
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('../assets/images/introduction/' + this.prefix + pic + '.jpg')
    },
    previous() {
      this.image = this.image > 1 ? this.image - 1 : this.image;
    },
    next() {
      this.image = this.image < 7 ? this.image + 1 : this.image;
    }
  },
  mounted() {
    window.addEventListener('keydown', (event)=> {
      if (event.key === "ArrowRight") {
        this.next();
      }
      else if (event.key === "ArrowLeft") {
        this.previous();
      }
    })
  }
}
</script>

<style scoped>
tspan { white-space:pre }
.shp-background { fill: #00ce7c }
.shp-arrow { fill: #ffffff }
.image-introduction {
  width: 768px;
  height: 543px;
  height: auto;
}
.introduction-container {
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
}
.arrow {
  height: 80px;
  margin: 0 10px 0;
  cursor: pointer;
}
#left-arrow {
  transform: rotate(180deg);
}
</style>