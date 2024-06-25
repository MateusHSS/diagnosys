<template>
  <div id="app" class="d-flex flex-column justify-content-center">
    <b-sidebar id="sidebar-1" title="Sidebar" visible no-close-on-route-change no-header>
      <b-navbar-brand :to="{path: '/'}">
        <img src="https://picsum.photos/500/500/?image=54" width="100%" class="rounded-circle" alt="Kitten" thumbnail>
      </b-navbar-brand>
      <div class="d-flex justify-content-center mt-3">
        <h5>Olá, {{ nome || "Usuário teste" }}</h5>
      </div>
      <div class="d-flex justify-content-center">
        <a href="#" @click="perfil">
          <span class="text-secondary">Meu perfil <b-icon icon="pencil-square" variant="secondary" /></span>
        </a>
      </div>
      <b-nav vertical class="w-100 mt-5 d-flex justify-content-center">
        <b-nav-item class="text-center" :to="{path: '/exames'}">Exames</b-nav-item>
        <b-nav-item class="text-center" :to="{path: '/consultas'}">Consultas</b-nav-item>
        <b-nav-item class="text-center" :to="{path: '/'}">Médicos</b-nav-item>
        <b-nav-item class="text-center" :to="{path: '/remedios'}">Remédios</b-nav-item>
      </b-nav>
    </b-sidebar>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

<script>
export default {
  data() {
    return {
      nome: 'Renzinho gostoso'
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
