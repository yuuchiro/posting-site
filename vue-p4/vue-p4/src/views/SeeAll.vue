<template>
  <div class="post-container">
    <div class="input-container">
      <input type="text" name="" id="" placeholder="Type something" />
      <ion-icon name="search-outline"></ion-icon>
    </div>

    <post-shortcut v-for="post in postList" :post-info="post"></post-shortcut>
  </div>
</template>
<script>
import PostShortcut from "@/components/PostShortcut.vue";
export default {
  components: { PostShortcut },
  created() {
    this.postList = this.$posts.getAllPosts();
    console.log(this.postList);
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

input {
  width: 600px;
  padding: 7px 15px;
  font-size: 17px;
  outline: none;
  border: 1px solid black;
}
input::placeholder {
  font-weight: bold;
  color: rgb(154, 146, 255);
}
input:focus {
  box-shadow: 5px 5px rgb(199, 198, 255);
}

.input-container {
  position: relative;
  margin-bottom: 50px;
}

ion-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}
</style>
