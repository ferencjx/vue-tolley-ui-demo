<template>
<div>
  <div id='searchResultList' v-for="jdata in results" v-bind:key=jdata.id>
    <SearchResultItem v-bind=jdata />
  </div>
</div>
</template>

<script>
import SearchResultItem from './SearchResultItem'

export default {
  name: 'SearchResultList',
  components: {
    SearchResultItem
  },
  props: {
    results: Array
  }
}

</script>
