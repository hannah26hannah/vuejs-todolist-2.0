<template>
  <div id="app">
    <div id="nav" class="p-10">
      <Header @toggleMode="switchMode()" />
    </div>
    <router-view id="view" />
    <Footer class="footer w-full bg-primary-lightmoonlight" />
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {}
</script>
<style>
@import "./assets/styles/common.css";
</style>
