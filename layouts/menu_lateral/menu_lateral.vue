<template>
    <div class="menu-lateral-container">
        <section class="discoverContainer">
            <span>Discover</span>
            <ListaComIcon :atalhos="atalhosDiscover" />
        </section>
        <section class="communityForumContainer">
            <span>Community Forum</span>
            <ListaComIcon :atalhos="atalhosCommunityForum" />
        </section>
        <section class="gamesGuideContainer">
            <span>Games Guide</span>
            <ListaComIcon :atalhos="atalhosGamesGuide" />
        </section>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import ListaComIcon from "../../src/components/lista-com-icon/lista_com_icon.vue";

import json from '../../public/static/json/atalhos.json';

type Atalhos = {
    id: number;
    nomeDoAtalho: string;
    iconDoAtalho: string;
};

export default defineComponent({
    name: 'MenuLateral',
    components: {
        ListaComIcon
    },
    setup() {
        const atalhos = ref<Record<string, Atalhos[]>>(json.MenuLateral);

        const atalhosDiscover = computed(() => atalhos.value.SecaoDiscover);
        const atalhosCommunityForum = computed(() => atalhos.value.SecaoCommunityForum);
        const atalhosGamesGuide = computed(() => atalhos.value.SecaoGamesGuide);

        return {
            atalhosDiscover,
            atalhosCommunityForum,
            atalhosGamesGuide
        };
    },
});
</script>
  
<style scoped>
.menu-lateral-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    position: absolute;
    margin-top: 20px;
    left: 5px;
    height: 100%;
    float: left;
    padding: 0 25px;
    z-index: 2;
}

.menu-lateral-container::before {
    border-radius: 10px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(20, 20, 20, 0.968);
    z-index: -1;
}

.menu-lateral-container::after {
    border-radius: 10px;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(/public/static/img/banner/banner.png);
    background-position-x: 1300px;
    z-index: -2;
}

/* Configurações gerais */
section {
    margin: 10px 0;
}

section:nth-of-type(1) {
    margin-top: 30px;
}

i {
    color: var(--cor-folly);
}

span {
    color: gray;
    cursor: cell;
    width: 0;
    position: relative;
}

span::after {
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

span:hover::after {
    transform-origin: left;
    transform: scaleX(100%);
}

@media (max-width: 768px) {
    .menu-lateral-container {
        display: none;
    }
}

@media (max-width: 425px) {

    .menu-lateral-container {
        display: none;
    }
}
</style>