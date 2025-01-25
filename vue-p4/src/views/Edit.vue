<template>
  <form action="">
    <legend>Edit post</legend>
    <label for="name">Author name</label>
    <input type="text" v-model="post.author" id="name" />
    <label for="title">Post title</label>
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
