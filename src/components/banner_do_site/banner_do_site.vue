<script setup lang="ts"></script>

<template>
    <div class="bannerContainer">
        <div id="bannerBackground"></div>
        <div class="conteudoDoBanner">
            <h1>Displaying the best Valorant plays in real-time and vivid colors!</h1>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: "BannerDoSite",
}
</script>

<style scoped>
.bannerContainer {
    position: relative;
    width: 100%;
    height: 50vw;
}

#bannerBackground {
    background-image: url(/public/static/img/banner/banner.png);
    background-repeat: no-repeat;
    background-size: 125%;
    opacity: 0.9;
    width: 100vw;
    height: 100vw;
    position: absolute;
    z-index: -1;
}

.bannerContainer h1 {
    font-family: 'League Gothic', sans-serif;
    font-size: clamp(2rem, 5vw, 5rem);
    width: 90vw;
    max-width: 700px;
    text-transform: uppercase;
    color: white;
    text-shadow: 4px 2px 1px var(--cor-folly);
}

.conteudoDoBanner {
    position: absolute;
    top: 43%;
    left: 32%;
    transform: translate(-50%, -50%);
}

</style>