<template>
 
    <div class="wholeStyle login">
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
      <el-tab-pane label="帐户密码登录" name="account"></el-tab-pane>
      <el-tab-pane label="手机号登录" name="phone"></el-tab-pane>
    </el-tabs>
    <el-form ref="formRef" :model="loginForm.accountForm" v-if="activeName == 'account'">
      <el-form-item label="账号" prop="username" :rules="[
        {
          required: true,
          message: '请输入账号',
          trigger: 'blur',
        },
      ]">
        <el-input style="width: 300px" maxLength="20" v-model="loginForm.accountForm.username" placeholder="请输入账号" />
      </el-form-item>
      <el-form-item label="密码" prop="password" :rules="[
        {
          required: true,
          message: '请输入密码',
          trigger: 'blur',
        },
      ]">
        <el-input style="width: 300px" show-password type="password" maxLength="16"
          v-model="loginForm.accountForm.password" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 320px" v-dbClick @click="funObj.loginFun(formRef)">登录</el-button>
      </el-form-item>
    </el-form>
    <el-form ref="formRef" :model="loginForm.phoneForm" v-else>
      <el-form-item prop="mobile" label="手机号" :rules="[
        {
          required: true,
          message: '请输入手机号',
          trigger: 'blur',
        },
        { validator: validatePhone, trigger: 'blur' }
      ]">
        <el-input style="width: 300px" maxLength="20" v-model="loginForm.phoneForm.mobile" placeholder="请输入手机号" />
      </el-form-item>
      <el-form-item prop="code" label="验证码" :rules="[
        {
          required: true,
          message: '请输入验证码',
          trigger: 'blur',
        },
      ]">
        <el-input style="width: 300px;" maxLength="6" v-model="loginForm.phoneForm.code" placeholder="请输入验证码">
          <template #append>
            <el-button v-dbClick @click="funObj.sendCode" :disabled="loginForm.countDown != 0">{{
              loginForm.countDown == 0 ?
              '发送验证码' : loginForm.countDown + "s"
            }}</el-button>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 320px" v-dbClick @click="funObj.loginFun(formRef)">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script setup name="login">
import { ref, reactive } from "vue";
import { useRouter } from "vue-router";
// import { ElMessage, ElMessageBox } from 'element-plus'
import { Search } from "@element-plus/icons-vue";

// import {
//   accountLoginApi,
//   sendCodeApi,
//   phoneLoginApi,
//   businessListApi, queryAreaApi
// } from "@/api/login_api.js";
const emit = defineEmits()

const router = useRouter();
const formRef = ref()
// 验证11位手机号
const isCellPhone = (val) => {
  const flag = /^[1][0-9]{10}$/
  return flag.test(val)
}
const validatePhone = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请输入手机号'))
  } else if (!isCellPhone(value)) {
    callback(new Error('请输入正确的手机号!'))
  } else {
    callback()
  }
}


const loginForm = reactive({
  // 账号登录
  accountForm: {},
  // 手机号登录
  phoneForm: {},
  // 倒计时
  countDown: 0,
  timeId: null
});
let activeName = ref("account")
const funObj = reactive({

})

</script>

<style lang="less" scoped>
// .wholeBack{
//   background-image: url('@images/back.png');
//   // height: 100%;
//   // width: 100%;
// }
.login {
  width: 500px;
  height: 300px;
  background: rgb(19, 17, 17);
  padding-top: 10px;
  padding-left: 20px;
  color: white;
  border-radius: 10px;
  ::v-deep {
  .el-form-item {
    margin-bottom: 30px;
  }

  .el-form-item__content {
    justify-content: center;
  }

  .el-tabs__nav-wrap::after {
    height: 0;
  }
}
}

</style>
