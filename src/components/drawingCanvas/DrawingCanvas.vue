<template>
  <div>
    <div id="sketchpad"></div>
    <div class="button-container">
      <div class="color">
        <label for="color">Color</label>
        <input @change="setColor" type="color" id="color" name="color" value="#000000">
      </div>
      <div class="select-group">
        <label for="width">Width</label>
        <select @change="setWidth" class="form-control" id="set-width" name="width">
          <option value="1">1</option>
          <option selected value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
          <option value="16">16</option>
          <option value="20">20</option>
        </select>
      </div>
      <button class="btn-style" @click="undo">UNDO</button>
      <button class="btn-style" @click="redo">REDO</button>
      <button class="btn-style" @click="clear">CLEAR</button>
<!--      <button class="btn-style" @click="save">SAVE</button>-->
    </div>
  </div>
</template>

<script>
import Sketchpad from "responsive-sketchpad";

export default {
  name: 'drawingCanvas',
  props: {
    canvasStyle: Object,
  },
  data() {
    return {
      sketchPad: null,
      instruction: false,
      data: null,
    }
  },
  methods: {
    getImageUrl(image) {
      return require('../../assets/images/' + image);
    },
    undo() {
      if (this.sketchPad) {
        this.sketchPad.undo()
      }
    },
    redo() {
      if (this.sketchPad) {
        this.sketchPad.redo()
      }
    },
    clear() {
      if (this.sketchPad) {
        this.sketchPad.clear()
      }
    },
    save() {
      this.$emit('saved', this.sketchPad.toJSON())
    },
    load() {
      if (this.data) {
        this.sketchPad.loadJSON(this.data);
      }
    },
    setColor(e) {
      if (this.sketchPad) {
        this.sketchPad.setLineColor(e.target.value);
      }
    },
    setWidth(e) {
      if (this.sketchPad) {
        this.sketchPad.setLineSize(e.target.value);
      }
    }
  },

  mounted() {
    let vw = document.querySelector('.interactive-container').clientWidth;
    let vh = window.innerHeight;
    this.$nextTick(() => {
      // Initialize Sketchpad
      let el = document.getElementById('sketchpad');
      this.sketchPad = new Sketchpad(el, {
        line: {
          color: '#000000',
          size: 4
        }
      });

      this.sketchPad.setCanvasSize(this.canvasStyle.width*vw, this.canvasStyle.height*vh);
      document.querySelector('.button-container').style.width = `${this.canvasStyle.width*vw}`;

      if (this.canvasStyle.isPicture) {
        let imageUrl = this.getImageUrl(this.canvasStyle.pictureUrl);
        el.style.backgroundImage = `url(${imageUrl})`;
        el.style.backgroundPosition = 'center';
        el.style.backgroundRepeat = 'no-repeat';
        el.style.backgroundSize = this.canvasStyle.backgroundSize;
      }
    })
  }
}
</script>

<style scoped>
#sketchpad {
  background-color: rgba(255,255,255,0.8);
  position: relative;
  overflow: hidden;
}
.button-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 1vh;
  background-color: rgba(255,255,255,0.8);
  height: 7vh;
}
.btn-style {
  background-color: #00ce7c;
  margin: 0 .5% 1% .5%;
  border: none;
  padding: 0 3% 0 3%;
  height: 5vh;
  border-radius: 5px;
  color: #ffffff;
  font-size: 3vh;
  font-weight: bold;
  box-shadow: 0 9px #999;
}
@media screen and (max-width: 930px) {
  .btn-style {
    border-radius: 3px !important;
    box-shadow: 0 4px #999 !important;
  }
  .btn-style:active {
    box-shadow: 0 2px #666 !important;
    transform: translateY(2px) !important;
  }
  .color {
    width: 18vh !important;
  }
  #set-width {
    width: 12vh;
    height: 5vh;
  }
}
.btn-style:focus,
.btn-style:active {
  outline: 0 !important;
}
.btn-style:active {
  background-color: #009c5d;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
label {
  display: inline-block;
  margin: 0 4%;
  height: 38px;
  line-height: 38px;
  text-align: center;
  font-size: 2.5vh;
  text-transform: uppercase;
}
.color {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 4vh;
  width: 13vh;
}
.select-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 1vw;
}

</style>