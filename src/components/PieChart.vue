<template>
  <article
    id="pieChart"
    class="rounded border border-solid border-primary-lightgray text-primary-darkgray flex flex-col p-1"
  >
    <h3 class="text-left text-bold">{{ msg }}</h3>
    <div class="flex flex-col">
      <Pie class="mb-5" />
      <h5 class="text-primary-lightgray">
        This chart shows where you're interested in now!
      </h5>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Pie from "@/components/PieChart.js";

export default Vue.extend({
  components: {
    Pie
  },
  data() {
    return {
      msg: "🎨 My Interest",
      stats: []
    };
  },
  created() {
    this.stats = this.$store.getters.chartValues;
  }
});
</script>
