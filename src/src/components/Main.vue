<template>
  <div class="d-main">
    <div class="d-main__title">{{ $t("main.hello") }}<br>{{ $t("main.role") }}</div>
    <div class="d-main__description" v-html="$t('main.status')"></div>
    <div class="d-main__description" v-html="$t('main.about')"></div>
    <div class="d-main__description" v-html="$t('main.contact')"></div>
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
  padding: 0 25px;
  text-align: left;
}

.d-main__title {
  font-size: 3em;
  font-weight: 500;
  margin-bottom: 10px;
}

.d-main__description {
  font-size: 1.8em;
  font-weight: 300;
  line-height: 1.3em;
  max-width: 700px;
}
</style>
