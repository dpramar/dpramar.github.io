<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
  font-size: 50%;
}

@media (min-width: 768px) {
  body {
    font-size: 60%;
  }
}

@media (min-width: 992px) {
  body {
    font-size: 62.5%;
  }
}

#app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

a:link, a:visited {
  color: black;
  font-weight: 700;
  letter-spacing: 0.3px;
  text-decoration: underline;
}
</style>
