<template>
    <span data-toggle="modal" data-target="#exampleModal2">
        Register
    </span>
<!-- Modal -->
<div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
<div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
  <div class="modal-body login">
    <h6 class="text-center"><strong>Register</strong></h6>
  <form v-on:submit.prevent="register">
    <div class="form-group">
    <label >Name</label>
    <input type="text" class="form-control" v-model="data.name">
    <span id="name" style="color:red"></span>
  </div>
    <div class="form-group">
    <label >Phone Number</label>
    <input type="number" class="form-control" v-model="data.number">
    <span id="number" style="color:red"></span>
  </div>
  <div class="form-group">
    <label >Email address</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" v-model="data.email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    <span id="myemail" style="color:red"></span>
  </div>
    <div class="form-group">
    <label >Password</label>
    <input type="password" class="form-control"  v-model="data.password">
      <span id="mypassword" style="color:red"></span>
  </div>
  <div class="form-group">
    <label >Confirm Password</label>
    <input type="password" class="form-control"  v-model="data.confirm_password">
    <span id="myconfirmpassword" style="color:red"></span>
  </div>
  <div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
  <button type="submit" class="btn btn-primary" value="Register">Submit</button>
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
name: "Register",
  data() {
    return {
      data: {},
      isValid:true,
      active:false
    };
  },
  methods: {
    
    validation(){
      if(!this.data.name){
        document.getElementById("name").innerHTML="Please enter name"
        this.isValid=false
        this.active=true
        return this.isValid
      }
      if(!this.data.number){
        document.getElementById("number").innerHTML="Please enter number"
        this.isValid=false
        this.active=true
        return this.isValid
      }
      console.log("length",String(this.data.number).length)
      if(String(this.data.number).length!==10){
        document.getElementById("number").innerHTML="Please enter 10 digit number"
        this.isValid=false
        this.active=true
        return this.isValid
      }
      if(!this.data.email){
        document.getElementById("myemail").innerHTML="Please enter email"
        this.isValid=false
        this.active=true
        return this.isValid
      } 
      if(!this.validEmail(this.data.email)) {
        document.getElementById("myemail").innerHTML="Please enter valid email"
        this.isValid=false
        this.active=true
        return this.isValid
      }
      if(!this.data.password){
        document.getElementById("mypassword").innerHTML="Please enter password"
        this.isValid=false
        this.active=true
        return this.isValid
      }
      console.log(this.data.password.length)
      if(this.data.password.length!==8 || this.data.password.length<8){
        document.getElementById("mypassword").innerHTML="Please enter password of length 8"
        this.isValid=false
        this.active=true
        return this.isValid
      }
      if(!this.data.confirm_password){
        document.getElementById("myconfirmpassword").innerHTML="Please enter confirm password"
        this.isValid=false
        this.active=true
        return this.isValid
      }
      if(this.data.password!==this.data.confirm_password){
        document.getElementById("myconfirmpassword").innerHTML="Did not match password"
        this.isValid=false
        this.active=true
        return this.isValid
      }
      console.log("this is valid",this.isValid)
      return this.isValid
    },
    validEmail: function (email) {
      var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    async register() {
      if(this.validation()){
      let uri;
      if (process.env.NODE_ENV === "production") {
        uri = "/register";
      } else {
        uri = "http://localhost:8000/register";
      }
      console.log(this.data);
      localStorage.setItem("email",this.data.email);
      localStorage.setItem("password",this.data.password);
       await this.axios.post(uri, this.data).then((res) => {
        console.log(res);
        Swal.fire({
        position: "center",
        icon: "success",
        title: res.data.msg,
        showConfirmButton: false,
        timer: 1500,
        });
      setTimeout(function () {
      // //       console.log('boo')
      window.location.replace("/login")
      //     // this.$router.push({ name: "App" });
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
      this.data = {};
      // window.location.replace("/create")
    }
    }
  },
};
</script>
<style>
.login{
  color: black;
  border: solid black;
}
</style>