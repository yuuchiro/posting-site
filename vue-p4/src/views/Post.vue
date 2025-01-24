<template>
  <div class="confirm-container" v-if="confirmWindow">
    <p>Are you sure you want to delete this post?</p>
    <div class="confirm-buttons">
      <button @click="deletePost">Yes</button
      ><button @click="confirmWindow = false">No</button>
    </div>
  </div>
  <div class="container" v-if="!edit">
    <div id="titleContainer">
      <h1>{{ post.title }}</h1>
      <div class="options-menu">
        <ion-icon name="ellipsis-vertical-outline"></ion-icon>
        <div class="options">
          <RouterLink :to="`/post/${postId}/edit`" class="link">
            <p>Edit</p>
          </RouterLink>
          <p @click="deleteConfirm">Delete</p>
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
      confirmWindow: false,
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
    deleteConfirm() {
      this.confirmWindow = true;
    },
    deletePost() {
      let postList = this.$posts.getAllPosts();
      let index = null;
      postList.forEach((post) => {
        if (post.id == this.postId) {
          index = postList.indexOf(post);
        }
      });
      postList.splice(index, 1);
      for (let i = 0; i < index; i++) {
        postList[i].id--;
      }
      localStorage.setItem("posts", JSON.stringify(postList));
      this.$router.push(`/see-all`);
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

.confirm-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(118, 70, 250);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 100vw 100vh rgba(0, 0, 0, 0.288);
}
.confirm-container p {
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 30px;
}
.confirm-buttons {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.confirm-buttons button {
  padding: 10px 50px;
  border: none;
  font-weight: bold;
  cursor: pointer;
  background-color: white;
  color: rgb(118, 70, 250);
  border-radius: 10px;
  transition: 300ms;
}
.confirm-buttons button:first-of-type {
  background-color: transparent;
  border: 2px solid white;
  color: white;
}
.confirm-buttons button:hover {
  scale: 1.03;
}
</style>
