<template>
  <main
    class="container flex flex-row flex-wrap w-full h-auto justify-around items-center"
  >
    <Control @skip-by="skipBy" />
    <section
      class="calendar-wrapper flex flex-col justify-center items-center rounded border border-solid bg-gray-200 h-full cal-wrapper m-1"
    >
      <div
        class="flex flex-row justify-around items-center w-full h-12 text-lg bg-primary-lightmoonlight"
      >
        <font-awesome-icon
          icon="angle-double-left"
          class="header-arrow cursor-pointer"
          @click="controlYear('prev')"
        />
        <font-awesome-icon
          icon="angle-left"
          class="header-arrow cursor-pointer"
          @click="controlMonth('prev')"
        />
        <h1 class="font-bold">{{ monthToString }}</h1>
        <span>{{ year }}</span>
        <font-awesome-icon
          icon="angle-right"
          class="header-arrow cursor-pointer"
          @click="controlMonth('next')"
        />
        <font-awesome-icon
          icon="angle-double-right"
          class="header-arrow cursor-pointer"
          @click="controlYear('next')"
        />
      </div>
      <table class="w-full h-auto">
        <thead class="flex w-full h-12 justify-around items-center">
          <th v-for="day in days" :key="day">{{ day }}</th>
        </thead>
        <tbody>
          <tr
            v-for="(date, idx) in dates"
            :key="idx"
            class="flex w-full h-12 justify-around items-center mb-3"
          >
            <td
              v-for="(day, index) in date"
              :key="index"
              class="w-12 h-12 flex flex-col justify-center items-center hover-date rounded-full"
              :class="{
                'selected-date': day === currentDate && isCurrentDate,
                'prev-dates': isPrevDates(day, idx)
              }"
            >
              <div class="dateOnly w-full flex items-center justify-center">
                {{ day }}
              </div>
              <div
                class="markOnly w-full flex flex-row items-center justify-center"
                v-if="getMatchedTodos(day).length > 0 && !isPrevDates(day, idx)"
              >
                <div
                  v-for="(todo, idx) in getMatchedTodos(day).slice(0, 3)"
                  :key="idx"
                  class="todo-dot text-primary-blue"
                >
                  <font-awesome-icon
                    icon="circle-notch"
                    v-if="todo.createdAt && !todo.completedAt"
                    class="text-xs"
                  />
                  <font-awesome-icon
                    icon="circle"
                    v-if="todo.createdAt && todo.completedAt"
                    class="text-xs"
                  />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot class="text-primary-lightgray text-xs">
          <tr>
            <td>
              <font-awesome-icon
                icon="circle-notch"
                class="text-xs text-primary-blue"
              />
              : Created Todos
              <font-awesome-icon
                icon="circle"
                class="text-xs text-primary-blue"
              />
              : Completed Todos
            </td>
          </tr>
          <tr>
            Only three todos are displayed per day
          </tr>
        </tfoot>
      </table>
    </section>
  </main>
</template>

