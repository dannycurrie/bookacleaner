const helper = require('../../../src/timeSlotHelper')
const expect = require('chai').expect

describe('Convert raw data to time slots', () => {
  it('takes nested raw api data and creates flat list of time slots', () => {
    let rawData = [
        {
          "day": "2016-12-05",
          "startTimes": [
            {
              "start": "08:00:00",
              "end": "08:30:00",
              "possible": false
            },
            {
              "start": "08:30:00",
              "end": "09:00:00",
              "possible": false
            },
            {
              "start": "09:00:00",
              "end": "09:30:00",
              "possible": false
            },
            {
              "start": "09:30:00",
              "end": "10:00:00",
              "possible": false
            },
            {
              "start": "10:00:00",
              "end": "11:00:00",
              "possible": false
            },
            {
              "start": "11:00:00",
              "end": "12:00:00",
              "possible": false
            },
            {
              "start": "12:00:00",
              "end": "13:00:00",
              "possible": false
            },
            {
              "start": "13:00:00",
              "end": "14:00:00",
              "possible": false
            },
            {
              "start": "14:00:00",
              "end": "15:00:00",
              "possible": false
            },
            {
              "start": "15:00:00",
              "end": "16:00:00",
              "possible": false
            },
            {
              "start": "16:00:00",
              "end": "17:00:00",
              "possible": false
            },
            {
              "start": "17:00:00",
              "end": "18:00:00",
              "possible": false
            }
          ]
        }
    ]
    let timeSlots = helper.createTimeSlotsFromAPIData(rawData)

    expect(timeSlots.length).to.equal(12)
    expect(timeSlots[0].start).to.equal('2016-12-05 08:00:00')
    expect(timeSlots[0].end).to.equal('2016-12-05 08:30:00')
    expect(timeSlots[0].possible).to.equal(false)
  })
})