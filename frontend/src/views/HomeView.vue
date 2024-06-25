<template>
  <div>
    <div class="w-100 d-flex flex-row-reverse">
      <b-card class="w-75 mr-5" style="height: 70vh">
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
    </div>
  </div>
</template>

<script>
import Tabela from '@/components/tabela/Tabela.vue';
import TextInput from '@/components/formularios/TextInput.vue';
import {BIconPencilSquare} from "bootstrap-vue";

export default {
  name: 'HomeView',
  components: {
    Tabela, TextInput, BIconPencilSquare
  },
  data() {
    return {
      registros: [],
      nome: "",
      colunas: [
        { key: 'Pessoa.nome', label: 'Nome' },
        { key: 'crm', label: 'CRM' },
        { key: 'Pessoa.email', label: 'Email'},
        { key: 'Pessoa.telefone', label: 'Telefone'},
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
};
</script>

<style scoped>
.nav-item {
  border-bottom: 1px solid black;
}
</style>
