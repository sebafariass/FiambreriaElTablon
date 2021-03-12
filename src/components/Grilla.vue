<template>
   <div  >
       <div class="grid "   >
    
     
     
     
   
     
  
  
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
 background: rgb(187, 191, 216);
 
  border-radius: 20%; 
  height: 80%;
 
  
  

  
}
.imgDog:hover{
  

transform: translateY(5px);
  
}

h4{
  background-color: yellow;
  color: black;
}

.imgDog{
    width: 100%;
    height: auto;

}



@media (max-width: 995px) {
  
.grid{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 15% 15% 15% 15% 15% 15% 15% 15% 15% 15% 15% 15% ;  
    grid-row-gap: 40px 40px;
    
    
}
  
}

@media (max-width: 570px) {
  
.grid{
    display: grid;
     grid-template-columns: 100%;
   grid-template-rows: 5%;
     row-gap: 20px;
  
}
  .imgDog{
  height: auto;
}

}

</style>