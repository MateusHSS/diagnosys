<template>
  <div id="app" class="d-flex flex-column justify-content-center">
    <b-sidebar id="sidebar-1" title="Sidebar" v-if="isLoggedIn" visible no-close-on-route-change no-header>
      <b-nav vertical class="w-100 mt-5 d-flex justify-content-center">
        <b-navbar-brand :to="{path: '/'}">
          <img src="imgs/logo.png" width="100%" alt="Kitten" thumbnail>
        </b-navbar-brand>
        <b-nav-item :to="{path: '/perfil'}" class="text-center">
          <span class="text-secondary">Meu perfil <b-icon icon="pencil-square" variant="secondary" /></span>
        </b-nav-item>
        <b-nav-item class="btn btn-light mb-3" :to="{path: '/receita'}">Receitas</b-nav-item>
        <b-nav-item class="btn btn-light " :to="{path: '/consultas'}">Consultas</b-nav-item>
        <!-- <b-nav-item class="btn btn-light" v-if="user.tipo === 'M'" :to="{ path: '/' }">Consultas</b-nav-item> -->
      </b-nav>
      <b-nav-item @click="logout" class="btn btn-light fixed-bottom">Sair</b-nav-item>
    </b-sidebar>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.btn-light {
  display: block;
  margin-right: auto;
  width: 50%;
  text-decoration: none;
  background-color: #20B2AA;
  border-color: #F0F8FF;
  border-radius: 100px;
}
</style>

<script>
import { mapGetters, mapState } from 'vuex';
<<<<<<< HEAD
  data() {
    return {}
  },
    perfil() {
      this.$router.push({
        path: '/perfil'
      })
    },
    logout() {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/login");
      });
    }
  },
  mounted() {
    console.log('Usuario logado')
    console.log(this.user);

    console.log(this.isLoggedIn)
  },  
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["isLoggedIn"])
  }
}
</script>
=======
  name: "App",
};
</script>
