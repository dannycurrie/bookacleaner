import Vue from 'vue'
import Calendar from '@/components/Calendar'

describe('Calendar.vue', () => {
  it('should render props', () => {
    const Constructor = Vue.extend(Calendar)
    const comp = new Constructor({
      propsData: {
        timeSlots: [{
          start: '2016-12-05 08:00:00',
          end: '2016-12-05 08:30:00',
          possible: false,
          selected: false
        }]
      }
    }).$mount()
    expect(comp.$el.textContent).to.contain('2016-12-05 08:00:00 false')
  })
})