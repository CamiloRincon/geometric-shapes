import { mount } from '@vue/test-utils'
import HelloComponent from '../components/HelloComponent.vue'

describe('Counter', () => {
  // Now mount the component and you have the wrapper
  const wrapper = mount(HelloComponent)

  it('renders the correct markup', () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>')
  })

  // it's also easy to check for the existence of elements
  it('has a button', () => {
    expect(wrapper.contains('button')).toBe(true)
  })
})
