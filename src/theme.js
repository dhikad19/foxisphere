// src/theme.js
import { reactive } from "vue";

export const themeState = reactive({
  isDarkMode: localStorage.getItem("theme") === "dark", // Check localStorage for initial state
  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  },
});
