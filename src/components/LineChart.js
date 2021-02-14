import { Vue } from "vue-property-decorator";
import { Line } from "vue-chartjs";

export default Vue.extend({
  extends: Line,
  data: () => ({
    latestTodos: [],
    latestDoneTodos: [],
    numDaysLabels: [],
    chartdata: {
      labels: [],
      datasets: [
        {
          label: "🎯 Created Todos",
          pointBackgroundColor: "#007bff",
          borderWidth: 1,
          pointBorderColor: "#007bff",
          borderColor: "#007bff",
          data: []
        },
        {
          label: "✨ Completed Todos",
          pointBackgroundColor: "#E74D4E",
          borderWidth: 1,
          pointBorderColor: "#dc3545",
          borderColor: "#E74D4E",
          data: []
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }
        ],
        xAxes: [
          {
            grindLines: {
              display: false
            }
          }
        ]
      },
      legend: { display: true },
      responsive: true,
      maintainAspectRatio: false,
      hoverBorderWidth: 20
    }
  }),
  created() {
    this.chartdata.labels = this.locateLabelsOfDays();
    this.latestTodos = this.getLatesTodos("created");
    this.latestDoneTodos = this.getLatesTodos("completed");
    this.chartdata.datasets[0].data = this.getTodosOfDay("createdAt");
    this.chartdata.datasets[1].data = this.getTodosOfDay("completedAt");
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
  methods: {
    locateLabelsOfDays() {
      let labels = [];
      let numLabels = [];
      const today = new Date();
      const year = today.getFullYear();
      const month = today.getMonth();
      let day = today.getDate();
      while (labels.length < 7) {
        const labelOfDay = new Intl.DateTimeFormat("en-US", {
          weekday: "short"
        }).format(new Date(year, month, day));
        labels.unshift(labelOfDay);
        const numLabelOfDay = new Date(year, month, day).getDay();
        numLabels.unshift(numLabelOfDay);
        day--;
      }
      this.numDaysLabels = numLabels;
      return labels;
    },
    getLatesTodos(param) {
      let d = new Date();
      let day = d.getDate();
      const lastDateOfWeek = new Date(d.setDate(day - 7));
      if (param === "created") {
        return this.$store.state.todos.filter(
          todo =>
            new Date(todo.createdAt) <= new Date() &&
            new Date(todo.createdAt) >= lastDateOfWeek
        );
      } else {
        return this.$store.state.todos.filter(
          todo =>
            new Date(todo.completedAt) <= new Date() &&
            new Date(todo.completedAt) >= lastDateOfWeek
        );
      }
    },
    getTodosOfDay(param) {
      let LengthOftodos = this.latestTodos;
      let localNums = this.numDaysLabels.slice();
      for (let i = 0; i < localNums.length; i++) {
        let cnt = 0;
        LengthOftodos.forEach(todo => {
          const dayOfTodo = new Date(todo[param]).getDay();
          if (dayOfTodo === localNums[i]) cnt++;
        });
        localNums[i] = cnt;
      }
      return localNums;
    }
  }
});
