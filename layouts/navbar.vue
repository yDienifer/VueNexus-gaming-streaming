<script setup lang="ts">
</script>

<template>
    <header>
        <span>VueNexus</span>
        <nav>
            <input type="search" v-model="input_name" placeholder="Buscar..."> 
            <!-- v-model = cria um vínculo bidirecional de dados, ou seja, qualquer coisa 
            atribuída ao v-model do elemento será aplicada automaticamente no mesmo. -->

            <input type="submit" v-on:click="btnParaEnviarPesquisa" value="🔎">
            <!-- v-on = adiciona manipuladores de eventos. -->

            <ul>
                <li><a href="#">{{ input_name }}</a></li>
            </ul>
        </nav>
    </header>
</template>

<script lang="ts">
export default {
    name: 'BarraDeNavegação',
    data() {
        return { // Define dados dos componentes
            input_name: ""
        }
    },
    methods: { // Responsável por funções da aplicação
        btnParaEnviarPesquisa(e) {
            e.preventDefault();
            console.log(this.input_name); /* This = Serve para referir 
            às propriedades e métodos do objeto em que ele é chamado. */

            this.name = this.input_name;
        }
    }
}
</script>