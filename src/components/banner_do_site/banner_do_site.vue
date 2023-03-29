<script setup lang="ts"></script>

<template>
    <div class="bannerContainer">
        <div id="bannerBackground"></div>
        <div class="conteudoDoBanner">
            <h1></h1>
            <!-- Adiciona um scroll reveal aq -->
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "BannerDoSite",
};
</script>

<style scoped>
.bannerContainer {
    position: relative;
    top: 10px;
    width: 79%;
    height: 50vw;
    z-index: -2;
}

#bannerBackground {
    background-image: url(/public/static/img/banner/banner.png);
    background-repeat: no-repeat;
    background-size: 80%;
    opacity: 0.9;
    filter: grayscale(0.2);
    width: 100vw;
    height: 100vw;
    position: absolute;
    border-radius: 10px;
    z-index: -1;
}

.bannerContainer h1 {
    font-family: "League Gothic", sans-serif;
    font-size: clamp(2rem, 5vw, 5rem);
    width: 90vw;
    max-width: 700px;
    text-transform: uppercase;
    color: var(--cor-folly);
    text-shadow: 2px 1px 1px white;
}

.conteudoDoBanner {
    position: absolute;
    top: 43%;
    left: 42%;
    transform: translate(-50%, -50%);
}
</style>
