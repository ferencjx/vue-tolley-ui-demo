import Vue from 'vue'
import SearchResultItem from '../src/components/SearchResultItem'
import resultjson from '../src/mockdata/data.json'

const resultData = resultjson.results
const first = resultData[0]

describe('SearchResultItem', () => {
  it('render simple comp', () => {

    const comp = new Vue(SearchResultItem)

    comp.title = first.title
    comp.content = first.content
    comp.metadata = first.metadata

    //comp.$mount()
    //expect(comp.$el).toMatchSnapshot()

    //expect(comp.$el.querySelector('.SearchResultItemContent')).toEqual('Grant of a sub-lease')

  })
  it('render from a Component with propsData', () => {

    const props = { title: first.title, content: first.content, metadata: first.metadata }
    const Constructor = Vue.extend(SearchResultItem)
    const comp = new Constructor({ propsData: props }).$mount()

    expect(comp).toMatchSnapshot()
    //test title
    //console.log(comp.$el.getElementsByTagName('A')[0].innerHTML)
    expect(comp.$el.getElementsByTagName('A')[0].innerHTML).toBe(first.title)
    //test a tag href
    //console.log(comp.$el.getElementsByTagName('A')[0].attributes[0].value)
    expect(comp.$el.getElementsByTagName('A')[0].attributes[0].value).toBe(first.metadata[1].value)
    //test how many a tag is 
    //console.log(comp.$el.getElementsByTagName('A').length)
    expect(comp.$el.getElementsByTagName('A').length).toBe(1)
    //console.log(comp.$el.documentElement)

    //expect(comp.getElementById('SearchResultItem')).toEqual('Grant of a sub-lease')

  })
})