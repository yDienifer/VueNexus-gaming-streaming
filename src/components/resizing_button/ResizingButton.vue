<template>
    <div>
        <button>{{ introductoryButtonTitle }}</button>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: "ResizingButton",
    props: {
        introductoryButtonTitle: {
            type: String,
            default: "Preview",
        }
    }
})
</script>
<style scoped>
button {
    background-color: var(--cor-rich-black);
    border: none;
    border-radius: 3px;
    box-shadow: 0px 2.2px 1px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    font-size: clamp(12px, 3vw, 16px);
    letter-spacing: 0.9px;
    margin-bottom: 10px;
    padding: 15px;
    position: relative;
    text-align: center;
    transition: 0.2s ease-out;
    width: 100%;
}

button::before {
    background: var(--cor-folly);
    border-radius: 3px;
    content: "";
    height: 100%;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease;
    width: 0%;
    z-index: -1;
}

button:hover::before {
    width: 100%;
}

button::after {
    --slice-0: inset(50% 50% 50% 50%);
    --slice-1: inset(80% -6px 0 0);
    --slice-2: inset(50% -6px 30% 0);
    --slice-3: inset(10% -6px 85% 0);
    --slice-4: inset(40% -6px 43% 0);
    --slice-5: inset(80% -6px 5% 0);

    background: linear-gradient(45deg,
            transparent 3%,
            var(--cor-tyrian-purple) 5%,
            var(--cor-folly) 5%);
    clip-path: var(--slice-0);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

button:hover::after {
    animation: 1s glitch;
    animation-timing-function: steps(2, end);
    background-color: transparent;
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
    background-color: #f24464e8;
    width: 100%;
}
</style>