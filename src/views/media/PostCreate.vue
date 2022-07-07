<template>
  <div class="home">
    <div class="navu">
      <div class="nav">
        <router-link class="link" to="/setting">Setting</router-link>
        &nbsp;&nbsp;
        <router-link class="link" to="/about">About</router-link> &nbsp;&nbsp;
        <router-link class="link" to="/home">Home</router-link>&nbsp;&nbsp;
        <router-link class="link" to="/profile">{{ user }}</router-link>&nbsp;&nbsp;
        <!-- <router-link to="/profile"> {{ userName }} </router-link> -->
      </div>
      <h2>Create your posts here</h2>
      <hr />
    </div>

    <form @submit.prevent="submit">
      <div class="center">
        <div class="containers" id="child">
          <div class="formgroup">
            <label for="textpost">Write your Thoughts</label>
            <input type="text" name="textpost" v-model="textpost" />
          </div>
          <br />

          <div class="formgroup">
            <label for="imagepost">Upload your Photos</label>
            <input class="img"
              type="file"
              name="imagepost"
              accept="image/*"
              @change="handleImageSelected"
            />
          </div>
          <br />

          <!-- <div class="Post">
        <label for="imagepost">Upload your photos</label>
        <input type="file" name="imagepost" v-bind="imagepost" />
      </div>
      <br /> -->

          <button class="btnr">Post</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

import { useImageUpload } from "@/composables/useImageUpload";

export default {
  name: "Postcreate",

  setup() {
    const textpost = ref("");
    const imagepost = ref("");
    const { imageFile, handleImageSelected } = useImageUpload();
    const router = useRouter();
    const user = localStorage.getItem("user");

    const submit = async () => {
      const data = new FormData();
      data.append("textpost", textpost.value);
      data.append("imagepost", imageFile.value);

      console.log(textpost);

      await axios.post("http://localhost/api/addPost", data, {
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      });
      await router.push("/home");
    };
    return { textpost, submit, handleImageSelected, user };
  },
};
</script>

<style>
/* .Post {
  border: 3px solid aqua;
  border-radius: 16px;
  background-color: rgb(206, 250, 250);
  width: 300px;
  height: 100px;
  padding: 5px;
  display: flex;
  /* flex-direction: column; */
  /* align-content: center;
  justify-content: center;
}  */
.containers {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid aqua;
  border-radius: 8px;
  padding: 8px;
  /* justify-content: center; */
}
.btn {
  width: 150px;
  padding: 2px;
  font-size: large;
  font-weight: bold;
  border: 3px solid aqua;
  border-radius: 16px;
  background-color: rgb(201, 252, 252);
  color: rgb(6, 59, 42);
}
@media only screen and (max-width: 550px) {
  /* .Post {
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
  } */
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
  .btn {
    width: fit-content;
    padding: 2px;
    font-size: large;
    font-weight: bold;
    border-width: 3px;
    border-radius: 10px;
    border-color: aqua;
    background-color: rgb(177, 250, 250);
  }
   /* .img{
      width: 200px;
  } */
}
@media only screen and (max-width: 300px) {
  /* .Post {
    border: 3px solid aqua;
    border-radius: 16px;
    background-color: rgb(206, 250, 250);
    width: fit-content;
    height: 80px;
    padding: 3px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
  } */

  .img{
      width: 100px;
  }
  #child {
    border: 3px solid aqua;
    border-radius: 10px;
    /* padding: 4px; */
    width: fit-content;
    /* width: 200px; */
    display: flex;
    flex-direction: column;
    flex-shrink: 1;
    background-image: url("/src/assets/designed paper.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  .btn{
    width: fit-content;
    padding: 2px;
    font-size: large;
    font-weight: bold;
    border-width: 3px;
    border-radius: 10px;
    border-color: aqua;
    background-color: rgb(177, 250, 250);
  }
  h2{
      font-size: small;
  }
}
</style>