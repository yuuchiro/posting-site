const key = "posts";

const posts = localStorage.getItem(key);
const postList = JSON.parse(posts);

export default {
  getAllPosts() {
    return postList;
  },

  getOnePost(id) {
    postList.forEach((post) => {
      if (post.postId == id) return post;
    });
    return -1;
  },

  getNewPosts() {
    const reversedList = postList.reverse();
    return reversedList.slice(0, 3);
  },
};
