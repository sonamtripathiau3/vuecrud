 <template>  
 <div class=" container col-7">
    <div class="mt-5">
      <h6 style="color:white">To view users please click on Users Button</h6>
    </div>
      <div class="mt-2">
        <button class="btn btn-success btn-lg btn-block" v-on:click="users" > Users</button>
      </div>
    <div class="mt-5" v-if="message=='users'">
      <Users />
    </div>
    </div>
</template>
<script>
import Users from "./users.vue"
export default {
  name:"index",
  components:{
    Users
  },
  data () {
     return {
       message :null,
       status: "true"
       }
  },
 methods:{
   users(){
     console.log("hi")
     this.message="users",
     console.log(this.message)
     return this.message
   }
 }
};
</script>