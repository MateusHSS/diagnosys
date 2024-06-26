import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import store from '@/config/store.js';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/login",
      name: "login",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/LoginView.vue"),
    },
    {
      path: "/cadastro",
      name: "cadastro",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/CadastroView.vue"),
    },
    {
      path: "/perfil",
      name: "perfil",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/PerfilView.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/consultas',
      name: 'consultas',
      component: () => import("@/views/ConsultasView.vue"),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/receita',
      name: 'receita',
      component: () => import("@/views/ReceitaView.vue")
    },
    {
      path: '/gerenciarUsuarios',
      name: 'gerenciarUsuarios',
      component: () => import("@/views/GerenciarUsuarios.vue")
    },
    {
      path: '/editarUsuario',
      name: 'editarUsuario',
      component: () => import("@/views/editarUsuario.vue")
    }
  ],
});

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(store.getters.isLoggedIn) {
      next();
      return;
    }
    next('/login')
  } else {
    next();
  }
})

export default router;
