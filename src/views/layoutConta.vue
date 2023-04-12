<template>
    <div class="container">
        <div class="formularioDeCadastroContainer">
            <RouterLink to="/home"><i class="fa-sharp fa-solid fa-xmark"></i></RouterLink>
            <RouterView />
            <form @submit.prevent="enviarForm">
                <h1>Create your account now and <span>win exclusive Valorant rewards</span> through our
                    <span>giveaways and
                        competitions!</span>
                </h1>
                <input id="nomeDoUsuario" name="nomeDoUsuario" type="text" placeholder="Create a unique username"
                    :maxlength="16" required>
                <input id="emailDoUsuario" name="emailDoUsuario" placeholder="Enter your email here" type="email" required>
                <input ref="PUUID" id="puuidDoUsuario" name="puuidDoUsuario" placeholder="What's your Valorant PUUID?"
                    type="text" :maxlength="32">
                <input id="senhaDoUsuario" name="senhaDoUsuario" type="password" placeholder="Create a secure password"
                    :maxlength="8" required>
                <botaoDeRedimensionamento id="btn" titulo-introdutorio-do-btn="Start my journey" />
                <span id="login">Are you already a member?</span>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import api from "@/services/api";

import dotenv from 'dotenv';
dotenv.config();

import * as path from 'path';

import process from 'process';

import botaoDeRedimensionamento from "../components/botao/botao.vue";

import { RouterLink, RouterView } from 'vue-router';

export default defineComponent({
    name: "LayoutFormulario",
    components: {
        botaoDeRedimensionamento
    },
    setup() {
        const PUUID = ref([]);
         const apiKey = process.env.VUE_APP_RIOT_API_KEY;

        const FETCH_PUUID = () => api.get("/riot/account/v1/accounts/by-puuid/{puuid}", {
            params: {
                api_key: apiKey
            },
        }).then((response) => (PUUID.value =
            response.data.results));
        onMounted(FETCH_PUUID);

        const enviarForm = () => {
            const inputDeSenha = document.getElementById("senhaDoUsuario") as HTMLInputElement | null;
            if (inputDeSenha?.value.length !== 8) {
                alert("That password doesn't have 8 characters. Please, fix it.");
                return;
            }
        };

        return {
            PUUID,
            enviarForm
        }
    },
});
</script>
  
<style scoped>
.container {
    position: relative;
}

.formularioDeCadastroContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(/public/static/img/background/gekko_dark_1.png);
    background-size: 180%;
    display: flex;
    align-items: center;
    z-index: 5;
}

.formularioDeCadastroContainer i {
    position: absolute;
    margin-left: 15px;
    font-size: 24px;
}

.formularioDeCadastroContainer form {
    display: block;
    width: 35%;
    margin-left: 8%;
    background-color: #fff;
    border-radius: 5px;
    padding: 40px 30px;
}

.formularioDeCadastroContainer h1,
.formularioDeCadastroContainer span {
    margin-bottom: 30px;
    font-size: clamp(14px, 3vw, 24px);
    color: #000000;
    width: 100%;
}

#login {
    font-size: clamp(10px, 3vw, 14px);
    margin-top: 10px;
    cursor: pointer;
    color: #7a7a7a;
    margin-bottom: 0;
}

.formularioDeCadastroContainer span {
    color: var(--cor-folly);
}

.formularioDeCadastroContainer input {
    margin-bottom: 10px;
    padding: 10px;
    width: 100%;
    border-radius: 3px;
    border: 1px solid #2C3E50;
    color: #2C3E50;
    transition: 0.2s ease-out;
    font-size: clamp(12px, 3vw, 14px);
}

.formularioDeCadastroContainer input:focus {
    border: 1px solid var(--cor-folly);
}

@media (max-width: 768px) {
    .formularioDeCadastroContainer {
        background-repeat: no-repeat;
        background-size: 220%;
    }

    .formularioDeCadastroContainer form {
        width: 55%;
    }
}

@media (max-width: 425px) {
    .formularioDeCadastroContainer {
        background-repeat: no-repeat;
        background-size: 450%;
        background-position: -350px 0;
    }

    .formularioDeCadastroContainer form {
        position: absolute;
        left: 50%;
        transform: translate(-50%);
        bottom: 10px;
        margin: 0;
        width: 90%;
        padding: 30px;
    }

    .formularioDeCadastroContainer i {
        position: absolute;
        left: 50%;
        top: 10px;
        margin-left: 0;
        font-size: 24px;
    }
}
</style>
  