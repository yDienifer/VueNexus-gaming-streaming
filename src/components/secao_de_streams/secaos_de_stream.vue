<script lang="ts">
import { defineComponent } from 'vue';
import videoStreamEstrutura from "../../components/stream_estrutura/stream_estrutura.vue";
import json from "../../assets/streams.json";

type RankedMatch = {
    id: number;
    fotoDaCapaDaLive: string;
    altDaImgDeCapaDaLive: string;
    tituloDaLive: string;
    fotoDePerfilDoStreamer: string;
    altDaFotoDePerfilDoStreamer: string;
    nomeDoStreamer: string;
}

type CasualMatch = {
    id: number;
    fotoDaCapaDaLive: string;
    altDaImgDeCapaDaLive: string;
    tituloDaLive: string;
    fotoDePerfilDoStreamer: string;
    altDaFotoDePerfilDoStreamer: string;
    nomeDoStreamer: string;
}

type Tutorials = {
    id: number;
    fotoDaCapaDaLive: string;
    altDaImgDeCapaDaLive: string;
    tituloDaLive: string;
    fotoDePerfilDoStreamer: string;
    altDaFotoDePerfilDoStreamer: string;
    nomeDoStreamer: string;
}

type PlayingWithViewers = {
    id: number;
    fotoDaCapaDaLive: string;
    altDaImgDeCapaDaLive: string;
    tituloDaLive: string;
    fotoDePerfilDoStreamer: string;
    altDaFotoDePerfilDoStreamer: string;
    nomeDoStreamer: string;
}

type Challenges = {
    id: number;
    fotoDaCapaDaLive: string;
    altDaImgDeCapaDaLive: string;
    tituloDaLive: string;
    fotoDePerfilDoStreamer: string;
    altDaFotoDePerfilDoStreamer: string;
    nomeDoStreamer: string;
}

type News = {
    id: number;
    fotoDaCapaDaLive: string;
    altDaImgDeCapaDaLive: string;
    tituloDaLive: string;
    fotoDePerfilDoStreamer: string;
    altDaFotoDePerfilDoStreamer: string;
    nomeDoStreamer: string;
}

const RankedMatches: RankedMatch[] = json.RankedMatches;
const CasualMatches: CasualMatch[] = json.CasualMatches;
const Tutorials: Tutorial[] = json.Tutorials;
const PlayingWithViewers: PlayingWithViewer[] = json.PlayingWithViewers;
const Competitions: Competition[] = json.Competitions;
const Challenges: Challenge[] = json.Challenges;
const News: NewNews[] = json.News;

export default defineComponent({
    name: "SecaoDeStreams",
    components: {
        videoStreamEstrutura,
    },
    computed: {
        RankedMatches(): RankedMatch[] {
            return json.RankedMatches;
        },
        CasualMatches(): CasualMatch[] {
            return json.CasualMatches;
        },
        Tutorials(): Tutorial[] {
            return json.Tutorials;
        },
        PlayingWithViewers(): PlayingWithViewer[] {
            return json.PlayingWithViewers;
        },
        Competitions(): Competition[] {
            return json.Competitions;
        },
        Challenges(): Challenge[] {
            return json.Challenges;
        },
        News(): NewNews[] {
            return json.News;
        }
    },
});
</script>

<template>
    <section>
        <span class="titulo-secao-streams">The Best Players at the Top</span>
        <div class="btns-do-carrossel">
            <i class="fa-solid fa-left-long"></i>
            <i class="fa-solid fa-right-long"></i>
        </div>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in RankedMatches" :key="index">
                <videoStreamEstrutura class="video" :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">Relaxing with Valorant</span>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in CasualMatches" :key="index">
                <videoStreamEstrutura class="video" :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">Learn from the Pros</span>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in Tutorials" :key="index">
                <videoStreamEstrutura id="video" :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">Interacting with the Community</span>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in PlayingWithViewers" :key="index">
                <videoStreamEstrutura class="video" :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">The Strongest Teams Face Off</span>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in Competitions" :key="index">
                <videoStreamEstrutura class="video" :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">Pushing the Limits</span>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in Challenges" :key="index">
                <videoStreamEstrutura class="video" :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" />
            </div>
        </div>
    </section>
    <section>
        <span class="titulo-secao-streams">Discover What's New</span>
        <div class="streams-container">
            <div class="video" v-for="(match, index) in News" :key="index">
                <videoStreamEstrutura class="video" :fotoDaCapaDaLive="match.fotoDaCapaDaLive"
                    :altDaImgDeCapaDaLive="match.altDaImgDeCapaDaLive" :tituloDaLive="match.tituloDaLive"
                    :fotoDePerfilDoStreamer="match.fotoDePerfilDoStreamer"
                    :altDaFotoDePerfilDoStreamer="match.altDaFotoDePerfilDoStreamer"
                    :nomeDoStreamer="match.nomeDoStreamer" />
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

section {
    margin-top: 700px;
    width: 79%;
    height: 100vw;
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
    width: 1300px;
    overflow-x: auto;
    scroll-behavior: smooth;
    margin-top: 20px;
}

.streams-container .video {
    margin: 10px 0 0 10px;
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