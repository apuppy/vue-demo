<template>
  <button v-on:click="add_brand">add brand</button>
</template>

<script>
import axios from "axios";

export default {
  name: "BrandAdd",
  props: {
    msg: {
      type: String,
      default: "vue component test message"
    }
  },
  methods: {
    add_brand: function() {
      var data = new FormData();
      data.append("name", "test-brand-name");
      data.append("logo", "https://source.unsplash.com/random");
      data.append("domain", "wowo.yuzhua.com");
      data.append("license", "xxxxxxxxxx123456");
      data.append("description", "");

      axios({
        method: "post",
        url: "http://api-ba.yuzhua-dev.com/brand/add",
        data: data,
        headers: { "Content-Type": "multipart/form-data" }
      })
        .then(function(response) {
          //handle success
          console.log(response);
        })
        .catch(function(response) {
          //handle error
          console.log(response);
        });

      // var xhr = new XMLHttpRequest();
      // xhr.withCredentials = false;

      // xhr.addEventListener("readystatechange", function() {
      //   if (this.readyState === 4) {
      //     console.log(this.responseText);
      //   }
      // });

      // xhr.open("POST", "http://api-ba.yuzhua-dev.com/brand/add");

      // xhr.send(data);
    }
  }
};
</script>

<style>
</style>