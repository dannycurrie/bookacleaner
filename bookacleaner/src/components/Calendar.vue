<template>
  <div id="cal">
  </div>
</template>

<script>
const calendarWrapper = require('./calendarWrapper').calendarWrapper()

export default {
  name: 'Calendar',
  props: {
    timeSlots: {
      type: Array
    }
  },
  data () {
    init: false
  },
  watch: {
    /*
     * when timeslots changes, initialise or refresh the calendar
     */
    timeSlots: function () {
      if(!this.init) {
        calendarWrapper.initCalendar(this)
        this.init = true
      } else {
        calendarWrapper.refreshCalendar(this)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
