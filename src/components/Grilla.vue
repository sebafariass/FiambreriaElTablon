<template>
 <div>
       <div class="grid">
   <v-col v-for="(personaje, i) in users" :key="i">
         <v-img  class="imgDog"  :src="personaje.data.img"></v-img>
         <h6  class="text-center mb-3">{{ personaje.data.name}}</h6>
         <h4 class="text-center">{{ personaje.data.valor}}</h4>    
    </v-col>
   


  
</div>
 
        

       
   </div>
</template>

<script>


import {mapState} from "vuex";

export default {
name: "Grilla",


 computed: {
 
    ...mapState(["users"]),
    
  
  },
}
</script>

<style scoped lang="scss">

* {
  font-family: 'Roboto Mono', monospace;
}

.grid{
   width: 100%;
    height: 70%;
    display:grid;
    grid-template-columns: 30% 30% 30%;
    grid-template-rows: 15% 15% 15% 15% 15% 15% 15% 15%;
   gap: 15px;
   

    

}
.grid div {
 background: rgb(231, 194, 159);
  color: black;
  border-radius: 20%; 
  height: 80%;
 
  
  

  
}
.imgDog:hover{
  

transform: translateY(5px);
  
}

h4{
  background-color: rgb(29, 90, 21);
  color: rgb(201, 169, 169);
  border-radius: 20%;
}

.imgDog{
    width: 100%;
    height: auto;

}

@media (max-width: 999px) {
  
.grid{
    display: grid;
     grid-template-columns: 50% 50%;
     row-gap: 20px;

  
}
  .imgDog{
  height: auto;
}

}




@media (max-width: 570px) {
  
.grid{
    display: grid;
     grid-template-columns: 50% 50%;
   justify-content: center;
     row-gap: 20px;
  
}
  .imgDog{
  height: auto;
}

}

</style>