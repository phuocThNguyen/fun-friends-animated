<template>
  <div class="pos-f-t w-100">
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="p-1 collapse-container">
        <button @click="setSession(0)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Introduction</button>
        <button @click="setSession(1)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 1</button>
        <button @click="setSession(2)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 2</button>
        <button @click="setSession(3)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 3</button>
        <button @click="setSession(4)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 4</button>
        <button @click="setSession(5)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 5</button>
        <button @click="setSession(6)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 6</button>
        <button @click="setSession(7)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 7</button>
        <button @click="setSession(8)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 8</button>
        <button @click="setSession(9)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 9</button>
        <button @click="setSession(10)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 10</button>
        <button @click="setSession(11)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 11</button>
        <button @click="setSession(12)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Session 12</button>
        <button @click="setSession(13)" type="button" class="btn btn-session"
                data-toggle="collapse" data-target="#navbarToggleExternalContent">Appendixes</button>
      </div>
    </div>
    <nav class="navbar-dark navbar-style">
      <button class="navbar-toggler toggler-button" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <h1 class="session-title">{{title}}</h1>
      <div></div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Navigation",
  props: {
    title: String,
  },
  data() {
    return {
      isActive: false,
      selectedSession: 0
    }
  },
  computed: mapState(['currentSession']),
  watch: {
    currentSession(newValue, oldValue) {
      this.selectedSession = newValue;
      let buttons = document.getElementsByClassName('btn');
      this.changeActiveStyle(buttons[newValue]);
      this.resetStyle(buttons[oldValue]);
    }
  },
  methods: {
    setSession(sessionNumber) {
      if (sessionNumber !== this.selectedSession) {
        this.$emit('setSession', sessionNumber);
        this.$store.commit("setCurrentSession", sessionNumber);
      }
    },
    resetStyle(btn) {
      btn.style.color = '#00ce7c';
      btn.style.backgroundColor = '#fff';
    },
    changeActiveStyle(btn) {
      btn.style.color = '#fff';
      btn.style.backgroundColor = '#00ce7c';
    }
  },
  mounted() {
    let buttons = document.getElementsByClassName('btn')
    this.changeActiveStyle(buttons[this.selectedSession]);
  },
  }
</script>

<style scoped>
.navbar-style {
  background-color: #00ce7c;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.session-title {
  text-align: center;
  margin: 5px 0 0 0;
  color: #ffffff;
  font-size: 25px;
}
.toggler-button {
  border: 1px solid #ffffff;
  border-radius: 13px;
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
  border: 2px solid #ffffff;
}
.btn-session:focus {
  box-shadow: none;
}
</style>