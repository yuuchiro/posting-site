import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./routes.js";
import $posts from "./data.js";

const app = createApp(App);
app.use(router);
app.config.globalProperties.$posts = $posts;

app.mount("#app");
