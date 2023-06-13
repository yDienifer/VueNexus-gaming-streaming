<template>
    <article>
        <div class="informationAboutMusicContainer">
            <img :src="musicCover" :alt="altTextOfMusicCover" />
            <div class="ContainerTitleAndAuthorInformation">
                <span id="musicTitle">{{ musicTitle }}</span>
                <span id="musicArtist">{{ musicArtist }}</span>
            </div>
            <div class="btnLikeMusicContainer">
                <i class="fa-regular fa-heart" id="naoCurtido"></i>
                <i class="fa-solid fa-heart" id="curtido"></i>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "MusicStructure",
    props: {
        musicTitle: {
            type: String
        },
        musicArtist: {
            type: String
        },
        musicCover: {
            type: String
        },
        altTextOfMusicCover: {
            type: String
        }
    },
    setup() {
        
    }
})
</script>

<style scoped>

/* .informationAboutMusicContainer {
    display: flex;
    flex-direction: column;
} */

.informationAboutMusicContainer img {
    border-radius: 5px;
    width: 180px;
    margin: 0;
}

.ContainerTitleAndAuthorInformation {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}

.informationAboutMusicContainer #musicArtist {
    color: var(--cor-folly);
    font-size: 15px;
    margin-top: 2px;
}

.btnLikeMusicContainer i {
    cursor: pointer;
    font-size: 24px;
}

.btnLikeMusicContainer #naoCurtido {
    color: var(--cor-folly);
}
</style>