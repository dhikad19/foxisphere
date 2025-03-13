import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import SignInView from "@/views/SignInView.vue";
import SignUpView from "@/views/SignUpView.vue";
import WriteView from "@/views/WriteView.vue";
import NotFound from "@/views/NotFoundView.vue";
import ChatView from "@/views/ChatView.vue";
import SearchView from "@/views/SearchView.vue";
import NotificationView from "@/views/NotificationView.vue";
import AboutView from "@/views/AboutView.vue";
import ProfileView from "@/views/ProfileView.vue";
import CommunityView from "@/views/CommunityView.vue";
import PostView from "@/views/PostView.vue";
import GamesView from "@/views/GamesView.vue";
import ItemsView from "@/views/ItemsView.vue";
import ItemDetailView from "@/views/ItemDetailView.vue";

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
    meta: { requiresAuth: true, title: "Foxi Sphere | Profile" },
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
    children: [
      {
        path: ":items",
        name: "items",
        component: ItemsView,
        children: [
          {
            path: ":item",
            name: "item",
            component: ItemDetailView,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
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
    next("/signin");
  } else if (
    to.matched.some((record) => record.meta.requiresUnauth) &&
    isAuthenticated
  ) {
    next("/");
  } else {
    next();
  }
});

export default router;
