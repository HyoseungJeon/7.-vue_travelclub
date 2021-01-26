
import DefalutPage from '../components/page/DefalutPage.vue'
import MyInfo from '../components/MyInfo.vue'
import SignIn from '../components/SignIn.vue'
import Register from '../components/RegisterMember.vue'
import ClubListPage from '../components/page/ClubListPage.vue'
import VueRouter from 'vue-router'

const routes = [
    { path: '/defalut', component: DefalutPage },
    { path: '/myinfo', component: MyInfo },
    { path: '/signin', component: SignIn },
    { path: '/register', component: Register },
    { path: '/clublist', component: ClubListPage },
];

export default new VueRouter({
    routes:routes // `routes: routes`의 줄임
 })