<template>
  <div id="app">
    <div>
      <Navbar/>
      </div>
        <div class="row" v-if="isLoggedin">
        <Sidebar/>
    <div class="col md-10 container">
      <transition name="fade">
        <div class="gap">
          <router-view></router-view>
        </div>
      </transition>
    </div>
    </div>
    <div class="container d-flex align-items-center justify-content-center mt-5 mb-5" v-else>
   <div class="card" style="width:18rem">
  <img src="https://qph.fs.quoracdn.net/main-qimg-3e2027b88724903786e8b22732b09df1-c" style="height:250px" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Welcome</h5>
    <p class="card-text">Click below to register</p>
    <div class="row">
    <a class="ml-2 btn btn-dark"><Login/></a>
    <a class="ml-2 btn btn-dark"><Register/></a>
    </div>
  </div>
  </div>
    </div>
    <div>
    <Footer/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex"
import Footer from "./components/footer.vue"
import Navbar from "./components/navbar.vue"
import Sidebar from "./components/sidebar.vue"
import Login from "./components/login.vue"
import Register from "./components/register.vue"
export default {
  components:{
    Footer,
    Navbar,
    Sidebar,
    Login,
    Register
  },
    computed: {
    ...mapGetters(['isLoggedin']),
  },
};
</script>
<style>
#app{
  background-image: url("https://ak.picdn.net/shutterstock/videos/22923247/thumb/1.jpg?ip=x480");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>