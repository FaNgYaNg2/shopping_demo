<template>
  <div>
    <div class="top">

    </div>
    <div class="middle">
      <div class="login">
        <el-row>
          <el-col :span="8">
            <el-button>密码登录</el-button>
          </el-col>
          <el-col :span="8">
            <el-button>短信登录</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-input v-model="usertel" placeholder="账号名/邮箱/手机号"></el-input>
        </el-row>
        <el-row>
          <el-input v-model="password" placeholder="请输入登录密码" type="password"></el-input>
        </el-row>
        <el-row>
          <el-button @click="login()">登录</el-button>
        </el-row>
        <el-row>
          <el-col :span="24">其他方式登录：</el-col>
        </el-row>
        <el-row>
          <el-col :span="5" style="font-size: 14px;" :offset="8">忘记密码</el-col>
          <el-col :span="6" style="font-size: 14px;">忘记账号名</el-col>
          <el-col :span="5" style="font-size: 14px;">
            <router-link to=/reg">免费注册</router-link>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="bot">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      usertel: '',
      password: ''
    }
  },
  methods: {
    clearInput(event) {
      event.target.value = '';
    },
    login() {
      this.$http.get(`http://localhost:8080/userLogin?sutele=${this.usertel}&supassword=${this.password}`).then((res) => {
        if (res.data.status === 200) {
          alert('Login success')
        } else {
          alert('Login failed')
        }
      })
    }
  }
}
</script>

<style scoped>
.top {
  width: 100%;
  height: 88px;
  padding: 22px 0px;
  background-color: lightblue;
  box-sizing: border-box;
}

.middle {
  width: 100%;
  height: 600px;
  padding: 22px 0px;
  background-color: lightcoral;
  background-image: url("https://gw.alicdn.com/imgextra/i1/O1CN01h1szGY1CDZQBe1yQu_!!6000000000047-2-tps-2500-600.png");
  background-position: 53%;
}

.login {
  box-sizing: border-box;
  width: 350px;
  height: 367px;
  background-color: #ffffffe6;
  padding: 25px 25px 23px;
  position: absolute;
  right: 405px;
  top: 203px;
}

.el-row {
  margin-top: 14px;
}
</style>