<template>
  <div class="d-flex align-items-center justify-content-center" style="min-height: 100vh;">
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
                    <TextInput placeholder="Nome" id="nome" name="nome" v-model="nome" />
                  </b-form-row>
                  <b-form-row class="mb-3">
                    <TextInput placeholder="RG" id="rg" name="rg" v-model="rg" />
                  </b-form-row>
                  <b-form-row class="mb-3">
                    <TextInput placeholder="CPF" id="cpf" name="cpf" v-model="cpf" />
                  </b-form-row>
                  <b-form-row class="mb-3">
                    <TextInput id="email" name="email" placeholder="Email" v-model="email" />
                  </b-form-row>
                  <b-form-row>
                    <h4>Gênero</h4>
                  </b-form-row>
                  <b-form-row>
                    <b-col cols="6">
                      <b-row class="w-100 d-flex justify-content-center">
                        <b-button id="botaoConfirmar" class="px-3" variant="outline-secondary">
                          Cancelar
                        </b-button>
                      </b-row>
                    </b-col>
                    <b-col cols="6">
                      <b-row class="w-100 d-flex justify-content-center">
                        <b-button id="botaoProsseguir" class="px-3" variant="info" @click="prosseguir">
                          Prosseguir
                        </b-button>
                      </b-row>
                    </b-col>
                  </b-form-row>
                </div>
                <div v-if="etapa == 2">
                  <b-form-row class="mb-3">
                    <TextInput id="login" name="login" placeholder="Login" v-model="login" />
                  </b-form-row>
                  <b-form-row class="mb-3">
                    <TextInput id="senha" name="senha" placeholder="Senha" v-model="senha" />
                  </b-form-row>
                  <b-form-row class="mb-3">
                    <TextInput id="confirmarSenha" name="confirmarSenha" placeholder="Confirmar senha" v-model="confirmaSenha" />
                  </b-form-row>
                  <b-form-row>
                    <b-col cols="6">
                      <b-row class="w-100 d-flex justify-content-center">
                        <b-button id="botaoRetornar" class="px-3" variant="outline-secondary" @click="retornar">
                          Retornar
                        </b-button>
                      </b-row>
                    </b-col>
                    <b-col cols="6">
                      <b-row class="w-100 d-flex justify-content-center">
                        <b-button id="botaoProsseguir" class="px-3" variant="info" @click="cadastrar">
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
      rg: "",
      cpf: "",
      genero: "",
      telefone: "",
      email: "",
      login: "",
      senha: "",
      confirmaSenha: ""
    };
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
    cadastrar() {
      this.$store
        .dispatch("register", { nome: this.nome, cpf: this.cpf, email: this.email, senha: this.senha, rg: this.rg, telefone: this.telefone, login: this.login })
        .then(() => {
          this.$router.push("/")
        })
        .catch(err => console.log(err));
        
      // this.$http.post('/register', {nome: this.nome, cpf: this.cpf, email: this.email, senha: this.senha, rg: this.rg, telefone: this.telefone, login: this.login}).then(res => {
      //   console.log('res', res);
      // })
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
