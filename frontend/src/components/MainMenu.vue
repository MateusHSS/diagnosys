<template>
    <div class="main">
        <nav class="navbar">
            <h1>Logo</h1>
            <div class="profile">
                <img src="../assets/Male User.png">
                <h3>Olá,</h3>
                <h2>Nome Paciente</h2>
                <hr>
            </div>
            <div class="options">
                <button class="selected">Exames</button>
                <button>Consultas</button>
                <button>Médicos</button>
                <button>Remédios</button>
            </div>
        </nav>
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
        }
    }
}
</script>

<style scoped>
.main{
    height: 100vh;
    width: 347px;
    left: 0;
    justify-content: center;
    align-items: center; 
    background-color: #FBF9FF;
    box-shadow: 3px 0px 28px 4px rgba(0, 0, 0, 0.25);
}
h1, h2, h3{
    color: #2E2E2E;
}
h1{
    font-size: 64px;
}

h2{
    font-size: 36px;
    font-weight:600;
}

h3{
    font-size: 36px;
}
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh; /* Full height of the viewport */
}
.profile{
    margin-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center; 
}
.options{
    margin-top: 56px;
    display: flex;
    flex-direction: column;
    align-items: center; 
}

.options button:first-child {
  margin-top: 0; 
}

button{
    margin-top:32px;
    width: 270px;
    border: none;
    background-color: transparent;
    font-size: 44px;
    font-weight: 300;
}

button::before{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px; /* Adjust this value to change the border thickness */
    background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 2.5%, rgba(92, 92, 92, 0.511111) 25.5%, #5C5C5C 47.5%, rgba(92, 92, 92, 0.53) 72.5%, rgba(255, 255, 255, 0) 99%);
}


hr {
    width: 270px;
    height: 4px;
    margin-top: 4px;
    border: none;
    background: linear-gradient(90deg, rgba(255, 255, 255, 0) 2.5%, rgba(92, 92, 92, 0.511111) 25.5%, #5C5C5C 47.5%, rgba(92, 92, 92, 0.53) 72.5%, rgba(255, 255, 255, 0) 99%);
}

.selected::before{
    background-image:  linear-gradient(90deg, rgba(255, 255, 255, 0) 2.5%, #489982 47.5%, rgba(255, 255, 255, 0) 99%);
}
</style>

