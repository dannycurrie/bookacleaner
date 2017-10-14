<template>
  <div>
    <p>{{currentSelection}}</p>
  </div>
</template>

<script>

const helper = require('../timeSlotHelper')

export default {
  name: 'BookingInfo',
  props: {
    selectedTimeSlot: {
      type: Object
    }
  },
  data () {
    return {
      currentSelection: 'Current Selected Slot Info Goes Here'
    }
  },
  watch: {
    selectedTimeSlot: { handler: function () {
      // if the slot is empty, clear current selection
      if (!this.selectedTimeSlot) {
        this.currentSelection = ''
        return
      }
      this.currentSelection = helper.getReadableTimeSlotString(this.selectedTimeSlot)
    },
      // this ensures we pick up changes to end date
      deep: true
    }
  }
}
</script>

