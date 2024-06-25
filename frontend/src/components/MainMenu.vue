<template>
  <div id="app" class="d-flex flex-column justify-content-center">
    <b-sidebar id="sidebar-1" title="Sidebar" visible no-close-on-route-change no-header>
      <div class="d-flex justify-content-center mt-5">
        <h1>Diagnosys</h1>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <b-img src="https://picsum.photos/500/500/?image=54" class="rounded-circle" width="100%" fluid thumbnail></b-img>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <h5>Olá, {{ nome || "Usuário teste" }}</h5>
      </div>
      <div class="d-flex justify-content-center">
        <a href="#" @click="perfil">
          <span class="text-secondary">Meu perfil <b-icon icon="pencil-square" variant="secondary" /></span>
        </a>
      </div>
      <b-nav vertical class="w-100 mt-5 d-flex justify-content-center">
        <b-nav-item class="text-center">Exames</b-nav-item>
        <b-nav-item class="text-center">Consultas</b-nav-item>
        <b-nav-item class="text-center">Médicos</b-nav-item>
        <b-nav-item class="text-center">Remédios</b-nav-item>
      </b-nav>
    </b-sidebar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nome: ''
    };
  },
  created() {
    const cookieNome = this.getCookie('nome');
    if (cookieNome) {
      this.nome = cookieNome;
    }
  },
  methods: {
    perfil() {
      this.$router.push({
        path: '/perfil'
      });
    },
    getCookie(name) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    }
  }
};
</script>

<style scoped>
</style>
