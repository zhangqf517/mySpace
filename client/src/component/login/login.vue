<template class="login-body">
  <div class="login-page">
    <div class="login">
      <div class="login-box">
        <div class="userCodeArea">
          <div class="area-title">账户:</div>
          <input type="text" v-model="currentUser.username" class="inputstyle" />
        </div>
        <div class="passwordCodeArea">
          <div class="area-title">密码:</div>
          <input type="password" v-model="currentUser.password" class="inputstyle" />
        </div>
        <el-button class="loginBtn" type="primary" @click="loginClick">登陆</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import {LOGIN} from '../../store/types'
let localStorage = window.localStorage;

export default {
  name: "login",
  data() {
    return {};
  },
  computed: {
    ...mapState({
      currentUser: state => {
        if (state.loginUser === undefined || state.loginUser._id === "") {
          if (typeof localStorage.getItem("loginUser") !== undefined && localStorage.getItem("loginUser") !== null
          ) {
            state.loginUser = JSON.parse(localStorage.getItem("loginUser"));
          }
        }
        return state.loginUser;
      }
    })
  },
  mounted: function() {},
  methods: {
    ...mapActions([
      LOGIN
    ]),
    loginClick() {
      this.login(this.currentUser).then(res =>{
        if(res.success){
          this.$message({
            showClose: true,
            type:'success',
            message:'登陆成功!'
          })
          this.$router.push('/index')
        }else {
          this.$message({
            showClose:true,
            type:'error',
            message:res.err
          })
        }
      }).catch(err =>{
        this.$message({
          showClose:true,
          type:'error',
          message:'登陆失败！'
        })
      })
    }
  }
};
</script>

<style scoped>
@import "../../assets/css/login.css";
</style>