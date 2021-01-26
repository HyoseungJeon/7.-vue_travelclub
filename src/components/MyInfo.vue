<template>
  <div id="myinfo_form">
<div is="sui-divider" horizontal>
      <h3 id="myinfo_header" is="sui-header">
        <sui-icon-group size="large">
    <sui-icon name="circle" size="big" outline />
    <sui-icon name="user" />
  </sui-icon-group>
        회원정보
      </h3>
    </div>

      <table class="ui definition table">
        <tbody>
            <tr v-for="(value, name, index) in userInfo" v-bind:key="index">
                <td class="two wide column">{{name}}</td>
                <!-- <td>{{value}}</td> -->
                <td v-if=!modify>{{value}}</td>
                <td><input type="text" v-if=modify v-model="userInfo[name]"/></td>
            </tr>
        </tbody>
      </table>
    <sui-divider />
    <div class="ui top attached button" @click="onClickModifyHandler">수정하기</div>
  </div>
</template>

<script>
import {getUserEmail} from '../api/UserApi.js'
import {modifyUser} from '../api/UserApi.js'
export default {
    name:'my-info',
    data:function(){
        return{
            userInfo:{},
            status : false
        }
    },
    mounted: async function(){
        const loggedInEmail = this.$session.get('loggedIn');
        console.log(loggedInEmail)
        if(loggedInEmail && loggedInEmail.length > 0){
            let userList = await getUserEmail(loggedInEmail)
            console.log(`userInfo : ${userList[0].email}`)
            this.userInfo=userList[0]
            this.modifyuserInfo = this.userInfo
            // delete this.userInfo.password
            // delete this.userInfo.id
        }
    },
    methods:{
        onClickModifyHandler: async function(){
            if(!this.status){
                this.status = true;
            }
            else{
                await modifyUser(this.userInfo)
                this.$session.set('loggedIn',this.userInfo.email)
                location.reload();
                this.status = false;
            }
        },
    },
    computed:{
        modify: function(){
            return this.status;
        },
        match: function(name){
            switch (name){
                case 'email':
                    return this.userInfo.email
                case 'name':
                    return this.userInfo.name
                case 'nickname':
                    return this.userInfo.nickname
                case 'phonenumber':
                    return this.userInfo.phoneNumber
                case 'birthday':
                    return this.userInfo.birtyDay
            }
            return false;
        }
    }
}
</script>

<style>
    #myinfo_form{
        margin-top: 1%;
        margin-left: 1%;
        margin-right: 1%;
    }
    #myinfo_header{
        margin-top: 20%;
        margin-bottom: 20%;
    }
</style>