<template>
  <main class="movieCard">
    <div class="poster">
      <img
        :src="`https://image.tmdb.org/t/p/w300${movie.poster_path}`"
        :alt="movie.original_title"
        width="150"
      />
    </div>
    <div class="infoBlock">
      <div class="info">
        <div class="title">
          {{ movie.title }}
          <span class="year">({{ movie.release_date.slice(0, 4) }})</span>
        </div>
        <div class="description">{{ movie.overview }}</div>
        <div class="lang">
          Language: {{ movie.original_language.toUpperCase() }}
        </div>
        <div class="popularity">
          Popularity: {{ movie.popularity.toFixed(1) }}
        </div>
      </div>
      <div class="btnBlock">
        <button
          class="btn"
          v-if="$store.state.tab === 4"
          @click="addMovie(movie)"
        >
          Add
        </button>
        <div v-else>
          <button
            :class="['btn favourite', { isFav: movie.isFavourite }]"
            @click="toggleFavourite(movie.id)"
          >
            Favourites
          </button>
          <button
            :class="['btn watched', { isWatched: movie.isWatched }]"
            @click="toggleWatched(movie.id)"
          >
            Watched
          </button>
          <button class="btn remove" @click="removeMovie(movie.id)">
            Remove
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["movie"],
  methods: {
    toggleFavourite(id) {
      this.$store.commit("toggleFavourite", id);
    },

    toggleWatched(id) {
      this.$store.commit("toggleWatched", id);
    },

    removeMovie(id) {
      this.$store.commit("removeMovie", id);
    },

    addMovie(movie) {
      this.$store.commit("addMovie", movie);
    },
  },
};
</script>

<style lang="scss" scoped>
$primaryColor: #006880;

.isFav {
  background: royalblue !important;
}

.isWatched {
  background: green !important;
}

.movieCard {
  display: flex;
  align-items: center;
  margin: 10px;
  padding: 5px;
  box-shadow: 0 0 5px 5px $primaryColor;
  border: 1px solid #ff6347;

  .poster {
    margin: 10px;
    float: left;
    box-shadow: 0 0 5px 5px $primaryColor;
  }

  .infoBlock {
    margin: 10px;
    padding: 10px;
    flex-grow: 1;

    .info {
      .title {
        color: #ff6347;
        font-size: 28px;
      }

      .year {
        color: #ffffff;
      }

      .description {
        margin-top: 10px;
        font-size: 20px;
        font-weight: 200;
      }

      .lang {
        font-weight: 300;
        color: rgb(61, 216, 61);
      }

      .popularity {
        color: yellow;
        margin: 5px auto;
        font-weight: 200;
        font-size: 16px;
      }
    }
  }

  .btnBlock {
    display: flex;
    justify-content: right;
    align-items: center;

    .btn {
      width: 100px;
      margin: 10px;
      line-height: 20px;
      background: $primaryColor;
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #ffffff;
      border-radius: 10px;

      &:hover {
        border: 1px solid #ffffff;
      }

      &:last-child:hover {
        background: #ff6347;
      }
    }
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  .movieCard {
    flex-direction: column;

    .btnBlock {
      justify-content: center;
    }
  }
}
</style>
