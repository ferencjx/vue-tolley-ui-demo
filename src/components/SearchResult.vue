<template>
<div>
    <h1>{{ msg }}</h1>
    <SearchResultHeader :resultsCount=resultsCount />
    <div id='searchResultList' v-for="jdata in resultdata" v-bind:key=jdata.id>
      <SearchResultItem v-bind=jdata />
    </div>
</div>
</template>

<script>
import Vue from 'vue'

import SearchResultItem from './SearchResultItem'
import SearchResultHeader from './SearchResultHeader'

import resultjson from '../mockdata/data.json'

export default {
  name: 'SearchResult',
  components: {
    SearchResultItem,
    SearchResultHeader
  },
  data () {
    return searchResultList
  }
}

var searchResultList = new Vue({
  data: {
    msg: 'Search Result List',
    resultdata: resultjson.results,
    resultsCount: resultjson.resultsCount
  }
})

</script>

<style scoped>

</style>
