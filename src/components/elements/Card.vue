<template>
  <div class=" text-black w-1/2 md:w-3/12">
    <div v-show="page=='character'" class=" m-5 relative">
      <img  class="w-full rounded-t-lg bg-red" v-lazy="images" alt="">
      <div class="absolute bottom-[5rem] right-1 w-full  flex justify-center">
        <span :class="[getStatus]" class=" font-bold border-2 border-black  w-40   py-2 rounded-full">{{status}}</span>
      </div>
      <div :class="[getStatus]" class="w-full border-t-2 border-black p-4 pt-4 rounded-b-lg flex-col flex">
        <span  class="text-xl pt-5 font-extrabold">{{title}}</span>
        <span>{{species}}</span>
      </div>
    </div>

    <div  v-show="page=='location'">
      <div v-on:click="gotoLocationD(id, title)" class=" m-5 relative bg-[#5DFF18] p-4 rounded-lg " >
        <div class="w-full bg-white border-2 border-black drop-shadow-lg  rounded-lg flex-col flex">
          <span  class="text-2xl py-2   border-2 w-full rounded-lg  font-extrabold">{{title}}</span>
          <span  class="leading-loose text-xl  bg-zinc-800	text-white font-bold">{{status}}</span>
          <span class="leading-loose"><strong>Dimension :</strong> {{species}}</span>
        </div>
      </div>
    </div>

    <div  v-show="page=='episode'">
      <div  class=" m-5 relative bg-[#5DFF18] p-4 rounded-lg " >
        <div class="w-full bg-white border-2 border-black drop-shadow-lg  rounded-lg flex-col flex">
          <span  class="text-2xl py-2   border-2 w-full rounded-lg  font-extrabold">{{title}}</span>
          <span  class="leading-loose text-xl  bg-zinc-800	text-white font-bold">{{status}}</span>
          <span class="leading-loose"><strong>Date :</strong> {{species}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    computed : {
      getStatus: function (){
        if(this.status=='Alive'){
          return 'bg-[#5DFF18] text-black';
        }
       else if (this.status=='unknown') {
          return 'bg-amber-300 text-black capitalize ';
        }
        else {
          return 'bg-red-500 ';
        }
      },
    },
    methods : {
      gotoLocationD(event, name){
        this.$router.push({ name: 'Location Detail', params:{id:event, name:name} })
      }
    },
    props : ['images', 'title', 'status' , 'species', 'page', 'id' ]
  }
</script>