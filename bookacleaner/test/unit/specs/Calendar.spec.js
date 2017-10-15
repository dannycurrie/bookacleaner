import Vue from 'vue'
import Calendar from '@/components/Calendar'

describe('Calendar.vue', () => {
  it('should render calendar correctly', () => {
    const Constructor = Vue.extend(Calendar)
    const comp = new Constructor().$mount()
    // add a timeslot to trigger the calendar
    comp.propsData = {
      timeSlots: [{
        start: '2016-12-05 08:00:00',
        end: '2016-12-05 08:30:00',
        possible: false,
        selected: false
      }]
    }

    Vue.nextTick(() => {
      // check that the calendar has rendered successfully
      // TODO - could check more comprehensively here, for now just check that the week columns have rendered
      expect(comp.$el.textContent).contains('Mon 12/5')
    })
  })
})