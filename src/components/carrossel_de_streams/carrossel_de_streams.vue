<template>
    <div class="btns-do-carrossel">
        <i class="fa-solid fa-left-long" @click="btnVoltar"></i>
        <i class="fa-solid fa-right-long" @click="btnAvancar"></i>
    </div>
    <div class="carrosselContainer">
        <div class="streams-container" ref="carrossel">
            <div class="video" v-for="(match, index) in streams" :key="index">
                <videoStreamEstrutura :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer" :nomeDoStreamer="match.nomeDoStreamer"
                    :tipoDeLive="match.tipoDeLive" :nomeDaTag="match.nomeDaTag" />
            </div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import videoStreamEstrutura from "../../components/stream_estrutura/stream_estrutura.vue";

export default defineComponent({
    name: "carrosselDeStreams",
    components: {
        videoStreamEstrutura,
    },
    props: {
        streams: {
            type: Array as () => any[],
            required: true
        }
    },
    setup() { 
        const carrossel = ref(null);

        const btnVoltar = (e: Event) => {
            e.preventDefault();
            console.log("botão de voltar clicado!")
            const carrosselElement = carrossel.value! as HTMLElement;
            if (carrosselElement.offsetWidth) {
                carrosselElement.scrollLeft -= carrosselElement.offsetWidth;
            }
        }

        const btnAvancar = (e: Event) => {
            e.preventDefault();
            console.log("botão de avançar clicado!")
            const carrosselElement = carrossel.value! as HTMLElement;
            if (carrosselElement.offsetWidth) {
                carrosselElement.scrollLeft += carrosselElement.offsetWidth;
            }
        }

        return {
            btnVoltar,
            btnAvancar,
            carrossel
        }
    },
});
</script>

<style scoped>
.streams-container::-webkit-scrollbar {
    width: 0px;
}

.streams-container {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch
}

.streams-container .video {
    margin: 5px 0 0 10px;
    width: 100vw;
}

.btns-do-carrossel {
    float: right;
    margin-top: 30px;
}

.btns-do-carrossel i {
    border: 1px solid white;
    border-radius: 100%;
    padding: 10px;
    cursor: pointer;
}

.btns-do-carrossel i:nth-of-type(1) {
    margin-right: 20px;
}

@media (max-width: 425px) {
    .btns-do-carrossel {
        display: none;
    }
}
</style>