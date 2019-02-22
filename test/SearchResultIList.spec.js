import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'

import SearchResultList from '../src/components/SearchResultList'

describe('SearchResultList', () => {
  it('renders the page', () => {
    const wrapper = shallowMount(SearchResultList)
    expect(wrapper).toMatchSnapshot()
  })
  it('rendering Items', () => {
    const Constructor = Vue.extend(SearchResultList)
    const vm = new Constructor().$mount()
    console.log(vm.$el.querySelector('.SearchResultItemContent'))
    expect(vm.$el.querySelector('SearchResultItem').querySelector('.title').innerHTML).toEqual('Grant of a sub-lease')
   })
})