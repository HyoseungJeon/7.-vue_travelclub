<template>
  <div id="register_form">
    <sui-form>
    <sui-form-field>
      <label>Email</label>
      <input placeholder="Email" v-model="email" />
      <!-- <sui-label basic color="red" pointing>Please enter a name</sui-label> -->
    </sui-form-field>
    <sui-form-field>
      <label>password</label>
      <input placeholder="password" v-model="password"/>
      <sui-label v-if=passwordMatch basic color="red" pointing>Passwords doesn't matched</sui-label>
    </sui-form-field>
    <sui-form-field>
      <label>Password Check</label>
      <input placeholder="password" v-model="password2"/>
      <sui-label v-if=passwordMatch basic color="red" pointing>Passwords doesn't matched</sui-label>
    </sui-form-field>
    <sui-form-field>
      <label>Name</label>
      <input placeholder="Name" v-model="name"/>
      <!-- <sui-label basic color="red" pointing>Please enter a phoneNumber</sui-label> -->
    </sui-form-field>
    <sui-form-field>
      <label>NickName</label>
      <input placeholder="NickName" v-model="nickname"/>
      <!-- <sui-label basic color="red" pointing>Please enter a phoneNumber</sui-label> -->
    </sui-form-field>
    <sui-form-field>
      <label>PhoneNumber</label>
      <input placeholder="PhoneNumber" v-model="phoneNumber"/>
      <!-- <sui-label basic color="red" pointing>Please enter a phoneNumber</sui-label> -->
    </sui-form-field>
    <sui-form-field>
      <label>BirtyDay</label>
      <input placeholder="BirtyDay" v-model="birtyDay"/>
      <!-- <sui-label basic color="red" pointing>Please enter a phoneNumber</sui-label> -->
    </sui-form-field>
    <sui-divider />
    <sui-button primary type="button" @click="onClickRegisterBtn" >Sign Up</sui-button>
    </sui-form>
  </div>
</template>

<script>
import {registerUser} from '../api/UserApi.js'
export default {
    name:'register-member',
    data:function(){
        return {
            email: "",
            name: "",
            nickname: "",
            phoneNumber: "",
            birtyDay: "",
            password: "",
            password2: "",
            passwordCheck: true,
        }
    },
    methods:{
        onClickRegisterBtn : async function(){
            //
            let user = {
                email : this.email,
                name : this.name,
                nickname : this.nickname,
                phoneNumber : this.phoneNumber,
                birtyDay : this.birtyDay,
                password : this.password
            }

            if(await registerUser(user))
                this.$router.push('signin')
        }
    },
    computed:{
        passwordMatch: function(){
            return !(this.password === this.password2);
        }
    },
}
</script>

<style>
    #register_form{
        margin:2%;
    }
</style>