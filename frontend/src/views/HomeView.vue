<template>
  <div>
    <b-sidebar id="sidebar-1" title="Sidebar" visible no-header>
      <div class="d-flex justify-content-center mt-5">
        <h1>Diagnosys</h1>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <b-img
          src="https://picsum.photos/500/500/?image=54"
          class="rounded-circle"
          width="100%"
          fluid
          thumbnail
        ></b-img>
      </div>
      <div class="d-flex justify-content-center mt-3">
        <h2>Olá, {{ nome || "Usuário teste" }}</h2>
      </div>
      <b-nav vertical class="w-100 mt-5 d-flex justify-content-center">
        <b-nav-item class="text-center">Exames</b-nav-item>
        <b-nav-item class="text-center">Consultas</b-nav-item>
        <b-nav-item class="text-center">Médicos</b-nav-item>
        <b-nav-item class="text-center">Remédios</b-nav-item>
      </b-nav>
    </b-sidebar>

    <div class="w-100 d-flex flex-row-reverse">
      <b-card class="w-75 mr-5" style="height: 70vh">
        <b-row v-for="registro in registros" :key="registro.id">
          <p>
            CPF: {{ registro.cpf }}; nome: {{ registro.nome }}; RG:
            {{ registro.rg }}; telefone: {{ registro.telefone }}
          </p>
        </b-row>
        <!-- <b-row class="h-50">
          <b-col>TEste 1</b-col>
          <b-col>Teste 2</b-col>
          <b-col>Teste 3</b-col>
          <b-col>Teste 4</b-col>
        </b-row> -->
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      registros: [],
    };
  },
  methods: {},
  mounted() {
    this.$http.get("/pessoa").then((res) => {
      console.log("res", res);
      this.registros = res.data;
    });
  },
};
</script>

<style scoped>
.nav-item {
  border-bottom: 1px solid black;
}
</style>
