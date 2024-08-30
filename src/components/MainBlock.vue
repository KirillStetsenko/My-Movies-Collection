<template>
  <main class="main">
    <div v-if="$store.getters.tab === 1" class="category">
      <top-bar
        title="All Movies"
        :movieCount="$store.getters.movies.length"
        :sort="$store.state.sort"
        @toggleSortDirection="toggleSortDirection"
      />
      <movie-card
        v-for="movie in $store.getters.movies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div v-else-if="$store.getters.tab === 2" class="category">
      <top-bar
        title="Favourites"
        :movieCount="$store.getters.favourites.length"
        :sort="$store.state.sort"
        @toggleSortDirection="toggleSortDirection"
      />
      <movie-card
        v-for="movie in $store.getters.favourites"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div v-else-if="$store.getters.tab === 3" class="category">
      <top-bar
        title="Watched"
        :movieCount="$store.getters.watched.length"
        :sort="$store.state.sort"
        @toggleSortDirection="toggleSortDirection"
      />
      <movie-card
        v-for="movie in $store.getters.watched"
        :key="movie.id"
        :movie="movie"
      />
    </div>
    <div v-else class="search">
      <search-block @addMovie="addMovie" />
      <loader :loading="$store.state.isLoading" />
    </div>
  </main>
</template>

<script>
import TopBar from "./TopBar.vue";
import MovieCard from "./MovieCard.vue";
import SearchBlock from "./SearchBlock.vue";
import Loader from "./Loader.vue";

export default {
  name: "MainBlock",
  components: { TopBar, MovieCard, SearchBlock, Loader },

  methods: {
    addMovie(movie) {
      this.$emit("addMovie", movie);
    },
  },

  mounted() {
    this.$store.state.movieList =
      JSON.parse(localStorage.getItem("movieList")) || [];
  },

  computed: {
    currentSort() {
      return this.$store.state.sort;
    },
  },

  watch: {
    currentSort() {
      this.$store.commit("sort", this.currentSort);
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 70%;
  margin: 0 auto;
  padding: 10px;
  border: 1px solid #ff6347;
  box-shadow: 0 0 5px 5px #006680;
  backdrop-filter: blur(10px);

  .category {
    font-size: 20px;
  }
}

@media (min-width: 320px) and (max-width: 1000px) {
  .main {
    width: 90%;
  }
}
</style>
