<template>
  <main class="topbar">
    <div class="title">
      {{ title }}
      <span class="counter">{{ movieCount }}</span>
    </div>
    <div class="sortBlock">
      <span>Sort By: </span>
      <select v-model="$store.state.sort">
        <option value="title">Title</option>
        <option value="year">Year</option>
        <option value="popularity">Popularity</option>
      </select>
      <button class="btnSort" @click="$store.commit('toggleSortDirection')">
        ⮃
      </button>
    </div>
  </main>
</template>

<script>
export default {
  props: {
    title: String,
    movieCount: Number,
    sort: String,
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;

  .title {
    margin: 10px;
    color: white;
    font-size: 26px;
  }

  .counter {
    color: #9cebff;
  }

  .sortBlock {
    display: flex;
    justify-content: space-between;
    gap: 10px;

    select {
      width: 150px;
      padding: 2px 5px;
      font-size: 18px;
      color: white;
      background: #006680;
      border-radius: 10px;
      border: 1px solid rgba(255, 255, 255, 0.2);

      &:hover {
        border: 1px solid white;
      }

      &:focus {
        outline: none;
      }

      option {
        background: #00222b;
      }
    }

    .btnSort {
      text-align: center;
      width: 40px;
      height: 30px;

      background: #006680;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 10px;
      color: white;
      font-size: 20px;

      &:hover {
        border: 1px solid white;
      }
    }
  }
}

@media (min-width: 320px) and (max-width: 768px) {
  .topbar {
    text-align: center;
    flex-direction: column;

    .sortTitle {
      display: block;
    }
  }
}
</style>
