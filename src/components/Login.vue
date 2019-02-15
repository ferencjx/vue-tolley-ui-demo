<template>
<div>
    <h1>Login Page</h1>
    <h2>{{ msg }}</h2>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      msg: 'Please login to use application'
    }
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
</style>
