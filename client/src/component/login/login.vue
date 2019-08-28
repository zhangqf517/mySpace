<template>
  <div id="login">
      <el-button type='primary' @click='logon'>注册</el-button>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  },
  computed: {},
  mounted: function() {},
  methods: {
      logon(){
          this.$router.push('/logon')
      }
  }
};
</script>