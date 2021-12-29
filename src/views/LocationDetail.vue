<template>
  <div class="max-w-screen-2xl mx-auto  flex flex-wrap">
    <h2 class="w-full m-0 text-[#5DFF18] text-white font-extrabold text-5xl  text-center">{{location}}</h2>
    <Card v-for="item in data" :id="item.id" :key="item.index" page="character" :images="item.image" :title="item.name" :status="item.status" :species="item.species" />
  </div>
</template>

<script>
 import axios from "axios";
 import Card from "../components/elements/Card";
 export default {
   name:"Location Detail",
   data(){
     return {
       id:null,
       list: null,
       data: null,
       location: null,
     }
   },
   methods: {
     getData : function (event){
       axios.get('https://rickandmortyapi.com/api/location/'+event).then(
           response => this.list = response.data.residents,
       );
     }
   },
   watch: {
     id: function (){
       this.getData(this.id);
     },
     list : function (){
       this.data = [];
       this.list.forEach(element =>
           axios.get(element).then(
               response => this.data.push(response.data),
           )
       );
     }
   },
   created() {
     this.id = this.$route.params.id;
     this.location = this.$route.params.name;
   },components: {
     Card
   }
 }
</script>