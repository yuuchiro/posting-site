<template>
  <h1>{{ post.title }}</h1>
</template>
<script>
export default {
  props: ["postId"],
  created() {
    this.postList = this.$posts.getAllPosts();

    this.postList.forEach((post) => {
      if (post.id == this.postId) this.post = post;
    });
  },
  data() {
    return {
      post: null,
      postList: null,
    };
  },
  watch: {
    postId(newId) {
      this.postList.forEach((post) => {
        if (post.id == newId) this.post = post;
      });
    },
  },
};
</script>
