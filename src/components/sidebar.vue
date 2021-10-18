<template>
<div class="sidebar col-3 ml-3 mt-5">
 <div class="card" style="width:1600 px ">
            <div class="text-center mt-2 mb-2"><strong>All Links</strong></div>
            <ul class="list-group list-group-flush">
    <router-link :to="{ name: 'Index' }" class="route"><li class="link list-group-item">Home</li></router-link>
    <router-link :to="{ name: 'Users' }" class="route"><li class="link list-group-item"> Users <span class=" li ml-auto" > {{userlength}} </span></li></router-link>
    <router-link :to="{ name: 'Create' }" class="route"><li class="link list-group-item">Add Item</li></router-link>
    <router-link :to="{ name: 'Display' }" class="route"><li class="link list-group-item">All Items</li></router-link>
            </ul>
      </div>
    </div>   
</template>
<script>
import {mapGetters} from "vuex";
export default {
name:"Sidebar" ,
  computed: {
    ...mapGetters(['userlength']),
  },
}
</script>
<style>

li{
    position:absolute;
    right:20;
    color:whitesmoke;
}
.sidebar{
    margin-left:2px;
}
.link{
  background-color: palevioletred;
}
.link:hover{
  background-color: violet;
}
.route{
  text-decoration:none !important
}

</style>

