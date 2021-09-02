<template>
  <div>
    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 123" width="124" height="123">
      <title>Right Arrow</title>
      <g id="object">
        <g id="&lt;Group&gt;">
          <path id="&lt;Path&gt;" class="shp-background" d="M105.91 -0.07L18.7 -0.07C8.89 -0.07 0.95 7.88 0.95 17.68L0.95 104.89C0.95 114.69 8.89 122.64 18.7 122.64L105.91 122.64C115.71 122.64 123.66 114.69 123.66 104.89L123.66 17.68C123.66 7.88 115.71 -0.07 105.91 -0.07Z" />
          <path id="&lt;Path&gt;" class="shp-arrow" d="M99.57 57.31L69.51 32.1C66.22 29.59 61.49 31.94 61.49 36.07L61.49 44.14L26.77 44.14C24.73 44.14 23.07 45.79 23.07 47.84L23.07 74.74C23.07 76.78 24.73 78.43 26.77 78.43L61.49 78.43L61.49 86.5C61.49 90.63 66.22 92.98 69.51 90.48L99.57 65.26C102.19 63.26 102.19 59.31 99.57 57.31Z" />
        </g>
      </g>
    </svg>
    <img :src="getImgUrl(image)" alt="book-introduction" class="image-introduction">
    <svg class="arrow" id="left-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 124 123" width="124" height="123">
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

export default {
  name: "SessionIntroduction",
  props: {
    isNext: Boolean,
  },
  data() {
    return {
      prefix: "PDFtoJPG.me-00",
      image: 1,
      lastPage: 7,
    }
  },
  created() {
    if (!this.isNext) {
      this.image = this.lastPage;
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
      if (this.image < 7) {
        this.image++;
      } else {
        this.$store.commit("setCurrentSession", 1);
        this.$emit('nextSession', 1, true);
      }
    },
    onTap() {
      console.log('tapped');
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

.image-introduction {
  width: 100vw;
  height: calc(100vh - 68px);
}

</style>