<template>
<body>
  <article>
    <h1>We&rsquo;ll be back soon!</h1>
    <div>
      <p>
        Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If you need to you can always
        <a href="mailto:mas.trisutrisno@gmail.com">contact us</a>, otherwise we&rsquo;ll be back online shortly!
      </p>
      <p>
        &mdash;
        <!-- <a href="https://twitter.com/trikarai">@trikarai</a> | -->
        <a href="https://twitter.com/trisutrisno">@TriSutrisno</a>
      </p>
    </div>
  </article>
</body>
</template>

<script>
export default {
  name: 'Site Maintenance'
}
</script>

<style lang="scss" scoped>
body {
  text-align: center;
  padding: 150px;
}
h1 {
  font-size: 50px;
}
body {
  font: 20px Helvetica, sans-serif;
  color: #333;
}
article {
  display: block;
  text-align: left;
  width: 650px;
  margin: 0 auto;
}
a {
  color: #dc8100;
  text-decoration: none;
}
a:hover {
  color: #333;
  text-decoration: none;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
