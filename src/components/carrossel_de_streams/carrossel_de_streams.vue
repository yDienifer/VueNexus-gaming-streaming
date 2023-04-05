<template>
    <div class="btns-do-carrossel">
        <i class="fa-solid fa-left-long" @click="btnVoltar"></i>
        <i class="fa-solid fa-right-long" @click="btnAvancar"></i>
    </div>
    <div class="carrossel" ref="carrossel">
        <div class="streams-container">
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
import { defineComponent } from 'vue';
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
    methods: {
        btnVoltar(e: Event) {
            e.preventDefault();
            const carrossel = this.$refs.carrossel as HTMLElement;
            if (carrossel.offsetWidth) {
                carrossel.scrollLeft -= carrossel.offsetWidth;
            }
        },
        btnAvancar(e: Event) {
            e.preventDefault();
            const carrossel = this.$refs.carrossel as HTMLElement;
            if (carrossel.offsetWidth) {
                carrossel.scrollLeft += carrossel.offsetWidth;
            }
        },
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