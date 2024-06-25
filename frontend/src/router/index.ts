import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "@/views/LoginView.vue"; 
import CadastroView from "@/views/CadastroView.vue"; 
import PerfilView from "@/views/PerfilView.vue";
import Cookies from "js-cookie";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/cadastro",
      name: "cadastro",
      component: CadastroView,
    },
    {
      path: "/perfil",
      name: "perfil",
      component: PerfilView,
    },
  ],
});

// Guardião global de rota para verificar a sessão
router.beforeEach((to, from, next) => {
  const session = Cookies.get('session');
  const publicPages = ['login', 'cadastro'];
  const authRequired = !publicPages.includes(to.name);

  if (authRequired && !session) {
    // Redireciona para a página de login se o usuário não estiver autenticado
    next({ name: 'login' });
  } else if (session && to.name === 'login') {
    // Redireciona para a página inicial se o usuário já estiver autenticado e tentar acessar o login
    next({ name: 'home' });
  } else {
    next();
  }
});

export default router;
