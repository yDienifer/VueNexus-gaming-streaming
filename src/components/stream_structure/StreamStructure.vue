<template>
    <div class="containerStream">
        <div class="streamInfo">
            <img id="streamCover" :src="streamCoverImage" :alt="streamCoverImageAlt" />
            <span>{{ streamTitle }}</span>
            <span>{{ streamType }}</span>
        </div>
        <div class="streamerProfile">
            <img :src="streamerProfileImage" :alt="streamerProfileAlt" />
            <span>{{ streamerName }}</span>
        </div>
        <div class="streamTag">
            <ul>
                <li>{{ tagName }}</li>
            </ul>
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "StreamStructure",
    props: {
        streamCoverImage: {
            type: String,
            default: "The live stream is unavailable, sorry! :(",
        },
        streamCoverImageAlt: {
            type: String,
            default: "The live stream is unavailable, sorry! :(",
        },
        streamTitle: {
            type: String,
        },
        streamerProfileImage: {
            type: String,
        },
        streamerProfileAlt: {
            type: String,
            default: "Unavailable",
        },
        streamerName: {
            type: String,
            default: "Unavailable",
        },
        tagName: {
            type: String,
            default: "Unavailable",
        },
        streamType: {
            type: String,
        }
    },
})
</script>
<style scoped>
.containerStream {
    width: 22vw;
}

.containerStream img,
.streamInfo span,
.streamerProfile {
    width: 100%;
}

.streamInfo,
.streamerProfile {
    cursor: pointer;
}

.streamInfo {
    position: relative;
}

.streamInfo span {
    display: -webkit-box;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    margin-top: 10px;
    font-size: clamp(14px, 3vw, 18px);
}

.streamInfo span:nth-of-type(2) {
    position: absolute;
    top: 0;
    width: 30%;
    background-color: var(--cor-folly);
    text-align: center;
    padding: 8px;
    border-radius: 5px;
    font-size: clamp(12px, 3vw, 16px);
}

.streamerProfile {
    margin-top: 10px;
    display: flex;
    align-items: center;
}

.streamerProfile img {
    width: 15%;
    margin-right: 10px;
}

.streamerProfile span {
    font-size: clamp(12px, 3vw, 16px);
}

.streamTag li {
    background-color: rgba(129, 129, 129, 0.295);
    width: 50%;
    text-align: center;
    margin-top: 10px;
    padding: 10px;
    font-size: 12px;
    cursor: pointer;
    border-radius: 50px;
}

@media (max-width: 768px) {
    .streamInfo span:nth-of-type(2) {
        width: 50%;
    }

    .streamTag li {
        width: 80%;
    }
}

@media (max-width: 768px) {
    .containerStream {
        width: 13em;
    }
}
</style>