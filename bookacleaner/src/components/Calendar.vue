<template>
  <div id="cal">
  </div>
</template>

<script>
const helper = require('../timeSlotHelper')
let calendarWrapper = {}

export default {
  name: 'Calendar',
  props: {
    timeSlots: {
      type: Array
    }
  },
  created () {
    calendarWrapper = require('./calendarWrapper').calendarWrapper(this)
  },
  data () {
    return {
      init: false
    }
  },
  watch: {
    /*
     * when timeslots changes, initialise or refresh the calendar
     * 
     * NOTE: not using arrow funcitons here to avoid context issues
     * see https://vuejsfeed.com/blog/using-es6-arrow-functions-in-vue-modules 
     */
    timeSlots: { handler: function () {
        if(!this.init) {
          calendarWrapper.initCalendar()
          this.init = true
        } else {
          calendarWrapper.refreshCalendar()
        }
      },
      deep: true
    }
  },
  methods: {
    /**
     * Create timeslot selection and fire event
     */
    selectSlot (event) {
      //  create slot to represent selection
      let slot = helper.createSlotFromEvent(event, false, true)
      // emit selection event
      this.$emit('timeSlotSelected', slot)
    },
    /**
     * Extend current timeslot selection and fire event
     */
    changeSlotDuration (event) {
      //  create slot to represent selection, including new end date
      let slot = helper.createSlotFromEvent(event, true, true)
      // emit selection event
      this.$emit('timeSlotSelected', slot)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
