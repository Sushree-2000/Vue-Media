<template>
  <div class="home">
    <div class="navu">
      <div class="nav">
        <router-link class="link" to="/setting">Setting</router-link>
        &nbsp;&nbsp;
        <router-link class="link" to="/about">About</router-link> &nbsp;&nbsp;
        <router-link class="link" to="/profile">{{ user }}</router-link>
      </div>
      <h2>Welcome to home page</h2>
      <hr />
    </div>
    <button class="btnc">
      <router-link class="link" to="/createpost">Create Post</router-link>
    </button>
    <div class="container">
      <div class="items" v-for="item in post" :key="item.id">
        <div class="child">
          <div class="dot">
            <div class="l">...</div>
            <div class="btnss">
              <button id="lk" class="btns">Like</button>
              <button id="lk" class="btns">Dislike</button>
              <button class="btns" v-if="item.user_id == userId">
                <router-link
                  class="link"
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

          <!-- <p>{{ item.id }}</p> -->
          <!-- <p id="po" class="po" v-if="item.userId == userId">
            <router-link class="link" to="/profile">{{
              item.email
            }}</router-link>
          </p>
          <p id="po" class="po" v-else>
            <router-link
              class="link"
              :to="{ name: 'XProfile', params: { id: item.user_id } }"
              >{{ item.email }}</router-link
            >
          </p> -->

          <p id="po" class="po">
            <router-link
              class="link"
              :to="{ name: 'XProfile', params: { id: item.user_id } }"
              >{{ item.email }}</router-link
            >
          </p>

          <!-- <p id="po" class="po"> {{ item.user_id }} </p> -->
          <p id="po">Created at:-&nbsp;&nbsp;{{ item.created_at }}</p>
          <p id="po">{{ item.textpost }}</p>
          <!-- <p>{{ item.imagepost }}</p> -->

          <img
            v-if="item.imagepost != null"
            v-bind:src="'http://localhost/postedImg/' + item.imagepost"
            alt=""
          />
        </div>
        <!-- <img src="http://localhost/postedImg/{{ item.imagepost }}" alt=""> -->
      </div>
      <br />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute, useRouter } from "vue-router";

export default {
  name: "HomePage",

  data() {
    return {
      post: null,
      userId: localStorage.getItem("userId"),
      user: localStorage.getItem("user"),
    };
  },

  async created() {
    const posts = await axios.get("http://localhost/api/getPosts", {
      headers: {
        Authorization: "Bearer" + " " + localStorage.getItem("token"),
      },
    });
    this.post = posts.data;
  },
  methods: {
    async del(id) {
      await axios.delete(`http://localhost/api/deletePost/${id}`, {
        headers: {
          Authorization: "Bearer" + " " + localStorage.getItem("token"),
        },
      });
      //   this.post = this.post;
      // this.$router.go();
    },
  },
};
</script>

<style>
.home {
  height: auto;
  background-image: url("/src/assets/paper.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  /* background-repeat: round; */
  background-size: cover;
  position: relative;
  border: 2px solid pink;
}
.nav {
  display: flex;
  flex-direction: row-reverse;
  margin: 2px;
}
.navu {
  background-image: url("/src/assets/light nav.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.btnc {
  width: 250px;
  padding: 2px;
  font-size: large;
  font-weight: bold;
  border-width: 3px;
  border-radius: 16px;
  border-color: aqua;
  background-color: rgb(177, 250, 250);
}
.container {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
}
.child {
  /* border-color: rgb(34, 240, 240); */
  border: 3px solid rgb(1, 187, 187);
  border-radius: 12px;
  margin-top: 8px;
  padding: 10px;
  background-image: url("/src/assets/designed paper1.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
img {
  /* background-image: none; */
  /* border: 2px solid rgb(92, 91, 91); */
  height: 400px;
  width: 500px;
  padding: 4px;
  border-radius: 10px;
}

.btnss {
  display: none;
}
.dot {
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  cursor: context-menu;
  font-size: xx-large;
  font-weight: bolder;
  color: rgb(0, 0, 17);
}
.dot:hover .btnss {
  display: block;
}

#po {
  /* color: aqua; */
  display: grid;
  place-items: start;
  padding: 5px;
}
.btns {
  border: none;
  background: none;
  cursor: pointer;
}
#lk {
  color: rgb(97, 97, 231);
}
#lk:hover {
  color: rgb(23, 23, 243);
}
#del {
  color: red;
  text-decoration: underline;
}
.link {
  text-decoration: none;
}

/* Reszponsive design */
@media only screen and (max-width: 550px) {
  .nav {
    display: flex;
    flex-direction: row-reverse;
    place-content: center;
    margin: 2px;
  }
  .btnc {
    width: fit-content;
    padding: 2px;
    font-size: large;
    font-weight: bold;
    border-width: 3px;
    border-radius: 16px;
    border-color: aqua;
    background-color: rgb(177, 250, 250);
  }
  .child {
    width: fit-content;
    border: 3px solid aqua;
    border-radius: 16px;
    margin-top: 8px;
    padding: 4px;
    background-image: url("/src/assets/designed paper.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  img {
    height: 200px;
    width: 300px;
  }
  #po {
    width: fit-content;
    display: grid;
    /* place-items: start; */
  }
}
@media only screen and (max-width: 350px) {
  .nav {
    display: flex;
    flex-direction: column-reverse;
    /* flex-shrink: 1; */
    place-content: center;
    margin: 2px;
  }
  img {
    height: 100px;
    width: 100px;
  }
  .child {
    width: 180px;
    /* height: fit-content; */
    border: 3px solid aqua;
    border-radius: 16px;
    margin-top: 8px;
    padding: 4px;
    background-image: url("/src/assets/designed paper.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  h2 {
    color: rgb(4, 161, 161);
    font-size: large;
    width: fit-content;
  }
  .l{
      display: none;
  }
  .btnss {
    display: block;
  }
}
@media only screen and (max-width: 200px) {
    .po{
        font-size: small;
        font-weight: lighter;
    }
  img {
    height: 100px;
    width: 100px;
  }
  .child {
    width: 100px;
    /* height: fit-content; */
    border: 3px solid aqua;
    border-radius: 16px;
    margin-top: 8px;
    padding: 4px;
    background-image: url("/src/assets/designed paper.jpeg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
  }
  h2 {
    color: rgb(4, 161, 161);
    font-size: x-small;
    width: fit-content;
  }
  p {
    width: fit-content;
    font-size: x-small;
  }
  .po,
  h3 {
    color: rgb(4, 112, 112);
    font-size: xx-small;
    /* font-weight: bolder; */
    /* text-decoration: underline; */
  }
  .btnss {
    display: block;
  }
}
</style>