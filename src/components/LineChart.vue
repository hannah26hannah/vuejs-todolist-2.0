<template>
  <article
    class="rounded border border-solid border-primary-lightgray text-primary-darkgray flex flex-col p-1"
  >
    <h3 class="text-left text-bold">{{ msg }}</h3>

    <div class="flex flex-col justify-center items-center">
      <LineChart class="mb-5" />
      <h5 class="text-primary-lightgray">
        This chart shows you how much you accomplished this week!
      </h5>
    </div>
  </article>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import LineChart from "./LineChart.js";

export default Vue.extend({
  components: {
    LineChart
  },
  data() {
    return {
      msg: "💹 My Progress"
    };
  }
});
</script>
