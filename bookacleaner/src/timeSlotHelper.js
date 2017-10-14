const moment = require('moment')
/*
 * Helper to translate data from api into flat list of time slots for easier
 * use on calendar
 * 
 * Converts
 * {
 *  day: 'YYYY-MM-DD'
 *  startTimes: [
 *    "start": "hh:mm:ss",
 *    "end":  "hh:mm:ss",
 *    "possible": true/false
 *  ]
 * }
 * to
 * {
 *  start: "YYYY-MM-DD hh:mm:ss"
 *  end: "YYYY-MM-DD hh:mm:ss"
 *  possible: true/false
 *  selected: true/false
 * }
 * 
 */
export function createTimeSlotsFromAPIData (rawData) {
    // the array of time slots we will return
    let outArray = []
    // for each day...
    rawData.map(day => {
      // get the day date prefix
      let dayStr = day.day
      // for each start time...
      day.startTimes.map(startTime => {
        // create an event from it
        let timeSlot = {}
        timeSlot.start = dayStr + ' ' + startTime.start
        timeSlot.end = dayStr + ' ' + startTime.end
        timeSlot.possible = startTime.possible
        timeSlot.selected = false
        // add to to our out array
        outArray.push(timeSlot)
      })
    })
    return outArray
}

/**
 * Given a calendar event, returns a timeslot representing the event in the format
 *  {
 *  start: "YYYY-MM-DD hh:mm:ss"
 *  end: "YYYY-MM-DD hh:mm:ss"
 *  selected: true/false
 * }
 * @param {*} event the event to create a slot from
 * @param {*} setEnd true if an end date is required
 * @param {*} selected true if the slot is selected
 */
export function createSlotFromEvent (event, setEnd, selected) {
    //  create slot to represent selection
    return {
      start: event.format('YYYY-MM-DD HH:mm:ss'),
      end: setEnd ?  event.end.format('YYYY-MM-DD HH:mm:ss') : undefined,
      selected: selected
    }
}

export function findMatchingTimeSlot (selection, timeSlots) {
  let matchingSlot
  matchingSlot = timeSlots.find(slot => { return slot.start === selection.start })
      // if we don't have an exact slot, see if we have a matching slot on the hour
      // this is to get around the fact that the user could click on a time which is in the
      // middle of one of our available timeslots
      if (!matchingSlot) {
        let startDate = new Date(selection.start)
        if (startDate.getMinutes() === 30) {
          startDate.setMinutes(0)
        }
        // try again, this time on the hour
        matchingSlot = timeSlots.find(slot => { return slot.start === moment(startDate).format('YYYY-MM-DD HH:mm:ss') })
      }
      return matchingSlot
}