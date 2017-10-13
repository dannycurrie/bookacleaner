<template>
  <div>
    <!-- let's just list the events for now -->
    <ul>
      <li v-for="timeSlot in timeSlots">{{timeSlot.start}} {{timeSlot.possible}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
    timeSlots: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
