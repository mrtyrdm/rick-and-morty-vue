<template>
  <div :class="list.status=='Dead'? 'bg-red-500' : list.status=='unknown' ? 'bg-amber-300 ' : 'bg-[#5DFF18]' " class="max-w-screen-2xl  mx-auto  p-4 rounded-lg">
    <div class="flex flex-col">
      <div class="w-full flex justify-center">
        <img class="rounded-full border-8 max-h-60 mb-4 border-zinc-800" :src="list.image" alt="">
      </div>
      <div>

      <div class="flex w-full mb-4 text-4xl text-center text-black justify-center font-bold">
        <h2>{{list.name}}</h2>
      </div>
      </div>

    </div>
    <div class="flex flex-wrap bg-zinc-800 rounded-lg">
      <div class="w-full">
        <h4 class="text-white text-3xl py-2 mt-4 font-extrabold">Episode</h4>
      </div>
      <Card v-for="item in episode" page="episode" :status="list.status" :title="item.name" :species="item.air_date"  :key="item.index" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Card from "../components/elements/Card";

export  default {
  name : 'CharacterDetail',
  components: {Card},
  data(){
    return {
      id : null,
      list : null,
      episode: null,
    }
  },
  methods: {
    getData : function (event){
      axios.get('https://rickandmortyapi.com/api/character/'+event).then(
          response => this.list = response.data,
      );
    }

  },
  watch : {
    id: function (){
      this.getData(this.id);
    },
    list : function (){
      this.episode = [];
      this.list.episode.forEach(element =>
          axios.get(element).then(
              response => this.episode.push(response.data),
          )
      );
    }
  },
  created() {
    this.id = this.$route.params.id;
  }
}
</script>