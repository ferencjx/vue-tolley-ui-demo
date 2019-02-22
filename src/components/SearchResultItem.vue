<template>
    <div class="SearchResultItem" id="SearchResultItem">
        <div class="title">
            <a :href='metadata[1].value'>{{title}}</a>
        </div>
        <div class="metadata">{{metadata[0].value}}</div>
        <div class="content">{{content}}</div>
    </div>
</template>

<script>
export default {
  name: 'SearchResultItem',
  props: {
    metadata: {
      type: Array,
      required: false,
      validator: value => {
        if (value.filter(v => v.type === 'url').length === 0) {
          return false
        } else {
          return true
        }
      }
    },
    title: {
      type: String,
      required: false
    },
    content: {
      type: String,
      required: false
    }
  }
}
</script>

<style scoped>
.SearchResultItem {
  text-align: left;
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
