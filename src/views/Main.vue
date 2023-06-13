<template>
    <div>
        <main id="myScrollbar">
            <template v-if="isHomeRoute">
                <span id="overlayValorantText">Valorant</span>
                <div id="lineOverlay"></div>
                <SiteBanner bannerTitle="Experience the adrenaline of Valorant's best plays">
                    <video autoplay muted loop>
                        <source src="public/static/video/Valorant_Trailer.mp4" type="video/mp4" />
                    </video>
                </SiteBanner>
                <div class="streamSection">
                    <div class="streamSectionRankedMatches">
                        <Carousel :carouselTitle="StreamRankedMatches[0]?.informationAboutTheSection?.carouselTitle || ''"
                            :carouselCaption="StreamRankedMatches[0]?.informationAboutTheSection?.carouselCaption || ''">
                            <template v-slot:default>
                                <div class="carrosselItem" v-for="(match, index) in StreamRankedMatches" :key="index">
                                    <StreamStructure :streamCoverImage="match.streamCoverImage"
                                        :streamCoverImageAlt="match.streamCoverImageAlt" :streamTitle="match.streamTitle"
                                        :streamerProfileImage="match.streamerProfileImage"
                                        :streamerProfileAlt="match.streamerProfileAlt" :streamerName="match.streamerName"
                                        :tagName="match.tagName" :streamType="match.streamType" />
                                </div>
                            </template>
                        </Carousel>
                    </div>
                    <div class="StreamSectionCasualMatches">
                        <Carousel :carouselTitle="StreamCasualMatches[0]?.informationAboutTheSection?.carouselTitle || ''"
                            :carouselCaption="StreamCasualMatches[0]?.informationAboutTheSection?.carouselCaption || ''">
                            <template v-slot:default>
                                <div class="carrosselItem" v-for="(match, index) in StreamCasualMatches" :key="index">
                                    <StreamStructure :streamCoverImage="match.streamCoverImage"
                                        :streamCoverImageAlt="match.streamCoverImageAlt" :streamTitle="match.streamTitle"
                                        :streamerProfileImage="match.streamerProfileImage"
                                        :streamerProfileAlt="match.streamerProfileAlt" :streamerName="match.streamerName"
                                        :tagName="match.tagName" :streamType="match.streamType" />
                                </div>
                            </template>
                        </Carousel>
                    </div>
                    <div class="streamSectionTutorials">
                        <Carousel :carouselTitle="StreamTutorials[0]?.informationAboutTheSection?.carouselTitle || ''"
                            :carouselCaption="StreamTutorials[0]?.informationAboutTheSection?.carouselCaption || ''">
                            <template v-slot:default>
                                <div class="carrosselItem" v-for="(match, index) in StreamTutorials" :key="index">
                                    <StreamStructure :streamCoverImage="match.streamCoverImage"
                                        :streamCoverImageAlt="match.streamCoverImageAlt" :streamTitle="match.streamTitle"
                                        :streamerProfileImage="match.streamerProfileImage"
                                        :streamerProfileAlt="match.streamerProfileAlt" :streamerName="match.streamerName"
                                        :tagName="match.tagName" :streamType="match.streamType" />
                                </div>
                            </template>
                        </Carousel>
                    </div>
                    <div class="streamSectionPlayingWithViewers">
                        <Carousel
                            :carouselTitle="StreamPlayingWithViewers[0]?.informationAboutTheSection?.carouselTitle || ''"
                            :carouselCaption="StreamPlayingWithViewers[0]?.informationAboutTheSection?.carouselCaption || ''">
                            <template v-slot:default>
                                <div class="carrosselItem" v-for="(match, index) in StreamPlayingWithViewers" :key="index">
                                    <StreamStructure :streamCoverImage="match.streamCoverImage"
                                        :streamCoverImageAlt="match.streamCoverImageAlt" :streamTitle="match.streamTitle"
                                        :streamerProfileImage="match.streamerProfileImage"
                                        :streamerProfileAlt="match.streamerProfileAlt" :streamerName="match.streamerName"
                                        :tagName="match.tagName" :streamType="match.streamType" />
                                </div>
                            </template>
                        </Carousel>
                    </div>
                    <div class="streamSectionCompetitions">
                        <Carousel :carouselTitle="StreamCompetitions[0]?.informationAboutTheSection?.carouselTitle || ''"
                            :carouselCaption="StreamCompetitions[0]?.informationAboutTheSection?.carouselCaption || ''">
                            <template v-slot:default>
                                <div class="carrosselItem" v-for="(match, index) in StreamCompetitions" :key="index">
                                    <StreamStructure :streamCoverImage="match.streamCoverImage"
                                        :streamCoverImageAlt="match.streamCoverImageAlt" :streamTitle="match.streamTitle"
                                        :streamerProfileImage="match.streamerProfileImage"
                                        :streamerProfileAlt="match.streamerProfileAlt" :streamerName="match.streamerName"
                                        :tagName="match.tagName" :streamType="match.streamType" />
                                </div>
                            </template>
                        </Carousel>
                    </div>
                    <div class="streamSectionChallenges">
                        <Carousel :carouselTitle="StreamChallenges[0]?.informationAboutTheSection?.carouselTitle || ''"
                            :carouselCaption="StreamChallenges[0]?.informationAboutTheSection?.carouselCaption || ''">
                            <template v-slot:default>
                                <div class="carrosselItem" v-for="(match, index) in StreamChallenges" :key="index">
                                    <StreamStructure :streamCoverImage="match.streamCoverImage"
                                        :streamCoverImageAlt="match.streamCoverImageAlt" :streamTitle="match.streamTitle"
                                        :streamerProfileImage="match.streamerProfileImage"
                                        :streamerProfileAlt="match.streamerProfileAlt" :streamerName="match.streamerName"
                                        :tagName="match.tagName" :streamType="match.streamType" />
                                </div>
                            </template>
                        </Carousel>
                    </div>
                    <div class="streamSectionNews">
                        <Carousel :carouselTitle="StreamNews[0]?.informationAboutTheSection?.carouselTitle || ''"
                            :carouselCaption="StreamNews[0]?.informationAboutTheSection?.carouselCaption || ''">
                            <template v-slot:default>
                                <div class="carrosselItem" v-for="(match, index) in StreamNews" :key="index">
                                    <StreamStructure :streamCoverImage="match.streamCoverImage"
                                        :streamCoverImageAlt="match.streamCoverImageAlt" :streamTitle="match.streamTitle"
                                        :streamerProfileImage="match.streamerProfileImage"
                                        :streamerProfileAlt="match.streamerProfileAlt" :streamerName="match.streamerName"
                                        :tagName="match.tagName" :streamType="match.streamType" />
                                </div>
                            </template>
                        </Carousel>
                    </div>
                </div>
                <div class="valorantContainerMusicSection">
                    <div class="musicasContainer">
                        <Carousel :songs-valorant="Songs"
                            :carouselTitle="Songs[0]?.informationAboutTheSection?.carouselTitle || ''"
                            :carouselCaption="Songs[0]?.informationAboutTheSection?.carouselCaption || ''">
                            <template v-slot:default>
                                <div class="carrosselItem" v-for="(match, index) in Songs" :key="index">
                                    <MusicStructure :musicCover="match.musicCover"
                                        :alt-text-of-music-cover="match.altTextOfMusicCover" :musicTitle="match.musicTitle"
                                        :musicArtist="match.musicArtist" />
                                </div>
                            </template>
                        </Carousel>
                    </div>
                </div>
            </template>
            <template v-else-if="isCommunityRoute">
                <Community />
            </template>
            <RouterView v-else />
        </main>
    </div>
