<template>
  <div id="header_form">
<sui-grid divided="vertically">
    <sui-grid-row :columns="16">
      <sui-grid-column :width="3">
			<h1 is="sui-header" color="green">TravelClub</h1>
      </sui-grid-column>
			<sui-grid-column :width="8">
        <sui-menu secondary>
          <sui-menu-item 
          :active ="isClubMenu" 
          link name="Home"
          @click="handelClickMenu('club')"
          >나의클럽</sui-menu-item>

          <sui-menu-item 
          :active ="isMembershipMenu" 
          link name="Messages"
          @click="handelClickMenu('membership')"
          >멤버쉽</sui-menu-item>
        </sui-menu>
      </sui-grid-column>
      <sui-grid-column :width="4">
        <sui-menu secondary>
          <sui-menu-item :active="isMyInfo" link name="Home" 
          @click="handelClickMenu('myInfo')"
          v-if="isLoggedIn"
          >나의 정보</sui-menu-item>
          <sui-menu-item :active="isLogIn" link name="Messages" 
          @click="handelClickMenu('logIn')"
          v-if="!isLoggedIn"
          >로그인</sui-menu-item>
          <sui-menu-item link name="Messages" 
          v-if="isLoggedIn"
          >{{memberEmail}}</sui-menu-item>
          <sui-menu-item :active="isLogOut" link name="Messages"
          @click="handelClickMenu('logOut')"
          v-if="isLoggedIn"
          >로그아웃</sui-menu-item>
        </sui-menu>
      </sui-grid-column>
    </sui-grid-row>
  </sui-grid>
  <sui-divider />
  </div>
</template>

<script>
export default {
    name:"MainHeader",
    data : function(){
      return {
        currentMenuName : 'club',
        isLoggedIn: false,
        memberEmail: '',
      }
    },
    mounted:function(){
      const loggedInEmail = this.$session.get('loggedIn');
      this.isLoggedIn = loggedInEmail && loggedInEmail.length > 0 ? true : false;
      this.memberEmail = loggedInEmail && loggedInEmail.length > 0 ? loggedInEmail : '';
    },
    methods:{
      handelClickMenu :function(menuname){
        // this.$emit('onClickMenu',menuname)
        switch(menuname){
          case 'club':
            // menu = menuname
            this.$router.push('clublist')
            break;
          case 'membership':
            this.$router.push('membership')
            break;
          case 'logIn':
            this.$router.push('signin')
            break;
          case 'myInfo':
            this.$router.push('myinfo')
            break;
          case 'logOut':
            this.logOut();
            break;
          case 'defalut':
            this.$router.push('defalut')
            break;
          default:
            new Error("Invalid Menu Name")
        }
        this.currentMenuName = menuname
      },
      logOut :function(){
            //
            this.$router.push('signin')
            console.log("work logOut")
            this.$session.destroy();
            window.location.reload();
      }
    },
    computed:{
      isClubMenu:function(){
        return this.currentMenuName === 'club'
      },
      isMembershipMenu:function(){
        return this.currentMenuName === 'membership'
      },
      isMyInfo:function(){
        return this.currentMenuName === 'myInfo'
      },
      isLogIn:function(){
        return this.currentMenuName === 'logIn'
      },
      isLogOut:function(){
        return this.currentMenuName === 'logOut'
      },
      isRegister:function(){
        return this.currentMenuName ==='register'
      },
    }
}
</script>

<style>
  #header_form{
        margin-top: 1%;
        margin-left: 1%;
        margin-right: 1%;
  }
</style>