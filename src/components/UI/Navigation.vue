<template>
  <div class="pos-f-t">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="p-1 collapse-container">
        <button @click="setSession(0)" type="button" class="btn btn-session">Introduction</button>
        <button @click="setSession(1)" type="button" class="btn btn-session">Session 1</button>
        <button @click="setSession(2)" type="button" class="btn btn-session">Session 2</button>
        <button @click="setSession(3)" type="button" class="btn btn-session">Session 3</button>
        <button @click="setSession(4)" type="button" class="btn btn-session">Session 4</button>
        <button @click="setSession(5)" type="button" class="btn btn-session">Session 5</button>
        <button @click="setSession(6)" type="button" class="btn btn-session">Session 6</button>
        <button @click="setSession(7)" type="button" class="btn btn-session">Session 7</button>
        <button @click="setSession(8)" type="button" class="btn btn-session">Session 8</button>
        <button @click="setSession(9)" type="button" class="btn btn-session">Session 9</button>
        <button @click="setSession(10)" type="button" class="btn btn-session">Session 10</button>
        <button @click="setSession(11)" type="button" class="btn btn-session">Session 11</button>
        <button @click="setSession(12)" type="button" class="btn btn-session">Session 12</button>
      </div>
    </div>
    <nav class="navbar navbar-light navbar-style">
      <button class="navbar-toggler toggler-button" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </nav>
  </div>


</template>

<script>
export default {
  name: "Navigation",
  methods: {
    setSession(sessionNumber) {
      console.log(sessionNumber);
      this.$emit('setSession', sessionNumber)
    }
  }
}
</script>

<style scoped>
.navbar-style {
  background-color: #00ce7c;
}
.toggler-button {
  border: 1px solid #000000;
  outline: none;
}
.collapse-container {
  background-color: #00ce7c;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
}
.btn-session {
  background-color: #ffffff;
  color: #00ce7c;
  font-weight: bold;
  margin: 5px;
  cursor: pointer;
}
</style>