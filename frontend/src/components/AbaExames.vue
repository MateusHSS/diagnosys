<script>
import { Calendar } from 'v-calendar';
import EspecialidadesGrid from './EspecialidadadesGrid.vue';
import { ref } from 'vue';

export default {
  components: {
    'v-calendar': Calendar,
    EspecialidadesGrid
  },
  data(){
    return{
      
    }
  },

  setup() {
    const selectedColor = ref('blue');
    const attrs = ref([
      {
        key: 'test',
        highlight: true,
        dates: new Date(),
      }
    ]);
    const etapaAtual = ref(1);
    let especialidadeEscolihda = ref('nada');
    const especialidades = ref([
      { descricao: "Acupuntura" },
      { descricao: "Alergia e imunologia" },
      { descricao: "Anestesiologia" },
      { descricao: "Angiologia" },
      { descricao: "Cardiologia" },
      { descricao: "Cirurgia cardiovascular" },
      { descricao: "Cirurgia da mão" },
      { descricao: "Cirurgia de cabeça e pescoço" },
      { descricao: "Cirurgia do aparelho digestivo" },
      { descricao: "Cirurgia geral" },
      { descricao: "Cirurgia oncológica" },
      { descricao: "Cirurgia pediátrica" },
      { descricao: "Cirurgia plástica" },
      { descricao: "Cirurgia torácica" },
      { descricao: "Cirurgia vascular" },
      { descricao: "Clínica médica" },
      { descricao: "Coloproctologia" },
      { descricao: "Dermatologia" },
      { descricao: "Endocrinologia e metabologia" },
      { descricao: "Endoscopia" },
      { descricao: "Gastroenterologia" },
      { descricao: "Genética médica" },
      { descricao: "Geriatria" },
      { descricao: "Ginecologia e obstetrícia" },
      { descricao: "Hematologia e hemoterapia" },
      { descricao: "Homeopatia" },
      { descricao: "Infectologia" },
      { descricao: "Mastologia" },
      { descricao: "Medicina de emergência" },
      { descricao: "Medicina de família e comunidade" },
      { descricao: "Medicina do trabalho" },
      { descricao: "Medicina de tráfego" },
      { descricao: "Medicina esportiva" },
      { descricao: "Medicina física e reabilitação" },
      { descricao: "Medicina intensiva" },
      { descricao: "Medicina legal e perícia médica" },
      { descricao: "Medicina nuclear" },
      { descricao: "Medicina preventiva e social" },
      { descricao: "Nefrologia" },
      { descricao: "Neurocirurgia" },
      { descricao: "Neurologia" },
      { descricao: "Nutrologia" },
      { descricao: "Oftalmologia" },
      { descricao: "Oncologia clínica" },
      { descricao: "Ortopedia e traumatologia" },
      { descricao: "Otorrinolaringologia" },
      { descricao: "Patologia" },
      { descricao: "Patologia clínica/medicina laboratorial" },
      { descricao: "Pediatria" },
      { descricao: "Pneumologia" },
      { descricao: "Psiquiatria" },
      { descricao: "Radiologia e diagnóstico por imagem" },
      { descricao: "Radioterapia" },
      { descricao: "Reumatologia" },
      { descricao: "Urologia" }
    ]);
    const exames = ref([
      { descricao: "exame1" },
      { descricao: "Alergia" },

    ]);

    const handleEspecialidadeSelecionada = (descricao) => {
      etapaAtual.value++;
      especialidadeEscolihda.value = descricao;
    };

    return {
      etapaAtual,
      selectedColor,
      attrs,
      especialidades,
      exames,
      handleEspecialidadeSelecionada ,
      especialidadeEscolihda
     
    };
  }
}
</script>

<template>
  <div class="container">
    <div class="left-column">
      <div class="calendar">
        <v-calendar :color="selectedColor" :attributes="attrs" is-expanded title-position="left" />
      </div>
      <div class="logs">
        <h1>Próximos exames:</h1>
      </div>
    </div>
    <div class="right-column">
      <div class="menu">
        <div class="mainTitle">
          <img 
          v-if="etapaAtual !== 1" 
          src="../assets/goBackIcon.png"
          class="return">
          <h1>Marcar exame</h1>
      </div>
        <h2 v-if="especialidadeEscolihda === 'nada'">Escolha a especialidade: </h2>
        <h2 v-if="especialidadeEscolihda !== 'nada'"> {{  especialidadeEscolihda }}</h2>
        <EspecialidadesGrid
        v-if="etapaAtual === 1" 
        :especialidades="especialidades"
        @especialidade-selecionada="handleEspecialidadeSelecionada"/>
        </div>
      </div>
    </div>

  </div>
</template>


<style scoped>

::-webkit-scrollbar {
  width: 8px; 
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888; 
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555; 
}


.container {
  display: flex;
  align-items: flex-start;
}

.left-column {
  display: flex;
  flex-direction: column;
}

.right-column {
  margin-left: auto;
}

.calendar {
  margin-top: 36px;
  margin-left: 40px;
  width: 463px;
}

.logs {
  margin-top: 48px;
  margin-left: 40px;
  width: 463px;
  height: 58vh;
  background-color: #FBF9FF;
  border-radius: 10px;
}

.logs h1 {
  padding-top: 32px;
  text-align: center;
  font-size: 44px;
  color: #2E2E2E;
}

.menu {
  margin-top: 36px;
  margin-left: 40px;
  width: 51vw;
  max-height: 93vh;
  overflow: auto;
  background-color: #FBF9FF;
  border-radius: 10px;
}

.menu h1,
.menu h2,
.menu h3 {
  color: #2E2E2E;
}

.menu h1 {
  margin-top: 36px;
  font-size: 64px;
  text-align: center;
}

.menu h2 {
  margin-top: 32px;
  margin-left: 56px;
  font-size: 40px;
}


.mainTitle{
  display: flex;
  align-items: center;
  justify-content: center;
}
.return{
  position: absolute;
  margin-top: 32px;
  margin-left: 32px;
  left: 0;
  cursor: pointer;
}

</style>
