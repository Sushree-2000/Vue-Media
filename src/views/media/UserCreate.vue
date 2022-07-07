<template>
  <div class="home">
    <form @submit.prevent="submit">
      <div class="navu">
        <div class="">
          <h3>Register here</h3>
          <hr />
        </div>
      </div>
      <div class="center">
        <div class="containers" id="child">
          <div class="formgroup">
            <label for="name">Enter your name</label><br />
            <input type="text" name="name" v-model="name" />
          </div>
          <br />
          <div class="formgroup">
            <label for="email">Enter your email</label><br />
            <input type="email" name="email" v-model="email" />
          </div>
          <br />
          <div class="formgroup">
            <label for="gender">Enter your gender</label><br />
            <div>
              Male<input
                type="radio"
                name="gender"
                value="male"
                v-model="gender"
              />
              Female<input
                type="radio"
                name="gender"
                value="female"
                v-model="gender"
              />
            </div>
          </div>
          <br />
          <div class="formgroup">
            <label for="dob">Enter your dob</label><br />
            <input type="date" name="dob" v-model="dob" />
          </div>
          <br />
          <div class="formgroup">
            <label for="address">Enter your address</label><br />
            <input type="text" name="address" v-model="address" />
          </div>
          <br />
          <div class="formgroup">
            <label for="password">Enter your password</label><br />
            <input type="password" name="password" v-model="password" />
          </div>
          <br />
          <div class="formgroup">
            <label for="conf_password">Confirm password</label><br />
            <input
              type="password"
              name="conf_password"
              v-model="conf_password"
            />
          </div>
          <br />

          <button class="btnr">Register</button>
        </div>
      </div>
    </form>
    <router-link to="/loginuser">already have an account ?!</router-link>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "UserCreate",

  setup() {
    const name = ref("");
    const email = ref("");
    const gender = ref("");
    const dob = ref("");
    const address = ref("");
    const password = ref("");
    const conf_password = ref("");

    const router = useRouter();
    // validations({
    //   name: {required},
    //   email: {required},
    //   gender: {required},
    //   dob: {required},
    //   address: {required},
    //   password: {required},
    //   conf_password: {required}
    // });
    const submit = async () => {
      await fetch("http://localhost/api/addUser", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          name: name.value,
          email: email.value,
          gender: gender.value,
          dob: dob.value,
          address: address.value,
          password: password.value,
          conf_password: conf_password.value,
        }),
      });
      await router.push("/loginuser");
      // console.log(name,email,gender,dob,address);
    };
    return {
      name,
      email,
      gender,
      dob,
      address,
      password,
      conf_password,
      submit,
    };
  },
};
</script>

<style>
.formgroup {
  border: 3px solid aqua;
  border-radius: 16px;
  background-color: rgb(206, 250, 250);
  width: 300px;
  height: 80px;
  padding: 5px;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}
#child {
  border: 3px solid aqua;
  border-radius: 16px;
  padding: 10px;
  width: fit-content;
  background-image: url("/src/assets/designed paper.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.center {
  display: flex;
  place-content: space-around;
  margin: 10px;
}
.btnr {
  width: 320px;
  padding: 2px;
  font-size: large;
  font-weight: bold;
  border-width: 3px;
  border-radius: 10px;
  border-color: aqua;
  background-color: rgb(177, 250, 250);
}

/* Responsive design */
@media only screen and (max-width: 550px) {
  .formgroup {
    border: 3px solid aqua;
    border-radius: 16px;
    background-color: rgb(206, 250, 250);
    width: fit-content;
    height: 80px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  #child {
    border: 3px solid aqua;
    border-radius: 16px;
    padding: 4px;
    width: fit-content;
    background-image: url("/src/assets/designed paper.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .btnr {
    width: fit-content;
    padding: 2px;
    font-size: large;
    font-weight: bold;
    border-width: 3px;
    border-radius: 10px;
    border-color: aqua;
    background-color: rgb(177, 250, 250);
  }
}
@media only screen and (max-width: 250px) {
  .formgroup {
    border: 3px solid aqua;
    border-radius: 16px;
    background-color: rgb(206, 250, 250);
    width: 150px;
    height: 80px;
    padding: 5px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  #child {
    border: 3px solid aqua;
    border-radius: 16px;
    padding: 4px;
    width: fit-content;
    background-image: url("/src/assets/designed paper.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .btnr {
    width: fit-content;
    padding: 2px;
    font-size: large;
    font-weight: bold;
    border-width: 3px;
    border-radius: 10px;
    border-color: aqua;
    background-color: rgb(177, 250, 250);
  }
}
</style>

