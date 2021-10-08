<template>
  <nav class="nav navbar navbar-expand-xl">
    <a class="navbar-brand" href="/">
      <img
        id="img"
        src="../assets/logo.png"
        width="50"
        height="50"
        alt=""
        style="border-outline-color:black ,border-radius: 100%"
      />
    </a>
    <a class="navbar-brand mx-auto" href="/" id="brand">
      <h2 style="color: white">Welcome</h2>
    </a>
    <ul class="navbar-nav">
      <li class="item nav-item">
        <router-link :to="{ name: 'Index' }" class="anchor nav-link"
          >Home</router-link
        >
      </li>
      <li class="item nav-item">
        <router-link :to="{ name: 'Create' }" class="anchor nav-link"
          >Add Item</router-link
        >
      </li>
      <li class="item nav-item">
        <router-link :to="{ name: 'Display' }" class="anchor nav-link"
          >All Items</router-link
        >
      </li>
      <li class="item nav-item">
        <a>
        <img id="avatar" src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg" className="rounded-circle border border-5"
        alt="user" />
      </a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
};
</script>
<style>
.nav {
  background-color: darkorchid;
  overflow: hidden;
}
.item {
  padding: 10px;
  border-color: black;
}
.anchor {
  color: white;
}
.anchor:hover {
  background-color: palevioletred;
}
#app {
  min-height: 1000px;
}

#img {
  /* border-radius: 50%; */
  border: 2px solid white;
  background-color: white;
  margin-left: 2pc;
}
#avatar{
    height:40px;
    width:40px
}
</style>