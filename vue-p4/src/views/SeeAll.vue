<template>
  <div class="post-container">
    <div class="input-container">
      <input
        type="text"
        placeholder="Type something..."
        v-model="searchPhrase"
        @keydown.enter="search"
      />
      <ion-icon name="search" @click="search"></ion-icon>
    </div>
    <post-shortcut
      v-for="post in postList"
      :post-info="post"
      class="post"
    ></post-shortcut>
    <p v-if="!results" class="results">No results found...</p>
  </div>
</template>
<script>
import PostShortcut from "@/components/PostShortcut.vue";
export default {
  components: { PostShortcut },
  created() {
    this.postList = this.$posts.getAllPosts();
  },
  data() {
    return {
      postList: null,
      searchPhrase: "",
      results: true,
    };
  },
  methods: {
    search() {
      this.postList = this.$posts.getAllPosts();
      this.results = true;
      let newList = [];
      if (this.searchPhrase.length == 0) return;
      this.postList.forEach((post) => {
        if (
          post.author.substring(0, this.searchPhrase.length).toLowerCase() !==
            this.searchPhrase.toLowerCase() &&
          post.title.substring(0, this.searchPhrase.length).toLowerCase() !==
            this.searchPhrase.toLowerCase()
        )
          return;

        newList.push(post);
      });
      if (newList.length == 0) this.results = false;
      this.postList = newList;
    },
  },
};
</script>
<style scoped>
.post-container {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  place-items: center;
  gap: 80px 0;
  grid-template-columns: 1fr 1fr;
}

.post {
  width: 430px;
  height: 100%;
}

.input-container {
  position: relative;
  margin: 150px 0 40px 0;
  grid-column: 1/3;
}

ion-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 24px;
  cursor: pointer;
  color: var(--purple-accent);
}

.results {
  font-size: 20px;
  color: var(--dark-text);
  font-weight: 500;
}
</style>
