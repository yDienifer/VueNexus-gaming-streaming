<template>
    <div class="container-stream">
        <div class="informacoes-da-live">
            <img id="capaDaLive" :src="fotoDaCapaDaLive" :alt="altDaImgDeCapaDaLive" />
            <span>{{ tituloDaLive }}</span>
        </div>
        <div class="perfilDoStreamer">
            <img :src="fotoDePerfilDoStreamer" :alt="altDaFotoDePerfilDoStreamer" />
            <span>{{ nomeDoStreamer }}</span>
        </div>
        <div class="tagsDaLive">
            <ul>
                <li>{{ nomeDaTag }}</li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "videoStreamEstrutura",
    props: {
        fotoDaCapaDaLive: {
            type: String,
            default: "The live stream is unavailable, sorry! :(",
        },
        altDaImgDeCapaDaLive: {
            type: String,
            default: "The live stream is unavailable, sorry! :(",
        },
        tituloDaLive: {
            type: String,
        },
        fotoDePerfilDoStreamer: {
            type: String,
        },
        altDaFotoDePerfilDoStreamer: {
            type: String,
            default: "Unavailable",
        },
        nomeDoStreamer: {
            type: String,
            default: "Unavailable",
        },
        nomeDaTag: {
            type: String,
            default: "Unavailable",
        },
    },
}) 
</script>

<style scoped>
.container-stream {
    margin-top: 20px;
    width: 23vw;
}

.container-stream img,
.informacoes-da-live span,
.perfilDoStreamer {
    width: 100%;
}

.informacoes-da-live,
.perfilDoStreamer {
    cursor: pointer;
}

.informacoes-da-live span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 10px;
}

.perfilDoStreamer {
    margin-top: 10px;
}

.perfilDoStreamer img {
    width: 15%;
}

@media (max-width: 425px) {
    .container-stream {
        width: 10em;
    }
}

</style>