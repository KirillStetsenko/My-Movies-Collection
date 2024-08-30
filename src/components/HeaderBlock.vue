<template>
  <header class="header">
    <img class="logo" src="../assets/logo.png" alt="logo" />
    <div class="title">
      My <span class="spanText"> Movies </span> Collection
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin: 10px;
  text-align: center;

  &::-webkit-scrollbar {
    display: none;
    scrollbar-width: none;
    -ms-overflow-style: none;
  }

  .logo {
    width: 120px;
    border-radius: 50%;
  }

  .title {
    font-size: 56px;

    .spanText {
      color: #006680;
    }
  }
}

@media (max-width: 768px) {
  .header {
    flex-direction: column;
  }
}
</style>
