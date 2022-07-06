import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import HomePage from '../views/media/HomePage.vue'
import UserCreate from '../views/media/UserCreate.vue'
import UserLogin from '../views/media/UserLogin.vue'
import Profile from '../views/media/Profile.vue'
import Setting from '../views/media/Setting.vue'
import PostCreate from '../views/media/PostCreate.vue'
import About from '../views/media/About.vue'
import EditPost from '../views/media/EditPost.vue'
import EditAbout from '../views/media/EditAbout.vue'
import XProfile from '../views/media/XProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/createuser',
    name: 'UserCreate',
    component: UserCreate
  },
  {
    path: '/loginuser',
    name: 'UserLogin',
    component: UserLogin
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
    props: true
  },
  {
    path: '/setting',
    name: 'Setting',
    component: Setting
  },
  {
    path: '/createpost',
    name: 'PostCreate',
    component: PostCreate
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/editpost/:id',
    name: 'EditPost',
    component: EditPost,
    props: true
  },
  {
    path: '/editabout/:id',
    name: 'EditAbout',
    component: EditAbout,
    props: true
  },
  {
    path: '/xprofile/:id',
    name: 'XProfile',
    component: XProfile,
    props: true
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
