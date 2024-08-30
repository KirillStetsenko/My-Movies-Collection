import { createStore } from "vuex";

const store = createStore({
  state: {
    tab: 1,
    isLoading: false,
    movieList: [],
    searchMovies: [],
    sort: "title",
    sortDirection: "asc",
  },

  getters: {
    tab(state) {
      return state.tab;
    },

    movies(state) {
      return Array.isArray(state.movieList) ? state.movieList : [];
    },

    favourites(state) {
      return Array.isArray(state.movieList)
        ? state.movieList.filter((movie) => movie.isFavourite)
        : [];
    },

    watched(state) {
      return Array.isArray(state.movieList)
        ? state.movieList.filter((movie) => movie.isWatched)
        : [];
    },
  },

  mutations: {
    setLoader(state, isLoading) {
      state.isLoading = isLoading;
    },

    setSearchMovies(state, response) {
      state.searchMovies = response.results;
    },

    setMovieList(state, movieList) {
      state.movieList = movieList;
    },

    addMovie(state, movie) {
      if (!state.movieList.some((m) => m.id === movie.id)) {
        state.movieList.push(movie);
        localStorage.setItem("movieList", JSON.stringify(state.movieList));
      }
    },

    removeMovie(state, id) {
      state.movieList = state.movieList.filter((movie) => movie.id !== id);
      localStorage.setItem("movieList", JSON.stringify(state.movieList));
    },

    toggleSortDirection(state) {
      state.sortDirection = state.sortDirection === "asc" ? "desc" : "asc";
      this.commit("sort", state.sort);
    },

    toggleFavourite(state, id) {
      const movie = state.movieList.find((movie) => movie.id === id);
      if (movie) {
        movie.isFavourite = !movie.isFavourite;
        localStorage.setItem("movieList", JSON.stringify(state.movieList));
      }
    },

    toggleWatched(state, id) {
      const movie = state.movieList.find((movie) => movie.id === id);
      if (movie) {
        movie.isWatched = !movie.isWatched;
        localStorage.setItem("movieList", JSON.stringify(state.movieList));
      }
    },

    sort(state, currentSort) {
      state.sort = currentSort;

      let sortOrder = state.sortDirection === "asc" ? 1 : -1;

      switch (currentSort) {
        case "title":
          state.movieList = state.movieList.sort(
            (a, b) =>
              sortOrder * a.original_title.localeCompare(b.original_title)
          );
          break;

        case "year":
          state.movieList = state.movieList.sort(
            (a, b) => sortOrder * a.release_date.localeCompare(b.release_date)
          );
          break;

        case "popularity":
          state.movieList = state.movieList.sort(
            (a, b) => sortOrder * (b.popularity - a.popularity)
          );
          break;

        default:
          break;
      }
      localStorage.setItem("movieList", JSON.stringify(state.movieList));
    },
  },

  actions: {
    async getMovies({ commit }, movie) {
      commit("setLoader", true);
      const api_key = "c712d32012d35a773f347cf0ae76dd7b";
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "Bearer c712d32012d35a773f347cf0ae76dd7b",
        },
      };

      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${movie}`,
          options
        );

        const data = await response.json();
        commit("setSearchMovies", data);
      } catch (error) {
        console.log(error);
      } finally {
        commit("setLoader", false);
      }
    },
  },
});

export default store;
