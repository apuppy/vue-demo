<template>
  <button v-on:click="get_users">get users</button>
</template>

<script>
import axios from "axios";

export default {
  name: "AjaxDemo",
  props: {
    msg: {
      type: String,
      default: "vue component test message"
    }
  },
  methods: {
    get_users: function() {
      axios
        .get("http://localhost:9999/users")
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        })
        .then(function() {
          console.log("always executed");
        });
    }
  }
};
</script>

<style>
</style>