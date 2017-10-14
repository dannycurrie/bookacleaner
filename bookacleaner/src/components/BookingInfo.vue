<template>
  <div>
    <p>{{currentSelection}}</p>
    <p class="book-btn">
      <a href="#" class="btn btn-theme" v-if="currentSelection !== ''" v-on:click="sendBookingRequest">Book this slot!</a>
		</p>
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
  },
  methods: {
    sendBookingRequest: function () {
      this.$emit('sendBookingRequest')
    }
  }
}
</script>

