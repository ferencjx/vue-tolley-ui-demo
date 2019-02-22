import { shallowMount } from '@vue/test-utils'

import SearchResultHeader from '../src/components/SearchResultHeader'

describe('SearchResultHeader', () => {
    it('renders the page', () => {
      const wrapper = shallowMount(SearchResultHeader)
      expect(wrapper).toMatchSnapshot()
    })
  })