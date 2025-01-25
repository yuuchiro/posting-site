<template>
  <form action="">
    <legend>Add new post</legend>
    <label for="author">Author</label>
    <input type="text" name="" id="author" v-model="author" />

    <label for="title">Title</label>
    <input type="text" name="" id="title" v-model="title" />

    <label for="post-content">Your post</label>
    <textarea name="" id="post-content" v-model="content"></textarea>

    <button @click.prevent="addPost" :disabled="incorrectForm">Add</button>
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
  computed: {
    incorrectForm() {
      return !this.author || !this.title || !this.content;
    },
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

      let jsonList = JSON.stringify(postList);
      localStorage.setItem("posts", jsonList);
      this.author = "";
      this.title = "";
      this.content = "";
    },
  },
};
</script>
<style scoped>
form {
  max-width: 500px;
  margin: 50px auto;
  display: grid;
  place-items: center;
}

legend {
  font-size: 32px;
  font-weight: 600;
  color: var(--dark-text);
}

label {
  width: 100%;
  display: block;
  margin: 40px 0 15px 0;
  font-weight: 600;
  font-size: 18px;
  color: var(--purple-accent);
}

input,
textarea {
  width: 100%;
}

button {
  width: 100%;
  margin-top: 40px;
  font-size: 14px;
  padding: 7px;
}

button:disabled {
  opacity: 0.7;
}
button:disabled:hover {
  scale: 1;
  box-shadow: none;
  cursor: auto;
}
</style>
