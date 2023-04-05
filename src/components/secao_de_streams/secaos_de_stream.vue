<script lang="ts">
import { defineComponent, ref } from 'vue';
import json from "../../assets/streams.json";

import carrosselDeStreams from '../carrossel_de_streams/carrossel_de_streams.vue'

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
        carrosselDeStreams
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

        return {
            RankedMatches,
            CasualMatches,
            Tutorials,
            PlayingWithViewers,
            Competitions,
            Challenges,
            News
        }
    },
});
</script>

<template>
    <section>
        <span class="titulo-secao-streams">The Best Players at the Top</span>
        <carrosselDeStreams :streams="RankedMatches" />
    </section>
    <section>
        <span class="titulo-secao-streams">Relaxing with Valorant</span>
        <carrosselDeStreams :streams="CasualMatches" />
    </section>
    <section>
        <span class="titulo-secao-streams">Learn from the Pros</span>
        <carrosselDeStreams :streams="Tutorials" />
    </section>
    <section>
        <span class="titulo-secao-streams">Interacting with the Community</span>
        <carrosselDeStreams :streams="PlayingWithViewers" />
    </section>
    <section>
        <span class="titulo-secao-streams">The Strongest Teams Face Off</span>
        <carrosselDeStreams :streams="Competitions" />
    </section>
    <section>
        <span class="titulo-secao-streams">Pushing the Limits</span>
        <carrosselDeStreams :streams="Challenges" />
    </section>
    <section>
        <span class="titulo-secao-streams">Discover What's New</span>
        <carrosselDeStreams :streams="News" />
    </section>
</template>

<style scoped>
.titulo-secao-streams {
    font-size: clamp(18px, 3vw, 32px);
}

section {
    margin-top: 100px;
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

@media (max-width: 1024px) {
    section {
        width: 72vw;
    }
}

@media (max-width: 768px) {
    section {
        width: 88vw;
        margin-top: 450px;
        height: 100vw;
        padding: 10px 1.5rem 0 0;
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