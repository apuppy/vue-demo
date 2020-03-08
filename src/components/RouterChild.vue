<template>
  <div>
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "RouterChild",
  data() {
    return {
      msg: "子组件"
    };
  }
};
</script>