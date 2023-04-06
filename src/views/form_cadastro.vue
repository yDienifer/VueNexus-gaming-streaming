<template>
  <form>
    <h1><span>Challenge your limits</span> - Create your account now</h1>
    <input id="nomeDoUsuario" name="nomeDoUsuario" type="text" placeholder="Enter your username" required>
    <input id="emailDoUsuario" name="emailDoUsuario" placeholder="Enter your email here" type="email" required>
    <input id="senhaDoUsuario" name="senhaDoUsuario" type="password" placeholder="Create a secure password" required>
    <button>Start my journey</button>
    <span id="login">Já é um membro?</span>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "formCadastro",
})

</script>
  
<style scoped>
form {
  display: flex;
  flex-direction: column;
  width: 30%;
  margin-left: 8%;
  background-color: #fff;
  border-radius: 5px;
  padding: 50px 30px;
}

h1, span {
  margin-bottom: 40px;
  font-size: 24px;
  color: black;
}

#login {
  font-size: 14px;
  margin-top: 10px;
  cursor: pointer;
  color: #7a7a7a;
  margin-bottom: 0;
}

span:nth-of-type(1) {
  color: var(--cor-folly);
}

input {
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 3px;
  border: 1px solid #2C3E50;
  color: #2C3E50;
  transition: 0.2s ease-out;
}

input:focus {
  border: 1px solid var(--cor-folly);
}

button {
  padding: 10px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  transition: 0.2s ease-out;
  position: relative;
  background-color: #2C3E50;
}


button:hover {
  background-color: var(--cor-folly);
  width: 100%;
}

</style>