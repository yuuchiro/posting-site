<template>
  <form action="">
    <label for="name">Author</label>
    <input type="text" v-model="post.author" id="name" />
    <label for="title">Title</label>
    <input type="text" v-model="post.title" id="title" />
    <label for="content">Content</label>
    <textarea v-model="post.content" id="content"></textarea>
    <button :disabled="incorrectForm" @click.prevent="saveChanges">
      Save changes
    </button>
  </form>
</template>
<script>
export default {
  props: ["postId"],
  created() {
    this.post = this.$posts.getSinglePost(this.postId);
  },
  data() {
    return {
      post: null,
    };
  },
  computed: {
    incorrectForm() {
      return !this.post.author || !this.post.title || !this.post.content;
    },
  },
  methods: {
    saveChanges() {
      let postList = this.$posts.getAllPosts();
      postList.forEach((post) => {
        if (post.id == this.postId) {
          postList[postList.indexOf(post)] = this.post;
        }
      });
      localStorage.setItem("posts", JSON.stringify(postList));
      this.$router.push(`/post/${this.postId}`);
    },
  },
  watch: {
    postId(newId) {
      this.post = this.$posts.getSinglePost(newId);
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
button:disabled {
  background-color: rgb(148, 141, 255);
}
button:disabled:hover {
  scale: 1;
  box-shadow: none;
  cursor: auto;
}
</style>
