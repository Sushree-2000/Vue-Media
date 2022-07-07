<template>
  <div class="setting">
    <div class="navu">
      <div class="nav">
        <router-link class="link" to="/setting">Setting</router-link> &nbsp;&nbsp;
        <router-link class="link" to="/about">About</router-link> &nbsp;&nbsp;
        <router-link class="link" to="/home">Home</router-link>&nbsp;&nbsp;
        <router-link class="link" to="/profile">Profile</router-link>
      </div>
      <h2>Welcome to setting page</h2>
      <hr />
    </div>
    <div class="navs">
      <router-link class="link" to="/createuser">Create new Accout</router-link><br />
      <router-link class="link" to="/profile">Profile</router-link><br />
      <a href="https://www.myntra.com/">Shop here</a><br />
      <a class="link" href="" @click="logout">Logout</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Setting",

// data() {
//     return user: localStorage.getItem('user')
// },
  methods: {
    logout() {
      localStorage.clear();

      this.$router.push("/");
    },

    // async logout() {
    //     await axios.post("http://localhost/api/logoutUser", {
    //     headers: {
    //       Authorization: "Bearer" + " " + localStorage.getItem("token"),
    //     },
    //   });
    //   this.$router.push("/");

    // }
  },
};
</script>

<style>
.navs {
  display: flex;
  flex-direction: column;
  height: 200px;
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