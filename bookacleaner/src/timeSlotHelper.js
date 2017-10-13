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
 *  "possible": true/false
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