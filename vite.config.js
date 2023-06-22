import { resolve } from "path";
import { defineConfig } from "vite";

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        register: resolve(__dirname, "pages/register/index.html"),
        taskmanager: resolve(__dirname, "pages/task-manager/index.html"),
      },
    },
  },
});
