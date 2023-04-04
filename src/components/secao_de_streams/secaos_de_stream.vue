<script lang="ts">
import { defineComponent, ref } from 'vue';
import videoStreamEstrutura from "../../components/stream_estrutura/stream_estrutura.vue";
import json from "../../assets/streams.json";

type Stream = {
    id: number;
    fotoDaCapaDaLive: string;
    altDaImgDeCapaDaLive: string;
    tituloDaLive: string;
    fotoDePerfilDoStreamer: string;
    altDaFotoDePerfilDoStreamer: string;
    nomeDoStreamer: string;
    tipoDeLive: string
}

export default defineComponent({
    name: "SecaoDeStreams",
    components: {
        videoStreamEstrutura,
    },
    setup() { // Configuração de componente
        const RankedMatches = ref<Stream[]>(json.RankedMatches);

        /* const RankedMatches = ref<Stream[]>(json.RankedMatches);
    
        onde:
    
        ref = Cria uma referência de valor que, quando o valor dessa
        referência muda, é atualizado automaticamente.
    
        */

        const CasualMatches = ref<Stream[]>(json.CasualMatches);
        const Tutorials = ref<Stream[]>(json.Tutorials);
        const PlayingWithViewers = ref<Stream[]>(json.PlayingWithViewers);
        const Competitions = ref<Stream[]>(json.Competitions);
        const Challenges = ref<Stream[]>(json.Challenges);
        const News = ref<Stream[]>(json.News);

        const btnVoltar = (e: Event) => {
            e.preventDefault();
            const carrossel = document.getElementById("carrossel");
            if (carrossel) {
                carrossel.scrollLeft -= carrossel.offsetWidth;
            }
        }

        const btnAvancar = (e: Event) => {
            e.preventDefault();
            const carrossel = document.getElementById("carrossel");
            if (carrossel) {
                carrossel.scrollLeft += carrossel.offsetWidth;
            }
        }

        return {
            RankedMatches,
            CasualMatches,
            Tutorials,
            PlayingWithViewers,
            Competitions,
            Challenges,
            News,
            btnVoltar,
            btnAvancar
        }
    },
});
</script>

<template>
    <section>
        <span class="titulo-secao-streams">The Best Players at the Top</span>
        <div class="btns-do-carrossel">
            <i class="fa-solid fa-left-long" @click="btnVoltar"></i>
            <i class="fa-solid fa-right-long" @click="btnAvancar"></i>
        </div>
        <div class="streams-container" id="carrossel">
            <div class="video" v-for="(match, index) in RankedMatches" :key="index">
                <videoStreamEstrutura :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" :tipoDeLive="match.tipoDeLive" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">Relaxing with Valorant</span>
        <div class="btns-do-carrossel">
            <i class="fa-solid fa-left-long" @click="btnVoltar"></i>
            <i class="fa-solid fa-right-long" @click="btnAvancar"></i>
        </div>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in CasualMatches" :key="index">
                <videoStreamEstrutura :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" :tipoDeLive="match.tipoDeLive" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">Learn from the Pros</span>
        <div class="btns-do-carrossel">
            <i class="fa-solid fa-left-long" @click="btnVoltar"></i>
            <i class="fa-solid fa-right-long" @click="btnAvancar"></i>
        </div>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in Tutorials" :key="index">
                <videoStreamEstrutura :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" :tipoDeLive="match.tipoDeLive" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">Interacting with the Community</span>
        <div class="btns-do-carrossel">
            <i class="fa-solid fa-left-long" @click="btnVoltar"></i>
            <i class="fa-solid fa-right-long" @click="btnAvancar"></i>
        </div>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in PlayingWithViewers" :key="index">
                <videoStreamEstrutura :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" :tipoDeLive="match.tipoDeLive" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">The Strongest Teams Face Off</span>
        <div class="btns-do-carrossel">
            <i class="fa-solid fa-left-long" @click="btnVoltar"></i>
            <i class="fa-solid fa-right-long" @click="btnAvancar"></i>
        </div>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in Competitions" :key="index">
                <videoStreamEstrutura :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" :tipoDeLive="match.tipoDeLive" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">Pushing the Limits</span>
        <div class="btns-do-carrossel">
            <i class="fa-solid fa-left-long" @click="btnVoltar"></i>
            <i class="fa-solid fa-right-long" @click="btnAvancar"></i>
        </div>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in Challenges" :key="index">
                <videoStreamEstrutura :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" :tipoDeLive="match.tipoDeLive" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">Discover What's New</span>
        <div class="btns-do-carrossel">
            <i class="fa-solid fa-left-long" @click="btnVoltar"></i>
            <i class="fa-solid fa-right-long" @click="btnAvancar"></i>
        </div>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in News" :key="index">
                <videoStreamEstrutura :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" :tipoDeLive="match.tipoDeLive" />
            </div>
        </div>
    </section>
</template>

<style scoped>
.streams-container::-webkit-scrollbar {
    width: 0px;
}

.titulo-secao-streams {
    font-size: clamp(18px, 3vw, 32px);
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

section {
    margin-top: 700px;
    width: 79%;
    height: 100vw;
    padding: 10px 1.5rem 0 0;
}

section:nth-of-type(2),
section:nth-of-type(3),
section:nth-of-type(4),
section:nth-of-type(5),
section:nth-of-type(6),
section:nth-of-type(7) {
    margin-top: 70px;
}

.streams-container {
    display: flex;
    flex-wrap: nowrap;
    flex: none;
    width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch
}

.streams-container .video {
    margin: 5px 0 0 10px;
}

.streams-container .video:nth-of-type(1) {
    margin: 10px 0;
}

@media (max-width: 1024px) {
    section {
        width: 72vw;
    }
}

@media (max-width: 768px) {
    section {
        width: 88vw;
    }
}

@media (max-width: 425px) {
    section {
        width: 97vw;
        height: 100vw;
        margin-top: 430px;
    }
}
</style>