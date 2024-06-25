<template>
  <div id="app" class="d-flex flex-column justify-content-center">
    <b-sidebar id="sidebar-1" title="Sidebar" visible no-close-on-route-change no-header>
      <b-nav vertical class="w-100 mt-5 d-flex justify-content-center">
      <b-navbar-brand :to="{path: '/'}">
        <img src="imgs/logo.png" width="100%" alt="Kitten" thumbnail>
      </b-navbar-brand>
      <b-nav-text class="text-center">
        <h5>Olá, {{ nome || "Usuário teste" }}</h5>
      </div>
      <div class="d-flex justify-content-center">
        <a href="#" @click="perfil">
          <span class="text-secondary">Meu perfil <b-icon icon="pencil-square" variant="secondary" /></span>
        </a>
      </div>
      <b-nav vertical class="w-100 mt-5 d-flex justify-content-center">
        <b-nav-item class="btn btn-light mb-3" :to="{path: '/exames'}">Exames</b-nav-item>
        <b-nav-item class="btn btn-light " :to="{path: '/consultas'}">Consultas</b-nav-item>
      </b-nav>
    </b-sidebar>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.btn-light {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  text-decoration: none;
  background-color: #20B2AA;
  border-color: #F0F8FF;
  border-radius: 100px;
}
</style>

<script>
export default {
  data() {
    return {
      nome: 'Marco Túlio'
    }
  },
  methods: {
    perfil() {
      this.$router.push({
        path: '/perfil'
      })
    }
  }
}
</script>