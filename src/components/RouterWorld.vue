<template>
  <div class="world">
    <h1 @click="say_world" class="world_color">{{msg}}</h1>
    <router-link to="/index/678">World route 参数测试</router-link>
  </div>
</template>

<script>
export default {
  name: "RouterWorld",
  data() {
    return {
      msg: "World组件",
      world_color: "world_color"
    };
  },
  methods: {
    say_world() {
      console.log("You clicked me! - world");
    }
  }
};
</script>

<style>
.world_color {
  color: blue;
}
</style>