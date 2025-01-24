<template>
  <div class="container" v-if="!edit">
    <div id="titleContainer">
      <h1>{{ post.title }}</h1>
      <div class="options-menu">
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        <div class="options">
          <RouterLink :to="`/post/${postId}/edit`" class="link">
            <p>Edit</p>
          </RouterLink>
          <p>Delete</p>
        </div>
      </div>
    </div>

    <span>{{ post.author }}</span>
    <p class="content">{{ post.content }}</p>
  </div>
  <RouterView v-if="edit"></RouterView>
</template>
<script>
import { RouterView } from "vue-router";

export default {
  props: ["postId"],
  created() {
    this.post = this.$posts.getSinglePost(this.postId);
    this.checkEdition();
  },
  data() {
    return {
      post: null,
      edit: false,
    };
  },
  methods: {
    checkEdition() {
      let edition = this.$route.path.substring(
        this.$route.path.lastIndexOf("/") + 1,
        this.$route.path.length
      );
      if (edition == "edit") this.edit = true;
      else this.edit = false;
    },
  },
  watch: {
    postId(newId) {
      this.post = this.$posts.getSinglePost(newId);
    },
    $route() {
      this.checkEdition();
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
#titleContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 10px;
}
ion-icon {
  font-size: 25px;
  cursor: pointer;
  transition: 300ms;
}
ion-icon:hover {
  rotate: 90deg;
}

.content {
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

.options-menu {
  position: relative;
  margin: 0 10px;
}
.options-menu:hover .options {
  display: block;
}

.options {
  position: absolute;
  left: -20px;
  display: none;
}
.options p {
  background-color: rgb(172, 121, 255);
  padding: 10px 20px;
  font-size: 17px;
  color: white;
  cursor: pointer;
  transition: 200ms;
}
.options p:hover {
  background-color: rgb(150, 85, 255);
}
.link {
  text-decoration: none;
}
</style>
