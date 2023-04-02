

<template>
        <main>
            <formCadastro />
        </main>
</template>

<script setup lang="ts">
import formCadastro from "./form_cadastro.vue";
</script>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: "layoutCadastroConta",
    components: {
        formCadastro
    }
})

</script>
  
<style scoped>
main {
   width: 100vw;
   height: 100vw;
   z-index: 8888;
}

</style>