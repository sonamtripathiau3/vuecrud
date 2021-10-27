<template>
    <span data-toggle="modal" data-target="#exampleModal">
        Login
    </span>
<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
  <div class="modal-body login">
      <h6 class="text-center"><strong>Login</strong></h6>
  <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" v-model="newdata.email">
    <span id="email" style="color:red"></span>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="newdata.password">
    <span id="password" style="color:red"></span>
  </div>
  <div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
  <button type="submit" class="btn btn-primary"  @click="login()">Submit</button>
  </div>
</form>
</div>
</div>
</div>
</div>
</template>
<script>
import Swal from "sweetalert2"
export default {
    name:"Login",
    data() {
    return {
      newdata: {},
      auth:false,
      isValid:true,
      active:false
    };
  },
  methods: {

    validation(){
      if(!this.newdata.email){
        document.getElementById("email").innerHTML="Please enter email"
        this.isValid=false
        this.active=true
      }else if(!this.validEmail(this.newdata.email)) {
        document.getElementById("email").innerHTML="Please enter valid email"
        this.isValid=false
        this.active=true
      }
      if(!this.newdata.password){
        document.getElementById("password").innerHTML="Please enter password"
        this.isValid=false
        this.active=true
      }
      
      return this.isValid
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    async login() {
      if(this.validation()){
      let uri;
      if (process.env.NODE_ENV === "production") {
        uri = "/login";
      } else {
        uri = "http://localhost:8000/login";
      }
      console.log(this.newdata);
       await this.axios.post(uri,this.newdata).then((res) => {
        console.log(res.data);
        if(res.data.user.email){
        this.auth=true
        localStorage.setItem("isLoggedIn", res.data.isLoggedIn)
        this.$store.dispatch('auth',this.auth);
      }
        Swal.fire({
        position: "center",
        icon: "success",
        title: res.data.msg,
        showConfirmButton: false,
        timer: 1500,
        });
       setTimeout(function () {
       window.location.replace("/dashboard")
       }, 1000)
      }).catch((error)=>{
        console.log("hello")
        console.log(error.response)
        Swal.fire({
        position: "top-end",
        icon: "error",
        title: error.response.data.msg,
        showConfirmButton: false,
        timer: 1500,
        });
      setTimeout(function () {
       window.location.replace("/login")
       }, 1000)
      })
      this.newdata = {};
    }
    }
  },
}
</script>
<style>

</style>