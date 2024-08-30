<template>
  <nav class="nav">
    <button
      :class="['navBtn', { activeTab: $store.getters.tab === 1 }]"
      @click="$store.state.tab = 1"
    >
      All {{ $store.getters.movies.length }}
    </button>
    <button
      :class="['navBtn', { activeTab: $store.getters.tab === 2 }]"
      @click="$store.state.tab = 2"
    >
      Favourite {{ $store.getters.favourites.length }}
    </button>
    <button
      :class="['navBtn', { activeTab: $store.getters.tab === 3 }]"
      @click="$store.state.tab = 3"
    >
      Watched {{ $store.getters.watched.length }}
    </button>
    <button
      :class="['navBtn', { activeTab: $store.getters.tab === 4 }]"
      @click="$store.state.tab = 4"
    >
      Search
    </button>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.activeTab {
  background: #006080 !important;
}

.nav {
  display: flex;
  margin: 10px auto;
  padding: 10px;
  justify-content: center;
  gap: 10px;

  .navBtn {
    width: 120px;
    font-size: 18px;
    line-height: 26px;
    background: #00222b;
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    border-radius: 10px;

    &:hover {
      border: 1px solid white;
    }
  }
}

@media (max-width: 768px) {
  .nav {
    flex-direction: column;
    align-items: center;

    .navBtn {
      width: 50%;
    }
  }
}
</style>
