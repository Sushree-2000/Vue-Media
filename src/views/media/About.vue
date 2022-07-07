<template>
  <div class="home">
    <div class="navu">
      <div class="nav">
        <router-link class="link" to="/setting">Setting</router-link>
        &nbsp;&nbsp;
        <!-- <router-link to="/about">About</router-link> &nbsp;&nbsp; -->
        <router-link class="link" to="/home">Home</router-link>&nbsp;&nbsp;
        <router-link class="link" to="/profile">{{user}}</router-link
        >&nbsp;&nbsp;
        <!-- <router-link to="/profile"> {{ userName }} </router-link> -->
      </div>
      <h2 class="h2">Add your details</h2>
      <hr />
    </div>

    <div class="add">
      <form class="form" @submit.prevent="submit">
        <div class="child">
          <div class="personaldetail">
            <div class="heading">
              <h3 class="h3">Personal details</h3>
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
              <h3 class="h3">Professional Details</h3>
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
          <button class="btnc" type="submit">Upload</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "About",

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
    const user = localStorage.getItem("user");


    const submit = async () => {
      await fetch("http://localhost/api/addAbout", {
        method: "POST",
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
      submit,user
    };
  },
};
</script>

<style>
h2 {
  color: rgb(5, 196, 196);
  font-size: xx-large;
}
h3 {
  text-decoration: underline;
}

.heading {
  color: blue;
  text-decoration: wavy;
}

.abt {
  border: 3px solid aqua;
  border-radius: 12px;
  background-color: rgb(206, 250, 250);
  width: 300px;
  height: 80px;
  padding: 8px;
  /* margin: 20px; */
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
}

/* Responsive design */
@media only screen and (max-width: 370px) and (min-width: 350px){
  .abt {
    border: 3px solid aqua;
    border-radius: 12px;
    background-color: rgb(206, 250, 250);
    width: fit-content;
    height: 80px;
    padding: 4px;
    /* margin: 20px; */
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
}
@media only screen and (max-width: 350px){
    .h2{
        font-size: large;
        /* align-items: center; */
    }
  .abt {
    border: 3px solid aqua;
    border-radius: 12px;
    background-color: rgb(206, 250, 250);
    width: 150px;
    height: 80px;
    padding: 4px;
    /* margin: 20px; */
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  label, .h3{
      font-weight: 300;
      font-size: medium;
  }
}
@media only screen and (max-width: 200px){
  .abt {
    border: 3px solid aqua;
    border-radius: 12px;
    background-color: rgb(206, 250, 250);
    width: 85px;
    height: 80px;
    padding: 2px;
    /* margin: 20px; */
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  }
  label, h3{
      font-size: smaller;
  }

}
</style>