import Vue from 'vue'
import BookingInfo from '@/components/BookingInfo'

describe('BookingInfo.vue', () => {
  it('should render the select slot', () => {
    const Constructor = Vue.extend(BookingInfo)
    const comp = new Constructor().$mount()
    comp.propsData = {
      selectedSlot: {
        start: '2016-12-05 13:00:00',
        end: '2016-12-05 14:00:00'
      }
    }
    Vue.nextTick(() => {
      expect(comp.$el.textContent).to.contain('12th December at 1pm')
    })
  })
})