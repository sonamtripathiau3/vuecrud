<template>
    <div class="container mt-5 mr-4">
        <h1>Items</h1>

        <table class="table table-hover">
            <thead>
            <tr>
                <td>ID</td>
                <td>Item Name</td>
                <td>Item Price</td>
                <td>Actions</td>
            </tr>
            </thead>

            <tbody>
                <tr v-for="item in items" :key="item._id">
                    <td>{{ item._id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.price }}</td>
                    <td><router-link :to="{name: 'Edit', params: { id: item._id }}" class="btn btn-primary">Edit</router-link></td>
                    <td><button class="btn btn-danger"  v-on:click="deleteItem(item._id)">Delete</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

    export default {
        data(){
            return{
                items: []
            }
        },

        created: function()
        {
            this.fetchItems();
        },

        methods: {
            fetchItems()
            {
                let uri
                if(process.env.NODE_ENV==="production"){
                    uri = '/items';
                }else{
                    uri="http://localhost:8000/items"
                }
              
              this.axios.get(uri).then((response) => {
                  this.items = response.data;
              });
            },
            deleteItem(id)
            {   let uri
                console.log(id)
            if(process.env.NODE_ENV==="production"){
              uri = '/item/'+id;
            }else{
                uri="http://localhost:8000/item/"+id
            }
              this.items.splice(id, 1);
              this.axios.delete(uri);
            //   window.location.replace("/display")
            }
        }
    }
</script>