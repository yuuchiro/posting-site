const key = "posts";

const posts = localStorage.getItem(key);
const postList = JSON.parse(posts);
const bubbleSort = () => {
  for (let i = 0; i < postList.length; i++) {
    for (let j = 0; j < postList.length - 1; j++) {
      if (postList[j].id > postList[j + 1].id) continue;
      let temp = postList[j];
      postList[j] = postList[j + 1];
      postList[j + 1] = temp;
    }
  }
};
bubbleSort();

export default {
  getAllPosts() {
    return postList;
  },

  getOnePost(id) {
    postList.forEach((post) => {
      if (post.id == id) return post;
    });
    return -1;
  },

  getNewPosts() {
    return postList.slice(0, 3);
  },
};
