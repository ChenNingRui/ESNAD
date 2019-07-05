import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage.vue'
import HomePage from '@/components/HomePage.vue'
import FormalMemberListPage from '@/components/FormalMemberListPage.vue'
import TemporaryMemberListPage from '@/components/TemporaryMemberListPage.vue'
import SignupFormPage from '@/components/SignupFormPage.vue'
import UnapprovedFormalMemberListPage from '@/components/UnapprovedFormalMemberListPage.vue'
import SettingPage from '@/components/SettingPage.vue'
import CashBookPage from '@/components/CashBookPage.vue'
import SignupNewWorkersPage from '@/components/SignupNewWorkersPage.vue'
import WorkersListPage from '@/components/WorkersListPage.vue'
import NewBudgetPage from '@/components/NewBudgetPage.vue'
import UnapprovedBudgetPage from '@/components/UnapprovedBudgetPage.vue'
import ApprovedBudgetPage from '@/components/ApprovedBudgetPage.vue'
import SignupNewEvenPage from '@/components/SignupNewEvenPage.vue'
import EventRegisterPage from '@/components/EventRegisterPage.vue'
import NewEventBudgetPage from '@/components/NewEventBudgetPage.vue'
import UnapprovedEventBudgetPage from '@/components/UnapprovedEventBudgetPage.vue'
import ApprovedEventBudgetPage from '@/components/ApprovedEventBudgetPage.vue'

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
      path: 'TemporaryMemberListPage',
      name: 'TemporaryMemberListPage',
      component: TemporaryMemberListPage
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
      path: 'SignupNewWorkersPage',
      name: 'SignupNewWorkersPage',
      component: SignupNewWorkersPage
    },
    {
      path: 'WorkersListPage',
      name: 'WorkersListPage',
      component: WorkersListPage
    }, {
      path: 'NewBudgetPage',
      name: 'NewBudgetPage',
      component: NewBudgetPage
    }, {
      path: 'UnapprovedBudgetPage',
      name: 'UnapprovedBudgetPage',
      component: UnapprovedBudgetPage
    },
    {
      path: 'ApprovedBudgetPage',
      name: 'ApprovedBudgetPage',
      component: ApprovedBudgetPage
    }, {
      path: 'SignupNewEvenPage',
      name: 'SignupNewEvenPage',
      component: SignupNewEvenPage
    }, {
      path: 'EventRegisterPage',
      name: 'EventRegisterPage',
      component: EventRegisterPage
    }, {
      path: 'NewEventBudgetPage',
      name: 'NewEventBudgetPage',
      component: NewEventBudgetPage
    }, {
      path: 'UnapprovedEventBudgetPage',
      name: 'UnapprovedEventBudgetPage',
      component: UnapprovedEventBudgetPage
    }, {
      path: 'ApprovedEventBudgetPage',
      name: 'ApprovedEventBudgetPage',
      component: ApprovedEventBudgetPage
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
