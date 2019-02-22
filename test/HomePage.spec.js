import { shallowMount } from '@vue/test-utils'

import HomePage from '../src/components/HomePage'

describe('<HomePage>', () => {
  it('renders the page', () => {
    const searchResultPageWrapper = shallowMount(HomePage)
    expect(searchResultPageWrapper).toMatchSnapshot()
  })
})
