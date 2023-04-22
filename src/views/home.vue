<template>
    <section>
        <div id="barraDeNavegacao">
            <BarraDeNavegacao />
        </div>
        <MenuLateral />
        <main id="myScrollbar">
            <div id="overlayDeLinhas"></div>
            <BannerDoSite />
            <div id="secaoDeStreams">
                <SecaoDeStreams />
            </div>
            <RouterView />
        </main>
    </section>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
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
    data() {
        return {
            scrollbar: null
        }
    },
    mounted() { // chama a função
        this.checkScrollbar();
    },
    watch: { // observador
        $route(to, from) {
            this.checkScrollbar();
        }
    },
    methods: {
        checkScrollbar() {
            if (this.$route.path === '/conta' && this.scrollbar) {
                this.scrollbar.destroy();
                this.scrollbar = null;
                document.body.style.overflow = 'hidden';

            } else if ((this.$route.path === '/' || this.$route.path === '/home') && !this.scrollbar) {

                let myScrollbar = document.getElementById('myScrollbar');
                if (myScrollbar) {
                    this.scrollbar = Scrollbar.init(myScrollbar);
                }
            }
        }
    }
});
</script>
  
  
<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-start;
    width: 100%;
    height: 90vw;
    position: absolute;
    top: 0;
}

#overlayDeLinhas {
    position: absolute;
    top: 0;
    left: 70%;
    width: 100vw;
    height: 100%;
    background-image: url(/public/static/img/background/linha_overlay.png);
    background-repeat: repeat-y;
    opacity: 0.3;
}

#barraDeNavegacao {
    position: relative;
    z-index: 1;
}

#secaoDeStreams {
    display: flex;
    align-items: flex-end;
    flex-direction: column;
}

main::-webkit-scrollbar {
    width: 0px;
}
</style>