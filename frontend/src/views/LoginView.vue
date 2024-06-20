<template>
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