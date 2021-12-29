<template>
  <div class="max-w-screen-2xl mx-auto  flex flex-wrap">
    <Card v-for="item in list" page="episode" :status="item.episode" :title="item.name" :species="item.air_date"  :key="item.index" />
  </div>
</template>

<script>
import axios from "axios";
import Card from "../components/elements/Card";
export default {
  name:"Episde",
  data(){
    return {
      item : 1,
      list:null
    }
  },
  methods : {
    getData : function (event){
      axios.get('https://rickandmortyapi.com/api/episode?page='+event).then(response => this.list = response.data.results);
    },
  },watch: {
    item : function () {
      this.getData(this.item);
    }
  },
  components : {
    Card
  },
  mounted() {
    this.getData(this.item)
  }
}
</script>