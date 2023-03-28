<script setup lang="ts">
/* Descreve o componente de forma mais 
simplificada */

import BarraDeNavegação from "../layouts/navbar.vue";
import BannerDoSite from "./components/banner_do_site/banner_do_site.vue";
</script>

<script lang="ts">
/* Descreve de forma mais complexa a lógica
de um componente. */

export default {
  components: {
    BarraDeNavegação,
    BannerDoSite,
  },
};
</script>

<template>
  <div>
    <BarraDeNavegação />
    <div class="conteudoDoSite">
      <BannerDoSite />
    </div>
  </div>
</template>

<style scoped>
.conteudoDoSite {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100vw;
}
</style>