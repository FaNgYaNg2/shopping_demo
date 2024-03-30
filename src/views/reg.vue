<template>
  <div>
    用户名 :<el-input v-model="uname"></el-input>
    手机号:<el-input v-model="utele"></el-input>
    密码:<el-input v-model="upwd"></el-input>
    <button @click="reg()">注册</button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      uname:"",
      utele:"",
      upwd:""
    }
  },
  methods:{
    reg(){
      this.$http.get(`http://localhost:8080/addUser?uname=${this.uname}&utele=${this.utele}&upwd=${this.upwd}`)
          .then(res=>{
            console.log(res)
          })
    }
  }
}
</script>

<style scoped>

</style>