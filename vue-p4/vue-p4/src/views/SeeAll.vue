<template>
  <div class="post-container">
    <div class="input-container">
      <input
        type="text"
        placeholder="Type something"
        v-model="searchPhrase"
        @keydown.enter="search"
      />
      <ion-icon name="search-outline" @click="search"></ion-icon>
    </div>

    <post-shortcut v-for="post in postList" :post-info="post"></post-shortcut>
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
  width: 100%;
  display: grid;
  place-items: center;
}

input {
  width: 600px;
  padding: 7px 15px;
  font-size: 17px;
  outline: none;
  border: 1px solid black;
}
input::placeholder {
  font-weight: bold;
  color: rgb(154, 146, 255);
}
input:focus {
  box-shadow: 5px 5px rgb(199, 198, 255);
}

.input-container {
  position: relative;
  margin-bottom: 50px;
}

ion-icon {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  font-size: 20px;
  cursor: pointer;
}

.results {
  font-size: 20px;
}
</style>
