<template>
    <div>
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