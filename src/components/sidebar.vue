<template>
<div class="sidebar col-3 ml-3 mt-5">
 <div class="card" style="width:1600 px">
            <h6><strong>Manage my  connections</strong></h6>
            <ul class="list-group list-group-flush">
    <li class="list-group-item">Users<span class="li ml-auto" >{{userlength}}</span></li>
                <li class="list-group-item">Team Mates <span class="li ml-auto">13</span></li>
                <li class="list-group-item">Contacts <span class="li ml-auto" >8</span></li>
                <li class="list-group-item">People I follow <span class="li ml-auto" >7</span></li>
                <li class="list-group-item">Groups <span class="li ml-auto">13</span></li>
                <li class="list-group-item">Pages <span class="li ml-auto" >5</span></li>
                <li class="list-group-item">Hashtags <span class="li ml-auto">23</span></li>
            </ul>
      </div>
    </div>   
</template>
<script>
import {mapGetters} from "vuex";
export default {
name:"Sidebar" ,
  computed: {
    ...mapGetters(['userlength']),
  },
}
</script>
<style>
li{
    position:absolute;
    right:20
}
.sidebar{
    margin-left:2px;
}
</style>

