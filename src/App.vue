<script setup lang="ts"> /* Descreve o componente de forma mais 
simplificada */

import BarraDeNavegação from "../layouts/navbar.vue";
</script>

<script lang="ts"> /* Descreve de forma mais complexa a lógica
de um componente. */

export default {
  components: {
    BarraDeNavegação
  }
}
</script>

<template>
  <div>
    <BarraDeNavegação />
  </div>
</template>