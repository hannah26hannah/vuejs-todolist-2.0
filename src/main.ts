import Vue from "vue";
import App from "./App.vue";
import { store } from "./store/store";

import "./assets/styles/index.css";

import VueAnime from "./plugins/anime";
Vue.use(VueAnime);

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEdit,
  faTrash,
  faCheck,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCircle,
  faCircleNotch,
  faBookReader,
  faEnvelopeOpen
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithubAlt,
  faLinkedinIn,
  faBloggerB
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import router from "./router";

library.add(
  faEdit,
  faTrash,
  faCheck,
  faAngleLeft,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faCircle,
  faCircleNotch,
  faBookReader,
  faEnvelopeOpen
);
library.add(faGithubAlt, faLinkedinIn, faBloggerB);

Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
