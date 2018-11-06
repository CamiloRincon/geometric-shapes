import { mount, createLocalVue } from '@vue/test-utils'
import App from '../components/HelloComponent.vue'

test('App has a heading level 1', () => {
  const vue = createLocalVue()

  const app = mount(App, { vue })
  expect(app.contains('h1'))
})
