<template>
  <div class="modal-container" v-show="showModal" @click="closeModal">
    <div class="instruction-container">
      {{text}}
      <svg class="btn-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 93.98 92.25">
        <g class="cls-1-red-mark">
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <path class="cls-2-red-mark"
                    d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
              <path class="cls-2-red-mark"
                    d="M47.86,89.76H46.12A43.64,43.64,0,0,1,2.48,46.12h0A43.64,43.64,0,0,1,46.12,2.48h1.74A43.64,43.64,0,0,1,91.5,46.12h0A43.64,43.64,0,0,1,47.86,89.76Z" />
              <path class="cls-2-red-mark"
                    d="M47.86,92.25H46.12A46.13,46.13,0,0,1,46.12,0h1.74a46.13,46.13,0,0,1,0,92.25ZM46.12,5a41.16,41.16,0,0,0,0,82.31h1.74A41.16,41.16,0,0,0,47.86,5Z" />
              <path class="cls-3-red-mark"
                    d="M47.86,13a33.17,33.17,0,0,1,0,66.34H46.12a33.17,33.17,0,0,1,0-66.34h1.74m0-1.54H46.12a34.72,34.72,0,1,0,0,69.43h1.74a34.72,34.72,0,1,0,0-69.43Z" />
              <polygon class="cls-4-red-mark"
                       points="53.74 47.31 65.46 35.58 58.8 28.91 47.07 40.64 35.35 28.91 28.68 35.58 40.4 47.31 28.68 59.03 35.35 65.7 47.07 53.98 58.8 65.7 65.47 59.03 53.74 47.31" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    text: String
  },
  data() {
    return {
      showModal: true
    }
  },
  methods: {
    closeModal() {
      this.showModal = false;
    }
  }
}
</script>

<style scoped>
.modal-container {
  position: absolute;
  z-index: 550;
  width: 100%;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.instruction-container {
  position: relative;
  background-color: rgba(255,255,255,0.85);
  padding: 5vh 4.2vh;
  max-width: 84vh;
  font-size: 4.2vh;
  text-align: center;
  margin-bottom: 0;
}
.btn-close {
  position: absolute;
  height: auto;
  width: 5.6vh;
  top: -2vh;
  right: -2.8vh;
}
.cls-1-red-mark {isolation: isolate;}
.cls-2-red-mark {fill: #f52100;}
.cls-3-red-mark {fill: #a1a1a1;mix-blend-mode: overlay;}
.cls-4-red-mark {fill: #fff;}
</style>