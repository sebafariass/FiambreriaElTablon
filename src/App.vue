<template>
 
   
  <v-app >
    
		<Navbar />
		<v-main>
			<v-container >
				<router-view></router-view>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions } from "vuex";


export default {
  name: "App",

  components: {

   Navbar
  },
    created() {
    this.getDataUsers()
    this.getDataEdades()
     this.getDataFiambre()
   
  },
  methods: {
   
     ...mapActions(["getDataUsers"]),
     ...mapActions(["getDataEdades"]),
     ...mapActions(["getDataFiambre"]),
  },

  data: () => ({
    //
  })
};
</script>
<style lang="scss">
 
</style>