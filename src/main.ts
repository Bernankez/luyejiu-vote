import { ViteSSG } from "vite-ssg/single-page";
import App from "./App.vue";
import "virtual:uno.css";
import "./style.css";

export const createApp = ViteSSG(App);
