<template>
  <navbar></navbar>
  <RouterView></RouterView>
</template>
<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>
<style scoped>
.post-container {
  max-width: 1450px;
  margin: 50px auto;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
}
</style>