</template>
  
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Scrollbar from 'smooth-scrollbar';

import SiteBanner from "../components/site_banner/SiteBanner.vue";
import Carousel from "../components/carousel/Carousel.vue";

import MusicStructure from "../components/music_structure/MusicStructure.vue";
import StreamStructure from "../components/stream_structure/StreamStructure.vue"

// Json da seção de músicas do Valorant
import jsonMusicSection from "../../public/static/json/ValorantSongs.json";

type valorantSongs = {
    id: number,
    musicCover: string,
    altTextOfMusicCover: string,
    musicTitle: string,
    musicArtist: string,
    informationAboutTheSection?: {
        carouselTitle: string,
        carouselCaption: string
    }
}

// Json da seção de streams
import jsonStreamsSection from "../../public/static/json/Streams.json";

type streamCategories = {
    id: number,
    sectionTitle: string,
    className: string,
    streamCoverImage: string,
    streamCoverImageAlt: string,
    streamTitle: string,
    streamerProfileImage: string,
    streamerProfileAlt: string,
    streamerName: string,
    tagName: string,
    streamType: string,
    informationAboutTheSection?: {
        carouselTitle: string,
        carouselCaption: string
    }
}

// Rotas
import Community from "../views/sidebar_shortcuts/Community.vue";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
    name: "MainContent",
    components: {
        SiteBanner,
        Community,
        Carousel,
        MusicStructure,
        StreamStructure
    },
    setup() {

        // Json da seção de músicas
        const Songs: valorantSongs[] = jsonMusicSection.Songs;

        // Json das seções de streams
        const StreamRankedMatches = reactive(jsonStreamsSection.RankedMatches);
        const StreamCasualMatches = reactive(jsonStreamsSection.CasualMatches);
        const StreamTutorials = reactive(jsonStreamsSection.Tutorials);
        const StreamPlayingWithViewers = reactive(jsonStreamsSection.PlayingWithViewers);
        const StreamCompetitions = reactive(jsonStreamsSection.Competitions);
        const StreamChallenges = reactive(jsonStreamsSection.Challenges);
        const StreamNews = reactive(jsonStreamsSection.News);

        // const StreamRankedMatches = computed(() => jsonStreamsSection.RankedMatches);

        return {
            Songs,
            StreamRankedMatches,
            StreamCasualMatches,
            StreamTutorials,
            StreamPlayingWithViewers,
            StreamCompetitions,
            StreamChallenges,
            StreamNews
        };
    },
    data() {
        return {
            scrollbar: null as any
        };
    },
    mounted() {

        // Animação no texto e overlay "Valorant"
        const overlayValorantText = document.getElementsByClassName(
            "overlayValorantText"
        );

        const observeOverlayValorantText = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.from(".overlayValorantText", {
                            opacity: 0,
                            delay: 1,
                            duration: 3,
                            ease: "power2.out",
                            x: 0,
                            xPercent: -50,
                        });
                        observeOverlayValorantText.unobserve(entry.target);
                    }
                });
            }
        );

        Array.from(overlayValorantText).forEach((element) => {
            observeOverlayValorantText.observe(element);
        });
    },
    computed: {

        // Router
        isHomeRoute(): boolean {
            return this.$route.path === "/" || this.$route.path === "/home";
        },
        isCommunityRoute(): boolean {
            return this.$route.path.toLowerCase() === "/community";
        },
    },
    watch: {

        // Scrollbar
        $route(to, from) {
            this.checkScrollbar();
        },
    },
    methods: {

        // Scrollbar
        checkScrollbar() {
            console.log("checkScrollbar");
            if (this.$route.path === "/account" && this.scrollbar) {
                this.scrollbar.destroy();
                this.scrollbar = null;
                document.body.style.overflow = "hidden";
            } else if (this.isHomeRoute && !this.scrollbar) {
                let myScrollbar = document.getElementById("myScrollbar");
                if (myScrollbar) {
                    this.scrollbar = Scrollbar.init(myScrollbar);
                }
            }
        },
    }
});
</script>

<style scoped>
main {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: flex-start;
    position: absolute;
    top: 0;
    width: 100%;
}

main #overlayValorantText {
    color: transparent;
    font-family: "Valorant";
    font-size: 3em;
    font-size: 10em;
    left: 60%;
    mix-blend-mode: luminosity;
    padding: 0;
    position: absolute;
    transform: translateX(-50%);
    top: 53%;
    -webkit-text-stroke-color: #46464644;
    -webkit-text-stroke-width: 1px;
    transform: translate(-50%, -50%);
}

#navigationBar {
    position: relative;
    z-index: 1;
}

#lineOverlay {
    background-color: #fff;
    height: 100%;
    left: 84%;
    opacity: 0.3;
    position: absolute;
    top: 0;
    transition: 0.5s;
    width: 1px;
}

#lineOverlay.scrolled {
    background-color: var(--cor-folly);
}

main::-webkit-scrollbar {
    width: 0px;
}

.streamSection,
.valorantContainerMusicSection {
    position: relative;
    margin-top: 50px;
    width: 97%;
}

.streamSection div {
    margin-bottom: 20px;
}

video {
    opacity: 0.35;
    z-index: 1;
}
</style>