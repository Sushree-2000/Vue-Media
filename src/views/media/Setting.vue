<template>
  <div class="setting">
    <div class="navu">
      <div class="nav">
        <router-link to="/setting">Setting</router-link> &nbsp;&nbsp;
        <router-link to="/about">About</router-link> &nbsp;&nbsp;
        <router-link to="/profile">Profile</router-link>&nbsp;&nbsp;
        <router-link to="/home">Home</router-link>
      </div>
      <h2>Welcome to setting page</h2>
      <hr />
    </div>
    <div class="navs">
      <router-link to="/createuser">Create new Accout</router-link><br />
      <router-link to="/profile">Profile</router-link><br />
      <a href="https://www.myntra.com/">Shop here</a><br />
      <a href="" @click="logout">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting",

  methods: {
    logout() {
      localStorage.clear();

      this.$router.push("/");
    },
  },
};
</script>

<style>
.navs {
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */
  justify-content: center;
}
.setting {
  background-image: url("/src/assets/paper.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
</style>