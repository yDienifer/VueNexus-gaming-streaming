<template>
    <div class="searchBox">
        <input type="search" v-model="input_search" placeholder="Type here to search..." />
        <!-- v-model = cria um vínculo bidirecional de dados, ou seja, qualquer coisa 
        atribuída ao v-model do elemento será aplicada automaticamente no mesmo. -->

        <span v-on:click="submitSearch"><i class="fa-solid fa-magnifying-glass"></i></span>
        <!-- v-on = adiciona manipuladores de eventos. -->
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "SearchBar",
    data() {
        return {
            input_search: "",
            btn_search: "",
        };
    },
    methods: {
        submitSearch(e: Event) {
            e.preventDefault();
            this.btn_search = this.input_search;
        },
    },
});
</script>

<style scoped>
.searchBox {
    border-bottom: 1px solid white;
    padding: 6px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    background-color: transparent;
    color: var(--cor-rich-black);
    background-color: transparent;
}

input {
    margin-right: clamp(10px, 2.5vw, 70px);
    border: none;
    background-color: transparent;
}

@media (max-width: 768px) {
    .searchBox {
        border-bottom: none;
        padding: 0;
    }

    .searchBox input {
        display: none;
    }

    .searchBox:hover {
        border-bottom: 1px solid white;
    }
}
</style>
