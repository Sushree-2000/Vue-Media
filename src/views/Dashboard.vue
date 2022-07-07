<template>
  <div class="home">
    <div class="navu">
      <h2>This is dashboard</h2>
      <hr />
    </div>
    <div class="dash">
      <router-link class="link" id="link" to="/createuser">Register</router-link> &nbsp;&nbsp;
      <router-link class="link" id="link" to="/loginuser">Login</router-link>
    </div>
    <p>You can register and login here</p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.dash {
  height: 400px;
}


/* Responsive design */
@media only screen and (max-width: 350px){
    .dash{
        display: flex;
        flex-direction: column;
    }
    #link{
        font-size:xx-large ;
        font-weight: bolder;
    }
}
</style>