<template>
  <div class="home">
    <div class="navu">
      <div class="nav">
        <router-link to="/setting">Setting</router-link> &nbsp;&nbsp;
        <!-- <router-link to="/about">About</router-link> &nbsp;&nbsp; -->
        <router-link to="/profile">Profile</router-link>&nbsp;&nbsp;
        <router-link to="/home">Home</router-link>&nbsp;&nbsp;
        <!-- <router-link to="/profile"> {{ userName }} </router-link> -->
      </div>
      <h2>Edit your details</h2>
      <hr />
    </div>
    <div class="add">
      <form class="form" @submit.prevent="submit">
        <div class="child">
          <div class="personaldetail">
            <div class="heading">
              <h3>Personal details</h3>
            </div>

            <div class="abt">
              <label for="fullname">Full name:</label>
              <input
                type="text"
                name="fullname"
                placeholder="Enter your full name"
                v-model="fullname"
              />
            </div>

            <div class="abt">
              <label for="email">Email:</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email id"
                v-model="email"
              />
            </div>

            <div class="abt">
              <label for="number">Phone:</label>
              <input
                type="tel"
                name="number"
                placeholder="Enter your phone number"
                v-model="number"
              />
            </div>

            <div class="abt">
              <label for="dob">Date of birth:</label>
              <input
                type="date"
                name="dob"
                placeholder="Enter your DOB"
                v-model="dob"
              />
            </div>

            <div class="abt">
              <label for="gender">Gender:</label>
              <input
                type="text"
                name="gender"
                placeholder="Gender"
                v-model="gender"
              />
            </div>

            <div class="abt">
              <label for="address">Permanent Address:</label>
              <input
                type="text"
                name="address"
                placeholder="Enter your permanent address"
                v-model="address"
              />
            </div>
          </div>
          <div class="professionaldetails">
            <div class="heading">
              <h3>Professional Details</h3>
            </div>

            <div class="abt">
              <label for="work">Work:</label>
              <input
                type="text"
                name="work"
                placeholder="What's your profession"
                v-model="work"
              />
            </div>

            <div class="abt">
              <label for="education">Education:</label>
              <input
                type="text"
                name="education"
                placeholder="Qualification"
                v-model="education"
              />
            </div>

            <div class="abt">
              <label for="college">Educational Institute:</label>
              <input
                type="text"
                name="college"
                placeholder="Your college name"
                v-model="college"
              />
            </div>

            <div class="abt">
              <label for="passout">College pass out year:</label>
              <input
                type="text"
                name="passout"
                placeholder="Passout year"
                v-model="passout"
              />
            </div>
          </div>
        </div>
        <button class="btnc" type="submit">Update</button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "EditAbout",

  setup() {
    const fullname = ref("");
    const email = ref("");
    const number = ref();
    const dob = ref("");
    const gender = ref("");
    const address = ref("");
    const work = ref("");
    const education = ref("");
    const college = ref("");
    const passout = ref("");

    const router = useRouter();
    const route = useRoute();

    const submit = async () => {
      await fetch(`http://localhost/api/updateAbout/${route.params.id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
        body: JSON.stringify({
          fullname: fullname.value,
          email: email.value,
          number: number.value,
          gender: gender.value,
          dob: dob.value,
          address: address.value,
          work: work.value,
          education: education.value,
          college: college.value,
          passout: passout.value,
        }),
      });
      await router.push("/profile");
      // console.log(name,email,gender,dob,address);
    };

    return {
      fullname,
      email,
      number,
      gender,
      dob,
      address,
      work,
      education,
      college,
      passout,
      submit,
    };
  },
};
</script>

<style>

h2 {
  color: rgb(5, 196, 196);
  font-size: xx-large;
}
.abt {
  display: flex;
  flex-direction: column;
  margin: 3px;
}
.add {
  display: flex;
  /* place-content: space-evenly; */
  align-items: center;
  justify-content: center;
  border-radius: 10px;
}
.heading {
  color: blue;
  text-decoration: wavy;
}
.btnc {
  margin: 3px;
}
</style>