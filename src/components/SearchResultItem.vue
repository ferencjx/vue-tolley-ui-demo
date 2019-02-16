<template>
<div class="searchResultItemContent">
    <div class="searchResultItem">
        <div class="title">
            <a :href='itemdata.metadata[1].value'>{{itemdata.title}}</a>
        </div>
        <div class="metadata">{{itemdata.metadata[0].value}}</div>
        <div class="content">{{itemdata.content}}</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'SearchResultItem',
  props: {
    itemdata: Object
  }
}
</script>

<style scoped>
.searchResultItemContent{
    text-align: left;
}
.searchResultItem {
    font-family: Lato;
    padding: 10px;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #373739;
  }
.title {
    font-size: 24px;
    font-weight: 900;
    color: #0067b7;
}
.metadata {
    font-size: 16px;
    font-weight: bold;
    color: #000000;
}
.content {
    font-size: 16px;
}
</style>
