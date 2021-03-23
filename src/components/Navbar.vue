<template>
  <div class="navy">
    <b-navbar toggleable type="dark" variant="dark">
         <b-navbar-nav >
       
               <b-nav-item to="/">Que passa</b-nav-item>

          </b-navbar-nav>
      
 

      <b-navbar-toggle target="navbar-toggle-collapse">
        <template #default="{ expanded }">
          <b-icon v-if="expanded" icon="caret-up"></b-icon>

          <b-icon v-else icon="caret-down"></b-icon>
        </template>
      </b-navbar-toggle>

      <b-collapse id="navbar-toggle-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/productos">Productos</b-nav-item>
          <b-nav-item to="/contacto">Contacto</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>


<script>
export default {
  name: "Navbar",
};
</script>
<style lang="scss">
//NAVY HACE QUE NAVBAR NO DEJE DE APARECER
.navy {
  position: sticky;
  top: 0;
  z-index: 100;
}
h1{
  align-content: center;
  
}
</style>
