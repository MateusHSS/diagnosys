<template>
    <div>
        <h2>Escolha no calendário ao lado a data.</h2>
        <h1> {{  data }}</h1>
    </div>
  </template>


<script>
export default {
  props: {
    data: {
        type: Date,
    }
  },
  methods: {
}
}
</script>

<style scoped>
    h2{
        font-weight: 200;
        color: #2E2E2E;
        font-size: 32px;
        margin-left: 56px;
        margin-top: 32px;
    }
</style>