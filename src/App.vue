<template>
  <div>
    <main-header @onClickMenu="handelClickMenu"/>
    <router-view>

    </router-view>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
export default {
  name: 'App',
  data(){
    return{
      currentPage: 'defalut'
    }
  },
  components: {
    MainHeader,
    // SignIn,
    // DefalutPage,
    // MyInfo,
    // RegisterMember,
  },
  methods:{
    handelClickMenu:function(pageName){
      this.currentPage=pageName
      console.log
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
