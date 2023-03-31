<script setup lang="ts">
</script>

<template>
    <div class="bannerContainer">
        <div id="bannerBackground"></div>
        <div class="conteudoDoBanner">
            <h1>Watch the most exciting Valorant matches in real-time.</h1>
            <button>Meet the streamers</button>
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
    background-size: 100%;
    opacity: 0.9;
    filter: grayscale(0.5);
    width: 100vw;
    height: 100vw;
    position: absolute;
    border-radius: 10px;
    z-index: -1;
}


.conteudoDoBanner {
    position: absolute;
    top: 50%;
    margin-left: 45px;
    transform: translateY(-50%);
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
    width: 100%;
    text-transform: uppercase;
    color: white;
}

.conteudoDoBanner button {
    background-color: var(--cor-folly);
    padding: 15px 0;
    width: 35%;
    border: none;
    font-size: clamp(12px, 3vw, 16px);
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
}

@media (max-width: 1024px) {
    .bannerContainer {
        width: 72vw;
    }

    #bannerBackground {
        background-size: 72%;
    }
}

@media (max-width: 768px) {
    .bannerContainer {
        width: 88vw;
    }

    #bannerBackground {
        background-size: 88%;
    }
}

@media (max-width: 425px) {
    .bannerContainer {
        width: 100vw;
        height: 100vw;
        top: 0;
    }

    .conteudoDoBanner button {
    width: 85%;
}

    .conteudoDoBanner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 100px 0 0 10px;
    }

    #bannerBackground {
        background-size: 190%;
        border-radius: 0;
    }
}
</style>
