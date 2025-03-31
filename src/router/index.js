import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PagPrincipal from '@/components/PagPrincipal.vue'
import PagRedes from '@/components/redes/Redes.vue'
import DashBoard from '@/components/dashboard/Dashboard.vue'
// import DashBoardV2 from '@/components/dashboard/DashboardV2.vue'
//pessoa
//ocultar depois esse
import CadPessoa from '@/components/pessoa/CadPessoa.vue'
//torna o principal esse depois
import CadPessoaV2 from '@/components/pessoa/CadPessoaV2.vue'
import EditarTeste from '@/components/pessoa/EditarTeste.vue'
import EditarPessoa from '@/components/pessoa/EditPessoa.vue'
//login
import Login from '@/components/login/login.vue'

//subrede
// import subrede from '@/components/pessoa/SelectMultNiveis.vue'
// import { component } from 'vue/types/umd'


Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'principal',
    component: PagPrincipal,
    meta:{requiresAuth:true},
    children:[
      {
        path:'/',
        name:'dashboard-inicial',
        component: DashBoard
      },
      {
        path:'dashboard',
        name:'dashboard',
        component: DashBoard
      },
      // {
      //   path:'dashboardv2',
      //   name:'dashboardv2',
      //   component: DashBoardV2
      // },
      {
        path:'redes',
        name:'redes',
        component: PagRedes,
        props:true
      },
      {
        path:'redes/:posicao',
        name:'redespos1',
        component: PagRedes,
        props:true
      },
      {
        path:'redes/:rede_p/:nivel_p',
        name:'redespos2',
        component: PagRedes,
        props:true
      },
      {
        path:'cadastar_v2',
        name:'cadastar_v2',
        component: CadPessoaV2
      },
      {
        path:'cadastar_pessoa',
        name:'cadastar_pessoa',
        component: CadPessoaV2
      },
      {
        path:'editar_pessoa/:id',
        name:'edtpessoa',
        component: EditarPessoa
      },
      {
        path:'pessoa',
        name:'filiado',
        component: CadPessoa
      },
      {
        path:'teste',
        name:'teste',
        component: EditarTeste
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//midleware
router.beforeEach((to,from,next)=>{
  if(to.matched.some(record=>record.meta.requiresAuth)){
      const checkTokenExist = localStorage.getItem('token_auth');

      if(!checkTokenExist || isTokenExpired(checkTokenExist)){
        console.log('[error][middleware]','Token inválido ou expirado');
        localStorage.removeItem('token_auth');
        return next('/login');
      }

      if(checkTokenExist){
        next();
      }else{
        console.log('[error][middleware]','não foi achado!');
        localStorage.removeItem('token_auth');
        return next('/login');
      }

  }
  next();
});


function isTokenExpired(token){
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload.exp * 1000 < Date.now();
  } catch (er) {
    return true
  }
}

export default router
