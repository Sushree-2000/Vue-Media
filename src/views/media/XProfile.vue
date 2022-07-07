<template>
  <div class="home">
    <div class="navu">
      <div class="nav">
        <router-link class="link" to="/setting">Setting</router-link> &nbsp;&nbsp;
        <router-link class="link" to="/about">About</router-link> &nbsp;&nbsp;
        <router-link class="link" to="/home">Home</router-link>&nbsp;&nbsp;
        <router-link class="link" to=""> {{ userN }} </router-link>
      </div>
      <h2>{{ userN }}'s profile page</h2>
      <hr />
    </div>
    <div class="out">
      <div class="container">
        <div class="post" v-for="item in post" :key="item.id">
          <div class="child">
            <div class="btnss">
              <button id="lk" class="btns">Like</button>
              <button id="lk" class="btns">Dislike</button>

              <button class="btns" v-if="userN == actualUser">
                <router-link class="link"
                  :to="{ name: 'EditPost', params: { id: item.id } }"
                >
                  Edit
                </router-link>
              </button>
              <button
                id="del"
                class="btns"
                v-if="userN == actualUser"
                @click="del(item.id)"
              >
                Delete
              </button>


            </div>

            <p id="po" class="po">{{ userN }}</p>
            <p id="po">Created at:- {{ item.created_at }}</p>
            <p id="po">{{ item.textpost }}</p>
            <img
              v-bind:src="'http://localhost/postedImg/' + item.imagepost"
              height="400"
              width="500"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="abot" v-for="item in about" :key="item.id">
          <div class="child">
            <div class="personaldetails">
              <h3>Personal Details</h3>
              <p><span>Full Name: </span>{{ item.fullname }}</p>
              <p><span>Email Id: </span>{{ item.email }}</p>
              <p><span>Phone Number: </span>{{ item.number }}</p>
              <p><span>Date of birth: </span>{{ item.dob }}</p>
              <p><span>Gender: </span>{{ item.gender }}</p>
              <p><span>Permanent Address: </span>{{ item.address }}</p>
            </div>
            <div class="professionaldetails">
              <h3>Professional Details</h3>
              <p><span>Work: </span>{{ item.work }}</p>
              <p><span>Education: </span>{{ item.education }}</p>
              <p><span>Educational Institute: </span>{{ item.college }}</p>
              <p><span>College Passout year: </span>{{ item.passout }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import axios from "axios";
import integer from "vuelidate/lib/validators/integer";

export default {
  name: "XProfile",
  //   props: ['id'],

  setup() {
    const route = useRoute();
    const router = useRouter();
    const actualUser = localStorage.getItem("user");

    // localStorage.removeItem("userN", "post", "abt");

    const fetchuser = async () => {
      const serusr = await axios.get(
        `http://localhost/api/getUsers/${route.params.id}`,
        {
          headers: {
            Authorization: "Bearer" + " " + localStorage.getItem("token"),
          },
        }
      );
      const userN = serusr.data.email;
      //   console.log(userN);
      localStorage.setItem("userN", userN);
    };
    fetchuser();
    const userN = localStorage.getItem("userN");
    console.log(userN);

    const fetchpost = async () => {
      const respost = await axios.get(
        `http://localhost/api/searchPost/${route.params.id}`,
        {
          headers: {
            Authorization: "Bearer" + " " + localStorage.getItem("token"),
          },
        }
      );
      const fetchp = respost.data;
      //   console.log(fetchp);
      localStorage.setItem("post", JSON.stringify(fetchp));
    };
    fetchpost();
    const post = JSON.parse(localStorage.getItem("post"));
    console.log(post);

    const fetchAbt = async () => {
      const resAbt = await axios.get(
        `http://localhost/api/searchAbout/${route.params.id}`,
        {
          headers: {
            Authorization: "Bearer" + " " + localStorage.getItem("token"),
          },
        }
      );
      const fetcha = resAbt.data;
      localStorage.setItem("abt", JSON.stringify(fetcha));

      // console.log(fetcha);
    };
    fetchAbt();
    const about = JSON.parse(localStorage.getItem("abt"));
    console.log(about);

    localStorage.removeItem("userN", "post", "abt");

// // // //
    const del = async () => {
        await axios.delete(`http://localhost/api/deletePost/${route.params.id}`, {
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      });
      await router.push("/home");
    }
// // // //

    return { userN, post, about, actualUser, del };
  },
};
</script>

<style>
.po,
h3 {
  color: rgb(2, 65, 65);
  font-size: x-large;
  font-weight: bolder;
  /* text-decoration: underline; */
}

span {
  color: rgb(2, 175, 175);
  text-decoration: underline;
}

</style>