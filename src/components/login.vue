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
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" v-model="newdata.password">
  </div>
  <div class="modal-footer">
  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
  <button type="submit" class="btn btn-primary"  data-dismiss="modal" @click="login()">Submit</button>
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
      auth:false
    };
  },
  methods: {
    async login() {
      let uri;
      if (process.env.NODE_ENV === "production") {
        uri = "/login";
      } else {
        uri = "http://localhost:8000/login";
      }
      console.log(this.newdata);
       await this.axios.post(uri, this.newdata).then((res) => {
        console.log(res.data);
        if(res.data.user.email){
        this.auth=true
        localStorage.setItem("isLoggedIn", res.data.isLoggedIn)
        this.$store.dispatch('auth',this.auth);
      }else{
        window.location.replace("/login")
      }
        Swal.fire({
        position: "center",
        icon: "success",
        title: res.data.msg,
        showConfirmButton: false,
        timer: 1500,
        });
      });

     
      this.newdata = {};
      setTimeout(function () {
            window.location.replace("/dashboard")
      }, 1000)
    },
  },
}
</script>
<style>

</style>