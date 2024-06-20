<script setup lang="ts">
import { ref } from 'vue';

import MainMenu from "./components/MainMenu.vue";
import AbaExames from "./components/AbaExames.vue";
import AbaConsultas from "./components/AbaConsultas.vue";
import AbaMedicos from "./components/AbaMedicos.vue";
import AbaRemedios from "./components/AbaRemedios.vue";


const activeTab = ref('exames');

const handleSelectTab = (tab) => {
  activeTab.value = tab;
};

</script>

<template>
  <div id="app">
    <MainMenu @selectTab="handleSelectTab" />
    <AbaExames v-if="activeTab === 'exames'" />
    <AbaConsultas v-if="activeTab === 'consultas'" />
    <AbaMedicos v-if="activeTab === 'medicos'" />
    <AbaRemedios v-if="activeTab === 'remedios'" />
  </div>
</template>



<style scoped>
#app {
  display: flex;
}
</style>
