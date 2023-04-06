<script setup lang="ts">
import formCadastro from "./form_cadastro.vue";
</script>

<template>
    <div class="formularioDeCadastro">
        <formCadastro />
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "LayoutFormulario",
    components: {
        formCadastro
    },
});
</script>
  
<style>
@media (min-width: 1024px) {
    .formularioDeCadastro {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-image: url(/public/static/img/background/gekko_dark_1.png);
        background-size: 180%;
        z-index: 2;
        display: flex;
        align-items: center;
    }
}
</style>
  