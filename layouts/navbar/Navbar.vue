<template>
  <div id="test">
    <header :class="{ 'remove-clip-path': loggedIn }">
      <div id="logoVueNexusContainer">
        <i class="fa-solid fa-spa"></i>
        <p>VueNexus</p>
      </div>
      <SearchBar id="search" />
      <nav id="navToDesktop">
        <ul>
          <li><RouterLink to="/home">Home</RouterLink></li>
          <li><a href="#">Channels</a></li>
          <li><a href="#">Live</a></li>
          <li><a href="#">Streams</a></li>
          <div class="userAccount">
            <i class="fa-regular fa-bell" id="iconNotifications"></i>
            <RouterLink to="/account"><i class="fa-solid fa-user-ninja" id="iconAccount"></i></RouterLink>
          </div>
        </ul>
        <div class="userAccountDesktop"></div>
      </nav>
      <nav id="navToMobile">
        <div class="hamburger" :class="{ show: openMenu, 'remove-hamburger': loggedIn }"
          @click="toggleMobileMenuAnimation">
          <div class="line-1"></div>
          <div class="line-2"></div>
          <div class="line-3"></div>
        </div>
        <aside id="sidebarForMobile" :class="{ show: openMenu }">
          <section id="userAccount">
            <i class="fa-solid fa-user-ninja" id="iconAccount"></i>
            <RouterLink to="/account"><span>Unlock exclusive content!</span></RouterLink>
          </section>
          <ul class="sectionShortcuts">
            <span>Discover</span>
            <ListWithIcon :shortcuts="discoverShortcuts" />
          </ul>
        </aside>
      </nav>
    </header>
  </div>
</template>

<script lang="ts">
import { ref, watchEffect, computed } from "vue";
import { useRoute, RouterLink } from "vue-router";
import { defineComponent } from "vue";
import { reactive } from "vue";

import "@fortawesome/fontawesome-free/css/all.css";

import SearchBar from "./search_bar/SearchBar.vue";
import ListWithIcon from "../../src/components/list_with_icon/ListWithIcon.vue";

import json from "../../public/static/json/ShortcutsSidebar.json";

type ShortcutsSidebar = {
  id: number;
  shortcutName: string;
  shortcutIcon: string;
  shortcutLink: string
};

export default defineComponent({
  name: "NavigationBar",
  components: {
    SearchBar,
    ListWithIcon
  },
  setup() {
    const route = useRoute();
    const loggedIn = ref(false);

    watchEffect(() => {
      loggedIn.value = route.path === "/account";
    });

    const openMenu = ref(false);
    const openSidebar = ref(false);
    const inputName = ref("");

    function toggleMobileMenuAnimation() {
      openMenu.value = !openMenu.value;
      openSidebar.value = !openMenu.value;
    }

    function submitSearch(e: MouseEvent) {
      e.preventDefault();
      console.log(inputName.value);
      inputName.value = "";
    }

    function clickOnHamburger(e: MouseEvent) {
      if (openMenu.value) {
        if (!(e.target as HTMLElement).closest("#navToMobile")) {
          openMenu.value = false;
        }
      }
    }

    const shortcuts = reactive(json.ShortcutsSidebar);
    const discoverShortcuts = computed(() => shortcuts.DiscoverSection);

    return {
      loggedIn,
      openMenu,
      openSidebar,
      discoverShortcuts,
      toggleMobileMenuAnimation,
      submitSearch,
      clickOnHamburger
    };
  },
});
</script>

<style scoped>
header {
  -moz-box-shadow: 0px 2.2px 1px rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: 0px 2.2px 1px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 2.2px 1px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(73, 73, 73, 0.397);
  clip-path: polygon(0 0, 100% 0, 95% 100%, 5% 100%);
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  padding: 25px 65px;
  position: relative;
  transition: 0.3s;
  width: 100vw;
}

header::after {
  background-image: url("public/static/img/background/gekko_dark_1.png");
  background-position: -1980px 2780px;
  background-size: 125%;
  bottom: 0;
  content: "";
  filter: saturate(1.9);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -2;
}

header::before {
  background-color: rgba(29, 41, 57, 0.788);
  bottom: 0;
  content: "";
  filter: brightness(0.6);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  z-index: -1;
}

header i:nth-of-type(1),
header i:nth-of-type(2) {
  color: var(--cor-folly);
  font-size: clamp(22px, 2vw, 26px);
}

header nav {
  display: flex;
}

header #logoVueNexusContainer {
  cursor: pointer;
}

header #logoVueNexusContainer i:nth-of-type(1),
header #logoVueNexusContainer p {
  cursor: pointer;
  display: inline-block;
}

header #logoVueNexusContainer i p {
  display: inline-block;
  width: 100%;
}

