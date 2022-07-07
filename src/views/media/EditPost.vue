<template>
  <div class="home">
    <div class="navu">
      <div class="nav">
        <router-link class="link" to="/setting">Setting</router-link>
        &nbsp;&nbsp;
        <router-link class="link" to="/about">About</router-link> &nbsp;&nbsp;
        <router-link class="link" to="/home">Home</router-link>&nbsp;&nbsp;
        <router-link class="link" to="/profile">{{user}}</router-link>&nbsp;&nbsp;
        <!-- <router-link to="/profile"> {{ userName }} </router-link> -->
      </div>
      <h2>Edit your post</h2>
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
            <input
              type="file"
              name="imagepost"
              accept="image/*"
              @change="handleImageSelected"
            />
          </div>
          <br />

          <button class="btn">Update</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { required } from "vuelidate/lib/validators";
import axios from "axios";

import { useImageUpload } from "@/composables/useImageUpload";

export default {
  name: "Postcreate",
  props: ["id"],

  setup() {
    const textpost = ref("");
    const imagepost = ref("");
    const { imageFile, handleImageSelected } = useImageUpload();
    const router = useRouter();
    const route = useRoute();
    const user = localStorage.getItem("user");


    const submit = async () => {
      const data = new FormData();
      data.append("textpost", textpost.value);
      data.append("imagepost", imageFile.value);

      console.log(textpost);

      await axios.post(
        `http://localhost/api/updatePost/${route.params.id}`,
        data,
        {
          headers: {
            Authorization: "Bearer" + " " + localStorage.getItem("token"),
          },
        }
      );
      await router.push("/home");
    };
    return { textpost, submit, handleImageSelected, user };
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