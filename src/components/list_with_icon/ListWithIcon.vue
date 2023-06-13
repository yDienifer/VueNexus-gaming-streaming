<template>
    <ul class="sectionShortcuts">
        <li v-for="(shortcut, index) in shortcuts" :key="shortcut.id">
            <RouterLink :to="shortcut.shortcutLink">
                <i :class="shortcut.shortcutIcon" id="icon"></i> {{ shortcut.shortcutName }}
            </RouterLink>
        </li>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
    name: "ListWithIcon",
    props: {
        shortcutIcon: {
            type: String
        },
        shortcutLink: {
            type: String
        },
        shortcutName: {
            type: String
        },
        shortcuts: {
            type: Array as () => any[],
            required: true
        }
    }
})
</script>

<style scoped>
.sectionShortcuts #icon {
    color: var(--cor-folly);
    margin: 15px 5px 0 0;
}

.sectionShortcuts li {
    font-size: clamp(14px, 2vw, 15px);
}

.sectionShortcuts:nth-of-type(1) {
    border-bottom: 1px solid #7d7d7d5a;
    padding-bottom: 20px;
}
</style>