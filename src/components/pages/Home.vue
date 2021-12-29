<template>
<div id="home bg-black">
  <section class="text-center  relative flex justify-center my-24" >
    <div class="w-1/2 text-white">
      <div class="flex flex-col justify-center">
        <img class="w-full justify-center py-6 px-40" src="images/rick.png" alt="">
        <div>
          <Button color="portal" :status=0 name="Chareter"/>
        </div>
      </div>
    </div>
    <h1 class="m-0 text-[#5DFF18] text-white font-extrabold text-5xl md:text-8xl sm:text-5xl flex item">{{title}}</h1>
    <div class="w-1/2 text-white">
      <div class="flex flex-col justify-center">
        <img class="w-full justify-center py-6 px-40" src="images/morty.png" alt="">
        <div>
          <Button color="portal" :status=0 name="Location"/>
        </div>
      </div>

    </div>
  </section>
</div>
</template>

<script>
import Button from "../elements/Button";

export default  {
  name: 'Home',
  data(){
    return {
      title: 'The Rick and Morty API',
    }
  },
  components : {
    Button
  }
}
</script>