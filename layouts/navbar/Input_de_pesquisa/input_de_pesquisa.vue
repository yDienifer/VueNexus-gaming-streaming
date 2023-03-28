<template>
    <div class="caixaDePesquisa">
        <input type="search" v-model="input_name" placeholder="Type here to search..." />
        <!-- v-model = cria um vínculo bidirecional de dados, ou seja, qualquer coisa 
                                                                                    atribuída ao v-model do elemento será aplicada automaticamente no mesmo. -->
        <input type="submit" v-on:click="btnParaEnviarPesquisa" value="🔎" />
        <!-- v-on = adiciona manipuladores de eventos. -->
    </div>
</template>

<script lang="ts">
export default {
    name: "InputDePesquisa",
    data() {
        return {
            // Define dados dos componentes
            input_name: "",
        };
    },
    methods: {
        // Responsável por funções da aplicação
        btnParaEnviarPesquisa(e) {
            e.preventDefault();
            console.log(this.input_name); /* This = Serve para referir 
            às propriedades e métodos do objeto em que ele é chamado. */

            this.name = this.input_name;
        },
    },
};
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
</style>