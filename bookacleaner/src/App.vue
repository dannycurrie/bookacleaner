<template>
  <div id="app">
    <Calendar v-bind:timeSlots="timeSlots" v-on:timeSlotSelected="timeSlotSelected"/>
    <BookingInfo v-bind:selectedTimeSlot="selectedTimeSlot" v-on:sendBookingRequest="requestBooking"/>
  </div>
</template>

<script>
import Calendar from './components/Calendar'
import BookingInfo from './components/BookingInfo'
import Axios from 'axios'
const helper = require('./timeSlotHelper')

require('../assets/css/bootstrap.css')
require('../assets/css/fullcalendar.css')
require('../assets/css/style.css')
require('../assets/css/font-awesome.min.css')

export default {
  name: 'app',
  components: {
    Calendar, BookingInfo
  },
  data() {
    return {
      timeSlots: [],
      selectedTimeSlot: {}
    }
  },
  created () {
    // call to api and get available time slots
    Axios.get(`https://private-anon-04dc74bb9a-housekeepavailability.apiary-mock.com/availability/?weekBeginning=$this.weekBeginnin)&visitDuration=2.5&postcode=EC1R%203BU`)
      .then(response => {
        this.timeSlots = helper.createTimeSlotsFromAPIData(response.data)
      }).catch(error => {
        console.log(error)
        // TODO - handle this more gracefully
        alert('We were unable to find the availability for this week!')
      })
  },
  methods: {
    /*
     * Begins a new selection
     * Not using arrow functions here to avoid context issues
     */
    timeSlotSelected: function (selection) {
      // deselect previous selection
      this.timeSlots.map(slot => slot.selected = false)
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
      }
    },
    /**
     * Sends request for the currently selection timeslot
     */
    requestBooking: function () {
      let request = helper.createBookingRequestFromTimeSlot(this.selectedTimeSlot)
      Axios.post('https://private-anon-04dc74bb9a-housekeepavailability.apiary-mock.com/book/', request)
        .then(response => {
          if(response.status === 201){
            console.log(response.data)
            alert('success! Booked session with ' + response.data.cleaner.name)
          } else {
            alert('There was an issue requesting your booking!')
          }
        }).catch(error => {
          alert('Unable to confirm booking at this time', error)
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
