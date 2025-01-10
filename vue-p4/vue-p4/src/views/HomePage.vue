<template>
  <div class="post-container">
    <h1>site title</h1>
    <p>
      site desciption Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Debitis beatae nostrum, illo repr ehenderit veniam doloremque, nesciunt q
      uia sed expedita suscipit sequi inv entore, mai ores sol uta nam quos id
      quis
    </p>
    <button>Explore!</button>
    <post-shortcut v-for="post in postList" :post-info="post"></post-shortcut>
  </div>
</template>
<script>
import PostShortcut from "@/components/PostShortcut.vue";
export default {
  components: { PostShortcut },
  created() {
    this.postList = this.$posts.getNewPosts();
  },
  data() {
    return {
      postList: null,
    };
  },
};
</script>
<style scoped>
.post-container {
  width: 100%;
  display: grid;
  place-items: center;
}

h1 {
  font-size: 60px;
  margin-bottom: 20px;
}

p {
  max-width: 700px;
  text-align: center;
  font-size: 20px;
  margin-bottom: 30px;
}

button {
  border: 2px solid rgb(199, 198, 255);
  padding: 6px 30px;
  font-size: 20px;
  cursor: pointer;
  background-color: rgb(119, 110, 255);
  font-weight: bold;
  color: white;
  transition: 400ms;
  margin-bottom: 50px;
}
button:hover {
  box-shadow: 0 0 10px rgb(199, 198, 255);
  scale: 1.05;
}
</style>
