<script setup lang="ts">
import "@fortawesome/fontawesome-free/css/all.css";
</script>

<template>
    <header>
        <div class="caixaDePesquisa">
            <input type="search" v-model="input_name" placeholder="Type here to search" />
            <!-- v-model = cria um vínculo bidirecional de dados, ou seja, qualquer coisa 
                atribuída ao v-model do elemento será aplicada automaticamente no mesmo. -->
            <input type="submit" v-on:click="btnParaEnviarPesquisa" value="🔎" />
            <!-- v-on = adiciona manipuladores de eventos. -->
        </div>
        <div class="btnSejaPremium">
            <span>Be premium</span>
        </div>
        <aside class="sidebar">
            <span id="logoVueNexus">VueNexus</span>
            <div class="contaDoUsuário">
                <img src="" alt="" />
            </div>
            <ul>
                <li>
                    <a href="#"><i class="fas fa-user"></i>Home</a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-user"></i>Artists</a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-user"></i>Album</a>
                </li>
            </ul>
            <section class="playlistsDoUsuario">
                <span>My playlists</span>
                <div class="playlist">
                    <img src="" alt="" />
                    <span></span>
                    <div class="btnCriarPlaylist">
                        <span>Criar playlist</span>
                    </div>
                </div>
            </section>
        </aside>
    </header>
</template>

<script lang="ts">
export default {
    name: "BarraDeNavegação",
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
header {
    display: flex;
    justify-content: flex-end;
    background-color: black;
    height: 100%;
    width: 100vw;
    padding: 30px 0;
}

header .caixaDePesquisa input {
    padding: 10px;
    border: none;
}

header .caixaDePesquisa input:nth-of-type(1) {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}

header .caixaDePesquisa input:nth-of-type(2) {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

.btnSejaPremium span {
    margin: 0 100px;
    border: 1px solid white;
    padding: 13px;
    border-radius: 3px;
}

/* sidebar */
aside {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vw;
    background-color: rgb(8, 8, 8);
    padding: 60px 110px 0 20px;
}

aside #logoVueNexus {
    font-size: 30px;
}

aside ul i {
    margin-right: 10px;
}

aside ul a {
    font-size: 16px;
}

aside .playlistsDoUsuario,
aside .btnCriarPlaylist {
    margin-top: 40px;
}
</style>