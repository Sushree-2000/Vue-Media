<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->

  <!-- <div id="app">
    <nav class="navbar navbar-expand navbar-light fixed-top">
      <div class="container">
        <router-link to="/dashboard">Dashboard</router-link>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register">Register</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div> -->


  <router-view/>
  <!-- <link-view/> -->
</template>

<script>
  export default{
    name:'App'
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* *{
    background-image: url("/src/assets/sky.jpeg");
    background-color:rgb(151, 233, 206);
} */

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
