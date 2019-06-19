import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import HomePage from '@/components/HomePage.vue'
import FormalMemberListPage from '@/components/FormalMemberListPage.vue'
import SignupFromPage from '@/components/SignupFromPage.vue'
import UnapprovedFormalMemberListPage from '@/components/UnapprovedFormalMemberListPage.vue'

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
      path: 'SignupFromPage',
      name: 'SignupFromPage',
      component: SignupFromPage
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
