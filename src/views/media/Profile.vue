<template>
  <div class="home">
    <div class="navu">
      <div class="nav">
        <router-link to="/setting">Setting</router-link> &nbsp;&nbsp;
        <router-link to="/about">About</router-link> &nbsp;&nbsp;
        <router-link to="/home">Home</router-link>&nbsp;&nbsp;
        <router-link to="/profile"> {{ userName }} </router-link>
      </div>
      <h2>This is profile page</h2>
      <hr />
    </div>
    <button class="btnc">
      <router-link to="/createpost">Create Post</router-link>
    </button>

    <div class="navp">
      <!-- <button></button> -->
    </div>
    <div class="out">
      <div class="container" v-bind="posts">
        <div class="post" v-for="item in post" :key="item.id">
          <div class="child">
            <div class="dot">
              ...
              <div class="btnss">
                <button id="lk" class="btns">Like</button>
                <button id="lk" class="btns">Dislike</button>
                <button class="btns" v-if="item.user_id == userId">
                  <router-link
                    :to="{ name: 'EditPost', params: { id: item.id } }"
                  >
                    Edit
                  </router-link>
                </button>
                <button
                  id="del"
                  class="btns"
                  v-if="item.user_id == userId"
                  @click="del(item.id)"
                >
                  Delete
                </button>
              </div>
            </div>

            <p id="po" class="po">{{ userName }}</p>
            <p id="po">Created at:- {{ item.created_at }}</p>
            <p id="po">{{ item.textpost }}</p>
            <!-- <img src="@/assets/logo.png" alt=""> -->
            <img
              v-bind:src="'http://localhost/postedImg/' + item.imagepost"
              height="400"
              width="500"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="container" v-bind="about">
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
            <div class="btnc">
              <router-link :to="{ name: 'EditAbout', params: { id: item.id } }"
                >Edit</router-link
              >
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
  name: "Profile",

  data() {
    return {
      user: null,
      post: null,
      about: null,
      userId: integer,
      userName: "",
    };
  },

  async created() {
    const users = await axios.get(
      `http://localhost/api/searchUser/${localStorage.getItem("user")}`,
      {
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      }
    );
    this.user = users.data;
    this.user.forEach((element) => {
      this.userId = element.id;
      this.userName = element.email;
    });
    // console.log(this.userId);

    const posts = await axios.get(
      `http://localhost/api/searchPost/${this.userId}`,
      {
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      }
    );
    this.post = posts.data;

    const abouts = await axios.get(
      //   `http://localhost/api/searchAbout/${localStorage.getItem("user")}`,
      `http://localhost/api/searchAbout/${this.userId}`,
      {
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      }
    );
    this.about = abouts.data;
  },
  methods: {
    async del(id) {
      await axios.delete(`http://localhost/api/deletePost/${id}`, {
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      });
      this.post = this.post;
    },
  },
};
</script>

<style>
.po,
h3 {
  color: rgb(4, 112, 112);
  font-size: x-large;
  font-weight: bolder;
  text-decoration: underline;
}
/* .out {
  margin: 2px;
  display: flex;
  place-content: space-evenly;
} */
span {
  color: rgb(2, 175, 175);
  text-decoration: underline;
}
.post {
  float: left;
}
.abot {
  /* position: absolute; */
  float: right;
}
@media only screen and (max-width: 1000px) {
  .out {
    margin: 2px;
    display: flex;
    flex-direction: column;
    /* place-content: space-evenly; */
    overflow: hidden;
  }
}
</style>