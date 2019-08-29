<template class="login-body">
  <div class="login-page">
    <div class="login">
      <div class="login-box">
        <div class='userCodeArea'>
          <div class="area-title">账户:</div>
          <input type="text" v-model="currentUser.username" class='inputstyle'/>
        </div>
        <div class="passwordCodeArea">
          <div class="area-title">密码:</div>
          <input type="password" v-model="currentUser.password" class="inputstyle"/>
        </div>
          <el-button class="loginBtn" type='primary' @click='loginClick'>登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      currentUser: {
        username:"",
        password:''
      }
    };
  },
  computed: {},
  mounted: function() {},
  methods: {
      loginClick(){
          
      }
  }
};
</script>

<style scoped>
  @import "../../assets/css/login.css";
  
</style>