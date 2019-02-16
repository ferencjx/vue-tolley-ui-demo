<template>
<div class="menu">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/readme">ReadMe</router-link>
      </li>
      <li>
        <router-link to="/searchresult">Demo Search List</router-link>
      </li>
      <li>
        <router-link to="/login">Go to Login</router-link>
      </li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'Menu'
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
h2 {
    color: #778899;
}

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
.menu{
    text-align: left;
}
</style>
