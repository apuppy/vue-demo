<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Vue.js App"/>
    <Hey></Hey>
    <login></login>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Hey from './components/Hey.vue'
import login from './components/login.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Hey,
    login
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
