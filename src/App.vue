<template>
  <main class="app">
    <corner-git />
    <header-block />
    <nav-block />
    <main-block @addMovie="handleAddMovie" />
  </main>
</template>

<script>
import CornerGit from "./components/CornerGit.vue";
import HeaderBlock from "./components/HeaderBlock.vue";
import NavBlock from "./components/NavBlock.vue";
import MainBlock from "./components/MainBlock.vue";

export default {
  name: "App",
  components: { HeaderBlock, NavBlock, MainBlock, CornerGit },
};
</script>

<style lang="scss" scoped></style>
