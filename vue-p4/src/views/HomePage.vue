<template>
  <div class="post-container">
    <h1>EchoBoard</h1>
    <p>
      EchoBoard is a platform where your words find their voice. Whether you're
      sharing fleeting thoughts, creative writing, or profound ideas, EchoBoard
      amplifies your expression and connects you with a vibrant community of
      thinkers and storytellers. Designed for simplicity and focus, it offers a
      seamless way to post, explore, and engage with others. Customize your
      profile, choose your privacy settings, and let your words resonate—whether
      you're looking to inspire, connect, or simply be heard. Let your thoughts
      leave an echo on EchoBoard.
    </p>
    <button>
      <router-link to="/see-all" class="link-button">See more</router-link>
    </button>
    <span class="recent">Recent activity</span>
    <post-shortcut
      v-for="post in postList"
      :post-info="post"
      class="home-page-shortcut"
    ></post-shortcut>
  </div>
</template>
<script>
import PostShortcut from "@/components/PostShortcut.vue";
export default {
  components: { PostShortcut },
  created() {
    this.postList = this.$posts.getNewPosts();
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
  place-items: center start;
  margin-top: 130px;
}

h1 {
  font-size: 45px;
  background: linear-gradient(
    153deg,
    var(--basic-text) 0%,
    var(--purple-accent) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

p {
  font-size: 18px;
  margin: 30px 0;
  color: var(--dark-text);
  font-weight: 300;
}

button {
  margin-bottom: 50px;
  margin-top: 15px;
  font-size: 17px;
}

.link {
  text-decoration: none;
  color: var(--dark-text);
}

.home-page-shortcut {
  width: 1000px;
  margin: 30px 0;
}

.recent {
  font-size: 24px;
  font-weight: 600;
  color: var(--dark-text);
  opacity: 0.8;
  margin-top: 20px;
}
</style>