<script>
import Control from "./CalendarControl.vue";
export default {
  components: {
    Control
  },
  data() {
    return {
      days: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      dates: [],
      currentYear: 0,
      currentMonth: 0,
      year: 0,
      month: 0,
      currentDate: new Date().getDate(),
      prevDate: [],
      previewDate: []
    };
  },
  computed: {
    monthToString: function() {
      return this.months[this.month - 1];
    },
    isCurrentDate: function() {
      let status = false;
      if (this.currentYear === 0 && this.currentMonth === 0) {
        status = true;
      } else {
        status =
          this.currentYear === new Date().getFullYear() &&
          this.currentMonth === new Date().getMonth() + 1;
      }
      return status;
    }
  },
  created() {
    this.init();
  },
  methods: {
    init(param) {
      if (param) {
        this.year = param[0];
        this.month = param[1];
        this.calendarDate();
      } else {
        const date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;

        this.calendarDate();
      }
    },
    calendarDate() {
      const [
        monthFirstDay,
        monthLastDate,
        prevMonthLastDate
      ] = this.getFirstDayLastDate(this.year, this.month);
      this.dates = this.getDaysOfMonth(
        monthFirstDay,
        monthLastDate,
        prevMonthLastDate
      );
    },
    getFirstDayLastDate(year, month) {
      const firstDay = new Date(year, month - 1, 1).getDay();
      const lastDate = new Date(year, month, 0).getDate();

      let lastMonth = month - 1;
      if (month === 1) {
        lastMonth = 12;
        year -= 1;
      }
      const prevLastDate = new Date(year, lastMonth, 0).getDate();
      return [firstDay, lastDate, prevLastDate];
    },
    getDaysOfMonth(monthFirstDay, monthLastDate, prevMonthLastDate) {
      let day = 1;
      let prevDay = prevMonthLastDate - monthFirstDay + 1;
      let dates = [];
      let daysOfWeek = [];

      while (day <= monthLastDate) {
        if (day === 1) {
          this.getPrevDates(monthFirstDay, daysOfWeek, prevDay);
          this.padDates(daysOfWeek);
        }

        if (daysOfWeek.length === 7) {
          dates.push(daysOfWeek);
          day = daysOfWeek[daysOfWeek.length - 1];
          daysOfWeek = [];
        } else if (
          daysOfWeek.length < 7 &&
          daysOfWeek.indexOf(monthLastDate) > -1
        ) {
          this.padDates(daysOfWeek);
          dates.push(daysOfWeek);
          break;
        }
        day++;
        if (daysOfWeek.length <= 7) {
          daysOfWeek.push(day);
        }
      }
      return dates;
    },
    getPrevDates(monthFirstDay, daysOfWeek, prevDay) {
      for (let j = 0; j < monthFirstDay; j++) {
        daysOfWeek.push(prevDay);
        this.prevDate.push(prevDay);
        prevDay += 1;
      }
    },
    padDates(daysOfWeek) {
      const len = daysOfWeek.length;
      const leftDays = 7 - len;
      if (len >= 0 && len < 7) {
        for (let i = 1; i <= leftDays; i++) {
          daysOfWeek.push(i);
          if (this.previewDate.length < leftDays) this.previewDate.push(i);
        }
      }
    },
    controlMonth(p) {
      if (p === "prev") {
        this.currentMonth = this.month - 1;
        this.currentYear = this.year;
        if (this.month === 1) {
          this.currentMonth = 12;
          this.currentYear = this.year -= 1;
        }
      } else {
        this.currentMonth = this.month + 1;
        this.currentYear = this.year;
        if (this.month === 12) {
          this.currentMonth = 1;
          this.currentYear = this.year += 1;
        }
      }
      const param = [this.currentYear, this.currentMonth];
      this.init(param);
    },
    controlYear(p) {
      if (p === "prev") {
        this.currentYear = this.year - 1;
      } else {
        this.currentYear = this.year + 1;
      }
      const param = [this.currentYear, this.month];
      this.init(param);
    },
    skipBy(p) {
      this.currentYear = new Date().getFullYear();
      if (p === "today") {
        this.currentMonth = new Date().getMonth() + 1;
      } else {
        this.currentMonth = p + 1;
      }
      const param = [this.currentYear, this.currentMonth];
      this.init(param);
    },
    getMatchedTodos(day) {
      return this.$store.state.todos.filter(todo => {
        const todoDate = new Date(todo.createdAt);
        const isDateMatched = todoDate.getDate() === day;
        const isMonthMatched = todoDate.getMonth() === this.month - 1;
        const isYearMathced = todoDate.getFullYear() === this.year;
        return isDateMatched && isMonthMatched && isYearMathced;
      });
    },
    isPrevDates(day, idx) {
      return (
        (this.prevDate.indexOf(day) > -1 && idx < 1) ||
        (this.previewDate.indexOf(day) > -1 && idx > 1)
      );
    }
  }
};
</script>
