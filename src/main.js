import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import stores from "./stores/index.js"

import "./css/main.css";

/* Create Vue app */
createApp(App).use(router).use(stores).mount("#app");

/* Default title tag */
const defaultDocumentTitle = "VBeancount";

/* Set document title from route meta */
router.afterEach((to) => {
  document.title = to.meta?.title
    ? `${to.meta.title} — ${defaultDocumentTitle}`
    : defaultDocumentTitle;
});
