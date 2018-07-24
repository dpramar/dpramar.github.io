<template>
  <div class="d-main">
    <div class="d-main__title">Hola! Soy David Del Prado.<br>Desarrollador FrontEnd.</div>
    <div class="d-main__description">Actualmente trabajo como <em>FrontEnd Developer</em> en <a class="d-link" href="https://www.atsistemas.com/" target="_blank">atSistemas</a>, Madrid.</div>
    <div class="d-main__description">Apasionado del JavaScript, curioso y con ganas de seguir aprendiendo día a día (ahora jugando con <em>Vue.js</em>).<br>
      Puedes ver mi cv y contactar conmigo a través de <a class="d-link" href="https://www.linkedin.com/in/daviddelprado/" target="_blank">LinkedIn</a> o consultar mi <a class="d-link" href="https://github.com/dpramar" target="_blank">GitHub</a>.</div>
  </div>
</template>

<script>
export default {
  name: 'Main'
}
</script>

<style scoped lang="scss">
.d-main {
  color: black;
  display: flex;
  background-color: #f79229;
  border-top: 5px inset black;
  box-sizing: border-box;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  padding-left: 25px;
  padding-top: 80px;
  text-align: left;
}

.d-main__title {
  font-size: 2em;
  font-weight: 500;
  margin-bottom: 10px;
}

.d-main__description {
  font-size: 1.2em;
  font-weight: 300;
  line-height: 1.3em;
  max-width: 700px;
}
</style>
