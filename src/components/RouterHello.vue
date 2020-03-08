<template>
  <div class="hello">
    <h1 @click="say_hello" class="hello_color">{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "RouterHello",
  data() {
    return {
      msg: "Hello组件",
      hello_color: "he_color"
    };
  },
  methods: {
    say_hello() {
      console.log("You clicked me! - hello");
    }
  }
};
</script>

<style>
.he_color {
  color: orange;
}
</style>