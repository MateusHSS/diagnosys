import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
    },
    {
      path: '/consultas',
      name: 'consultas',
      component: () => import("@/views/ConsultasView.vue")
    },
    {
      path: '/receita',
      name: 'receita',
      component: () => import("@/views/ReceitaView.vue")
    }
  ],
});

export default router;
