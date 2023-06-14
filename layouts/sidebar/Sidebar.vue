<template>
  <div class="sidebarContainer">
    <section class="discoverContainer">
      <span>Explore</span>
      <ListWithIcon :shortcuts="discoverShortcuts" />
    </section>
    <section class="communityForumContainer">
      <span>User Haven</span>
      <ListWithIcon :shortcuts="communityForumShortcuts" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import ListWithIcon from '../../src/components/list_with_icon/ListWithIcon.vue';
import json from '../../public/static/json/ShortcutsSidebar.json';

export default defineComponent({
  name: "Sidebar",
  components: {
    ListWithIcon
  },
  setup() {
    const shortcuts = reactive(json.ShortcutsSidebar);

    const communityForumShortcuts = computed(() => shortcuts.CommunityForumSection);
    const discoverShortcuts = computed(() => shortcuts.DiscoverSection);

    return {
      communityForumShortcuts,
      discoverShortcuts,
    };
  },
});
</script>

<style scoped>
.sidebarContainer {
  background-color: var(--cor-rich-black);
  border-top-right-radius: 8px;
  display: flex;
  flex-direction: column;
  float: left;
  height: 100%;
  left: 0;
  margin: 0 auto;
  margin-top: 20px;
  padding: 0 20px;
  position: absolute;
  z-index: 2;
}

/* General settings */
.sidebarContainer section {
  margin: 10px 0;
}

.sidebarContainer section:nth-of-type(1) {
  margin-top: 30px;
}

.sidebarContainer section span {
  color: #b4b4b4d3;
  cursor: cell;
  position: relative;
  width: 0;
}

.sidebarContainer section span::after {
  background-color: var(--cor-folly);
  bottom: -4px;
  content: "";
  height: 2px;
  left: 0;
  position: absolute;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease-out;
  width: 100%;
}

.sidebarContainer section span:hover::after {
  transform: scaleX(100%);
  transform-origin: left;
}

@media (max-width: 768px) {
  .sidebarContainer {
    display: none;
  }
}

@media (max-width: 425px) {
  .sidebarContainer {
    display: none;
  }
}
</style>