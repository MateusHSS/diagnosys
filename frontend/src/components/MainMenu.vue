<template>
    <div class="main">
        <nav class="navbar">
            <ul class="nav-list">
                <h1>Logo</h1>
                <h3>Olá,</h3>
                <h2>Nome Paciente</h2>
            </ul>
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
  justify-content: center;
  height: 100vh; /* Full height of the viewport */
}
</style>