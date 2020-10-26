import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue';
import UserBaseComponent from '../components/user/User.vue';
// import UserComponent from '../components/user/UserStart.vue';
// import UserEditComponent from '../components/user/UserEdit.vue';
// import UserDetail from '../components/user/UserDetail.vue';
import ErrorPage from '../views/404.vue';
import Header from '../components/Header.vue';
import NProgress from 'vue-nprogress';
import Next from '../components/demo-header.vue';
import UserHeader from '../components/user/userheader.vue';


const UserComponent = resolve => {
  require.ensure(['../components/user/UserStart.vue'],() => {
    resolve(require('../components/user/UserStart.vue'))
  },'userComponent' );
}

// const UserHeader = resolve => {
//   require.ensure(['../components/user/userHeader.vue'],() => {
//     resolve(require('../components/user/userHeader.vue'))
//   })
// }

const UserEditComponent = resolve => {
  require.ensure(['../components/user/UserEdit.vue'],() => {
    resolve(require('../components/user/UserEdit.vue'))
  },'UserEdit' )
}

const UserDetail = resolve => {
  require.ensure(['../components/user/UserDetail.vue'],() => {
    resolve(require('../components/user/UserDetail.vue'))
  })
}

const VuexTest = resolve => {
  require.ensure(['@/views/vuex.vue'],() => {
    resolve(require('@/views/vuex.vue'))
  })

}
Vue.use(NProgress);

Vue.use(VueRouter);
const routes = [
                  {
                    path : "/vuex",
                    component : VuexTest
                  },
                  {
                    path: '/',
                    name: 'Home',
                    // component: Home,
                    components : {
                      default:Home,
                      'nav-top':Next
                    }
                  },
                  {
                    path: '/about',
                    name: 'About',
                    // route level code-splitting
                    // this generates a separate chunk (about.[hash].js) for this route
                    // which is lazy-loaded when the route is visited.
                    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
                  },
                  {
                    path : "/an",
                    component : () => import('../views/Animation.vue')
                  },
                  {
                    path: '/dashboard',
                    name: 'dashboard',
                    component: Dashboard,
                    name: 'dashboard'
                  },
                  {
                    path: '/user',
                    name: 'user',
                    components : {
                      default  : UserComponent,
                      'top' : Next
                    },
                    children: [
                      // {
                      //   path: '',
                      //   component: UserComponent
                      // },
                      {
                        path: ':id/edit',
                        components: {
                          deafult: UserEditComponent,
                          'top-header' : UserHeader
                        },
                        name: 'user-edit'
                      },
                      {
                        path: ':id',
                        component: UserDetail,
                        name: 'user-detail'
                      }
                    ]
                  },
                  {
                    path: '*',
                    component: ErrorPage
                  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    if(to.hash) {
      return {selector : to.hash}
    }
  }
});
 
const nprogress = new NProgress();

router.beforeEach((to,from,next) => {
  nprogress.start();
  next();
});

router.afterEach((to,from) => {
  nprogress.done();

})



// router.beforeEach((to,from,next) => {
//   console.log({from,to});
//   if(to.path == '/user'){
//     next(false);
//   }
//   else{
//     next();

//   }
// })

// router.afterEach((to,from,next) => {
//   console.log('after ');
//   console.log({from,to});

//   if(to.path === '/user') {
//      next(false);
//   }
//   else{
//      next();
//   }

// })



export default router
