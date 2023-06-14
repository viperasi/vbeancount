import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/HomeView.vue";

const routes = [
  {
    meta: {
      title: "Test",
    },
    path: "/",
    name: "home",
    component: () => import("@/views/TestView.vue"),
  },
  {
    meta: {
      title: "损益表",
    },
    path: "/income_statement",
    name: "income_statement",
    component: () => import("@/views/IncomeStatementView.vue"),
  },
  {
    // Document title tag
    // We combine it with defaultDocumentTitle set in `src/main.js` on router.afterEach hook
    meta: {
      title: "总览",
    },
    path: "/dashboard",
    name: "dashboard",
    component: Home,
  },
  {
    meta: {
      title: "账户",
    },
    path: "/account",
    name: "account",
    component: () => import("@/views/AccountView.vue"),
  },
  {
    meta: {
      title: "编辑器",
    },
    path: "/editor",
    name: "editor",
    component: () => import("@/views/EditorView.vue"),
  },
  {
    meta: {
      title: "设置",
    },
    path: "/setting",
    name: "setting",
    component: () => import("@/views/SettingView.vue"),
  },
  {
    meta: {
      title: "关于",
    },
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView.vue"),
  },
  {
    meta: {
      title: "日记账",
    },
    path: "/journal",
    name: "journal",
    component: () => import("@/views/JournalView.vue"),
  },
  {
    meta: {
      title: "Login",
    },
    path: "/login",
    name: "login",
    component: () => import("@/views/LoginView.vue"),
  },
  {
    meta: {
      title: "Error",
    },
    path: "/error",
    name: "error",
    component: () => import("@/views/ErrorView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 };
  },
});

export default router;
