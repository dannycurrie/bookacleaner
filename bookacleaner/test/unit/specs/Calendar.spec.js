import Vue from 'vue'
import Calendar from '@/components/Calendar'

describe('Calendar.vue', () => {
  it('should render props', () => {
    const Constructor = Vue.extend(Calendar)
    const comp = new Constructor({
      propsData: {
        slots: [{
          day: '2016-12-05'
        }]
      }
    }).$mount()
    expect(comp.$el.textContent).to.contain('2016-12-05')
  })
})