import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DialogGrid from  '../components/Buttons/DialogGridOption.vue'
import DialogSelect from '../components/Buttons/DialogSelect.vue'
import DialogShortAnswer from '../components/Buttons/DialogShortAnswer.vue'
import OptionPalettes from '../components/Buttons/OptionPalettes.vue'
import  DialogDate from '../components/Buttons/DialogDate.vue'
import  DialogUpload from '../components/Buttons/DialogUploadFile.vue' 
import Principal from  '../components/Principal/Principal.vue'
import CardShortAnswer from  '../components/Principal/CardShortAnswer.vue'
import SignIn from '../views/Auth/SignIn.vue'
import SignUp from '../views/Auth/SignUp.vue'
import SignUpUsach from '../views/Auth/SignUpUsach.vue'
import Account from '../views/Accounts/Account.vue'
import AccountUsach from '../views/Accounts/AccountUsach.vue'
import AccountInt from '../views/Accounts/AccountInt.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/ShortAnswer',
    name: 'ShortAnswer',
    component: DialogShortAnswer
  },
  {
    path:'/Select',
    name: 'Select',
    component: DialogSelect
  },
  {
    path:'/Grid',
    name: 'Grid',
    component: DialogGrid
  },
  {
    path:'/UploadFile',
    name: 'UploadFile',
    component: DialogUpload
  },
  {
    path:'/Date',
    name: 'Date',
    component: DialogDate 
  },
  {
    path:'/OptionPalettes',
    name: 'OptionPalettes',
    component: OptionPalettes
  },
  {
    path: '/SignIn',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/SignUp',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/SignUpUsach',
    name: 'SignUpUsach',
    component: SignUpUsach
  },
  {
    path: '/AccountAdmin',
    name: 'AccountAdmin',
    component: Account
  },
  {
    path: '/AccountUSACH',
    name: 'AccountUSACH',
    component: AccountUsach
  },
  {
    path: '/AccountINT',
    name: 'AccountINT',
    component: AccountInt
  },
  {
    path:'/Principal',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
