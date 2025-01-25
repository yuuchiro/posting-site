<template>
  <navbar></navbar>
  <RouterView></RouterView>
</template>
<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
  beforeCreate() {
    let list = localStorage.getItem("posts");
    if (list) return;
    fetch("posts.json")
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("posts", JSON.stringify(data));
      });
  },
};
</script>
<style scoped>
.post-container {
  max-width: 1250px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
}
</style>
