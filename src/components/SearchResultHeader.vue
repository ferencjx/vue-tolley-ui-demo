<template>
    <div class="searchResultCount">{{resultsCount}} results</div>
</template>

<script>
export default {
  name: 'SearchResultHeader',
  props: {
    resultsCount: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style scoped>
.searchResultCount{
  text-align: left;
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
