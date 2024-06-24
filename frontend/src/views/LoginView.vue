<template>
<<<<<<< HEAD
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
    </b-container>
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
    entrar() {
      this.$router.push({
        path: "/",
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
=======
    <div class="login-container">
        <h2>Login</h2>
        <form @submit.prevent="login">
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" v-model="email" required />
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" v-model="password" required />
            </div>
            <button type="submit">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login() {
            // Add your login logic here
            console.log('Email:', this.email);
            console.log('Password:', this.password);
        }
    }
}
</script>

<style scoped>
.login-container {
    max-width: 300px;
    margin: auto;
    padding: 1em;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.form-group {
    margin-bottom: 1em;
}

label {
    display: block;
    margin-bottom: 0.5em;
}

input {
    width: 100%;
    padding: 0.5em;
    box-sizing: border-box;
}

button {
    width: 100%;
    padding: 0.7em;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: white;
    font-size: 1em;
}
</style>
>>>>>>> 7590ec7f9b6a12d65a5d8f1adb6a55b93fef86e9
