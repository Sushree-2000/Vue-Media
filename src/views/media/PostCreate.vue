<template>
<div class="home">
    <div class="navu">
  <div class="nav">
    <router-link to="/setting">Setting</router-link> &nbsp;&nbsp;
    <router-link to="/about">About</router-link> &nbsp;&nbsp;
    <router-link to="/profile">Profile</router-link>&nbsp;&nbsp;
    <router-link to="/home">Home</router-link>&nbsp;&nbsp;
    <!-- <router-link to="/profile"> {{ userName }} </router-link> -->
  </div>
  <h2>Create your posts here</h2>
  <hr />
</div>

  <form @submit.prevent="submit">
    <div class="containers">
      <div class="Post">
        <label for="textpost">Write your Thoughts</label>
        <input type="text" name="textpost" v-model="textpost" />
      </div>
      <br />

      <div class="Post">
        <label for="imagepost">Upload your Photos</label>
        <input
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

      <button class="btn">Post</button>
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
    return { textpost, submit, handleImageSelected };
  },
};
</script>

<style>
.Post {
  border: 3px solid aqua;
  border-radius: 16px;
  background-color: rgb(206, 250, 250);
  width: 300px;
  height: 100px;
  padding: 5px;
  display: flex;
  /* flex-direction: column; */
  align-content: center;
  justify-content: center;
}
.containers {
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>