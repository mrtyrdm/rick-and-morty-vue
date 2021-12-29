<template>
  <div class="max-w-screen-2xl mx-auto  flex flex-wrap">
    <Card page="character"  v-for="item in list" :key="item.id" :id="item.id" :images="item.image" :title="item.name" :status="item.status" :species="item.species" />
    <Pagition @item="item=$event" :pages="pagition" :item="item" :firstpage="[1,2,3,4,5]"></Pagition>
  </div>
</template>

<script>

import axios from "axios";
import Card from "../components/elements/Card";
import Pagition from "../components/elements/Pagition";
export default {
  name: 'character',
  data(){
    return {
      item : 1,
      list : null,
      pagition : null,
    }
  },
  methods: {

    getData : function (event){
      axios.get('https://rickandmortyapi.com/api/character?page='+event).then(response => this.list = response.data.results);
    },
    listPage : function () {
      axios.get('https://rickandmortyapi.com/api/character?page='+event).then(response => this.pagition = response.data.info.pages);
    },

  },
  computed : {

  },
  watch : {
    item : function (){
      this.getData(this.item);
    }
  },
  components : {
    Pagition,
    Card
  },created() {
    this.getData(this.item);
    this.listPage();
  }
}
</script>