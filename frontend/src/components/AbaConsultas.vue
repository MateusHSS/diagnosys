<script>
import { Calendar } from 'v-calendar';
import { ref } from 'vue';

export default {
  components: {
    'v-calendar': Calendar,
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

    return {
      selectedColor,
      attrs
    };
  }
}
</script>


<template>
  <div class="container">
    <div class="left-column">
      <div class="calendar">
        <v-calendar  
        :color="selectedColor"
        :attributes="attrs" 
        is-expanded
        title-position="left" />
      </div>
      <div class="logs">
        <h1>Próximas consultas:</h1>
      </div>
    </div>
    <div class="right-column">
      <div class="menu">
        <h1>Marcar consulta</h1>
        <h2>Escolha a especialidade: </h2>
      </div>
    </div>



  </div>
</template>


<style scoped>
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

.menu{
  margin-top: 36px;
  margin-left: 40px;
  width: 51vw;
  height: 93vh;
  background-color: #FBF9FF;
  border-radius: 10px;
}

.menu h1, .menu h2{
  color: #2E2E2E;
}

.menu h1{
  margin-top: 36px;
  font-size: 64px;
  text-align: center;
}

.menu h2{
  margin-top: 32px;
  margin-left: 56px;
  font-size: 40px;
}

</style>
