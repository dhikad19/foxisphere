import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import SignInView from "../views/SignInView.vue";
import SignUpView from "../views/SignUpView.vue";
import WriteView from "../views/WriteView.vue";
import NotFound from "../views/NotFoundView.vue";
import UserProfile from "../views/ProfileView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "Foxi Sphere | Dive into Creativity" },
    // meta: { requiresAuth: true },
  },
  {
    path: "/signin",
    name: "signin",
    component: SignInView,
    meta: { requiresUnauth: true, title: "Foxi Sphere | Sign In" },
  },
  {
    path: "/write",
    name: "write",
    component: WriteView,
    meta: { requiresUnauth: true, title: "Foxi Sphere | Write" },
  },
  { path: "/:id", component: UserProfile },
  {
    path: "/signup",
    name: "signup",
    component: SignUpView,
    meta: { requiresUnauth: true, title: "Foxi Sphere | Sign Up" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("authToken");
  document.title = to.meta.title;
  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !isAuthenticated
  ) {
    next("/signin"); // Redirect to login if not authenticated
  } else if (
    to.matched.some((record) => record.meta.requiresUnauth) &&
    isAuthenticated
  ) {
    next("/"); // Redirect to dashboard if already authenticated
  } else {
    next(); // Allow navigation
  }
});

export default router;
