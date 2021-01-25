<template>

<div id="login_form">
  <sui-form>
    <sui-form-field>
      <label>Email</label>
      <input placeholder="Email" v-model="email" />
      <!-- <sui-label basic color="red" pointing>Please enter a name</sui-label> -->
    </sui-form-field>
    <sui-form-field>
      <label>password</label>
      <input placeholder="password" v-model="password"/>
      <!-- <sui-label basic color="red" pointing>Please enter a phoneNumber</sui-label> -->
    </sui-form-field>
    <sui-form-field>
      <sui-checkbox label="remeber Email?" />
    </sui-form-field>
    <sui-button primary type="button" @click="onClickSignInBtn">Sign In</sui-button>
    
  </sui-form>
</div>
</template>

<script>
import {findUser} from '../api/UserApi.js'
export default {
    name:"sign-in",
    data(){
        return{
            email:'',
            password:'',
        }
    },
    methods:{
        onClickSignInBtn : async function(){
            //
            let userList = [];
            const email = this.email
            const password = this.password
            userList = await findUser(email,password)
            const length = userList.length
            if(length > 0){
                this.$session.set('loggedIn',email)
            }
        }
    }
}
// this.$session.set(key,value), sets a single value to the Session.
// this.$session.get(key), returns the value attributed to the given key.
</script>

<style>
    #login_form{
        margin-top: 5%;
        margin-left: 30%;
        margin-right: 30%;
    }
</style>