<template>
  <div id="app">
    <Calendar v-bind:timeSlots="timeSlots" v-on:timeSlotSelected="timeSlotSelected"/>
    <BookingInfo v-bind:selectedTimeSlot="selectedTimeSlot" v-on:sendBookingRequest="requestBooking"/>
    <sweet-modal ref="successModal" icon="success" title="Booking Confirmed">{{this.confirmationMessage}}!</sweet-modal>
  </div>
</template>

<script>
import Calendar from './components/Calendar'
import BookingInfo from './components/BookingInfo'
import Axios from 'axios'
import { SweetModal } from 'sweet-modal-vue'
const helper = require('./timeSlotHelper')

require('../assets/css/bootstrap.css')
require('../assets/css/fullcalendar.css')
require('../assets/css/style.css')
require('../assets/css/font-awesome.min.css')

export default {
  name: 'app',
  components: {
    Calendar, BookingInfo, SweetModal
  },
  data() {
    return {
      timeSlots: [],
      selectedTimeSlot: {},
      confirmationMessage: ''
    }
  },
  created () {
    // call to api and get available time slots
    Axios.get(`https://private-anon-04dc74bb9a-housekeepavailability.apiary-mock.com/availability/?weekBeginning=$this.weekBeginnin)&visitDuration=2.5&postcode=EC1R%203BU`)
      .then(response => {
        this.timeSlots = helper.createTimeSlotsFromAPIData(response.data)
      }).catch(error => {
        console.log(error)
        // TODO - put in a modal dialog
        alert('We were unable to find the availability for this week!')
      })
  },
  methods: {
    /*
     * Begins a new selection
     */
    timeSlotSelected (selection) {
      // deselect previous selection
      this.timeSlots.map(slot => slot.selected = false)
      // find selected timeslot
      this.selectedTimeSlot = helper.findMatchingTimeSlot(selection, this.timeSlots)
      // if we have a valid selection
      if(this.selectedTimeSlot) {
        this.selectedTimeSlot.selected = true
        // if the selection has specified an end time, add that
        if (selection.end) {
          this.selectedTimeSlot.end = selection.end
        }
      } else {
        console.log('Invalid selection', selection)
        // TODO - put in a modal dialog
        alert('We were unable to book that slot. Please try another')
      }
    },
    /**
     * Sends request for the currently selection timeslot
     */
    requestBooking () {
      // create request from current selected slot, and post it
      let request = helper.createBookingRequestFromTimeSlot(this.selectedTimeSlot)
      Axios.post('https://private-anon-04dc74bb9a-housekeepavailability.apiary-mock.com/book/', request)
        .then(response => {
          // if successfull..
          if(response.status === 201){
            console.log(response.data)
            // show confirmation
            let cleaner = response.data.cleaner.name
            this.confirmationMessage = 'Slot booked with ' + cleaner + ' on ' + helper.getReadableTimeSlotString(this.selectedTimeSlot)
            this.$refs.successModal.open()
          } else {
            // TODO - modal dialog
            alert('There was an issue requesting your booking!')
          }
        }).catch(error => {
          // TODO - modal dialog
          alert('There was an issue requesting your booking!', error)
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
