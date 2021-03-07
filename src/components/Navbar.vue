<template>
<div>
    <b-navbar toggleable type="dark" variant="dark">
    <b-navbar-brand href="#">Fiambreria El Tablon</b-navbar-brand>

   
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
    name :"Navbar",
    
  }
</script>
<style></style>
