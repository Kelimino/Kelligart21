<template>
  <div >
    <Nav />
    <Nuxt />
    <loader v-if="loading"/>

   
  </div>
</template>

<script>
import Loader from "/components/loader"
import Nav from '/components/nav'
export default {
    name: "app",
 components:{
   Nav,
   Loader
 },
       
        data: () => ({
            loading: true
        }),
        mounted() {
            setTimeout(() => {
                this.loading = false
            }, 3000)
        }
}
</script>
