<template>
    <article ref="carouselContainer">
        <div class="carouselBtns">
            <i class="fa-solid fa-left-long" @click="btnBack"></i>
            <i class="fa-solid fa-right-long" @click="btnNext"></i>
            <span>Explore</span>
        </div>
        <div class="carouselTitle"> 
            <h1>{{ carouselTitle }}</h1>
            <h3>{{ carouselCaption }}</h3>
        </div>
        <div class="carouselContainer scroll-content" ref="carousel" id="myScrollbar">
            <div class="carouselItemContainer">
                <slot></slot>
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import gsap from "gsap";

import Scrollbar from 'smooth-scrollbar';

export default defineComponent({
    name: "Carousel",
    data() {
        return {
            scrollbar: null as any
        }
    },
    props: {
        carouselTitle: {
            type: String,
        },
        carouselCaption: {
            type: String
        }
    },
    setup() {
        const carousel = ref(null);
        const carouselContainer = ref<HTMLElement | null>(null);

        const btnBack = (e: Event) => {
            e.preventDefault();
            console.log("Back button clicked!");
            const carouselElement = carousel.value! as HTMLElement;
            if (carouselElement.offsetWidth) {
                carouselElement.scrollLeft -= carouselElement.offsetWidth;
            }
        };

        const btnNext = (e: Event) => {
            e.preventDefault();
            console.log("Next button clicked!");
            const carouselElement = carousel.value! as HTMLElement;
            if (carouselElement.offsetWidth) {
                carouselElement.scrollLeft += carouselElement.offsetWidth;
            }
        };

        onMounted(() => {
            const options = {
                root: null,
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        gsap.from(entry.target, {
                            duration: 1.3,
                            y: 100,
                            yPercent: 40,
                        });
                        observer.unobserve(entry.target);
                    }
                });
            }, options);

            observer.observe(carouselContainer.value);
        });

        return {
            btnBack,
            btnNext,
            carousel,
            carouselContainer,
        };
    },
    mounted() {
        if (this.$refs.carouselContainer) {
            this.scrollbar = Scrollbar.init(this.$refs.carouselContainer as HTMLElement);
        }
    }
});
</script>

<style scoped>
.carouselContainer::-webkit-scrollbar {
    width: 0px;
}

.carouselContainer,
.carouselTitle {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin-left: auto;
    max-width: 1020px;
    overflow: auto;
    position: relative;
    /* padding-left: 15px; */
    /* padding-right: 15px; */
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    width: 80%;
}

.carouselTitle {
    margin-bottom: 45px;
}

.carouselBtns {
    position: absolute;
    right: 0;
    top: 30px;
    z-index: 2;
}

.carouselBtns i {
    border: 1px solid white;
    border-radius: 100%;
    cursor: pointer;
    padding: 10px;
    transition: all 0.4s;
}

.carouselBtns span {
    border: 1px solid white;
    border-radius: 5px;
    font-family: 'Valorant';
    margin-left: 20px;
    padding: 10px 15px;
    transition: all 0.4s;
}

.carouselBtns i:nth-of-type(1) {
    margin-right: 20px;
}

.carouselBtns i:hover {
    border: 1px solid var(--cor-folly);
    color: var(--cor-folly);
}

.carouselItemContainer {
    display: flex;
}

.carouselItemContainer>>>* {
    margin-right: 5px;
}

.carouselTitle h1 {
    color: var(--cor-folly);
    font-family: 'Valorant';
    font-size: 32px;
}

@media (max-width: 425px) {
    .carouselBtns {
        display: none;
    }
}
</style>