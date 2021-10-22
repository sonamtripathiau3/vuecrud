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
  </div>
    <div class="form-group">
    <label >Phone Number</label>
    <input type="number" class="form-control" v-model="data.number">
  </div>
  <div class="form-group">
    <label >Email address</label>
    <input type="email" class="form-control" aria-describedby="emailHelp" v-model="data.email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
    <div class="form-group">
    <label >Password</label>
    <input type="password" class="form-control"  v-model="data.password">
  </div>
  <div class="form-group">
    <label >Confirm Password</label>
    <input type="password" class="form-control"  v-model="data.confirm_password">
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
// import Swal from "sweetalert2"
export default {
name: "Register",
  data() {
    return {
      data: {},
    };
  },
  methods: {
    async register() {
      // let uri;
      // if (process.env.NODE_ENV === "production") {
      //   uri = "/register";
      // } else {
      //   uri = "http://localhost:8000/register";
      // }
      console.log(this.data);
      localStorage.setItem("email",this.data.email);
      localStorage.setItem("password",this.data.password);
      //  await this.axios.post(uri, this.data).then((response) => {
      //   console.log(response.data);
      //    Swal.fire({
      //   position: "center",
      //   icon: "success",
      //   title: response.data.item,
      //   showConfirmButton: false,
      //   timer: 1500,
      //   });
      // });
     
      this.data = {};
      // window.location.replace("/create")
      // setTimeout(function () {
      //       console.log('boo')
            window.location.replace("/login")
          // this.$router.push({ name: "App" });
      //   }, 1000)
    },
  },
};
</script>
<style>
.login{
  color: black;
  border: solid black;
}
</style>