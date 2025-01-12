<template>
  <div class="container">
    <h1>{{ post.title }}</h1>
    <span>{{ post.author }}</span>
    <p>{{ post.content }}</p>
  </div>
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
  watch: {
    postId(newId) {
      this.post = this.$posts.getSinglePost(newId);
    },
  },
};
</script>
<style scoped>
.container {
  max-width: 800px;
  margin: 100px auto;
  background-color: rgb(119, 110, 255);
  box-shadow: 10px 10px rgb(199, 198, 255);
}
h1 {
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 10px;
}
p {
  font-size: 17px;
  padding: 25px;
  padding-top: 10px;
  color: white;
  line-height: 30px;
}
span {
  font-size: 15px;
  font-weight: bold;
  padding-left: 30px;
  color: rgb(199, 198, 255);
}
</style>
