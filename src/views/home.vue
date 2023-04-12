<template>
    <div>
        <BarraDeNavegação />
        <MenuLateral />
        <main>
            <BannerDoSite />
            <SecaoDeStreams />
        </main>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import BarraDeNavegação from "../../layouts/navbar/navbar.vue";
import BannerDoSite from "../components/banner_do_site/banner_do_site.vue";
import MenuLateral from "../../layouts/menu_lateral/menu_lateral.vue";

import SecaoDeStreams from '../components/secao_de_streams/secaos_de_stream.vue';

export default defineComponent({
    name: "Home",
    components: {
        BarraDeNavegação,
        BannerDoSite,
        MenuLateral,
        SecaoDeStreams,
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
    overflow-x: hidden;
}

main::-webkit-scrollbar {
    width: 0px;
}
</style>