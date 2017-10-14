import $ from 'jquery'
require('fullcalendar')

/*
* Uses fullcalendar.io - using a JQuery based pulgin with
* Vuejs is not ideal, so we will wrap it to isolate the
* implementation detail from the vue comonent itself
*/
export function calendarWrapper() {

  const unavailaleColour = '#384452'
  const selectedColour = '#00B3FE'
  const unavailableMsg = 'Not available'
  const selectedMsg = 'Selected'

  let createFCEvents = (timeSlots) => {
    let fcEvents = []
    if (timeSlots) {
      fcEvents = timeSlots.filter(timeSlot => {
        // filter out possible slots
        return timeSlot.selected || !timeSlot.possible
      }).map(timeSlot => {
          // add event colours and props
          if (timeSlot.selected) {
            timeSlot.color = selectedColour
            timeSlot.editble = true
            timeSlot.durationEditable = true
            timeSlot.title = selectedMsg
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
      initCalendar: (component) => {
        component.cal = $(component.$el)

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
          events: createFCEvents(component.timeSlots)
        }
        console.log('initiating calendar')
        component.cal.fullCalendar(args)
        if (args.events && args.events.length > 0) {
          // todo - what if empty?
          component.cal.fullCalendar('gotoDate', args.events[0].start)
        }
        return component
      },

      /*
      * Adds any final properties we need for FullCalendar
      */
      createFCEvents: createFCEvents,
      /*
      * Refreshes the calendar's events
      */
      refreshCalendar: (component) => {
        console.log('refreshing calendar')
        component.cal.fullCalendar('removeEvents')
        component.cal.fullCalendar('addEventSource', createFCEvents(component.timeSlots))
      }
  }
}

