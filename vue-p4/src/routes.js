import { createRouter, createWebHashHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";
import AddPost from "./views/AddPost.vue";
import SeeAll from "./views/SeeAll.vue";
import Post from "./views/Post.vue";
import Edit from "./views/Edit.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/add-post",
      component: AddPost,
    },
    {
      path: "/see-all",
      component: SeeAll,
    },
    {
      path: "/post/:postId",
      component: Post,
      children: [
        {
          path: "edit",
          component: Edit,
          props: true,
        },
      ],
      props: true,
    },
  ],
});

export default router;
