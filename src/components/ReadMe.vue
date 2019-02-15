<template>
<div>
    <h1>Readme</h1>
    <h2>{{ msg }}</h2>
    <div class="row">
        <div class="content-multiple">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. 
            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. 
        </div>
    </div>
    <div class="row">
        <div class="content">
            <ul>
                <li><a href="https://www.tutorialspoint.com/vuejs/index.htm">https://www.tutorialspoint.com/vuejs/index.htm</a></li>
                <li><a href="https://vuejs.org/">https://vuejs.org/</a></li>
                <li><a href="https://app.pluralsight.com/player?course=vuejs-getting-started&author=chad-campbell&name=vuejs-getting-started-m5&clip=7&mode=live">PluralSight VueJs - Getting Started</a></li>
                <li><a href="#">Tolley - ReadMe</a></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'ReadMe',
  data () {
    return {
      msg: 'Information about Demo app'
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
.content{
    text-align: left;
}
.content-multiple {
    padding: 1em 2em 2em 2em;
    text-align: left;
    -webkit-column-count: 2; /* Chrome, Safari, Opera */
    -moz-column-count: 2; /* Firefox */
    column-count: 2;
}
</style>
