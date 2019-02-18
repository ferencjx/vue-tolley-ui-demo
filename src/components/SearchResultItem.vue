<template>
<div class="searchResultItemContent">
    <div class="searchResultItem">
        <div class="title">
            <a :href='metadata[1].value'>{{title}}</a>
        </div>
        <div class="metadata">{{metadata[0].value}}</div>
        <div class="content">{{content}}</div>
    </div>
</div>
</template>

<script>
export default {
  name: 'SearchResultItem',
  props: {
    metadata: {
      type: Array,
      required: true,
      validator: value => {
        for (let v of value) {
          if (v.type === 'url') {
            return true
          }
        }
        return false
      }
    },
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true
    }
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
