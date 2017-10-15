import $ from 'jquery'
require('fullcalendar')

/*
* Uses fullcalendar.io - using a JQuery based pulgin with
* Vuejs is not ideal, so we will wrap it to isolate the
* implementation detail from the vue component itself
* 
* This function returns an object which exposes methods for
* working with the calendar implementation, and calls methods
* on the supplied calendar vue component
*/
export function calendarWrapper(comp) {

  const component = comp
  const unavailaleColour = '#384452'
  const selectedColour = '#00B3FE'
  const unavailableMsg = 'Not available'
  const selectedMsg = 'Selected'

  /*
  * Adds any final properties we need for FullCalendar
  */
  const createFCEvents = (timeSlots) => {
    // the array of events to return
    let fcEvents = []
    if (timeSlots) {
      fcEvents = timeSlots.filter(timeSlot => {
        // filter out possible slots
        return timeSlot.selected || !timeSlot.possible
      }).map(timeSlot => {
          // add event colours and props
          if (timeSlot.selected) {
            timeSlot.color = selectedColour
            timeSlot.title = selectedMsg
            // the selected slot must be extendable
            timeSlot.editble = true
            timeSlot.durationEditable = true
          } else {
            timeSlot.color = unavailaleColour
            timeSlot.title = unavailableMsg
          }
          return timeSlot
      })
    }
    return fcEvents
  }

  return {
    /**
     * exposing these for testing purposes
     */
    unavailableColor: () => { return unavailaleColour },
    selectedColour: () => { return selectedColour },
    /*
    * Initialises the calendar component from a
    * vue component
    *
    * Set all initialisation parameters in this function
    *
    * @param comp: the component to add the calendar to
    */
    initCalendar: () => {
      component.cal = $(component.$el)
      // FULL CALENDAR CONFIG
      let args = {
        lang: 'en',
        header: false,
        height: 'auto',
        themeSystem: 'bootstrap3',
        defaultView: 'agendaWeek', // Only show week view
        minTime: '08:00:00', // Start time for the calendar
        maxTime: '17:00:00', // End time for the calendar
        allDaySlot: false,
        eventTextColor: 'white',
        firstDay: 1, // first day of the week is monday
        eventOverlap: false,
        timeFormat: 'HH:mm',
        columnFormat: 'ddd D/M' ,
        events: createFCEvents(component.timeSlots),
        dayClick: component.selectSlot,
        eventResize: (event) => {
          component.changeSlotDuration(event)
        }
      }
      console.log('initiating calendar')
      component.cal.fullCalendar(args)
      // set week to the week we are looking at
      if (args.events && args.events.length > 0) {
        component.cal.fullCalendar('gotoDate', args.events[0].start)
      }
      return component
    },

    createFCEvents: createFCEvents,
    /*
    * Refreshes the calendar's events
    */
    refreshCalendar: () => {
      console.log('refreshing calendar')
      component.cal.fullCalendar('removeEvents')
      component.cal.fullCalendar('addEventSource', createFCEvents(component.timeSlots))
    }
  }
}

