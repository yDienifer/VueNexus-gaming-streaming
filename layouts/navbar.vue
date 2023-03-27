<script setup lang="ts">
import "@fortawesome/fontawesome-free/css/all.css";

import InputDePesquisa from './navbar/Input_de_pesquisa/input_de_pesquisa.vue';
</script>

<template>
    <header>
        <span id="logoVueNexus"><i class="fa-solid fa-spa"></i>VueNexus</span>
        <InputDePesquisa />
        <nav id="nav-para-desktop">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Lives</a></li>
                <li><a href="#">Streams</a></li>
            </ul>
        </nav>
        <nav id="nav-para-mobile">
            <div class="hamburguer">
                <div class="linha-1"></div>
                <div class="linha-2"></div>
                <div class="linha-3"></div>
            </div>
            <aside id="sidemenu-para-mobile">
                <section id="conta-do-usuario">
                    <i class="fa-solid fa-user-ninja"></i>
                    <span>Sign in</span>
                    <span>Sign up</span>
                </section>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Lives</a></li>
                    <li><a href="#">Streams</a></li>
                </ul>
            </aside>
        </nav>
    </header>
</template>

<script lang="ts">
export default {
    name: "BarraDeNavegação",
    components: {
        InputDePesquisa,
    },
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
            console.log(this.input_name);
            this.name = this.input_name;
        },
    },
};
</script>

<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--cor-cinza-escuro);
    height: 100%;
    width: 95vw;
    padding: 20px 50px;
    margin-top: 10px;
    border-radius: 10px;
}

header #logoVueNexus {
    font-size: clamp(14px, 3vw, 30px);
    font-family: "Teko", sans-serif;
}

header i:nth-of-type(1) {
    font-size: clamp(20px, 2vw, 26px);
    margin-right: 4px;
    color: var(--cor-vermelha);
}

header i:nth-of-type(1),
header #logoVueNexus {
    cursor: pointer;
}

#nav-para-desktop {
    position: relative;
}

#nav-para-desktop ul li {
    position: relative;
    display: inline-block;
    margin: 0 10px;
    font-family: "Montserrat", sans-serif;
    font-size: clamp(14px, 2vw, 16px);
}

#nav-para-desktop ul li:after {
    content: "";
    position: absolute;
    top: 22px;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--cor-vermelha);
    transform: scaleX(0);
    transform-origin: bottom right;
    /* Diz que a linha começa em baixo,
  do lado direito. */
    transition: transform 0.3s ease-out;
}

#nav-para-desktop ul li:hover:after {
    transform: scaleX(1);
    transform-origin: bottom left;
}

/* Nav mobile */
#nav-para-mobile {
    display: none;
}

#nav-para-mobile .hamburguer .linha-1,
#nav-para-mobile .hamburguer .linha-2,
#nav-para-mobile .hamburguer .linha-3 {
    background-color: #ffff;
    width: 28px;
    height: 2px;
    margin-bottom: 7px;
}

#nav-para-mobile .hamburguer .linha-3 {
    margin-bottom: 0;
}

#nav-para-mobile #sidemenu-para-mobile {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    background-color: #000000;
    padding: 50px 15px;
    width: 50%;
    border-bottom-right-radius: 5px;
}

#nav-para-mobile #conta-do-usuario {
    display: flex;
    width: 100%;
    align-items: center;
}

#nav-para-mobile #conta-do-usuario span {
    margin: 0 10px;
}

#nav-para-mobile i {
    font-size: 3.5em;
}

#nav-para-mobile ul li:nth-of-type(1) {
    margin-top: 30px;
}

#nav-para-mobile ul li {
    margin-bottom: 20px;
}

#nav-para-mobile ul li:nth-of-type(3) {
    margin-bottom: 0;
}

@media (max-width: 768px) {
    header {
        display: flex;
        flex-direction: row-reverse;
    }

    #nav-para-desktop {
        display: none;
    }

    #nav-para-mobile {
        display: flex;
        align-items: center;
    }
}
</style>