<template>
<div class="row">
<div class="col container">
  <h3 class="head text-center">Users are listed below</h3>
  <table class="table">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" v-bind:key="user.id"> 
          <th scope="row">{{user.id}}</th>
          <td>{{user.name}}</td>
          <td>{{user.email}}</td>
          <td>{{user.address.city}}</td>
          <td><button class="btn btn-danger" @click="deleteUser(user.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    </div> 
    </div> 
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name: 'Users',
  computed: {
    ...mapGetters(['users']),
  },
  mounted() {
    this.$store.dispatch('loadUsers'); 
  },
  methods:{
    deleteUser(id){
      console.log(id)
      this.$store.dispatch('deleteUser',id)
    }
  }
}
</script>
<style>
  h3 {
    margin-bottom: 5%;
  }
  table {
    background-image: url("https://img.freepik.com/free-vector/abstract-trendy-black-line-pattern-decoration-background_121035-76.jpg?size=626&ext=jpg");
    border: 5px solid black;
}
.head{
  color: brown;
}
</style>