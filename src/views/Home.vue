
<template>
  <div class="homeContainer">
    <div id="navigationBar">
      <Navbar />
    </div>
    <Sidebar />
    <section id="conteudoPrincipal">
      <MainContent />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import MainContent from "./Main.vue";
import Navbar from "../../layouts/navbar/Navbar.vue";
import Sidebar from "../../layouts/sidebar/Sidebar.vue";

export default defineComponent({
  name: "Home",
  components: {
    Navbar,
    Sidebar,
    MainContent
  },
});
</script>

<style scoped>
.homeContainer {
  height: 100vw;
}

#navigationBar {
  position: relative;
  z-index: 1;
}

#lineOverlay {
  background-color: #fff;
  height: 100%;
  left: 84%;
  opacity: 0.3;
  position: absolute;
  top: 0;
  transition: 0.5s;
  width: 1px;
}

#lineOverlay.scrolled {
  background-color: var(--cor-folly);
}

#streamSection {
  align-items: flex-end;
  display: flex;
  flex-direction: column;
}
</style>
