import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";
import WriteView from "@/views/WriteView.vue";
import NotFound from "@/views/NotFoundView.vue";
import UserProfile from "@/views/ProfileView.vue";
import ChatView from "@/views/ChatView.vue";
import SearchView from "@/views/SearchView.vue";
import NotificationView from "@/views/NotificationView.vue";
import AboutView from "@/views/AboutView.vue";
import ProfileView from "@/views/ProfileView.vue";
import CommunityView from "@/views/CommunityView.vue";
import PostView from "@/views/PostView.vue";
import GamesView from "@/views/GamesView.vue";

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
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { requiresUnauth: true, title: "Foxi Sphere | About" },
  },
  {
    path: "/post",
    name: "post",
    component: PostView,
    meta: { requiresUnauth: true, title: "Foxi Sphere | Post" },
  },
  {
    path: "/chat",
    name: "chat",
    component: ChatView,
    meta: { requiresUnauth: true, title: "Foxi Sphere | Chat" },
  },
  {
    path: "/search",
    name: "search",
    component: SearchView,
    meta: { requiresUnauth: true, title: "Foxi Sphere | Search" },
  },
  {
    path: "/notification",
    name: "notification",
    component: NotificationView,
    meta: { requiresUnauth: true, title: "Foxi Sphere | Notification" },
  },
  {
    path: "/profile",
    name: "profile",
    component: ProfileView,
    meta: { requiresUnauth: true, title: "Foxi Sphere | Profile" },
  },
  {
    path: "/community",
    name: "community",
    component: CommunityView,
    meta: { requiresUnauth: true, title: "Foxi Sphere | Community" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
  {
    path: "/games/:id",
    name: "games",
    component: GamesView,
    props: true,
    // children: [
    //   {
    //     path: "settings", // Nested route for settings
    //     name: "user-settings",
    //     component: UserSettings,
    //   },
    // ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Prevent scroll to top when navigating
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" }; // You can also return `false` to prevent any scroll action.
    }
  },
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
