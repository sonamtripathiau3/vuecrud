<template>
  <nav class="navbar nav navbar-expand-lg">
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
   <a class="navbar-brand" href="/" id="brand">
      <h2 style="color: white">Welcome</h2>
    </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav ml-auto mb-2 mb-lg-0">
        <a class="anchor nav-link" href="/"
          >Home</a>
        <router-link :to="{ name: 'Create' }" class="anchor nav-link"
          >Add Item</router-link
        >
        <router-link :to="{ name: 'Display' }" class="anchor nav-link"
          >All Items</router-link>
        <a class="nav-link">
        <img id="avatar" src="https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg" class="rounded-circle border border-5"
        alt="user" />
      </a>
    </div>
  </div>
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
#brand{
  margin: 0 auto;
  position: absolute;
  left:600px
}
/* .item {
  /* border-color: black; */
  /* padding: auto;
  position: absolute;
  right: 200px;
  bottom: 10px; */
/* } */ 
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