<template>
  <div class="nav-container">
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
    <nav class="navbar-style">
      <button class="toggler-button" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent"
              aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <img src="../../assets/images/others/menu-white.png" alt="menu" class="nav-icon">
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
    session: String,
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
        this.$emit('setSession', sessionNumber, true);
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
    },
  },
  mounted() {
    let buttons = document.getElementsByClassName('btn');
    this.changeActiveStyle(buttons[this.selectedSession]);
  },
  }
</script>

<style scoped>
.nav-container {
  width: 100%;
}
@media screen and (max-width: 950px){
  .nav-container {
    width: calc(1.33 * 100vh);
  }
  .toggler-button {
    line-height: 0 !important;
    padding: 4px !important;
    border-radius: 5px !important;
  }
  .btn-session {
    font-size: 2vh;
    padding: 1px !important;
  }
}
.navbar-style {
  background-color: #00ce7c;
  height: 9vh;
  padding: 1vh 1%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.navbar-style div {
  height: calc(4.5vh + .25rem);
  width: calc(4.5vh + 2rem);
}
.session-title {
  text-align: center;
  margin-bottom: 0;
  color: #ffffff;
  font-size: 2.8vh;
}
.nav-icon {
  width: auto;
  height: 4.5vh;
}
.toggler-button {
  padding: .25rem .75rem;
  line-height: 1;
  background-color: transparent;
  border: 1px solid #ffffff;
  border-radius: 13px;
  outline: none;
}
.collapse {
  width: 100% !important;
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