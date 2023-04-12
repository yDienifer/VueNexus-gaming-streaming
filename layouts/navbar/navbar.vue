<script lang="ts">
import { ref, watchEffect, computed } from 'vue';
import { useRoute } from 'vue-router';
import { RouterLink, RouterView } from 'vue-router'

import "@fortawesome/fontawesome-free/css/all.css";

import InputDePesquisa from "./Input_de_pesquisa/input_de_pesquisa.vue";
import ListaComIcon from "../../src/components/lista-com-icon/lista_com_icon.vue";

import json from '../../public/static/json/atalhos.json';

type Atalhos = {
  id: number;
  nomeDoAtalho: string;
  iconDoAtalho: string;
};

export default {
  name: "BarraDeNavegacao",
  components: {
    InputDePesquisa,
    ListaComIcon
  },
  setup() {
    const route = useRoute();
    const contaAberta = ref(false);

    watchEffect(() => {
      contaAberta.value = route.path === '/conta';
    });

    const menu_aberto = ref(false);
    const sidebar_aberta = ref(false);
    const input_name = ref('');

    function animacaoMenuMobile() {
      menu_aberto.value = !menu_aberto.value;
      sidebar_aberta.value = !menu_aberto.value;
    }

    function btnParaEnviarPesquisa(e: MouseEvent) {
      e.preventDefault();
      console.log(input_name.value);
      input_name.value = "";
    }

    function clickNoHamburguer(e: MouseEvent) {
      if (menu_aberto.value) {
        if (!(e.target as HTMLElement).closest("#nav-para-mobile")) {
          menu_aberto.value = false;
        }
      }
    }

    const atalhos = ref<Record<string, Atalhos[]>>(json.MenuLateral);
    const atalhosDiscover = computed(() => atalhos.value.SecaoDiscover);

    return {
      contaAberta,
      menu_aberto,
      sidebar_aberta,
      animacaoMenuMobile,
      btnParaEnviarPesquisa,
      clickNoHamburguer,
      atalhosDiscover,
    };
  },
};
</script>

<template>
  <header :class="{ 'retirar-clip-path': contaAberta }">
    <div class="logoVueNexusContainer">
      <i class="fa-solid fa-spa"></i>
      <p>VueNexus</p>
    </div>
    <InputDePesquisa id="pesquisa" />
    <nav id="nav-para-desktop">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Lives</a></li>
        <li><a href="#">Streams</a></li>
        <div class="contaDoUsuario">
          <i class="fa-regular fa-bell" id="iconNotificacoes"></i>
          <RouterLink to="/conta"><i class="fa-solid fa-user-ninja" id="iconConta"></i></RouterLink>
        </div>
        <RouterView />
      </ul>
      <div class="contaDoUsuarioDesktop"></div>
    </nav>
    <nav id="nav-para-mobile">
      <div class="hamburguer" :class="{ show: menu_aberto, 'retirar-hamburguer': contaAberta }"
        @click="animacaoMenuMobile">
        <div class="linha-1"></div>
        <div class="linha-2"></div>
        <div class="linha-3"></div>
      </div>
      <aside id="sidemenu-para-mobile" :class="{ show: menu_aberto }">
        <section id="conta-do-usuario">
          <i class="fa-solid fa-user-ninja" id="iconConta"></i>
          <RouterLink to="/conta"><span>Start my journey (or return to it)</span></RouterLink>
          <RouterView />
        </section>
        <ul class="atalhos-da-secao">
          <span>Discover</span>
          <ListaComIcon :atalhos="atalhosDiscover" />
        </ul>
      </aside>
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 100vw;
  padding: 20px 65px;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
  position: relative;
}

header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(20, 20, 20, 0.959);
  z-index: -1;
}

header::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(/public/static/img/banner/banner.png);
  z-index: -2;
}

.retirar-clip-path {
  clip-path: none;
}

header .logoVueNexusContainer p {
  font-size: clamp(14px, 3vw, 22px);
  font-family: "Valorant", cursive;
  margin-left: 5px;
}

header .logoVueNexusContainer p::first-letter {
  color: var(--cor-folly);
}

header .logoVueNexusContainer i p {
  display: inline-block;
  width: 100%;
}

header .logoVueNexusContainer i:nth-of-type(1),
header .logoVueNexusContainer p {
  cursor: pointer;
  display: inline-block;
}

header i:nth-of-type(1),
header i:nth-of-type(2) {
  font-size: clamp(26px, 2vw, 26px);
  color: var(--cor-folly);
}

header nav {
  display: flex;
}

#nav-para-desktop {
  position: relative;
}

#nav-para-desktop ul {
  display: flex;
  align-items: center;
}

#nav-para-desktop ul li:nth-of-type(1) {
  margin-left: 0;
}

#nav-para-desktop li {
  position: relative;
  display: inline-block;
  margin: 0 25px 0 0;
  font-size: clamp(14px, 2vw, 15px);
  text-transform: uppercase;
  font-weight: bold;
}

#nav-para-desktop li:nth-of-type(3) {
  margin: 0;
}

#nav-para-desktop .contaDoUsuario i {
  margin-left: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.582);
  padding-left: 25px;
  cursor: pointer;
}

#nav-para-desktop .contaDoUsuario #iconConta {
  border: none;
  margin-left: 0;
}

#nav-para-desktop .contaDoUsuario #iconNotificacoes {
  font-size: 21px;
}

#nav-para-desktop ul li:after {
  content: "";
  position: absolute;
  top: 22px;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--cor-folly);
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

#nav-para-mobile .hamburguer {
  z-index: 2;
}

.retirar-hamburguer {
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
  display: block;
  position: absolute;
  top: -280px;
  left: 0;
  opacity: 0;
  background-color: var(--cor-rich-black);
  padding: 90px 35px 50px 35px;
  width: 100%;
  border-bottom-right-radius: 5px;
  transition: all 0.9s;
  z-index: 1;
}

#nav-para-mobile #conta-do-usuario {
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 40px;
}

#nav-para-mobile #conta-do-usuario span {
  margin: 0 10px;
  font-size: clamp(14px, 3vw, 16px);
}

#nav-para-mobile i {
  font-size: clamp(2.5em, 3vw, 3.5em);
}

#nav-para-mobile .atalhos-da-secao span {
  color: gray;
  cursor: cell;
  width: 0;
  position: relative;
}

#nav-para-mobile .atalhos-da-secao span::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--cor-folly);
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-out;
}

#nav-para-mobile .atalhos-da-secao span:hover::after {
  transform-origin: left;
  transform: scaleX(100%);
}

/* TypeScript CSS */
.hamburguer.show .linha-1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

.hamburguer.show .linha-2 {
  opacity: 0;
}

.hamburguer.show .linha-3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

#nav-para-mobile #sidemenu-para-mobile.show {
  display: block;
  top: 0;
  left: 0;
  opacity: 1;
  width: 100%;
}

@media (max-width: 768px) {
  header {
    display: flex;
    flex-direction: row-reverse;
    clip-path: none;
    padding: 20px 35px;
  }

  header .logoVueNexusContainer p {
    display: none;
  }

  header .logoVueNexusContainer {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #nav-para-desktop {
    display: none;
  }

  #nav-para-mobile {
    display: flex;
    align-items: center;
  }
}

@media (max-width: 425px) {
  header #logoVueNexus {
    display: none;
  }

  header {
    clip-path: none;
    padding: 20px;
  }
}
</style>