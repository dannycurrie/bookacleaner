import Vue from 'vue'
import BookingInfo from '@/components/BookingInfo'

describe('BookingInfo.vue', () => {
  it('should render props', () => {
    const Constructor = Vue.extend(BookingInfo)
    const comp = new Constructor({
      propsData: {
        selectedSlot: {
          start: '2016-12-05 13:00:00',
          end: '2016-12-05 14:00:00'
        }
      }
    }).$mount()
    expect(comp.$el.textContent).to.contain('Current Selected Slot Info Goes Here')
  })
})