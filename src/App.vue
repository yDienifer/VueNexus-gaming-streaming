<script lang="ts">
import { defineComponent } from 'vue';

import Home from "./views/Home.vue";

export default defineComponent({
  components: {
    Home
  }
});
</script>

<template>
  <main>
    <Home />
  </main>
</template>