<template>
  <div class="login">
    <form name="login-form" action>
      <input type="text" id="username" placeholder="请输入手机号或邮箱账号" />
      <input type="text" id="userpassword" placeholder="请输入密码" />
      <button @click="login()">登录</button>
    </form>
    <div id="help">
      <p class="forget">忘记密码？</p>
      <div class="register">
        <span>还没有账号？</span>
        <a href="#">手机注册</a>
      </div>
    </div>
    <div>
      <el-button>element默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="text">文字按钮</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  methods: {
    login: function() {
      console.log(this);
    }
  }
};
</script>

<style>
</style>