<template>
  <div id="app">
    <Menu/>
    <router-view/>
  </div>
</template>

<script>
import Menu from './components/Menu'
export default {
  name: 'App',
  components: {
    Menu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}
h1, h2 {
  font-weight: normal;
}

a {
    text-decoration: none;
    color: #0067b7;
    font-weight: bold;
}
a:hover {
    text-decoration: underline;
}

ul {
  list-style-type: none;
  padding: 20px 10 px;
}
li {
  margin: 10px 10px;
}
</style>
