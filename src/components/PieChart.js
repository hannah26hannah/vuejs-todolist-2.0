import { Vue } from "vue-property-decorator";
import { Pie } from "vue-chartjs";

export default Vue.extend({
  extends: Pie,
  data: () => ({
    msg: "🎨 My Pie Stats",
    stats: [],
    chartdata: {
      labels: [],
      datasets: [
        {
          label: [],
          data: [],
          backgroundColor: []
        }
      ]
    },
    options: {
      hoverBorderWidth: 20,
      responsive: true,
      maintainAspectRatio: false
    }
  }),
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  created() {
    this.stats = this.$store.state.categories;
    const obj = this.chartdata.datasets[0];

    for (const stat of this.stats) {
      this.chartdata.labels.push(stat.title);
      obj.label.push(stat.title);
      obj.data.push(stat.value);
      obj.backgroundColor.push(stat.backgroundColor);
    }
  }
});
