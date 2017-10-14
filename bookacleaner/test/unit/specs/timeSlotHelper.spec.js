const helper = require('../../../src/timeSlotHelper')
const chai = require('chai')

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

describe('Find a matching timeslot in a collection of timeslots', () => {
  it('takes a timeslot and looks for a matching timeslot in the collection', () => {
    let timeSlots = [
      {
        start: '2016-12-05 08:00:00',
        end: '2016-12-05 08:30:00',
        possible: true
      },      
      {
        start: '2016-12-05 08:30:00',
        end: '2016-12-05 09:00:00',
        possible: true
      },
      {
        start: '2016-12-05 09:00:00',
        end: '2016-12-05 09:30:00',
        possible: false
      },
      {
        start: '2016-12-05 09:30:00',
        end: '2016-12-05 10:00:00',
        possible: true
      },
      {
        start: '2016-12-05 10:00:00',
        end: '2016-12-05 11:00:00',
        possible: true
      },
    ]

    let simpleCaseSlot = {
        start: '2016-12-05 10:00:00',
        end: '2016-12-05 11:00:00',
        selected: true
    }

    let simpleResult = helper.findMatchingTimeSlot(simpleCaseSlot, timeSlots)
    should.exist(simpleResult)
    expect(simpleResult).to.have.property('start').equal('2016-12-05 10:00:00')
    // test a case in which selection is in the middle of a slot
    let midSlotCaseSlot = {
        start: '2016-12-05 10:30:00',
        end: '2016-12-05 11:00:00',
        selected: true
    }
    let midSlotResult = helper.findMatchingTimeSlot(midSlotCaseSlot, timeSlots)
    should.exist(midSlotResult)
    expect(midSlotResult).to.have.property('start').equal('2016-12-05 10:00:00')
    // test a case in which selection is not present
    let invalidSlot = {
        start: '2016-12-05 12:30:00',
        end: '2016-12-05 13:00:00',
        selected: true
    }
    let invalidSlotResult = helper.findMatchingTimeSlot(invalidSlot, timeSlots)
    should.not.exist(invalidSlotResult)
  })
})

describe('Convert timeslot into human readable string', () => {
  it('should take a time slot and create a readable string', () => {
    let timeSlot = {
        start: '2016-12-05 08:00:00',
        end: '2016-12-05 08:30:00',
        possible: true
      }

      let result = helper.getReadableTimeSlotString(timeSlot)

      expect(result).to.equal('December 5th 8:00am for 0.5 hours')
  })
})