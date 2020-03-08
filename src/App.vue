<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Vue.js App" />
    <Hey></Hey>
    <login></login>
    <ul class="ul_style">
      <li>
        <router-link to="/">Hello route</router-link>
      </li>
      <li>
        <router-link to="/index/354">World route 参数测试</router-link>
      </li>
      <li>
        <router-link v-bind:to="{path:'/index/query',query:{name:'Jerry'}}">World route query</router-link>
      </li>
      <li>
        <router-link to="/index/chil-route">World route子路由</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import Hey from "./components/Hey.vue";
import login from "./components/login.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    Hey,
    login
  },
  mounted() {
    console.log(this.$route);
    console.log(this.$route.params.id);
    console.log(this.$route.query.name);
  }
};
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
.ul_style {
  list-style-type: none;
}
</style>
