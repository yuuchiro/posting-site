<template>
  <form action="">
    <div class="input-container">
      <label for="author">Author</label>
      <input type="text" name="" id="author" v-model="author" />
    </div>
    <div class="input-container">
      <label for="title">Title</label>
      <input type="text" name="" id="title" v-model="title" />
    </div>
    <div class="input-container">
      <label for="post-content">Your post</label>
      <textarea name="" id="post-content" v-model="content"></textarea>
    </div>
    <button @click.prevent="addPost">Add</button>
  </form>
</template>
<script>
export default {
  data() {
    return {
      author: "",
      title: "",
      content: "",
    };
  },
  methods: {
    addPost() {
      const postList = this.$posts.getAllPosts();
      let id = postList[0].id + 1;
      postList.push({
        id: id,
        author: this.author,
        title: this.title,
        content: this.content,
      });
      //adding to localstorage array
    },
  },
};
</script>
<style scoped>
form {
  max-width: 900px;
  margin: 100px auto;
  display: grid;
  place-items: center;
}

label {
  display: block;
  margin: 30px 0 5px 0;
  font-weight: bold;
  color: rgb(160, 150, 255);
}

input,
textarea {
  width: 500px;
  padding: 5px 10px;
  resize: none;
  border: 1px solid rgb(70, 70, 70);
  outline: none;
}
input:focus,
textarea:focus {
  box-shadow: 5px 5px rgb(199, 198, 255);
}
textarea {
  height: 200px;
}

button {
  border: 2px solid rgb(199, 198, 255);
  padding: 6px;
  font-size: 16px;
  cursor: pointer;
  background-color: rgb(119, 110, 255);
  font-weight: bold;
  color: white;
  transition: 400ms;
  margin-top: 30px;
  width: 500px;
}
button:hover {
  box-shadow: 0 0 10px rgb(199, 198, 255);
  scale: 1.02;
}
</style>
