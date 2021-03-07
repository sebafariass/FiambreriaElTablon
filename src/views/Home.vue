<template>
  <div class="home">
   <Navbar />
    <img alt="Vue logo" src="../assets/logo.png" />
    <Vistas msg="Welcome to Your Vue.js App" />
    
  </div>
</template>

<script>
// @ is an alias to /src
import Vistas from "@/components/Vistas.vue";
import Navbar from "@/components/Navbar.vue";



export default {
  name: "Home",
  components: {
    Vistas,
    Navbar
    
  }
};
</script>
