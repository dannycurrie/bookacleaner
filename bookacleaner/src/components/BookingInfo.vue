<template>
  <div>
    <p>{{currentSelection}}</p>
  </div>
</template>

<script>
export default {
  name: 'BookingInfo',
  props: {
    selectedSlot: {
      type: Object
    }
  },
  data () {
    return {
      currentSelection: 'Current Selected Slot Info Goes Here'
    }
  }
}
</script>

