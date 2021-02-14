<template>
  <div class="w-full h-auto flex flex-col justify-center items-center">
    <Calendar />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import Calendar from "@/components/Calendar.vue";

@Component({
  components: {
    Calendar
  }
})
export default class Home extends Vue {}
</script>
