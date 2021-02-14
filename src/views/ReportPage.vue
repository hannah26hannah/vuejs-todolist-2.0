<template>
  <div
    class="w-full h-auto flex flex-col lg:flex-row justify-center items-center md:p-3 lg:p-3"
  >
    <div
      class="w-full h-20 flex items-center justify-center rounded md:hidden lg:hidden bg-primary-lightmoonlight"
    >
      <h1 class="font-bold">Resize me please to see Charts🙌</h1>
    </div>

    <div class="m-2 hidden md:flex lg:flex" style="width: 50%; height: 500px">
      <PieChart class="h-auto w-full" />
    </div>
    <div class="m-2 hidden md:flex lg:flex" style="width: 50%; height: 500px">
      <LineChart class="h-auto w-full" />
    </div>
  </div>
</template>
<script>
import PieChart from "@/components/PieChart.vue";
import LineChart from "@/components/LineChart.vue";

export default {
  components: {
    PieChart,
    LineChart
  }
};
</script>
