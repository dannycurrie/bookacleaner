import Vue from 'vue'
import Calendar from '@/components/Calendar'

describe('Calendar.vue', () => {
  it('should render calendar', () => {
    const Constructor = Vue.extend(Calendar)
    const comp = new Constructor().$mount()
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
      // TODO - could check more comprehensively here
      expect(comp.$el.textContent).contains('Mon 12/5')
    })
  })
})