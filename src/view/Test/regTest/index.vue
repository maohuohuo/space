<template>
  <div class="content">
    正则表达式
    <div class="regs">
      <span>1.手机号码校验:</span> 
      <input type="text" v-model="phoneNum">
      校验结果: <span :class="phoneTest?'success':'error'">{{phoneTest?'正确':'错误'}}</span> 
    </div>
    <div class="regs">
      <span>2.身份证号校验:</span> 
      <!-- // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  -->
      <input type="text" v-model="cardIdNum">
      校验结果: <span :class="cardIdTest?'success':'error'">{{cardIdTest?'正确':'错误'}}</span> 
    </div>
    <div class="regs">
      <span>3.&nbsp;&nbsp;&nbsp;&nbsp;邮箱校验:</span> 
      <!-- // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  -->
      <input type="text" v-model="email">
      校验结果: <span :class="emailTest?'success':'error'">{{emailTest?'正确':'错误'}}</span> 
    </div>
    <div class="regs">
      <span>3.&nbsp;&nbsp;&nbsp;&nbsp;密码校验:</span> 
       <!-- 密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符 -->
      <input type="text" v-model="psw">
      校验结果: <span :class="pswTest?'success':'error'">{{pswTest?'正确':'错误'}}</span> 
    </div>
    <span style="font-size:12px">*密码中必须包含字母、数字、特称字符，至少8个字符，最多30个字符</span>
  </div>
</template>
<script>
//手机号码校验
const phoneReg=new RegExp('^[1][13579][1-9]{9}')
//身份证号校验(十八位、十五位)
const cardIdReg18=new RegExp('^[1-9][0-9]{5}(19|20|[23]\\d)\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]')
const cardIdReg15=new RegExp('^[1-9]\\d{5}\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{2}$')
//邮箱校验
const emailReg=new RegExp('^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$')
//密码校验
const pswReg=new RegExp('(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]).{8,30}')
export default {
  data() {  
    return {
      phoneNum:'',
      cardIdNum:'',
      email:'',
      psw:''
    }
  },
  computed:{
    phoneTest(){
      return phoneReg.test(this.phoneNum)
    },
    cardIdTest(){
      return cardIdReg18.test(this.cardIdNum)||cardIdReg15.test(this.cardIdNum)
    },
    emailTest(){
      return emailReg.test(this.email)
    },
    pswTest(){
      return pswReg.test(this.psw)
    }
  },
  methods:{
    
  }
}
</script>
<style scoped>
.content{
  padding: 10px;
}
.success{
  color: green;
}
.error{
  color: red;
}
</style>