header #logoVueNexusContainer p {
  font-family: "Valorant", cursive;
  font-size: clamp(14px, 3vw, 21px);
  margin-left: 5px;
}

header #logoVueNexusContainer p::first-letter {
  color: var(--cor-folly);
}

header #logoVueNexusContainer i:nth-of-type(1),
header #logoVueNexusContainer p {
  cursor: pointer;
  display: inline-block;
}

header .sticky {
  background-image: none;
  clip-path: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

#navToDesktop {
  position: relative;
}

#navToDesktop .userAccount i {
  cursor: pointer;
  margin-left: 20px;
  padding-left: 25px;
}

#navToDesktop .userAccount #iconAccount {
  border: none;
  margin-left: 0;
}

#navToDesktop .userAccount #iconNotifications {
  font-size: 21px;
}

#navToDesktop li {
  display: inline-block;
  font-size: clamp(14px, 2vw, 15px);
  font-weight: bold;
  margin: 0 25px 0 0;
  position: relative;
  text-transform: uppercase;
}

#navToDesktop li:nth-of-type(1) {
  margin-left: 0;
}

#navToDesktop li:nth-of-type(4) {
  margin: 0;
}

#navToDesktop ul {
  align-items: center;
  display: flex;
}

#navToDesktop ul li:after {
  background-color: var(--cor-folly);
  bottom: 0;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  top: 22px;
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
  width: 100%;
}

#navToDesktop ul li:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

#navToMobile {
  display: none;
}

#navToMobile .atalhos-da-secao span {
  color: gray;
  cursor: cell;
  position: relative;
  width: 0;
}

#navToMobile .atalhos-da-secao span::after {
  background-color: var(--cor-folly);
  bottom: -4px;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-out;
  width: 100%;
}

#navToMobile .atalhos-da-secao span:hover::after {
  transform: scaleX(100%);
  transform-origin: left;
}

#navToMobile .hamburguer .linha-1,
#navToMobile .hamburguer .linha-2,
#navToMobile .hamburguer .linha-3 {
  background-color: #ffff;
  height: 2px;
  margin-bottom: 7px;
  width: 28px;
}

#navToMobile .hamburguer .linha-3 {
  margin-bottom: 0;
}

#navToMobile .hamburguer.show .linha-1 {
  transform: rotate(-45deg) translate(-5px, 6px);
}

#navToMobile .hamburguer.show .linha-2 {
  opacity: 0;
}

#navToMobile .hamburguer.show .linha-3 {
  transform: rotate(45deg) translate(-5px, -6px);
}

#navToMobile #conta-do-usuario {
  align-items: center;
  display: flex;
  margin-bottom: 40px;
  width: 100%;
}

#navToMobile #conta-do-usuario span {
  font-size: clamp(14px, 3vw, 16px);
  margin: 0 10px;
}

#navToMobile #iconMobile .linha-1,
#navToMobile #iconMobile .linha-2,
#navToMobile #iconMobile .linha-3 {
  background-color: #ffff;
  height: 2px;
  margin-bottom: 7px;
  width: 28px;
}

#navToMobile #navMobile.show {
  display: block;
  left: 0;
  opacity: 1;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1;
}

#navToMobile #sidebarForMobile {
  background-color: var(--cor-rich-black);
  border-bottom-right-radius: 5px;
  display: block;
  left: 0;
  opacity: 0;
  padding: 90px 35px 50px 35px;
  position: absolute;
  top: -280px;
  transition: all 0.9s;
  width: 100%;
  z-index: 1;
}

#navToMobile #sidebarForMobile.show {
  display: block;
  left: 0;
  opacity: 1;
  top: 0;
  width: 100%;
}

#navToMobile i {
  font-size: clamp(2.5em, 3vw, 3.5em);
}

#navToMobile span {
  color: gray;
  cursor: pointer;
  position: relative;
  width: 0;
}

#navToMobile span::after {
  background-color: var(--cor-folly);
  bottom: -4px;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-out;
  width: 100%;
}

#navToMobile span:hover::after {
  transform: scaleX(100%);
  transform-origin: left;
}

.retirar-clip-path {
  clip-path: none;
  z-index: -2;
}

.retirar-hamburguer {
  display: none;
}

/* TypeScript CSS */
@media (max-width: 425px) {
  header {
    clip-path: none;
    padding: 20px;
  }

  header #logoVueNexus {
    display: none;
  }

  #navToDesktop {
    display: none;
  }
}

@media (max-width: 768px) {
  header {
    clip-path: none;
    display: flex;
    flex-direction: row-reverse;
    padding: 20px 35px;
  }

  header #logoVueNexusContainer {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  #navToDesktop {
    display: none;
  }

  #navToMobile {
    align-items: center;
    display: flex;
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