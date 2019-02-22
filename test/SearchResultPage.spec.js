import { shallowMount } from '@vue/test-utils'

import SearchResultPage from '../src/components/SearchResultPage'

describe('SearchResultPage', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(SearchResultPage)
    expect(wrapper).toMatchSnapshot()
  })
})
