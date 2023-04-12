<template>
    <div class="caixaDePesquisa">
        <input type="search" v-model="input_search" placeholder="Type here to search..." />
        <!-- v-model = cria um vínculo bidirecional de dados, ou seja, qualquer coisa 
                                                                                    atribuída ao v-model do elemento será aplicada automaticamente no mesmo. -->
        <input type="submit" v-on:click="btnParaEnviarPesquisa" value="🔎" />
        <!-- v-on = adiciona manipuladores de eventos. -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "InputDePesquisa",
    data() {
        return {
            input_search: "",
            btn_pesquisar: ""
        };
    },
    methods: {
        btnParaEnviarPesquisa(e: Event) {
            e.preventDefault();
            this.btn_pesquisar = this.input_search;
        }
    }
}); 
</script>

<style scoped>
.caixaDePesquisa input {
    padding: 10px 8px;
    border: none;
    border-bottom: 1px solid white;
    color: var(--cor-preta);
    background-color: transparent;
}

.caixaDePesquisa input:nth-of-type(1) {
    border-top-left-radius: 3px;
    width: 18vw;
    border-bottom-left-radius: 3px;
}

.caixaDePesquisa input:nth-of-type(2) {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    background-color: transparent;
}

@media (max-width: 768px) {
    .caixaDePesquisa input:nth-of-type(1) {
        width: 28vw;
    }

}
</style>