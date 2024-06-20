<template>
  <div>
    <b-card style="height: 70vh">
      <b-row>
        <b-col cols="6">
          <b-row class="justify-content-center mt-3 p-x-3">
            <h1>Diagnosys</h1>
          </b-row>
          <b-row class="mt-3">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
              repellendus sit, voluptate eius, commodi magnam at ipsa iusto nemo
              non beatae fuga quod nesciunt dolore optio harum, molestias
              blanditiis veniam.
            </p>
          </b-row>
          <b-row class="bg-alert">
            <img src="imgs/image_1.png" width="100%" height="100%" alt="" />
          </b-row>
        </b-col>
        <b-col cols="6">
          <b-row class="justify-content-center mt-3 px-3">
            <h1>Cadastro</h1>
          </b-row>
          <b-row class="justify-content-center mt-3">
            <b-form class="w-75">
              <b-form-row class="mb-3">
                <TextInput
                  placeholder="Nome"
                  id="nome"
                  name="nome"
                  v-model="nome"
                />
              </b-form-row>
              <b-form-row class="mb-3">
                <TextInput
                  placeholder="Sobrenome"
                  id="sobrenome"
                  name="sobrenome"
                  v-model="sobrenome"
                />
              </b-form-row>
              <b-form-row class="mb-3">
                <TextInput
                  placeholder="CPF"
                  id="cpf"
                  name="cpf"
                  v-model="cpf"
                />
              </b-form-row>
              <b-form-row>
                <h4>Gênero</h4>
              </b-form-row>
              <b-form-row>
                <b-form-group>
                  <b-form-radio v-model="genero" name="some-radios" value="1"
                    >Masculino</b-form-radio
                  >
                  <b-form-radio v-model="genero" name="some-radios" value="2"
                    >Feminino</b-form-radio
                  >
                  <b-form-radio v-model="genero" name="some-radios" value="3"
                    >Não informar</b-form-radio
                  >
                </b-form-group>
              </b-form-row>
              <b-form-row>
                <b-col cols="6">
                  <b-row class="w-100 d-flex justify-content-center">
                    <b-button
                      id="botaoConfirmar"
                      class="px-3"
                      variant="outline-secondary"
                    >
                      Cancelar
                    </b-button>
                  </b-row>
                </b-col>
                <b-col cols="6">
                  <b-row class="w-100 d-flex justify-content-center">
                    <b-button id="botaoConfirmar" class="px-3" variant="info">
                      Confirmar
                    </b-button>
                  </b-row>
                </b-col>
              </b-form-row>
            </b-form>
          </b-row>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import TextInput from "@/components/formularios/TextInput.vue";

export default {
  components: {
    TextInput,
  },
  data() {
    return {
      nome: "",
      sobrenome: "",
      cpf: "",
    };
  },
};
</script>

<style scoped>
#botaoConfirmar {
  border-radius: 50px;
}
</style>
