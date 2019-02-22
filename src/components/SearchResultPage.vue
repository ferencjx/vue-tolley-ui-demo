<template>
<div>
    <h1>{{ msg }}</h1>
    <SearchResultHeader :resultsCount=resultsCount />
    <SearchResultList :results=results />
</div>
</template>

<script>
import Vue from 'vue'

import SearchResultList from './SearchResultList'
import SearchResultHeader from './SearchResultHeader'

import resultjson from '../mockdata/data.json'

export default {
  name: 'SearchResultPage',
  components: {
    SearchResultHeader,
    SearchResultList
  },
  data () {
    return searchResultList
  }
}

var searchResultList = new Vue({
  data: {
    msg: 'Search Result List',
    results: resultjson.results,
    resultsCount: resultjson.resultsCount
  }
})

</script>

<style scoped>

</style>
