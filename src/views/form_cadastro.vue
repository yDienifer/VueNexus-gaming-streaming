<template>
  <layoutCadastroConta>
    <form>
      <span>Challenge your limits - Create your account now</span>
      <input id="nomeDoUsuario" name="nomeDoUsuario" type="text" placeholder="Enter your username" required>
      <input id="senhaDoUsuario" name="senhaDoUsuario" type="password" placeholder="Create a secure password" required>
      <input id="emailDoUsuario" name="emailDoUsuario" placeholder="Enter your email here" type="email" required>
      <span>Já é um membro?</span>
    </form>
  </layoutCadastroConta>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "formCadastro",
})

</script>
  
<style scoped>
body {
  background-image: url("/public/static/img/VALORANT_Jett.jpg");
}
</style>