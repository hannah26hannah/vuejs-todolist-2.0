<template>
  <aside class="mb-4 border border-solid rounded">
      <table class="border-collapse" style="width: 297px;">
          <th>
              <td 
                :class="{ 'isOpenClass' : isOpen }" 
                @click="callSKipToToday" 
                class="w-1/2 hover:bg-primary-lightmoonlight p-2 cursor-pointer">📆 Skip to Today</td>
              <td 
                class="w-1/2 hover:bg-primary-lightmoonlight border border-b-0 border-t-0 border-r-0 p-0 cursor-pointer" @click="handleOpen">📆 Skip By Month</td>
          </th>
          <tbody v-if="isOpen">
              <tr rowspan="2">
                <td class="p-4">
                    <ul class="flex flex-row flex-wrap lg:flex-col">
                        <li
                        v-for="(month, index) in months"
                        :key="index"
                        class="hover:bg-primary-lightmoonlight cursor-pointer ml-2 p-1 hover:font-semibold" style="border-radius: 12px"
                        @click="callSkipByMonth(index)"
                        >
                        {{ month }}</li>
                    </ul>
                </td>
            </tr>
          </tbody>
          
      </table>
  </aside>
</template>
<script>
export default {
  props: [
      'today'
  ],
  data() {
      return {
          months: [
            "Jan.",
            "Feb.",
            "Mar.",
            "Apr.",
            "May",
            "Jun.",
            "Jul.",
            "Aug",
            "Sep.",
            "Oct.",
            "Nov.",
            "Dec."
        ],
        isOpen: false
      }
  },
  methods: {
      handleOpen() {
          this.isOpen = !this.isOpen;
      },
      callSKipToToday() {
          this.$emit('skip-by', 'today')
      },
      callSkipByMonth(index) {
          this.$emit('skip-by', index)
      }
  }
}
</script>