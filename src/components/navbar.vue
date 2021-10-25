<template>
  <nav class="navbar nav navbar-expand-lg">
    <a class="navbar-brand" href="/">
      <img
        id="img"
        src="../assets/logo.png"
        width="50"
        height="50"
        alt=""
        style="border-outline-color:black ,border-radius: 100%"
      />
    </a>
   <a class="navbar-brand" href="/" id="brand">
      <h2 style="color: white" v-if="!isLoggedin && !isLoggedIn">Welcome</h2>
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto mb-2 mb-lg-0">
          <div  class="row" v-if="isLoggedin || isLoggedIn">
          <router-link :to="{ name: 'Index' }" class="anchor nav-link">Home</router-link>
          <router-link :to="{ name: 'Create' }" class="anchor nav-link"
          >Add Item</router-link>
        <router-link :to="{ name: 'Display' }" class="anchor nav-link"
          >All Items</router-link>
      <button class="navbar-toggler dropleft" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  </button>
  <div class="collapse navbar-collapse" id="navbar-list-4">
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <img src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg" width="40" height="40" class="rounded-circle">
        </a>
        <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
          <router-link :to="{ name: 'Index' }" class="dropdown-item">Dashboard</router-link>
          <a class="dropdown-item" href="#">Edit Profile</a>
          <a class="dropdown-item" @click="logout()">Log Out</a>
        </div>
      </li>   
    </ul>
  </div>
      </div>
      <div class="row" v-else>
          <span>
          <a class="anchor nav-link"
          ><Login/></a>
          </span>
          <span >
          <a class="anchor nav-link"
          ><Register/></a>
          </span>
      </div>
    </div>
  </div>
</nav>
</template>
<script>
import Login from "./login.vue"
import Register from "./register.vue"
import {mapGetters} from "vuex"
export default {
  name: "Navbar",
  components:{
    Login,
    Register
  },
  data(){
    return{
      isLoggedIn:false
    }
  },
  mounted(){
    this.isLoggedIn=localStorage.getItem('isLoggedIn')
  },
  computed: {
    ...mapGetters(['isLoggedin']),
  },
  methods:{
    logout(){
      console.log("hello")
      localStorage.clear();
      window.location.replace("/")
    }
  }
};
</script>
<style>
.nav {
  background-color: darkorchid;
  /* overflow: hidden; */
}
#brand{
  margin: 0 auto;
  position: absolute;
  left:600px
}
/* .item {
  /* border-color: black; */
  /* padding: auto;
  position: absolute;
  right: 200px;
  bottom: 10px; */
/* } */ 
.anchor {
  color: white;
}
.anchor:hover {
  background-color: palevioletred;
}
#app {
  min-height: 1000px;
}

#img {
  /* border-radius: 50%; */
  border: 2px solid white;
  background-color: white;
  margin-left: 2pc;
}
.avatar{
    height:40px;
    width:40px
}
.dropdown:hover>.dropdown-menu {
  display: block;
}
</style>