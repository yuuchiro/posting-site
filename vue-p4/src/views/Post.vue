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
      <span>{{ post.author }}</span>
      <div class="options-menu">
        <ion-icon name="menu-outline"></ion-icon>
        <div class="options">
          <RouterLink :to="`/post/${postId}/edit`" class="link">
            <p>Edit</p>
          </RouterLink>
          <p @click="confirmWindow = true">Delete</p>
        </div>
      </div>
    </div>
    <h1>{{ post.title }}</h1>

    <p class="content">{{ post.content }}</p>
  </div>
  <RouterView v-if="edit"></RouterView>
</template>
<script>
import { RouterView } from "vue-router";

export default {
  props: ["postId"],
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
    postId: {
      handler(newId) {
        this.post = this.$posts.getSinglePost(newId);
      },
      immediate: true,
    },
    $route: {
      handler() {
        this.checkEdition();
      },
      immediate: true,
    },
  },
};
</script>
<style scoped>
.container {
  max-width: 950px;
  margin: 100px auto;
  background-color: var(--light-bg-color);
  border-radius: 12px;
  padding: 45px;
}
#titleContainer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ion-icon {
  font-size: 30px;
  cursor: pointer;
  color: var(--purple-accent);
}

.content {
  font-size: 17px;
  color: var(--dark-text);
  font-weight: 200;
  line-height: 35px;
}
span {
  font-size: 15px;
  color: var(--purple-accent);
}

h1 {
  color: var(--basic-text);
  font-weight: 600;
  margin: 10px 0;
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
  left: 50%;
  transform: translateX(-50%);
  display: none;
  width: 150px;
  border-radius: 12px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}
.options p {
  background-color: var(--purple-accent-dark);
  padding: 10px 20px;
  font-size: 17px;
  color: white;
  cursor: pointer;
  transition: 200ms;
}
.options p:hover {
  background-color: var(--purple-accent);
}
.link {
  text-decoration: none;
}

.confirm-container {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--light-bg-color);
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 100vw 100vh rgba(0, 0, 0, 0.288);
}
.confirm-container p {
  color: white;
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 30px;
  padding-top: 20px;
}
.confirm-buttons {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.confirm-buttons button {
  padding: 7px 60px;
  font-size: 17px;
}
.confirm-buttons button:first-of-type {
  border: 2px solid var(--purple-accent);
  background-color: var(--purple-accent);
  color: white;
}
.confirm-buttons button:hover {
  scale: 1.03;
}
</style>
