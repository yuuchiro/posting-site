<template>
  <nav>
    <RouterLink to="/" active-class="selected"
      ><ion-icon :name="names.home"></ion-icon>
      <p class="link-text">Home page</p>
    </RouterLink>
    <RouterLink to="/add-post" active-class="selected"
      ><ion-icon :name="names.plus"></ion-icon>
      <p class="link-text">Add new post</p>
    </RouterLink>
    <RouterLink to="/see-all" active-class="selected"
      ><ion-icon :name="names.eye"></ion-icon>
      <p class="link-text">See all posts</p>
    </RouterLink>
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
  height: 45vh;
  background-color: var(--light-bg-color);
  border-radius: 0 12px 12px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  position: fixed;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 60px;
  transition: 300ms;
}
nav:hover {
  width: 200px;
}
nav:hover .link-text {
  opacity: 100%;
}

a {
  text-decoration: none;
  color: var(--dark-text);
  display: flex;
  align-items: center;
  position: relative;
  transition: 300ms;
}

a:hover {
  scale: 1.08;
}

.link-text {
  opacity: 0;
  transition: 300ms;
  position: absolute;
  left: 60px;
  width: 150px;
  transition: opacity 100ms;
}

ion-icon {
  font-size: 20px;
  margin: 20px 13px;
  font-size: 30px;
}

.selected {
  font-weight: bold;
  scale: 1.08;
  color: var(--purple-accent);
}
</style>
