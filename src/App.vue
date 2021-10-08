<template>
  <div id="app">
    <div>
      <Navbar/>
      </div>
    <div class="container">
      <transition name="fade">
        <div class="gap">
          <router-view></router-view>
        </div>
      </transition>
    </div>
    <div>
    <Footer/>
    </div>
  </div>
</template>

<script>
import Footer from "./components/footer.vue"
import Navbar from "./components/navbar.vue"
export default {
  components:{
    Footer,
    Navbar
  }
};
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>