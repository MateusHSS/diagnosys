<template>
  <div>
    <b-container fluid>
      <b-row>
        <!-- Coluna para o MainMenu -->
        <b-col sm="3">
          <main-menu></main-menu>
        </b-col>
        
        <!-- Coluna para o conteúdo principal, centralizado -->
        <b-col sm="8" class="d-flex justify-content-center align-items-center">
          <b-card class="w-100" style="height: 80vh; width: 90vw;">
            <b-container>
              <b-row class="d-flex justify-content-center">
                <h1>Médicos disponíveis</h1>
              </b-row>
              <b-row>
                <b-col cols="10">
                  <TextInput id="pesquisaMedico" name="pesquisaMedico" placeholder="Pesquisar..."
                             v-model="pesquisaMedico" />
                </b-col>
                <b-col cols="2">
                  <b-button class="btn" variant='info' @click="pesquisarMedico">PESQUISAR</b-button>
                </b-col>
              </b-row>
              <b-row class="h-100 mh-100">
                <Tabela :colunas="colunas" :dados="registros" ordenacaoCampo="id" :totalRegistros="registros.length" />
              </b-row>
            </b-container>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>



<script>
import Tabela from '@/components/tabela/Tabela.vue';
import TextInput from '@/components/formularios/TextInput.vue';
import {BIconPencilSquare} from "bootstrap-vue";
import MainMenu from '@/components/MainMenu.vue'

export default {
  name: 'HomeView',
  components: {
    Tabela, TextInput, BIconPencilSquare, MainMenu
  },
  data() {
    return {
      registros: [],
      nome: "",
      colunas: [
        { key: 'nome', label: 'Nome' },
        { key: 'cpf', label: 'CPF' },
        { key: 'RG', label: 'RG' },
        {key: 'telefone', label: 'Telefone'}
      ],
      pesquisaMedico: ''
    };
  },
  methods: {
    pesquisarMedico() {
      this.$http.get(`/pessoa?nome=${this.pesquisaMedico}`).then((res) => {
        console.log('res filtro', res.data);
        this.registros = res.data;
      });
    },
  },
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
