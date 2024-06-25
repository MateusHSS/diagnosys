<template>
  <div>
    <b-container fluid>
      <b-row>
        <b-col sm="3">
          <main-menu @menuEscolhido="opcaoEscolhida"></main-menu>
        </b-col>
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
import MainMenu from '@/components/MainMenu.vue';

export default {
  name: 'HomeView',
  components: {
    Tabela, TextInput, MainMenu
  },
  data() {
    return {
      registros: [],
      colunas: [
        { key: 'nome', label: 'Nome' },
        { key: 'cpf', label: 'CPF' },
        { key: 'RG', label: 'RG' },
        { key: 'telefone', label: 'Telefone' }
      ],
      pesquisaMedico: ''
    };
  },
  methods: {
    opcaoEscolhida(texto){
      console.log('Texto do item clicado:', texto);
    },
    pesquisarMedico(texto) {
      // Aqui você pode manipular a pesquisa com base no texto emitido pelo MainMenu
      // Exemplo: realizar a pesquisa com base no texto
      this.$http.get(`/pessoa?nome=${texto}`).then((res) => {
        this.registros = res.data;
      });
    }
  },
  mounted() {
    this.$http.get("/pessoa").then((res) => {
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
