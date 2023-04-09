<script setup lang="ts">
import botaoDeRedimensionamento from "../botao/botao.vue";
</script>

<template>
    <div class="bannerContainer"><video autoplay muted loop>
            <source src="../../../public/static/video/BowedAcademicJenny.mp4" type="video/mp4" />
        </video>
        <div id="bannerBackground"></div>
        <div class="conteudoDoBanner">

            <h1>Experience the adrenaline of Valorant's best plays</h1>
            <!-- Adiciona um scroll reveal aq -->
            <botaoDeRedimensionamento id="btn" titulo-introdutorio-do-btn="Get in on the Action" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "BannerDoSite",
    components: {
        botaoDeRedimensionamento,
    }
})
</script>

<style scoped>
.bannerContainer {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    width: 77%;
    position: relative;
    z-index: 0;
}

#btn {
    width: 50%;
    margin-top: 15px;
}

video {
    filter: grayscale(0.2);
    opacity: 0.5;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}

.conteudoDoBanner {
    position: absolute;
    margin: 20% 0 0 45px;
    width: 90%;
    max-width: 750px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(1.5px);
    -webkit-backdrop-filter: blur(1.5px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    padding: 30px;
}

.conteudoDoBanner h1 {
    font-family: "League Gothic", sans-serif;
    font-size: clamp(2rem, 5vw, 5rem);
    width: 90%;
    text-transform: uppercase;
    color: white;
}

@media (max-width: 1024px) {
    .bannerContainer {
        width: 70vw;
    }
}

@media (max-width: 768px) {
    .bannerContainer {
        width: 98vw;
    }
}

@media (max-width: 425px) {
    .bannerContainer {
        width: 100vw;
        height: 100vw;
        top: 0;
    }

    .conteudoDoBanner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 100px 0 0 10px;
    }

    #bannerBackground {
        background-image: url(/public/static/img/banner/banner.png);
        background-repeat: no-repeat;
        opacity: 0.6;
        filter: grayscale(0.5);
        width: 100vw;
        height: 950px;
        position: absolute;
        border-radius: 10px;
        z-index: -1;
        background-size: 88%;
        background-size: 310%;
        background-position: -200px 0;
        background-repeat: no-repeat;
        border-radius: 0;
    }

    video {
        display: none;
    }
}

@media (max-width: 425px) {
    .bannerContainer {
        margin-top: 0;
    }
}
</style>
