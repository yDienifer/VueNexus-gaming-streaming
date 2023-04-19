<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import gsap from "gsap";
import json from "../../../public/static/json/streams.json";

import carrosselDeStreams from '../carrossel_de_streams/carrossel_de_streams.vue';

type Stream = {
    id: number;
    fotoDaCapaDaLive?: string;
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

        const tituloSecaoStreams = ref();

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
            News,
            tituloSecaoStreams
        }
    },
    mounted() {
        // Criando uma instância do Intersection Observer para o Ranked Matches
        const seçãoRankedMatchesComGSAP = document.querySelectorAll('.secaoDeStreamRankedMatches');
        const ObservandoRankedMatches = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                /* each = percorre as entradas recebidas do IntersectionObserver, que nada
                mais são do que informações do elemento observado */

                // entry = acessa as entradas fornecidas pelo each
                if (entry.isIntersecting) {
                    /* Verificando se o elemento observado
                    está atualmente visível na tela. Se sim: */

                    gsap.from(".secaoDeStreamRankedMatches", {
                        duration: 1.6,
                        y: 30,
                        ease: "back.out(3)"
                    });
                }
            });
        });

        seçãoRankedMatchesComGSAP.forEach(element => {
            ObservandoRankedMatches.observe(element);
        });

        // ///////////////////// Casual Matches
        const seçãoCasualMatchesComGSAP = document.querySelectorAll('.secaoDeStreamCasualMatches');
        const ObservandoCasualMatches = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(".secaoDeStreamCasualMatches", {
                        duration: 1.6,
                        y: 30,
                        ease: "back.out(3)"
                    });
                }
            });
        });

        seçãoCasualMatchesComGSAP.forEach(element => {
            ObservandoCasualMatches.observe(element);
        });

        // ///////////////////// Tutoriais
        const seçãoTutoriaisComGSAP = document.querySelectorAll('.secaoDeStreamTutoriais');
        const ObservandoTutoriais = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(".secaoDeStreamTutoriais", {
                        duration: 1.6,
                        y: 30,
                        ease: "back.out(3)"
                    });
                }
            });
        });

        seçãoTutoriaisComGSAP.forEach(element => {
            ObservandoTutoriais.observe(element);
        });

        // ///////////////////// PlayingWithViewers
        const seçãoPlayingWithViewersComGSAP = document.querySelectorAll('.secaoDeStreamPlayingWithViewers');
        const ObservandoPlayingWithViewers = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(".secaoDeStreamPlayingWithViewers", {
                        duration: 1.6,
                        y: 30,
                        ease: "back.out(3)"
                    });
                }
            });
        });

        seçãoPlayingWithViewersComGSAP.forEach(element => {
            ObservandoPlayingWithViewers.observe(element);
        });

        // 

        // ///////////////////// Competitions
        const seçãoCompetitionsComGSAP = document.querySelectorAll('.secaoDeStreamCompetitions');
        const ObservandoCompetitions = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(".secaoDeStreamCompetitions", {
                        duration: 1.6,
                        y: 30,
                        ease: "back.out(3)"
                    });
                }
            });
        });

        seçãoCompetitionsComGSAP.forEach(element => {
            ObservandoCompetitions.observe(element);
        });

        // ///////////////////// Challenges
        const seçãoChallengesComGSAP = document.querySelectorAll('.secaoDeStreamChallenges');
        const ObservandoChallenges = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(".secaoDeStreamChallenges", {
                        duration: 1.6,
                        y: 30,
                        ease: "back.out(3)"
                    });
                }
            });
        });

        seçãoChallengesComGSAP.forEach(element => {
            ObservandoChallenges.observe(element);
        });

        // ///////////////////// News
        const seçãoNewsComGSAP = document.querySelectorAll('.secaoDeStreamNews');
        const ObservandoNews = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    gsap.from(".secaoDeStreamNews", {
                        duration: 1.6,
                        y: 30,
                        ease: "back.out(3)"
                    });
                }
            });
        });

        seçãoNewsComGSAP.forEach(element => {
            ObservandoNews.observe(element);
        });
    }
});
</script>

<template>
    <section class="secaoDeStreamRankedMatches">
        <h1 id="tituloSecaoRankedMatches">The Best Players at the Top</h1>
        <carrosselDeStreams :streams="RankedMatches" />
    </section>
    <section class="secaoDeStreamCasualMatches">
        <h1 id="tituloSecaoCasualMatches">Relaxing with Valorant</h1>
        <carrosselDeStreams :streams="CasualMatches" />
    </section>
    <section class="secaoDeStreamTutoriais">
        <h1 id="tituloSecaoTutoriais">Learn from the Pros</h1>
        <carrosselDeStreams :streams="Tutorials" />
    </section>
    <section class="secaoDeStreamPlayingWithViewers">
        <h1 id="tituloSecaoPlayingWithViewers">Interacting with the Community</h1>
        <carrosselDeStreams :streams="PlayingWithViewers" />
    </section>
    <section class="secaoDeStreamCompetitions">
        <h1 id="tituloSecaoCompetitions">The Strongest Teams Face Off</h1>
        <carrosselDeStreams :streams="Competitions" />
    </section>
    <section class="secaoDeStreamChallenges">
        <h1 id="tituloSecaoChallenges">Pushing the Limits</h1>
        <carrosselDeStreams :streams="Challenges" />
    </section>
    <section class="secaoDeStreamNews">
        <h1 id="tituloSecaoNews">Discover What's New</h1>
        <carrosselDeStreams :streams="News" />
    </section>
</template>

<style scoped>
#tituloSecaoRankedMatches,
#tituloSecaoCasualMatches,
#tituloSecaoTutoriais,
#tituloSecaoPlayingWithViewers,
#tituloSecaoCompetitions,
#tituloSecaoChallenges,
#tituloSecaoNews {
    font-size: clamp(18px, 3vw, 32px);
    display: flex;
    justify-content: center;
    margin-bottom: -35px;
    padding: 0;
    font-family: "Valorant";
    font-weight: normal;
}

section {
    margin-top: 80px;
    width: 77vw;
    padding: 10px 1.5rem 0 0;
}

section:nth-of-type(7) {
    margin-bottom: 110px;
}

@media (max-width: 1024px) {
    section {
        width: 70vw;
    }
}

@media (max-width: 768px) {
    section {
        width: 98vw;
        margin-top: 80px;
        padding: 10px 1.5rem 0 0;
    }
}

@media (max-width: 425px) {
    section {
        width: 97vw;
        margin-left: 10px;
        margin-top: 430px;
    }

    #tituloSecaoRankedMatches,
    #tituloSecaoCasualMatches,
    #tituloSecaoTutoriais,
    #tituloSecaoPlayingWithViewers,
    #tituloSecaoCompetitions,
    #tituloSecaoChallenges,
    #tituloSecaoNews {
        margin-bottom: 0;
    }

    section:nth-of-type(1) {
        margin-top: 0;
    }
}

@media (max-width: 320px) {
    section:nth-of-type(1) {
        margin-top: 120px;
    }
}
</style>
