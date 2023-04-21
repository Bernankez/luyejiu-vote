import { ViteSSG } from "vite-ssg/single-page";
import { createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import "virtual:uno.css";
import "./style.css";
import "@unocss/reset/tailwind.css";

export const createApp = ViteSSG(App, ({ app }) => {
  const pinia = createPinia();
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia);
});
