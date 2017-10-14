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
    //  return a timeslot to represent selection
    return {
      // if there is a start property, use that, otherwise just format the event itself
      start: event.start ? event.start.format('YYYY-MM-DD HH:mm:ss') : event.format('YYYY-MM-DD HH:mm:ss'),
      end: (setEnd && event.end) ?  event.end.format('YYYY-MM-DD HH:mm:ss') : undefined,
      selected: selected
    }
}

/**
 * Given a selection and a collection of timeslots, will return the timeslot
 * with a matching start time
 * @param {*} selection 
 * @param {*} timeSlots 
 */
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

/**
 * Given a timeslot, will return a human readable string representing it
 * @param {*} timeSlot 
 */
export function getReadableTimeSlotString (timeSlot) {
  if(timeSlot.start && timeSlot.end) {
    let startDate = new Date(timeSlot.start)
    let endDate = new Date(timeSlot.end)
    let duration = Math.abs(startDate - endDate) / 36e5
    return moment(startDate).format('MMMM Do h:mma') + ' for ' + duration + (duration === 1 ? ' hour' : ' hours')
  } else {
    throw {
     name: 'TypeError',
     message: 'Unrecognised timeslot format: must have start and end: ' + JSON.stringify(timeSlot) 
    }
  }
}