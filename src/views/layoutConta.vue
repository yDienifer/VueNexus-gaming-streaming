<template>
    <div class="formularioDeCadastroContainer" v-if="formulárioDeCadastroVisível">
        <RouterLink to="/home" @click.prevent="btnVoltarParaHome">
            <i class="fa-sharp fa-solid fa-xmark" ref="iconeFecharFormulário"></i>
        </RouterLink>
        <form @submit="enviarForm">
            <h1>Create your account now and <span>win exclusive Valorant rewards</span> through our
                <span>giveaways and
                    competitions!</span>
            </h1>
            <input id="nomeDoUsuario" name="nomeDoUsuario" type="text" placeholder="Create a unique username"
                :maxlength="16" required>
            <input id="emailDoUsuario" name="emailDoUsuario" placeholder="Enter your email here" type="email" required>
            <input ref="Puiid" id="puuidDoUsuario" name="puuidDoUsuario" placeholder="What's your Valorant PUUID?"
                type="text" :maxlength="32">
            <input id="senhaDoUsuario" name="senhaDoUsuario" type="password" placeholder="Create a secure password"
                :maxlength="8" required>
            <botaoDeRedimensionamento id="btn" titulo-introdutorio-do-btn="Start my journey" />
            <span id="login">Are you already a member?</span>
            <ul>
                <li id="resultadoDoPuuid"><a href="#">{{ Puuid }}</a></li>
            </ul>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { nextTick } from 'vue';

import api from "@/services/api";

import botaoDeRedimensionamento from "../components/botao/botao.vue";

export default defineComponent({
    name: "LayoutFormulario",
    components: {
        botaoDeRedimensionamento
    },
    setup() {
        const router = useRouter();

        const btnVoltarParaHome = () => router.push('/home');

        const formulárioDeCadastroVisível = ref(true);

        // Btn de enviar formulário + API get ------------------------------------- //
        const Puuid = ref("");
        const enviarForm = async (e: Event) => {
            const inputDeSenha = document.getElementById("senhaDoUsuario") as HTMLInputElement;
            if (inputDeSenha?.value.length !== 8) {
                alert("That password doesn't have 8 characters. Please, fix it.");
                e.preventDefault();
            } else {
                alert("Congratulations! Your account has been successfully created. Have a great adventure!");
                // window.location.reload();
                router.push("/home");

            } try {
                const response = await api.get(`https://valorant-api.com/v1/playertitles/${Puuid.value}`);
                // await = faz a requisição de dados
                // response = resposta da requisição feita ao serve

                Puuid.value = response.data.results

                const resultadoDoPuuid = document.getElementById("resultadoDoPuuid") as HTMLInputElement;
                resultadoDoPuuid.innerHTML = response.data.results

            } catch (error) {
                console.error("Ocorreu um erro, tente novamente mais tarde", error);
            }
        };

        // Btn de fechar formulário ------------------------------------- //
        const iconeFecharFormulário = ref<HTMLElement | null>(null);
        const fecharFormulário = () => {
            formulárioDeCadastroVisível.value = false;
        };

        onMounted(() => {
            iconeFecharFormulário.value?.addEventListener("click", fecharFormulário);
            nextTick(() => {
                iconeFecharFormulário.value?.addEventListener("click", () => {
                    formulárioDeCadastroVisível.value = false;
                });
            });
        });

        return {
            Puuid,
            enviarForm,
            formulárioDeCadastroVisível,
            iconeFecharFormulário,
            btnVoltarParaHome
        }
    },
    methods: {
        atualizarPUUID(e: InputEvent) {
            this.Puuid = (e.target as HTMLInputElement).value;
        },
    }
});
</script>
  
<style scoped>
.formularioDeCadastroContainer {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url(/public/static/img/banner/Skye_KeyArt_PR_2.jpg);
    background-size: 180%;
    display: flex;
    align-items: center;
    z-index: 9;
}

.formularioDeCadastroContainer i {
    position: absolute;
    margin-left: 15px;
    font-size: 24px;
    z-index: 2;
    cursor: pointer;
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

li {
    color: #000000;
    margin-top: 5px;
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
  