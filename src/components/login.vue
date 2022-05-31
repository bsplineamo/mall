<template>
  <div class="back">
      <div class="login_box">
          <div class="login-word">
              登&nbsp;&nbsp;&nbsp;&nbsp;录
          </div>
          <div class="account">
            账号：<input type="text" placeholder="请输入账号" v-model="accountNumber">
          </div>
            <br>
          <div class="password">
            密码：<input type="password" placeholder="请输入密码" v-model="passwordNumber"> 
          </div> 
          <br>
          <button class="log" @click="login(accountNumber,passwordNumber)">登录</button>
      </div>

  </div>
</template>

<script>
export default {
    name:"LogIn",
    data(){
        return{
            accountNumber:'admin',//admin
            passwordNumber:'123456'//123456
        }
    },
    methods:{
        login(accountNumber,passwordNumber){
            if(!accountNumber || !passwordNumber){
                alert("请输入账号和密码！")
            }else if(accountNumber == "admin"&&passwordNumber == "123456"){
                // alert("账号密码输入正确！")
                this.$router.push({path:"home"})//.catch(err => err)
                // console.log(this.$router)

            }else{
                alert("账号或密码输入错误！")
            }
        }
    }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
}
html,body{
    width: 100%;
    height: 100%;
    font-size: 20px;
}
.back{
    width: 100%;
    height: 100%;
    position: absolute;
    background-image: url("../assets/back_image.png");
    background-repeat: no-repeat;
    background-size:100% ;
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
}
.login_box{
    /* position: absolute; */
    display: inline-block;
    width: 478px;
    height: 300px;
    background-color: white;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-flow:column;
    border-radius: 4%;
}
.login-word{
    position: absolute;
    width: 50px;
    height: 30px;
    margin: 0 auto 210px auto;
    margin-top: 0;
}
.log{
    width: 320px;
    height: 30px;
    font-size: 20px;
    background-color: skyblue;
    border-radius: 4px;
    border: none;
}
input{
    font-size: 20px;
    border: skyblue solid 2px;
    border-radius: 4px;
    
}

</style>