<template>
<div class="searchresultitemcontent">
    <div class="searchResultItem">
        <div class="title">
            <a :href='itemdata.metadata[1].value'>
            {{itemdata.title}}
            </a>
        </div> 
        <div class="content">
            {{itemdata.metadata[0].value}}
        </div>  
        <div class="content">
            {{itemdata.content}}
        </div>              
    </div>    
</div>
</template>

<script>
export default {
  name: 'SearchResultItem',
  props:{ 
      itemdata: Object
  },
  data () {
    return itemdata
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
h2 {
    color: #778899;
}

.searchresultitemcontent{
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
a {
    text-decoration: none;
    color: #0067b7;
}
a:hover {
    text-decoration: underline;
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
</style>

