<template>
  <div>
<sui-grid divided="vertically">
    <sui-grid-row :columns="16">
      <sui-grid-column :width="3">
			<h1 is="sui-header" color="green">TravelClub</h1>
      </sui-grid-column>
			<sui-grid-column :width="10">
        <sui-menu secondary>
          <sui-menu-item 
          :active ="isClubMenu" 
          link name="Home"
          @click="handelClickMenu('club')"
          >나의클럽</sui-menu-item>

          <sui-menu-item 
          :active ="IsMembershipMenu" 
          link name="Messages"
          @click="handelClickMenu('membership')"
          >멤버쉽</sui-menu-item>
        </sui-menu>
      </sui-grid-column>
      <sui-grid-column :width="3">
        <sui-menu secondary>
          <sui-menu-item active link name="Home" @click="handelClickMenu('myInfo')">나의 정보</sui-menu-item>
          <sui-menu-item link name="Messages" @click="handelClickMenu('logIn')">로그인</sui-menu-item>
          <sui-menu-item link name="Messages" @click="handelClickMenu('logOut')">로그아웃</sui-menu-item>
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
        currentMenuName : ''
      }
    },
    methods:{
      handelClickMenu :function(menuname){

        this.$emit('onClickMenu',menuname)
        // let menu
        // switch(menuname){
        //   case 'club':
        //     menu = menuname
        //   break;
        //   case 'membership':
        //     menu = menuname
        //   break;
        //   default:
        //     new Error("Invalid Menu Name")
        // }
        this.currentMenuName = menuname
      }
    },
    computed:{
      isClubMenu:function(){
        return this.currentMenuName === 'club'
      },
      IsMembershipMenu:function(){
        return this.currentMenuName === 'membership'
      },
    }
}
</script>

<style>

</style>