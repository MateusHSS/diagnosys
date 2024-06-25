<template>
  <div>
    <b-container>
      <b-card style="height: 70vh">
        <b-row>
          <b-col cols="6">
            <b-row class="justify-content-center mt-3 p-x-3">
              <h1>Diagnosys</h1>
            </b-row>
            <b-row class="mt-3">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque
                repellendus sit, voluptate eius, commodi magnam at ipsa iusto
                nemo non beatae fuga quod nesciunt dolore optio harum, molestias
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
                <div v-if="etapa == 1">
                  <b-form-row class="mb-3">
                    <TextInput
                      placeholder="Nome"
                      id="nome"
                      name="nome"
                      v-model="nome"
                      :passwordInput="false"
                    />
                  </b-form-row>
                  <b-form-row class="mb-3">
                    <TextInput
                      placeholder="Sobrenome"
                      id="sobrenome"
                      name="sobrenome"
                      v-model="sobrenome"
                      :passwordInput="false"
                    />
                  </b-form-row>
                  <b-form-row class="mb-3">
                    <TextInput
                      placeholder="CPF"
                      id="cpf"
                      name="cpf"
                      v-model="cpf"
                      :passwordInput="false"
                    />
                  </b-form-row>
                  <b-form-row>
                    <h4>Gênero</h4>
                  </b-form-row>
                  <b-form-row>
                    <b-form-group>
                      <b-form-radio
                        v-model="genero"
                        name="some-radios"
                        value="1"
                        >Masculino</b-form-radio
                      >
                      <b-form-radio
                        v-model="genero"
                        name="some-radios"
                        value="2"
                        >Feminino</b-form-radio
                      >
                      <b-form-radio
                        v-model="genero"
                        name="some-radios"
                        value="3"
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
                        <b-button
                          id="botaoProsseguir"
                          class="px-3"
                          variant="info"
                          @click="prosseguir"
                          :disabled="!dadosPreenchidos"
                        >
                          Prosseguir
                        </b-button>
                      </b-row>
                    </b-col>
                  </b-form-row>
                </div>
                <div v-if="etapa == 2">
                  <b-form-row class="mb-3">
                    <TextInput id="email" name="email" placeholder="Email" v-model="email":passwordInput="false"/>
                  </b-form-row>
                  <b-form-row class="mb-3">
                    <TextInput id="senha" name="senha" placeholder="Senha" v-model="senha" :passwordInput="true"/>
                  </b-form-row>
                  <b-form-row class="mb-3">
                    <TextInput
                      id="confirmarSenha"
                      name="confirmarSenha"
                      placeholder="Confirmar senha"
                      v-model="confirmarSenha"
                      :passwordInput="true"
                    />
                  </b-form-row>
                  <b-form-row>
                    <b-col cols="6">
                      <b-row class="w-100 d-flex justify-content-center">
                        <b-button
                          id="botaoRetornar"
                          class="px-3"
                          variant="outline-secondary"
                          @click="retornar"
                        >
                          Retornar
                        </b-button>
                      </b-row>
                    </b-col>
                    <b-col cols="6">
                      <b-row class="w-100 d-flex justify-content-center">
                        <b-button
                          id="botaoProsseguir"
                          class="px-3"
                          variant="info"
                          @click="cadastrarUsuario"
                          :disabled="!dadosPreenchidos2"
                        >
                          Cadastrar
                        </b-button>
                      </b-row>
                    </b-col>
                  </b-form-row>
                </div>
              </b-form>
            </b-row>
          </b-col>
        </b-row>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import TextInput from "@/components/formularios/TextInput.vue";
import axios from 'axios';

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
      email: "",
      senha: "",
      confirmarSenha: "",
    };
  },
  computed: {
    dadosPreenchidos() {
      return (
        this.nome !== "" &&
        this.sobrenome !== "" &&
        this.cpf !== "" &&
        this.genero !== ""
      );
    },
    dadosPreenchidos2() {
      return (
        this.email !== "" &&
        this.senha !== "" &&
        this.confirmarSenha !== ""
      );
    },
  },
  methods: {
    prosseguir() {
      if (this.dadosPreenchidos) {
        this.etapa = 2;
      } else {
        alert("Preencha todos os campos obrigatórios.");
      }
    },
    retornar() {
      this.etapa = 1;
    },
    async cadastrarUsuario() {
      try {
        const response = await axios.post('http://localhost:3000/usuario', {
          nome: this.nome,
          sobrenome: this.sobrenome,
          cpf: this.cpf,
          genero: this.genero,
          login: this.email,
          email: this.email,
          senha: this.senha,
          idPessoa: Math.floor(Math.random() * 1000000) + 1
        });

        console.log('Cadastro realizado com sucesso:', response.data);
        this.$router.push({
        path: "/login",
      });
      } catch (error) {
        console.error('Erro ao cadastrar usuário:', error);
      }
      
    },
  },
};
</script>

<style scoped>
#botaoConfirmar {
  border-radius: 50px;
}
</style>
