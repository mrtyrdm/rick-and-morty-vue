<template>
  <div class="home">

    <div id="home bg-black">
      <h1 class="m-0 mt-4  block lg:hidden text-[#5DFF18] text-white font-extrabold text-5xl md:text-8xl sm:text-5xl flex items-center">{{title}}</h1>
      <section class="text-center  relative flex justify-center my-18 md:my-24 flex-wrap md:flex-nowrap" >
        <div class="w-full md:w-1/2 text-white">
          <div class="flex flex-col justify-center">
            <img class="w-full justify-center py-6 px-28 2xl:px-40 xl:px-30" src="images/rick.png" alt="">
            <div>
              <a target="_blank" href="https://github.com/mrtyrdm/rick-and-morty-vue">
                <Button color="portal" name="Github"/>
              </a>
            </div>
          </div>
        </div>
        <h1 class="m-0 hidden lg:flex text-[#5DFF18] text-white font-extrabold text-5xl 2xl:text-8xl xl:text-7xl lg:text-6xl md:text-6xl sm:text-5xl  items-center">{{title}}</h1>
        <div class="w-full md:w-1/2 text-white">
          <div class="flex flex-col justify-center">
            <img class="w-full justify-center py-6 px-28 2xl:px-40 xl:px-30 " src="images/morty.png" alt="">
            <div>
              <a target="_blank" href="https://rickandmortyapi.com/">
                <Button color="portal" name="API Services"/>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>

  </div>
</template>

<script>

import Button from "../components/elements/Button";

export default {
  name: 'Home',
  data(){
    return {
      title: 'The Rick and Morty API',
    }
  },
  components: {
    Button,

  }
}
</script>
