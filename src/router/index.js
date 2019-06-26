import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import HomePage from '@/components/HomePage.vue'
import FormalMemberListPage from '@/components/FormalMemberListPage.vue'
import SignupFormPage from '@/components/SignupFormPage.vue'
import UnapprovedFormalMemberListPage from '@/components/UnapprovedFormalMemberListPage.vue'
import SettingPage from '@/components/SettingPage.vue'
import CashBookPage from '@/components/CashBookPage.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: LoginPage
  }, {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
    children: [{
      path: 'FormalMemberListPage',
      name: 'FormalMemberListPage',
      component: FormalMemberListPage
    }, {
      path: 'UnapprovedFormalMemberListPage',
      name: 'UnapprovedFormalMemberListPage',
      component: UnapprovedFormalMemberListPage
    },
    {
      path: 'SignupFormPage',
      name: 'SignupFormPage',
      component: SignupFormPage
    }, {
      path: 'SettingPage',
      name: 'SettingPage',
      component: SettingPage
    },
    {
      path: 'CashBookPage',
      name: 'CashBookPage',
      component: CashBookPage
    }, {
      path: '*',
      redirect: '/HomePage'
    }
    ]
  }, {
    path: '*',
    redirect: 'Login'
  }]
})
