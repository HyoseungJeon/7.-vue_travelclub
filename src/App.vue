<template>
  <div>
    <main-header @onClickMenu="handelClickMenu"/>
    <defalut-page v-if="currentPage==='defalut'"/>
    <sign-in v-else-if="currentPage==='logIn'"/>
    <defalut-page v-else/>
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue'
import DefalutPage from './components/page/DefalutPage.vue'
import SignIn from './components/SignIn.vue'
export default {
  name: 'App',
  data(){
    return{
      currentPage: 'defalut'
    }
  },
  components: {
    SignIn,
    DefalutPage,
    MainHeader
  },
  methods:{
    handelClickMenu:function(pageName){
      this.currentPage=pageName
      console.log(pageName)
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
