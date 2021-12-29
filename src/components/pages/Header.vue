<template>
  <header class="max-w-7xl mx-auto flex flex-col justify-between ">

    <div class="justify-center flex w-full" >
      <img  class="w-64 justify-center" src="https://occ-0-1722-1723.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABeJtBpd7gVufNBcVqvz9HPneSuK06oCuSWVIe1rbvL9yoBfZbHbUhjLgU0yv1DoOG8gWtyFUjonoxF132iuRBPNf_LoVM6tKrbKc.png?r=871" alt="">
    </div>

    <Nav/>


  </header>
</template>

<script>
import Nav from "./Nav";
export default {
  name:'Header',
  components : {
    Nav
  },


}
</script>