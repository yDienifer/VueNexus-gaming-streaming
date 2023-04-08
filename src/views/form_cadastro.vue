<template>
  <form @submit.prevent="enviarForm">
    <h1><span>Challenge your limits</span> - Create your account now</h1>
    <input id="nomeDoUsuario" name="nomeDoUsuario" type="text" placeholder="Create a creative username here"
      :maxlength="16" required>
    <input id="emailDoUsuario" name="emailDoUsuario" placeholder="Enter your email here" type="email" required>
    <input id="puuidDoUsuario" name="puuidDoUsuario" placeholder="Enter your player PUUID" type="text" :maxlength="32"
      required>
    <input id="senhaDoUsuario" name="senhaDoUsuario" type="password" placeholder="Create a secure password" :maxlength="8"
      required>
    <button>Start my journey</button>
    <span id="login">Já é um membro?</span>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import api from "@/services/api";

export default defineComponent({
  name: "formCadastro",
  setup() {
    const status = ref([]);

    const fetchStatus = () => api.get("/val/status/v1/platform-data", {
      params: {
        api_key: "RGAPI-cd0b8f16-e514-48cc-85a7-dd1753e00f7a",
      },
    }).then((response) => (status.value =
      response.data.results));
    onMounted(fetchStatus);

    const enviarForm = () => {
      const inputDeSenha = document.getElementById("senhaDoUsuario") as HTMLInputElement | null;
      if (inputDeSenha?.value.length !== 8) {
        alert("That password doesn't have 8 characters. Please, fix it.");
        return;
      }
    };

    return {
      status,
      enviarForm
    }
  },
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

h1,
span {
  margin-bottom: 40px;
  font-size: 24px;
  color: #000000;
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
}</style>