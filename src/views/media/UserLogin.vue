<template>
  <div class="home">
    <form @submit.prevent="submit">
      <div class="navu">
        <div class="">
          <h3>Login here</h3>
          <hr />
        </div>
      </div>
      <div class="center">
        <div class="containers" id="child">
          <div class="dash">
            <div class="containers">
              <div class="formgroup">
                <label for="email">Enter your email</label><br />
                <input type="email" name="email" v-model="email" />
              </div>
              <br />
              <div class="formgroup">
                <label for="password">Enter your password</label><br />
                <input type="password" name="password" v-model="password" />
              </div>
              <br />

              <!-- <button class="btnc">Login</button> -->
              <button class="btnr">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
    <router-link to="/createuser">Don't have an account ?!</router-link>
    &nbsp;&nbsp;
    <!-- <div class="alert">you can register here</div> -->
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "UserLogin",

  setup() {
    const email = ref("");
    const password = ref("");

    const router = useRouter();

    const submit = async () => {
      const res = await axios.post("http://localhost/api/loginUser", {
        email: email.value,
        password: password.value,
      });
      // .then(
      //   res => {localStorage.setItem("user",res.data.user);
      //   localStorage.setItem("token",res.data.token);}
      // ).catch(
      //   err => {console.log(err)}
      // )
      console.log(res.data);
      localStorage.setItem("user", res.data.user);
      localStorage.setItem("userId", res.data.userId);
      localStorage.setItem("token", res.data.token);

      axios.defaults.headers.common["Authorization"] =
        "Bearer" + " " + localStorage.getItem("token");

      await router.push("/home");
    };
    return { email, password, submit };
  },
};
</script>

<style>
</style>