<script setup lang="ts">
import "@fortawesome/fontawesome-free/css/all.css";

import InputDePesquisa from "./Input_de_pesquisa/input_de_pesquisa.vue";
</script>

<script lang="ts">



export default {
  name: "BarraDeNavegacao",
  components: {
    InputDePesquisa,
  },
  data() {
    return {
      input_name: "",
      menu_aberto: false,
      sidebar_aberta: false,
    };
  },
  methods: {
    // Responsável por funções da aplicação
    animacaoMenuMobile(): void {
      this.menu_aberto = !this.menu_aberto;
      this.sidebar_aberta = !this.menu_aberto;
    },
    btnParaEnviarPesquisa(e: MouseEvent): void {
      e.preventDefault();
      console.log(this.input_name);
      this.input_name = "";
    },
    clickForaDoSidebar(e: MouseEvent): void {
      if (this.menu_aberto) {
        if (!(e.target as HTMLElement).closest("#nav-para-mobile")) {
          this.menu_aberto = false;
        }
      }
    },
  },
  mounted() {
    document.addEventListener("click", this.clickForaDoSidebar);
  },
  beforeUnmount() {
    document.removeEventListener("click", this.clickForaDoSidebar);
  },
};
</script>

<template>
  <header>
    <div class="logoVueNexusContainer">
      <i class="fa-solid fa-spa"></i>
      <p>VueNexus</p>
    </div>
    <InputDePesquisa />
    <nav id="nav-para-desktop">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Lives</a></li>
        <li><a href="#">Streams</a></li>
        <i class="fa-regular fa-bell"></i>
        <router-link to="/conta"><i class="fa-solid fa-user-ninja"></i></router-link>
        <router-view />
      </ul>
      <div class="contaDoUsuarioDesktop"></div>
    </nav>
    <nav id="nav-para-mobile" :class="{ show: menu_aberto }">
      <div class="hamburguer" :class="{ show: menu_aberto }" @click="animacaoMenuMobile">
        <div class="linha-1"></div>
        <div class="linha-2"></div>
        <div class="linha-3"></div>
      </div>
      <aside id="sidemenu-para-mobile" :class="{ show: menu_aberto }" @click="animacaoMenuMobile">
        <section id="conta-do-usuario">
          <i class="fa-solid fa-user-ninja"></i>
          <span>Sign in</span>
          <span>Sign up</span>
        </section>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Streams</a></li>
          <li><a href="#">Streamers</a></li>
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
  position: relative;
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
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

header .logoVueNexusContainer p {
  font-size: clamp(14px, 3vw, 24px);
  font-family: "Bebas Neue", cursive;
  text-transform: uppercase;
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

#nav-para-desktop i {
  margin-left: 20px;
  border-left: 1px solid rgba(255, 255, 255, 0.582);
  padding-left: 25px;
  cursor: pointer;
}

#nav-para-desktop i:nth-of-type(2) {
  border-left: none;
  margin: 0;
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
  top: 0;
  left: -100px;
  opacity: 0;
  background-color: #000000;
  padding: 90px 35px 50px 35px;
  width: 50%;
  border-bottom-right-radius: 5px;
  transition: all 0.8s;
  z-index: 1;
}

#nav-para-mobile #conta-do-usuario {
  display: flex;
  width: 100%;
  align-items: center;
}

#nav-para-mobile #conta-do-usuario span {
  margin: 0 10px;
  font-size: clamp(14px, 3vw, 16px);
}

#nav-para-mobile i {
  font-size: clamp(2.5em, 3vw, 3.5em);
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
  left: 0;
  opacity: 1;
  width: 100%;
}

@media (max-width: 768px) {
  header {
    display: flex;
    flex-direction: row-reverse;
  }

  header .logoVueNexusContainer p {
    display: none;
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