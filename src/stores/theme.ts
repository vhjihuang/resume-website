import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    currentTheme: useStorage<"light" | "dark">("theme", "light"), // 默认主题
  }),
  actions: {
    setTheme(theme: "light" | "dark") {
      this.currentTheme = theme;
      document.documentElement.setAttribute("data-theme", theme);
    },
    autoSwitchTheme() {
      const hour = new Date().getHours();
      if (hour >= 18 || hour < 6) {
        this.setTheme("dark");
      } else {
        this.setTheme("light");
      }
    },
    startAutoSwitch() {
      this.autoSwitchTheme();
      setInterval(this.autoSwitchTheme, 60 * 60 * 1000);
    },
    initTheme() {
      this.setTheme(this.currentTheme);
    },
  },
});
