<template>
  <div>
    <!-- let's just list the events for now -->
    <ul>
      <li v-for="slot in slots">{{slot.day}}
        <ul>
          <li v-for="startTime in slot.startTimes">{{startTime.start}} {{startTime.possible}}</li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Calendar',
  props: {
    slots: {
      type: Array
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
