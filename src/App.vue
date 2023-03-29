<script setup lang="ts">
/* Descreve o componente de forma mais 
simplificada */

import BarraDeNavegação from "../layouts/navbar/navbar.vue";
import BannerDoSite from "./components/banner_do_site/banner_do_site.vue";
import MenuLateral from "../layouts/menu_lateral/menu_lateral.vue";
</script>

<script lang="ts">
/* Descreve de forma mais complexa a lógica
de um componente. */

export default {
  components: {
    BarraDeNavegação,
    BannerDoSite,
    MenuLateral,
  },
};
</script>

<template>
  <div>
    <BarraDeNavegação />
    <MenuLateral />
    <div class="conteudo-do-site">
      <BannerDoSite />
    </div>
  </div>
</template>

<style scoped>
.conteudo-do-site {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100vw;
  overflow-y: scroll;
}

.conteudo-do-site::-webkit-scrollbar {
    width: 0px;
}

</style>