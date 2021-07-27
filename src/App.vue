<template>
  <main id="app">
    <router-view />
  </main>
</template>

<script>
import testData from './assets/data.json'
import { createNamespacedHelpers } from 'vuex'

const { mapGetters, mapActions } = createNamespacedHelpers('takeTest')

export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['test', 'currentSection', 'currentQuestion'])
  },
  created () {
    this.loadData(testData)
  },
  mounted () {
    this.defineSection(this.test.sections[0])
    this.defineQuestion(this.currentSection.questions[0])
  },
  methods: {
    ...mapActions(['loadData', 'defineSection', 'defineQuestion'])
  }
}
</script>

<style lang="scss">
  @import './assets/scss/app';

  [v-cloak] {
    display: none;
  }

  html {
    position: relative;
    min-height: 100%;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
