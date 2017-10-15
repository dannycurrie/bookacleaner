const calendarWrapper = require('../../../src/components/calendarWrapper').calendarWrapper()
const expect = require('chai').expect

describe('createFCEvents', () => {
  it('should creates an array of fc events', () => {
    let timeSlots = [
      {
        start: '2016-12-05 08:00:00',
        end: '2016-12-05 08:30:00',
        possible: true
      },      
      {
        start: '2016-12-05 08:30:00',
        end: '2016-12-05 09:00:00',
        possible: false
      },
      {
        start: '2016-12-05 09:00:00',
        end: '2016-12-05 09:30:00',
        possible: false
      },
      {
        start: '2016-12-05 09:30:00',
        end: '2016-12-05 10:00:00',
        possible: false
      },
    ]

    let fcEvents = calendarWrapper.createFCEvents(timeSlots)

    // should filter out the possible slots, as we don't show these on the calnedar
    expect(fcEvents.length).to.equal(3)
    expect(fcEvents[0].start).to.equal('2016-12-05 08:30:00')
    expect(fcEvents[0].end).to.equal('2016-12-05 09:00:00')
    expect(fcEvents[0].possible).to.equal(false)
    expect(fcEvents[0].color).to.equal(calendarWrapper.unavailableColor())
  })
})