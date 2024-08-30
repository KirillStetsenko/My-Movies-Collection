<template>
  <main class="search">
    <div class="searchBlock">
      <input
        class="searchInput"
        type="text"
        v-model="movie"
        @keydown.enter="getMovies"
      />
      <button class="searchBtn" @click="getMovies">Get</button>
    </div>
    <div v-show="!$store.state.searchMovies.length" class="error">
      No results
    </div>

    <div class="searchMovies">
      <movie-card
        v-for="movie in $store.state.searchMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>
  </main>
</template>

<script>
import MovieCard from "./MovieCard.vue";
export default {
  components: { MovieCard },
  data() {
    return {
      movie: "",
    };
  },

  methods: {
    getMovies() {
      this.$store.dispatch("getMovies", this.movie);
    },
  },
};
</script>

<style lang="scss" scoped>
.search {
  .searchBlock {
    display: flex;
    justify-content: center;
    padding: 20px;
    text-align: center;

    .searchInput {
      max-width: 500px;
      width: 100%;
      padding: 5px;
      background: transparent;
      border: 1px solid white;
      font-size: 20px;
      border-radius: 10px 0 0 10px;
      color: white;

      &:focus-visible {
        outline: white;
      }
    }

    .searchBtn {
      width: 70px;
      font-size: 24px;
      border: 1px solid white;
      border-radius: 0 10px 10px 0;
      background: #006080;

      &:hover {
        background: #006680;
        border: 1px solid white;
        color: white;
      }
    }
  }

  .error {
    text-align: center;
    color: orange;
    font-style: italic;
    font-size: 20px;
  }
}
</style>
