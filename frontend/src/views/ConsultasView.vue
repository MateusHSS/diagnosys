<template>
  <div>
    <div class="w-100 d-flex flex-row-reverse">
      <b-card class="w-75 mr-5" style="height: 70vh">
        <b-container>
          <b-row class="d-flex justify-content-center">
            <h1>Consultas</h1>
          </b-row>
          <b-row>
            <!-- <b-col cols="10">
              <TextInput id="pesquisaMedico" name="pesquisaMedico" placeholder="Pesquisar..."
                v-model="pesquisaMedico" />
            </b-col> -->
            <!-- <b-col cols="2">
              <b-button class="btn" variant='info' @click="pesquisarMedico">PESQUISAR</b-button>
            </b-col> -->
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
export default {
  name: 'ConsultasView',
  components: {Tabela},
  data() {
    return {
      colunas: [
        {key: 'data', label: 'Data', formatter: val => new Date(val).toLocaleDateString('pt-br')},
        {key: "Medico.Pessoa.nome", label: "Médico"},
        {key: 'descricao', label: "Descrição"},
        {key: 'tipo', label: "Tipo"}
      ],
      registros: [],

    }
  },
  methods: {

  },
  mounted() {
    this.$http.get(`/usuario/1/consulta`).then(res => {
      const dados = res.data;

      this.registros = dados;
    })
  }
}
</script>