<template>
    <div>
        <BarraDeNavegacao />
        <MenuLateral />
        <main id="myScrollbar">
            <BannerDoSite />
            <SecaoDeStreams />
            <RouterView />

        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue';
import Scrollbar from 'smooth-scrollbar';

import BarraDeNavegacao from "../../layouts/navbar/navbar.vue";
import BannerDoSite from "../components/banner_do_site/banner_do_site.vue";
import MenuLateral from "../../layouts/menu_lateral/menu_lateral.vue";

import SecaoDeStreams from '../components/secoes_de_streams/secoes_de_stream.vue';

export default defineComponent({
    name: "Home",
    components: {
        BarraDeNavegacao,
        BannerDoSite,
        MenuLateral,
        SecaoDeStreams,
    },
    mounted() {
        document.addEventListener('DOMContentLoaded', () => {
            const myScrollbar = document.getElementById('myScrollbar');
            if (myScrollbar instanceof HTMLElement) {
                Scrollbar.init(myScrollbar);
                Scrollbar.initAll();
            }
        });
    }
});
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;
    height: 90vh;
    overflow: auto;
    position: absolute;
}
</style>