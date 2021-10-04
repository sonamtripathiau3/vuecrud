<template>
  <div id="app" >
    <nav class=" nav navbar navbar-expand-xl">
      <ul class="navbar-nav">
        <li class="item nav-item">
          <router-link :to="{ name: 'Create' }" class=" anchor nav-link">Add Item</router-link>
        </li>
        <li class="item nav-item">
          <router-link :to="{ name: 'Display' }" class=" anchor nav-link">All Items</router-link>
        </li>
      </ul>
    </nav>
    <div class="container">
    <transition name="fade">
      <div class="gap">
        <router-view></router-view>        
      </div>
    </transition>
    </div>
  </div>
</template>

<script>

export default {
}
</script>

<style>
    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
    .nav{
      background-color: darkorchid;
      overflow:hidden
    }
    .item{
      padding: 10px;
      border-color: black;

    }
    .anchor {
      color: white;
    }
    .anchor:hover{
      background-color:palevioletred;
    }

</style>