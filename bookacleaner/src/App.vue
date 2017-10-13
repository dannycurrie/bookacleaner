<template>
  <div id="app">
    <Calendar v-bind:slots="slots" />
    <BookingInfo/>
  </div>
</template>

<script>
import Calendar from './components/Calendar'
import BookingInfo from './components/BookingInfo'
import Axios from 'axios'

export default {
  name: 'app',
  components: {
    Calendar, BookingInfo
  },
  data() {
    return {
      slots: []
    }
  },
  created () {
    // call to api and get available time slots
    Axios.get(`https://private-anon-04dc74bb9a-housekeepavailability.apiary-mock.com/availability/?weekBeginning=$this.weekBeginnin)&visitDuration=2.5&postcode=EC1R%203BU`)
      .then(response => {
        this.slots = response.data
      }).catch(error => {
        console.log(error)
        // TODO - handle this more gracefully
        alert('We were unable to find the availability for this week!')
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
