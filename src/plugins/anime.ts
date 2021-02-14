import anime from "animejs/lib/anime.es.js";

const VueAnime = {
  install(Vue: any) {
    Vue.prototype.$anime = anime;
    // app.config.globalProperties.$anime = anime;
    // Vue.prototype.$testData = "testData";
  }
};
export default VueAnime;
