<template>
  <div class="container col-7 md-10 mt-5">
    <div class="card">
      <div class="card-header">
        <h3>Add Item</h3>
      </div>
      <div class="card-body">
        <form v-on:submit.prevent="addItem">
          <div class="form-group">
            <label>Item Name:</label>
            <input type="text" class="form-control" v-model="item.name" />
          </div>
          <div class="form-group">
            <label>Item Price:</label>
            <input type="text" class="form-control" v-model="item.price" />
          </div>
          <div class="form-group">
            <input type="submit" class="btn btn-primary" value="Add Item" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2";
export default {
  name: "AddItem",
  data() {
    return {
      item: {},
    };
  },
  methods: {
    async addItem() {
      let uri;
      if (process.env.NODE_ENV === "production") {
        uri = "/item";
      } else {
        uri = "http://localhost:8000/item";
      }
      console.log(this.item);
       await this.axios.post(uri, this.item).then((response) => {
        console.log(response.data);
         Swal.fire({
        position: "center",
        icon: "success",
        title: response.data.item,
        showConfirmButton: false,
        timer: 1500,
        });
        return response.data.item;
      });
     
      this.item = {};
      // window.location.replace("/create")
    
      setTimeout(function () {
            console.log('boo')
            window.location.replace("/display")
            //  this.$router.push({ name: "Display" });
        }, 1000)
    },
  },
};
</script>