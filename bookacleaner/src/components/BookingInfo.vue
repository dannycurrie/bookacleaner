<template>
<div id="footerwrap">
	 	<div class="container">
		 	<div class="row">
		 		<div class="col-lg-4">
		 			<h4>1. Check Availability</h4>
		 			<div class="hline-w"></div>
		 			<p>The open slots on the calendar are available for you to book a visit. Simply click on the day and time when you would like your visit to start, and drag the selection to extend your booking.</p>
		 		</div>
		 		<div class="col-lg-4">
		 			<h4>2. Select a slot</h4>
		 			<div class="hline-w"></div>
          <h4 class="currentSelectionLabel" v-if="currentSelection !== ''">You've selected {{currentSelection}} </h4>
          <h6 v-if="currentSelection == ''">Select an available slot from the calendar</h6>
         </div>
		 		<div class="col-lg-4">
		 			<h4>3. Book your cleaning visit!</h4>
		 			<div class="hline-w"></div>
		 			<p class="book-btn">
            <a href="#" class="btn btn-theme" v-if="currentSelection !== ''" v-on:click="sendBookingRequest">Book this slot!</a>
		 			</p>
		 		</div>
		 	
		 	</div><!-- /row -->
	 	</div><!-- /container -->
	 </div>
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
      currentSelection: ''
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

<style scoped>
.book-btn{
  text-align: center;
}

.book-btn a {
  font-size: larger;
  font-weight: bold;
}

.currentSelectionLabel{
  text-align: center;
}
</style>


