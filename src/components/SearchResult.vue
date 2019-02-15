<template>
<div>
    <h1>{{ msg }}</h1>
    <div class="searchResultCount">{{ resultsCount }} results</div>
    <ul id="searchresultlist">
        <li v-for="jdata in resultdata">
            <SearchResultItem :itemdata=jdata />}
        </li>
    </ul>
</div>
</template>

<script>
import Vue from 'vue'
import resultjson from '../mockdata/data.json'
import SearchResultItem from './SearchResultItem'

export default {
  name: 'Login',
  components: {
    SearchResultItem
  },
  data () {
    return searchresultlist
  }
}

var searchresultlist = new Vue({
  el: '#searchresultlist',
  data: {
    msg: "Search Result List",
    resultdata: resultjson.results,
    resultsCount: resultjson.resultsCount
  }
})

</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
h2 {
    color: #778899;
}
.searchResultCount{
    padding: 10px;
    width: 146px;
    height: 12px;
    font-family: Lato;
    font-size: 10px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #373739;
}
</style>
