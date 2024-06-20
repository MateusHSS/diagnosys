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
            <h1>Entrar</h1>
          </b-row>
          <b-row class="justify-content-center mt-3">
            <b-form class="w-75">
              <b-form-row class="mb-3">
                <TextInput id="email" name="email" placeholder="Email" />
              </b-form-row>
              <b-form-row class="mb-3">
                <TextInput id="senha" name="senha" placeholder="Senha" />
              </b-form-row>
              <b-form-row>
                <b-row class="w-100 mb-3">
                  <b-col cols="12">
                    <b-button
                      id="botaoEntrar"
                      class="px-3 w-100"
                      variant="info"
                      @click="entrar"
                    >
                      Entrar
                    </b-button>
                  </b-col>
                </b-row>
                <b-row class="w-100 mb-3">
                  <b-col cols="12">
                    <b-button
                      id="botaoCadastrar"
                      class="px-3 w-100"
                      variant="outline-secondary"
                      @click="cadastrar"
                    >
                      Cadastrar
                    </b-button>
                  </b-col>
                </b-row>
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
      etapa: 1,
      nome: "",
      sobrenome: "",
      cpf: "",
      genero: "",
    };
  },
  methods: {
    cadastrar() {
      this.$router.push({
        path: "/cadastro",
      });
    },
  },
};
</script>

<style scoped>
#botaoConfirmar {
  border-radius: 50px;
}
</style>
