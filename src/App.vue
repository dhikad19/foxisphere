<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  import { themeState } from "./theme";

  export default {
    name: "App",
    data() {
      return {
        themeState,
      };
    },
    mounted() {
      // Apply the body class based on the current theme state
      if (this.themeState.isDarkMode) {
        document.body.classList.add("dark-mode");
      } else {
        document.body.classList.remove("dark-mode");
      }
    },
    watch: {
      "themeState.isDarkMode"(newValue) {
        // Watch for changes in the theme and update the body class
        if (newValue) {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      },
    },
  };
</script>

<style>
  /* Default (Light) Mode Styles */
  body {
    background-color: white;
    color: black;
    transition: background-color 0.3s, color 0.3s;
  }

  /* Dark Mode Styles */
  body.dark-mode {
    background-color: #252525;
    color: white;
  }
</style>
