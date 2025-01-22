<template>
  <nav>
    <RouterLink to="/" active-class="selected"
      ><ion-icon :name="names.home"></ion-icon>Home page</RouterLink
    >
    <RouterLink to="/add-post" active-class="selected"
      ><ion-icon :name="names.plus"></ion-icon>Add new post</RouterLink
    >
    <RouterLink to="/see-all" active-class="selected"
      ><ion-icon :name="names.eye"></ion-icon>See all posts</RouterLink
    >
  </nav>
</template>
<script>
export default {
  data() {
    return {
      names: {
        home: "home-outline",
        plus: "add-circle-outline",
        eye: "eye-outline",
      },
    };
  },
  watch: {
    $route(to, from) {
      this.names.home = "home-outline";
      this.names.plus = "add-circle-outline";
      this.names.eye = "eye-outline";
      switch (to.path) {
        case "/":
          this.names.home = "home";
          break;
        case "/add-post":
          this.names.plus = "add-circle";
          break;
        case "/see-all":
          this.names.eye = "eye";
          break;
        default:
          break;
      }
    },
  },
};
</script>
<style scoped>
nav {
  width: 100%;
  display: flex;
  justify-content: center;
  background-color: rgb(92, 80, 255);
  padding: 15px 0;
}
a {
  padding: 0 40px;
  text-decoration: none;
  color: white;
  display: flex;
  align-items: center;
  transition: scale 300ms;
}
a:hover {
  scale: 1.1;
}

ion-icon {
  font-size: 20px;
  margin: 0 10px;
}

.selected {
  font-weight: bold;
  scale: 1.1;
}
</style>
