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
      // let uri;
      // if (process.env.NODE_ENV === "production") {
      //   uri = "/register";
      // } else {
      //   uri = "http://localhost:8000/register";
      // }
      console.log(this.data);
      if(this.newdata.email==localStorage.getItem("email")&& this.newdata.password==localStorage.getItem("password")){
        this.auth=true
        await this.$store.dispatch('auth',this.auth);
        this.$router.push({name: "Index"});
      }else{
        window.location.replace("/login")
      }
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
     
      this.newdata = {};
      // window.location.replace("/create")
      // setTimeout(function () {
      //       console.log('boo')
            // window.location.replace("/login")
          // this.$router.push({ name: "App" });
      //   }, 1000)
    },
  },
}
</script>
<style>

</style>