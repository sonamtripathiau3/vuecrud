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
          <td><button class="btn btn-danger" data-toggle="modal" data-target="#exampleModal1" @click="modal(user.id)">Delete</button></td>
        </tr>
      </tbody>
    </table>
    <div class="container">
      <div class="row">
      <button type="button" class="col btn btn-success mr-2" v-if="count>1" @click="prev()">Previous</button>
      <button type="button" class="col btn btn-success" :disabled="isActive" @click="next()">Next</button>
      </div>
    </div>
    </div> 
    </div> 
  <!-- Modal -->
<div class="modal fade" id="exampleModal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Confirm</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <p>Please click confirm to Delete Users else close </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-success" data-dismiss="modal" @click="deleteUser(id)">Delete</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
    name: 'Users',
  data () {
     return {
       id:null,
       count:1,
       length:0,
       isActive:false
       }
  },
  computed: {
    ...mapGetters(['users','userLength']),
  },
  async mounted() {
    await this.$store.dispatch('loadUsers',1); 
    this.length=this.length+this.users.length
    console.log("length",this.length)
  },
  methods:{
    deleteUser(userid){
      console.log(userid)
      this.$store.dispatch('deleteUser',userid)
    },
    modal(newId){
      this.id=newId
      return this.id 
    },
    async next(){
      this.count++
      console.log("count",this.count)
      await this.$store.dispatch('loadUsers',this.count);
      this.length=this.count*5
      if(this.length===this.userLength){
        this.isActive=true
      }
    },
    async prev(){
      this.count--
      console.log("count",this.count)
      await this.$store.dispatch('loadUsers',this.count);
      this.length=this.count*5;
      this.isActive=false
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