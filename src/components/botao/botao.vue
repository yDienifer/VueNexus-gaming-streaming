<template>
    <div>
        <button>{{ tituloIntrodutorioDoBtn }}</button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "botaoDeRedimensionamento",
    props: {
        tituloIntrodutorioDoBtn: {
            type: String,
            default: "Preview",
        }
    }
})
</script>

<style scoped>
button {
    width: 100%;
    margin-bottom: 10px;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.2s ease-out;
    position: relative;
    background-color: #2C3E50;
    font-size: clamp(12px, 3vw, 16px);
    box-shadow: 0px 2.2px 1px rgba(0, 0, 0, 0.1);
    -moz-box-shadow: 0px 2.2px 1px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0px 2.2px 1px rgba(0, 0, 0, 0.1);
}

button {
    position: absolute;
    left: 50%;
    letter-spacing: 0.9px;
    transform: translate(-50%);
    cursor: pointer;
}

button {
    position: relative;
    transition: 1s all ease;
    padding: 15px;
    text-align: center;
}

button::before {
    background: var(--cor-folly);
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    transition: all 0.6s ease;
    border-radius: 3px;
}

button::before {
    width: 0%;
    height: 100%;
}

button:hover::before {
    width: 100%;
}

button:after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg,
            transparent 3%,
            var(--cor-tyrian-purple) 5%,
            var(--cor-folly) 5%);
    clip-path: var(--slice-0);
}

button:hover::after {
    background-color: transparent;
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
}

@keyframes glitch {
    0% {
        clip-path: var(--slice-1);
        transform: translate(-20px, -10px);
    }

    10% {
        clip-path: var(--slice-3);
        transform: translate(10px, 10px);
    }

    20% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 10px);
    }

    30% {
        clip-path: var(--slice-3);
        transform: translate(0px, 5px);
    }

    40% {
        clip-path: var(--slice-1);
        transform: translate(-5px, 0);
    }

    50% {
        clip-path: var(--slice-3);
        transform: translate(5px, 0);
    }

    60% {
        clip-path: var(--slice-4);
        transform: translate(5px, 10px);
    }

    70% {
        clip-path: var(--slice-2);
        transform: translate(-10px, 10px);
    }

    80% {
        clip-path: var(--slice-5);
        transform: translate(20px, -10px);
    }

    90% {
        clip-path: var(--slice-1);
        transform: translate(-10px, 0px);
    }

    100% {
        clip-path: var(--slice-1);
        transform: translate(0);
    }
}

button:hover {
    background-color: var(--cor-tyrian-purple);
    width: 100%;
}
</style>