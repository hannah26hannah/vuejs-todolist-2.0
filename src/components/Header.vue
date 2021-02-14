<template>
  <section class="w-full flex flex-row justify-end items-center">
    <div class="mr-6">
      <router-link to="/" class="font-bold">Home</router-link> |
      <router-link to="/todoPage" class="font-bold">To Dos</router-link> |
      <router-link to="/reportPage" class="font-bold">Daily Report</router-link>
    </div>
    <svg
      id="darkMode"
      width="55"
      height="55"
      viewBox="0 0 55 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="toggleMode()"
      class="cursor-pointer"
    >
      <path
        class="sun"
        d="M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z"
        fill="#F9CB54"
      />
    </svg>
  </section>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";

interface AppState {
  moonPath: string;
  sunPath: string;
  isDark: boolean;
}

export default Vue.extend({
  data() {
    const initialState: AppState = {
      moonPath:
        "M20 27C20 42.1878 27.5 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C27.5 0 20 11.8122 20 27Z",
      sunPath:
        "M55 27.5C55 42.6878 42.6878 55 27.5 55C12.3122 55 0 42.6878 0 27.5C0 12.3122 12.3122 0 27.5 0C42.6878 0 55 12.3122 55 27.5Z",
      isDark: false
    };
    return initialState;
  },
  methods: {
    toggleMode(): void {
      const timeline = (this as any).$anime.timeline({
        duration: 750,
        easing: "easeOutExpo"
      });

      timeline
        .add({
          targets: ".sun",
          d: [{ value: this.isDark ? this.sunPath : this.moonPath }]
        })
        .add(
          {
            targets: "#darkMode",
            rotate: 330
          },
          "-= 350"
        )
        .add(
          {
            targets: ["body", "#view ul", "main", "section h3"],
            backgroundColor: this.isDark
              ? "rgb(255, 255, 255)"
              : "rgb(22, 22, 22)",
            color: !this.isDark ? "rgb(255, 255, 255)" : "rgb(22, 22, 22)"
          },
          "-= 700"
        )
        .add(
          {
            targets: [
              ".calendar-wrapper h1",
              ".calendar-wrapper span",
              ".calendar-wrapper .header-arrow",
              "select",
              ".footer",
              "label",
              "#nav"
            ],
            color: this.isDark ? "rgb(22, 22, 22)" : "rgb(9, 132, 227)"
          },
          "-= 1000"
        )
        .add(
          {
            targets: [".calendar-wrapper .markOnly"],
            backgroundColor: "transparent"
          },
          "-= 1000"
        );
      this.isDark = !this.isDark;
    }
  }
});
</script>
