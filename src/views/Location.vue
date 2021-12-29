<template>
  <div class="max-w-screen-2xl mx-auto  flex flex-wrap">
      <Card page="location" v-for="item in list" :title="item.name" :key="item.id" :id="item.id" :species="item.dimension" :status="item.type"></Card>
      <Pagition @item="item=$event" :item="item" :pages="pagition" :firstpage="[1,2,3,4,5]"/>
  </div>
</template>

<script>
import axios from "axios";
import Pagition from "../components/elements/Pagition";
import Card from "../components/elements/Card";
export default {
  data(){
    return {
      item : 1,
      list:null,
      pagition:null
    }
  },
  methods: {
    getData: function (event){
      axios.get('https://rickandmortyapi.com/api/location?page='+event).then(
          response => this.list = response.data.results
      );
    },
    pageData: function () {
      axios.get('https://rickandmortyapi.com/api/location?page='+event).then(
          response => this.pagition = response.data.info.pages
      );
    }
  },
  watch: {
    item: function (){
      this.getData(this.item)
    }
  },
  components: {
    Pagition,
    Card
  },
  mounted() {
    this.getData(this.item);
    this.pageData();
  }
}
</script>